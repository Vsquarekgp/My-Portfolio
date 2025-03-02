
import { useEffect, useState, useRef } from 'react';
import { Code, Database, Brain, Terminal, Network, Laptop } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: "Machine Learning & AI", level: 95, icon: Brain },
    { name: "Python", level: 90, icon: Code },
    { name: "SQL", level: 85, icon: Database },
    { name: "Data Science", level: 90, icon: Database },
    { name: "TensorFlow/PyTorch", level: 88, icon: Network },
    { name: "C/C++", level: 80, icon: Terminal }
  ];

  const services = [
    {
      title: "Strong Foundational Mathematics",
      description: "Deep expertise in linear algebra, calculus, probability and statistics that powers advanced AI and machine learning solutions.",
      icon: Brain
    },
    {
      title: "Data Science",
      description: "Data analysis, visualization, and modeling to extract valuable insights from complex datasets.",
      icon: Database
    },
    {
      title: "ML Engineering",
      description: "Building scalable machine learning systems with optimal performance and reliability.",
      icon: Code
    },
    {
      title: "Gen AI",
      description: "Creating cutting-edge generative AI solutions including large language models, image generation, and multimodal AI applications.",
      icon: Network
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="section bg-got-dark text-white paper-texture">
      <div className="container">
        <div className="section-title">
          <h2 className="text-white">Skills & Services</h2>
          <p>Specialized in AI, Machine Learning, and Data Science Technologies</p>
        </div>
        
        <div className="mb-20">
          <h3 className="text-2xl mb-10 text-center font-serif">Technical <span className="text-got-gold">Skills</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="animate-on-scroll">
                <div className="flex items-center mb-2">
                  <skill.icon className="text-got-gold mr-2" size={18} />
                  <h4 className="font-serif text-white">{skill.name}</h4>
                  <span className="ml-auto text-got-gold font-medium">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl mb-10 text-center font-serif">My <span className="text-got-gold">Services</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-6 bg-got-charcoal/50 rounded-md border border-got-gold/10 hover:border-got-gold/30 transition-all duration-300 animate-on-scroll flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-got-gold/10 flex items-center justify-center">
                  <service.icon className="text-got-gold" size={28} />
                </div>
                <h4 className="text-xl mb-3 font-serif">{service.title}</h4>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
