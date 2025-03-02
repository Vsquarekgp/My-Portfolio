
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-on-scroll');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;
        
        if (sectionTop < triggerPoint) {
          section.classList.add('in-view');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
