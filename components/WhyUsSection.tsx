import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { ShieldCheck, HardHat, FileCheck2 } from 'lucide-react';

const WhyUsSection: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-primary tracking-tight">
            Warum rombus? 
            <span className="block text-2xl md:text-3xl text-gray-500 font-bold mt-2">Wir sind Techniker für elektronische Reinigung.</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start p-10 bg-white border border-divider rounded-2xl hover:shadow-xl transition-all duration-300">
            <div className="mb-6 p-4 bg-surface border border-divider rounded-2xl">
                <ShieldCheck className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">01. Running Systems</h3>
            <h4 className="text-xl font-bold mb-4 text-primary">Spezialisierung auf technische-elektronische Infrastruktur</h4>
            <p className="text-gray-600 leading-relaxed">
                Wir reinigen und schützen sensible Anlagen. Unsere Teams sind ESD-geschult und wissen, welches Kabel man nicht ziehen darf. Wir schützen die Hardware Ihrer Kunden im laufenden Betrieb.
            </p>
        </div>

        <div className="flex flex-col items-start p-10 bg-white border border-divider rounded-2xl hover:shadow-xl transition-all duration-300">
            <div className="mb-6 p-4 bg-surface border border-divider rounded-2xl">
                <HardHat className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">02. Nahtlose Integration</h3>
            <h4 className="text-xl font-bold mb-4 text-primary">Eingebettet in Ihrer Baustelle</h4>
            <p className="text-gray-600 leading-relaxed">
                Wir arbeiten nahtlos mit Ihren Handwerkern. Nachts, am Wochenende oder in Randzeiten. Ohne Unterbruch für Sie – oft direkt im laufenden Betrieb der Systeme.
            </p>
        </div>

        <div className="flex flex-col items-start p-10 bg-white border border-divider rounded-2xl hover:shadow-xl transition-all duration-300">
            <div className="mb-6 p-4 bg-surface border border-divider rounded-2xl">
                <FileCheck2 className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">03. Normkonformität</h3>
            <h4 className="text-xl font-bold mb-4 text-primary">Zertifizierte Sicherheit</h4>
            <p className="text-gray-600 leading-relaxed">
                Nach Abschluss erhalten Sie ein Sauberkeits-Zertifikat mit Staub- und Schmutz-Messwerten nach ISO 14644-8. Das ist Ihr rechtssicherer Nachweis für die Übergabe.
            </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyUsSection;