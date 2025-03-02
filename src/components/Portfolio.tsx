
import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', name: 'All' },
    { id: 'ai', name: 'AI Projects' },
    { id: 'ml', name: 'ML Research' },
    { id: 'dev', name: 'Development' }
  ];
  
  const projects = [
    {
      id: 1,
      title: "Healthcare AI - Elderly RDCH TECH",
      category: "ai",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
      description: "Developed a cutting-edge healthcare bot facilitating seamless and time-efficient communication with doctors.",
      link: "#"
    },
    {
      id: 2,
      title: "BAS Algorithm for Nonlinear Optimization",
      category: "ml",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      description: "Assisted research scientists in developing various use cases of BAS algorithm in industrial applications.",
      link: "#"
    },
    {
      id: 3,
      title: "Amazon ML Summer School",
      category: "ai",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      description: "Earned opportunity to learn from Amazon Scientists covering key machine learning topics.",
      link: "#"
    },
    {
      id: 4,
      title: "Enhanced Noise-Cancellation Algorithm",
      category: "dev",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
      description: "Developed a sound product with 83% performance increase using an Enhanced Noise-Cancellation algorithm.",
      link: "#"
    },
    {
      id: 5,
      title: "Siemens Gen AI Hackathon",
      category: "ai",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
      description: "Built a multi-agent Gen AI system, automating spy analysis and generating business reports and presentations.",
      link: "#"
    },
    {
      id: 6,
      title: "Fitness Tracking Platform",
      category: "dev",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      description: "Developed a dynamic health and fitness exercise app and efficiently integrated it into the company's web app.",
      link: "#"
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section bg-background">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>A collection of my work in AI, Machine Learning, and Software Development</p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-muted/50 rounded-md">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-sm text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-got-gold text-white shadow-md'
                    : 'bg-transparent text-foreground hover:text-got-gold'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card animate-on-scroll rounded-md overflow-hidden shadow-md"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="project-card-content">
                <span className="text-xs font-medium uppercase tracking-widest text-got-gold">
                  {filters.find(f => f.id === project.category)?.name}
                </span>
                <h3 className="text-xl text-white font-serif mt-1 mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <Link 
                    to={`/project/${project.id}`} 
                    className="flex items-center text-got-gold hover:text-white transition-colors text-sm font-medium"
                  >
                    <Eye size={16} className="mr-1" />
                    View Details
                  </Link>
                  <a 
                    href={project.link} 
                    className="flex items-center text-got-gold hover:text-white transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Project Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
