import React from 'react';
import { Mail } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 px-6 md:px-12">
      <div className="max-w-content mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center gap-4">
          <img 
            src="https://raw.githubusercontent.com/atedo-ch/rombus/main/rombus-logo.png" 
            alt="rombus logo" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>
        <div className="flex items-center">
          <a 
            href="mailto:markus.renggli@rombus-cleanware.ch" 
            className="text-primary hover:text-accent transition-colors group"
            title="E-Mail an Markus Renggli"
          >
            <div className="w-10 h-10 bg-surface border border-divider rounded-full flex items-center justify-center group-hover:border-accent transition-colors shadow-sm">
              <Mail className="w-5 h-5 text-accent" />
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;