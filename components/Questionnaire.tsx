import React, { useState, useMemo } from 'react';
import { QUESTIONS_DATA } from '../data/questions';
import { Button } from './Button';
import { ArrowLeft, ArrowRight, Info, CheckCircle, AlertTriangle, XCircle, Camera, Mail, Upload } from 'lucide-react';

interface QuestionnaireProps {
    initialEmail?: string;
    onClose: () => void;
}

type ViewState = 'questions' | 'result' | 'lead' | 'success';
type AmpelStatus = 'green' | 'yellow' | 'red';

export const Questionnaire: React.FC<QuestionnaireProps> = ({ initialEmail = '', onClose }) => {
    const [view, setView] = useState<ViewState>('questions');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, boolean>>({});
    const [infoVisible, setInfoVisible] = useState(false);
    const [leadForm, setLeadForm] = useState({
        firstname: '',
        lastname: '',
        email: initialEmail,
        description: ''
    });

    // Flatten questions for easier navigation
    const allQuestions = useMemo(() => {
        return QUESTIONS_DATA.sections.flatMap(section => section.questions);
    }, []);

    const currentQuestion = allQuestions[currentQuestionIndex];
    
    // Determine current section
    const currentSection = QUESTIONS_DATA.sections.find(s => 
        s.questions.some(q => q.id === currentQuestion.id)
    );

    const progress = ((currentQuestionIndex + 1) / allQuestions.length) * 100;

    const handleAnswer = (answer: boolean) => {
        setAnswers(prev => ({ ...prev, [currentQuestion.id]: answer }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < allQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setInfoVisible(false);
        } else {
            setView('result');
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
            setInfoVisible(false);
        } else {
            // Confirm exit?
            if(window.confirm("Möchten Sie den Check wirklich abbrechen?")) {
                onClose();
            }
        }
    };

    // Calculate Result
    const result = useMemo(() => {
        let riskPoints = 0;
        Object.values(answers).forEach(val => {
            if (val === false) riskPoints++;
        });

        const { scoring } = QUESTIONS_DATA;
        if (riskPoints >= scoring.red.min) return { status: 'red' as AmpelStatus, data: scoring.red };
        if (riskPoints >= scoring.yellow.min) return { status: 'yellow' as AmpelStatus, data: scoring.yellow };
        return { status: 'green' as AmpelStatus, data: scoring.green };
    }, [answers]);

    const handleLeadSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send data to backend
        console.log('Form Submitted', { leadForm, answers, result: result.status });
        setView('success');
    };

    // Sub-components for different views
    const renderQuestions = () => (
        <div className="max-w-2xl mx-auto w-full">
            <div className="mb-8">
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div 
                        className="bg-accent h-2.5 rounded-full transition-all duration-500 ease-out" 
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-medium">
                    <span>Frage {currentQuestionIndex + 1} von {allQuestions.length}</span>
                    <span className="text-accent uppercase">{currentSection?.title}</span>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-10 border border-gray-200 shadow-sm mb-8 min-h-[300px] flex flex-col relative">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 leading-snug">
                    {currentQuestion.text}
                </h3>
                
                <button 
                    onClick={() => setInfoVisible(!infoVisible)}
                    className="inline-flex items-center gap-2 text-sm text-accent font-medium mb-4 hover:underline focus:outline-none w-fit"
                >
                    <Info className="w-4 h-4" />
                    {infoVisible ? 'Info ausblenden' : 'Erklärung anzeigen'}
                </button>

                {infoVisible && (
                    <div className="bg-surface border-l-4 border-accent p-4 rounded-r-lg text-sm text-gray-700 mb-6 animate-in fade-in slide-in-from-top-2 duration-200">
                        {currentQuestion.info}
                    </div>
                )}

                <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                        onClick={() => handleAnswer(true)}
                        className={`p-4 rounded-xl border-2 transition-all font-semibold text-lg flex items-center justify-center gap-2
                            ${answers[currentQuestion.id] === true 
                                ? 'border-accent bg-accent text-white shadow-md' 
                                : 'border-gray-200 hover:border-accent hover:bg-surface text-gray-600'
                            }`}
                    >
                        Ja
                    </button>
                    <button
                        onClick={() => handleAnswer(false)}
                        className={`p-4 rounded-xl border-2 transition-all font-semibold text-lg flex items-center justify-center gap-2
                            ${answers[currentQuestion.id] === false 
                                ? 'border-accent bg-accent text-white shadow-md' 
                                : 'border-gray-200 hover:border-accent hover:bg-surface text-gray-600'
                            }`}
                    >
                        Nein
                    </button>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <button onClick={handleBack} className="text-gray-500 hover:text-primary font-medium flex items-center gap-2 px-4 py-2">
                    <ArrowLeft className="w-4 h-4" /> Zurück
                </button>
                <Button 
                    onClick={handleNext} 
                    disabled={answers[currentQuestion.id] === undefined}
                    className="shadow-lg"
                >
                    {currentQuestionIndex === allQuestions.length - 1 ? 'Ergebnis anzeigen' : 'Weiter'} <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Button>
            </div>
        </div>
    );

    const renderResult = () => {
        const colors = {
            green: 'bg-green-500',
            yellow: 'bg-yellow-400',
            red: 'bg-red-500'
        };

        return (
            <div className="max-w-2xl mx-auto w-full text-center">
                <div className="mb-8 flex justify-center">
                    <div className={`w-32 h-32 rounded-full flex items-center justify-center shadow-xl ${colors[result.status]} text-white`}>
                         <span className="text-3xl font-bold">{result.data.label}</span>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-primary mb-4">{result.data.title}</h2>
                <div className="bg-white rounded-xl p-6 border border-gray-200 text-left mb-6 shadow-sm">
                    <p className="text-gray-600 mb-4 text-lg">{result.data.description}</p>
                    <div className={`p-4 rounded-lg bg-surface border-l-4 ${result.status === 'red' ? 'border-red-500' : result.status === 'yellow' ? 'border-yellow-400' : 'border-green-500'}`}>
                        <strong className="block mb-1 text-primary">Empfehlung:</strong>
                        <p className="text-gray-700">{result.data.recommendation}</p>
                    </div>
                </div>

                <Button onClick={() => setView('lead')} fullWidth className="text-lg py-5 shadow-xl">
                    Ergebnis sichern & Ersteinschätzung erhalten
                </Button>
            </div>
        );
    };

    const renderLeadForm = () => {
        let contextText = '';
        if (result.status === 'red') {
            contextText = 'Aufgrund des ermittelten hohen Risikos empfehlen wir dringend eine fachliche Ersteinschätzung.';
        } else if (result.status === 'yellow') {
            contextText = 'Das Ergebnis zeigt erhöhte Risiken. Eine fachliche Ersteinschätzung kann helfen, die Lücken zu schliessen.';
        } else {
            contextText = 'Sichern Sie Ihr Ergebnis für die Projektdokumentation.';
        }

        return (
            <div className="max-w-xl mx-auto w-full">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-2">Ergebnis sichern</h2>
                    <p className="text-gray-600">{contextText}</p>
                </div>

                <form onSubmit={handleLeadSubmit} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Vorname *</label>
                            <input 
                                required
                                type="text" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                                value={leadForm.firstname}
                                onChange={e => setLeadForm({...leadForm, firstname: e.target.value})}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Nachname *</label>
                            <input 
                                required
                                type="text" 
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                                value={leadForm.lastname}
                                onChange={e => setLeadForm({...leadForm, lastname: e.target.value})}
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">E-Mail *</label>
                        <input 
                            required
                            type="email" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                            value={leadForm.email}
                            onChange={e => setLeadForm({...leadForm, email: e.target.value})}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Baustellen-Beschreibung (Optional)</label>
                        <textarea 
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none resize-none"
                            placeholder="Kurz beschreiben, wo aktuell gebaut wird..."
                            value={leadForm.description}
                            onChange={e => setLeadForm({...leadForm, description: e.target.value})}
                        />
                    </div>

                    <Button type="submit" fullWidth className="mt-4">
                        Absenden
                    </Button>
                </form>
            </div>
        );
    };

    const renderSuccess = () => {
        let statusMessage = '';
        if (result.status === 'red') {
            statusMessage = `Ihr Check ergab den Status ${result.data.label}. Ein Spezialist wird sich zeitnah bei Ihnen melden.`;
        } else if (result.status === 'yellow') {
            statusMessage = `Ihr Check ergab den Status ${result.data.label}. Sie erhalten in Kürze eine Ersteinschätzung per E-Mail.`;
        } else {
            statusMessage = `Ihr Check ergab den Status ${result.data.label}. Eine Bestätigung wurde gesendet.`;
        }

        return (
            <div className="max-w-2xl mx-auto w-full">
                <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm text-center mb-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-4">Vielen Dank!</h2>
                    <p className="text-xl text-green-600 font-medium mb-4">Ihr Ergebnis wurde erfolgreich übermittelt.</p>
                    <p className="text-gray-600">{statusMessage}</p>
                </div>

                <div className="bg-surface rounded-xl p-8 border border-gray-200">
                    <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                        <Upload className="w-5 h-5" /> Zusätzliche Dokumentation (Optional)
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center hover:border-accent transition-colors cursor-pointer group">
                            <Camera className="w-8 h-8 text-gray-400 group-hover:text-accent mb-3" />
                            <h4 className="font-semibold text-primary mb-1">Foto hochladen</h4>
                            <span className="text-xs text-gray-500">Situation vor Ort dokumentieren</span>
                            <input type="file" className="hidden" />
                        </div>

                        <a 
                            href="mailto:markus.renggli@rombus-cleanware.ch?subject=IT-Risiko-Check Ergebnis"
                            className="bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center text-center hover:border-accent transition-colors group text-decoration-none"
                        >
                            <Mail className="w-8 h-8 text-gray-400 group-hover:text-accent mb-3" />
                            <h4 className="font-semibold text-primary mb-1">Per E-Mail senden</h4>
                            <span className="text-xs text-gray-500">Direkt Kontakt aufnehmen</span>
                        </a>
                    </div>
                </div>
                
                <div className="mt-8 text-center">
                    <button onClick={onClose} className="text-gray-500 hover:text-primary font-medium">
                        Zurück zur Startseite
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="fixed inset-0 z-50 bg-surface overflow-y-auto animate-in fade-in duration-300">
            <div className="min-h-screen flex flex-col">
                <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-10">
                    <div className="max-w-content mx-auto flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <img 
                                src="https://raw.githubusercontent.com/atedo-ch/rombus/main/rombus-logo.png" 
                                alt="rombus logo" 
                                className="h-8 w-auto object-contain"
                            />
                            <div className="hidden sm:block h-6 w-px bg-divider"></div>
                            <div className="hidden sm:block font-bold text-lg text-primary">IT-Risiko-Check</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <a 
                                href="mailto:markus.renggli@rombus-cleanware.ch" 
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-accent"
                                title="Kontakt"
                            >
                                <Mail className="w-6 h-6" />
                            </a>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <XCircle className="w-6 h-6 text-gray-400 hover:text-primary" />
                            </button>
                        </div>
                    </div>
                </header>
                
                <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-8">
                    {view === 'questions' && renderQuestions()}
                    {view === 'result' && renderResult()}
                    {view === 'lead' && renderLeadForm()}
                    {view === 'success' && renderSuccess()}
                </main>
            </div>
        </div>
    );
};