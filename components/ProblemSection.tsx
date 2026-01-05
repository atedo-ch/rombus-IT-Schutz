import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { XCircle, ShieldAlert } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-primary tracking-tight">
          Baustaub ist der stille Killer Ihrer Zeitplanung & Kosten.
        </h2>
        
        <p className="text-lg text-gray-600 leading-relaxed">
          Als Bauleiter haften Sie für die Sicherheit der Anlagen während der Bauphase. 
          Doch bei Umbauten im laufenden Betrieb (<span className="text-accent font-bold">Running Systems</span>) 
          reichen herkömmliche Baufolien nicht aus. Das Risiko lauert im Detail:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-10 bg-white rounded-2xl border border-divider shadow-sm group hover:border-red-200 transition-all">
          <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-primary">Hitzetod</h3>
          <p className="text-gray-600 leading-relaxed">
            Wenn Lüftungsschlitze aktiver Server falsch angebracht werden, überhitzen die Systeme. Der Schaden ist immens.
          </p>
        </div>

        <div className="p-10 bg-white rounded-2xl border border-divider shadow-sm group hover:border-red-200 transition-all">
          <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-primary">Kurzschluss durch Leitfähigkeit</h3>
          <p className="text-gray-600 leading-relaxed">
            Zement- und Gips-Staub dringen in Platinen ein und binden Feuchtigkeit. Die Folge: Korrosion und Ausfälle, oft erst Wochen nach der Abnahme.
          </p>
        </div>

        <div className="p-10 bg-white rounded-2xl border border-divider shadow-sm group hover:border-red-200 transition-all">
          <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
            <XCircle className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-bold mb-4 text-primary">Verweigerte Abnahme</h3>
          <p className="text-gray-600 leading-relaxed">
            Ein verstaubter Etagenverteiler ist ein Mangel. Das bedeutet: Sofortige Nachreinigungen und überflüssige Diskussionen mit dem Bauherrn.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProblemSection;