import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';
import { GraduationCap } from 'lucide-react';

const SecondaryCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    company: '',
    email: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Schulungsanfrage:', formData);
    // Hier würde die Logik zur Übermittlung der Anfrage implementiert werden
    alert('Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-accent border-t border-divider py-12">
        <SectionWrapper className="py-20">
            <div className="bg-white rounded-[2.5rem] border border-divider p-8 md:p-20 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
                
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <GraduationCap className="w-8 h-8 text-accent" />
                </div>

                <h2 className="text-3xl md:text-4xl font-black mb-6 text-primary tracking-tight">
                    Wollen Sie Ihr Bauleiter-Team fit machen?
                </h2>
                
                <div className="text-gray-600 space-y-6 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                    <p className="font-bold text-primary">Checklisten sind gut, geschultes Personal ist besser.</p>
                    <p>
                        Wir bieten Ihnen eine <span className="text-accent font-bold italic">30-Minuten-Impuls-Schulung</span> an (Online oder bei Ihrer Bausitzung) mit minimalem Zeitaufwand.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left text-sm font-semibold mb-12">
                        <div className="bg-surface p-4 rounded-xl border border-divider">
                            <span className="text-accent block mb-1">Punkt 1</span>
                            Wie man Staubschutz effektiv plant.
                        </div>
                        <div className="bg-surface p-4 rounded-xl border border-divider">
                            <span className="text-accent block mb-1">Punkt 2</span>
                            Wie aktive Kühlung geschützt bleibt.
                        </div>
                        <div className="bg-surface p-4 rounded-xl border border-divider">
                            <span className="text-accent block mb-1">Punkt 3</span>
                            Wie Sie sich teuren Ärger ersparen.
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="text-left max-w-2xl mx-auto space-y-6 bg-surface p-8 rounded-2xl border border-divider shadow-inner">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="firstname" className="block text-sm font-bold text-primary mb-2">Vorname *</label>
                            <input
                                required
                                type="text"
                                id="firstname"
                                name="firstname"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-white text-primary transition-all"
                                value={formData.firstname}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="block text-sm font-bold text-primary mb-2">Name *</label>
                            <input
                                required
                                type="text"
                                id="lastname"
                                name="lastname"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-white text-primary transition-all"
                                value={formData.lastname}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="company" className="block text-sm font-bold text-primary mb-2">Unternehmen *</label>
                        <input
                            required
                            type="text"
                            id="company"
                            name="company"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-white text-primary transition-all"
                            value={formData.company}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">E-Mail-Adresse *</label>
                            <input
                                required
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-white text-primary transition-all"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-sm font-bold text-primary mb-2">Wunschdatum</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-white text-primary transition-all"
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">Nachricht</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-white text-primary transition-all resize-none"
                            placeholder="Ihre Nachricht an uns..."
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="pt-4 flex justify-center">
                        <Button type="submit" variant="primary" className="min-w-[300px] text-lg py-5 shadow-lg active:scale-[0.98]">
                            Termin für Schulung anfragen
                        </Button>
                    </div>
                </form>
            </div>
        </SectionWrapper>
    </div>
  );
};

export default SecondaryCTA;