import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <div className="scroll-container">
        <main>
          <Hero />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      <FloatingContactButton />
    </div>
  );
};

export default App;
