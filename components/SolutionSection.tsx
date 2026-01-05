import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';
import { CheckCircle2, FileText } from 'lucide-react';

interface SolutionSectionProps {
  onStartCheck?: (email: string) => void;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ onStartCheck }) => {
  const [email, setEmail] = useState('');

  const handleButtonClick = () => {
    if (onStartCheck) {
      onStartCheck(email);
    }
  };

  return (
    <div className="bg-surface border-y border-divider">
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-black mb-6 text-primary tracking-tight">
                  Die Risiko-Checkliste: Ist Ihre Baustelle IT-sicher?
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Nutzen Sie unser Experten-Wissen aus über 3.000 Projekten. Diese Checkliste deckt die blinden Flecken auf, die bei der normalen Reinigung übersehen werden.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-1 text-lg">Die 3-Zonen-Sicherheit</h4>
                            <p className="text-gray-600">Wie Sie die Etagenverteiler hermetisch gegen Gipser- und Zement-Staub schützen.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-1 text-lg">Haftungs-Dokumentation</h4>
                            <p className="text-gray-600">Eine klare Ja/Nein-Struktur, mit der Sie Ihre Sorgfaltspflicht gegenüber dem Bauherrn nachweisen.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-1 text-lg">Ampel-System</h4>
                            <p className="text-gray-600">Sofortige Auswertung Ihres Risikos (Grün / Gelb / Rot) inkl. Handlungsempfehlung.</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-10 max-w-sm">
                    <div className="flex flex-col gap-3">
                        <input 
                            type="email" 
                            placeholder="Ihre E-Mail-Adresse"
                            className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-white text-primary placeholder:text-gray-400 shadow-sm transition-all"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button onClick={handleButtonClick} className="text-lg px-12 shadow-xl hover:shadow-2xl transition-all">
                            Kostenlos herunterladen
                        </Button>
                    </div>
                </div>
            </div>

            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-accent/10 rounded-[2.5rem] blur-2xl group-hover:bg-accent/20 transition-all"></div>
                    <div className="relative w-[320px] md:w-[400px] aspect-[1/1.4] bg-white rounded-2xl border-2 border-divider shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-2 bg-accent"></div>
                        <div className="p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-accent" />
                                </div>
                                <span className="font-bold text-primary text-sm uppercase tracking-widest">rombus</span>
                            </div>
                            <div className="h-6 w-3/4 bg-gray-100 rounded mb-4"></div>
                            <h3 className="text-2xl font-black text-primary leading-tight mb-6">SIA-Risiko-Checkliste</h3>
                            <div className="space-y-3 mb-12">
                                <div className="h-2 w-full bg-gray-50 rounded"></div>
                                <div className="h-2 w-full bg-gray-50 rounded"></div>
                                <div className="h-2 w-4/5 bg-gray-50 rounded"></div>
                                <div className="h-2 w-full bg-gray-50 rounded"></div>
                                <div className="h-2 w-2/3 bg-gray-50 rounded"></div>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="flex gap-2">
                                    <div className="w-8 h-8 rounded-full bg-green-500"></div>
                                    <div className="w-8 h-8 rounded-full bg-yellow-400"></div>
                                    <div className="w-8 h-8 rounded-full bg-red-500"></div>
                                </div>
                                <div className="text-[10px] font-bold text-gray-400 uppercase">Expertise v.3000+</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default SolutionSection;