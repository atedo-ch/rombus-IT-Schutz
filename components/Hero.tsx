import React, { useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Button } from './Button';
import { ShieldCheck, Clock } from 'lucide-react';

interface HeroProps {
    onStartCheck: (email: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onStartCheck }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onStartCheck(email);
  };

  return (
    <SectionWrapper className="pt-24 pb-20 md:pt-40 md:pb-28">
      <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-divider text-sm font-medium text-accent mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          ROMBUS – IT-SCHUTZ AM BAU
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.15] mb-10 text-primary tracking-tight">
          Kein IT-Ausfall.<br />
          <span className="text-accent">Keine Haftungsfalle.</span>
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary leading-relaxed">
            Bauen Sie sicher im laufenden Betrieb.
          </h2>
          <p className="text-lg md:text-xl mb-12 leading-loose text-gray-600 font-light">
            <span className="font-semibold text-primary">Für Bauleiter & Projektverantwortliche:</span> Baustaub ist der häufigste Grund für Störungen aktiver IT-Systeme und technisch-elektronischer Infrastruktur. Nutzen Sie die kostenlose Risiko-Checkliste, um Server, Racks und Etagenverteiler während der Bauphase effektiv zu schützen – sicher und gemäss einer SIA-konformen Vorgehensweise.
          </p>
        </div>

        <div className="w-full max-w-lg mx-auto mb-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="relative">
                  <input 
                      type="email" 
                      id="email"
                      required
                      placeholder="Ihre E-Mail-Adresse"
                      className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none bg-white text-primary placeholder:text-gray-400 shadow-sm transition-all"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
              </div>
              <Button type="submit" fullWidth className="shadow-lg hover:shadow-xl transform transition-all active:scale-[0.99] text-lg py-5">
                  IT-Risiko jetzt prüfen
              </Button>
          </form>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-sm font-semibold text-gray-500">
            <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span>Spezialisiert auf kritische Infrastruktur seit 33 Jahren</span>
            </div>
            <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-accent" />
                <span>Prüfung Ihrer Baustelle in unter 5 Minuten</span>
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;