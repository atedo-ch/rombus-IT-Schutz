import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = "", id }) => {
  return (
    <section id={id} className={`w-full py-20 md:py-32 ${className}`}>
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};