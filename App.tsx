import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import WhyUsSection from './components/WhyUsSection';
import SecondaryCTA from './components/SecondaryCTA';
import Footer from './components/Footer';
import { Questionnaire } from './components/Questionnaire';

const App: React.FC = () => {
  const [isQuestionnaireOpen, setIsQuestionnaireOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleStartCheck = (email: string = '') => {
    setUserEmail(email);
    setIsQuestionnaireOpen(true);
    // Scroll to top when opening
    window.scrollTo(0, 0);
  };

  const handleCloseQuestionnaire = () => {
    setIsQuestionnaireOpen(false);
    setUserEmail('');
  };

  return (
    <div className="min-h-screen bg-white selection:bg-accent selection:text-white">
      {isQuestionnaireOpen ? (
        <Questionnaire initialEmail={userEmail} onClose={handleCloseQuestionnaire} />
      ) : (
        <>
          <Header />
          <Hero onStartCheck={handleStartCheck} />
          <TrustBar />
          <ProblemSection />
          <SolutionSection onStartCheck={(email) => handleStartCheck(email)} />
          <WhyUsSection />
          <SecondaryCTA />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;