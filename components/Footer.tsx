import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-divider py-12">
      <div className="max-w-content mx-auto px-6 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-gray-500">
            <div>
                <strong className="block text-primary mb-1">rombus ag – Running Systems</strong>
                <span>Amstutzweg 4, 6010 Kriens</span>
            </div>
            
            <div className="flex gap-6">
                <a href="#" className="hover:text-accent transition-colors">Datenschutz</a>
                <a href="#" className="hover:text-accent transition-colors">Impressum</a>
                <a href="#" className="hover:text-accent transition-colors">Kontakt</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;