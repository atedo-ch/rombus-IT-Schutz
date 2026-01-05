import React from 'react';

const INFRASTRUCTURE = [
  "Alarm- und Einsatzzentralen", "Bahntechnik", "Bahnsteuerungen", "Banken", "Betonwerken", 
  "Datacenter", "Fabrikationsanlagen", "Fensterfabriken", "Gefängnissen", "Kehrichtverbrennungsanlagen", 
  "Kiesaufbereitungsanlagen", "Kläranlagen", "Kommunikationsanlagen", "Leitstände", "Logistikzentren", 
  "Rechenzentren", "Seniorenheimen", "Spitälern", "Strassenüberwachungssystemen", "Telefonzentralen", 
  "Tunnelanlagen", "Verteilerzentralen", "Verwaltung"
];

const LOCATIONS = [
  "Aarau", "Andermatt", "Arth-Goldau", "Aarburg", "Basel", "Basel-Stadt", "Bern", "Bellinzona", "Biel/Bienne", 
  "Birmensdorf", "Carouge", "Chur", "Dietikon", "Dottikon", "Dielsdorf", "Dübendorf", "Freiburg", "Ermatingen", 
  "Glattbrugg", "Grenchen", "Hägendorf", "Herisau", "Ittigen", "Kloten", "Köniz", "Lachen", "Lupfig", "Luzern", 
  "Männedorf", "Meyrin", "Mörschwil", "Meilen", "Neuchâtel", "Niederbipp", "Niederbuchsiten", "Neckarsulm", 
  "Oerlikon", "Oftringen", "Olten", "Ostermundigen", "Pfäffikon", "Pratteln", "Reinach", "Rheinfelden", "Schinznach", 
  "Schönbühl", "Solothurn", "Sindelfingen", "Spreitenbach", "Steinen", "Sedrun", "Stuttgart", "Spiez", "Thalwil", 
  "Therwil", "Thurgau", "Thun", "Urdorf", "Uster", "Wallisellen", "Wädenswil", "Wetzikon", "Wettingen", "Wien", 
  "Winterthur", "Zofingen", "Zollikofen", "Zug", "Zürich"
];

const TrustBar: React.FC = () => {
  return (
    <div className="w-full border-y border-divider bg-surface overflow-hidden py-12">
      <div className="max-w-content mx-auto px-6 mb-8">
        <p className="text-center text-sm font-medium text-gray-500 mb-6 max-w-2xl mx-auto">
          Durch langjährige Erfahrung haben wir das Vertrauen unserer Kunden in der Schweiz gewonnen.
          <span className="block mt-2 font-bold text-primary uppercase text-xs tracking-widest">Bei folgender techn-elektronischer Infrastruktur:</span>
        </p>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {INFRASTRUCTURE.map((item, i) => (
            <span key={i} className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{item}</span>
          ))}
        </div>
      </div>

      <div className="relative mt-8">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface to-transparent z-10"></div>
        
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex gap-12 items-center">
            {LOCATIONS.concat(LOCATIONS).map((city, i) => (
              <span key={i} className="text-sm font-medium text-gray-400 italic">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;