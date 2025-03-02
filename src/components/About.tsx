
import { Brain, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section paper-texture bg-got-dark text-white">
      <div className="container">
        <div className="section-title">
          <h2 className="text-white">About Me</h2>
          <p>Tech innovator focused on AI, GenAI, and Data Science with a strong academic background.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <img 
                src="/lovable-uploads/e0e3ff58-2939-4857-9237-0a846bd6addb.png"
                alt="Vasu Verma" 
                className="w-full rounded-md shadow-lg border-4 border-got-gold/20"
              />
              <div className="absolute -bottom-4 -right-4 bg-got-gold text-got-dark px-6 py-3 rounded-sm shadow-lg">
                <span className="font-serif font-bold">21GG10043</span>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll delay-200">
            <h3 className="text-3xl mb-6 font-serif">Vasu <span className="text-got-gold">Verma</span></h3>
            <p className="mb-6 text-gray-300">
              Major in Geology and Geophysics with a passion for AI and data science. My journey in the tech landscape has equipped me with the expertise to develop innovative AI solutions that solve real-world problems.
            </p>
            <p className="mb-8 text-gray-300">
              I've worked on various projects ranging from healthcare systems to nonlinear optimization, always leveraging cutting-edge AI and machine learning techniques to deliver impactful results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-got-charcoal/50 rounded-md border border-got-gold/10 hover:border-got-gold/30 transition-all duration-300">
                <Brain className="text-got-gold mb-3" size={28} />
                <h4 className="text-lg font-semibold mb-1">AI Expert</h4>
                <p className="text-sm text-center text-gray-400">Gen AI & ML</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-got-charcoal/50 rounded-md border border-got-gold/10 hover:border-got-gold/30 transition-all duration-300">
                <Award className="text-got-gold mb-3" size={28} />
                <h4 className="text-lg font-semibold mb-1">Innovator</h4>
                <p className="text-sm text-center text-gray-400">Problem Solver</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-got-charcoal/50 rounded-md border border-got-gold/10 hover:border-got-gold/30 transition-all duration-300">
                <Target className="text-got-gold mb-3" size={28} />
                <h4 className="text-lg font-semibold mb-1">Leader</h4>
                <p className="text-sm text-center text-gray-400">Team Player</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
