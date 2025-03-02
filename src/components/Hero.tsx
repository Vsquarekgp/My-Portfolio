import { ChevronDown } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden" style={{
    backgroundImage: "linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.9)), url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}>
      <div className="absolute inset-0 house-sigil-bg"></div>
      
      <div className="container relative z-10 text-center">
        <div className="animate-fade-in">
          <span className="inline-block px-4 py-1 mb-6 text-xs font-medium uppercase tracking-widest border border-got-gold text-got-gold">
            MICRO SPL in ENTREPRENEURSHIP AND INNOVATION ENGINEERING
          </span>
          <h1 className="mb-6 text-white leading-tight">
            <span className="block">Vasu Verma</span>
            <span className="text-got-gold">AI & Data Science Enthusiast</span>
          </h1>
          <p className="mb-10 max-w-2xl mx-auto text-lg text-gray-300">Tech innovator passionate about AI, Gen AI, and Data Science, with a proven track record in developing cutting-edge solutions using deep learning models and Gen-ai </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#portfolio" className="btn-primary">
              View My Projects
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white hover:text-got-gold transition-colors duration-300" aria-label="Scroll down">
        <ChevronDown size={30} className="animate-bounce" />
      </a>
    </section>;
};
export default Hero;