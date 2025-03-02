
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Brain, Database, Code, ChartBar, Network } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ProjectDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Simulate loading data
    setLoading(true);
    
    // Get projects data
    const projects = [
      {
        id: "1",
        title: "Healthcare AI - Elderly RDCH TECH",
        category: "ai",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80",
        description: "Developed a cutting-edge healthcare bot facilitating seamless and time-efficient communication with doctors.",
        link: "#",
        fullDescription: "Developed an AI-powered healthcare assistant specifically designed for elderly patients. The system facilitates seamless communication between patients and healthcare providers, significantly reducing wait times and improving patient experience.",
        technologies: ["TensorFlow", "NLP", "Python", "React"],
        duration: "3 months",
        role: "Lead AI Developer",
        achievements: [
          "Reduced patient wait time by 45%",
          "Improved accuracy of symptom recognition to 92%",
          "Implemented HIPAA-compliant data handling protocols"
        ]
      },
      {
        id: "2",
        title: "BAS Algorithm for Nonlinear Optimization",
        category: "ml",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
        description: "Assisted research scientists in developing various use cases of BAS algorithm in industrial applications.",
        link: "#",
        fullDescription: "Collaborated with research scientists to develop and implement the Beetle Antennae Search (BAS) algorithm for solving complex nonlinear optimization problems in industrial applications.",
        technologies: ["Python", "NumPy", "SciPy", "MATLAB"],
        duration: "6 months",
        role: "ML Research Assistant",
        achievements: [
          "Optimized algorithm to achieve 83% faster convergence",
          "Published findings in prestigious machine learning journal",
          "Developed 5 industry-specific implementations"
        ]
      },
      {
        id: "3",
        title: "Amazon ML Summer School",
        category: "ai",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
        description: "Earned opportunity to learn from Amazon Scientists covering key machine learning topics.",
        link: "#",
        fullDescription: "Selected for the exclusive Amazon ML Summer School program where I learned from leading Amazon Scientists about cutting-edge machine learning techniques, deep learning architectures, and practical implementation strategies.",
        technologies: ["PyTorch", "AWS SageMaker", "Deep Learning", "Computer Vision"],
        duration: "2 months",
        role: "ML Summer School Participant",
        achievements: [
          "Top-rated project in final presentation",
          "Implemented a novel approach to recommendation systems",
          "Received mentorship from AWS AI research team"
        ]
      },
      {
        id: "4",
        title: "Enhanced Noise-Cancellation Algorithm",
        category: "dev",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80",
        description: "Developed a sound product with 83% performance increase using an Enhanced Noise-Cancellation algorithm.",
        link: "#",
        fullDescription: "Engineered an advanced noise-cancellation algorithm that achieved an 83% performance improvement over existing solutions. The technology was integrated into commercial audio products with outstanding user feedback.",
        technologies: ["Signal Processing", "DSP", "C++", "CUDA"],
        duration: "4 months",
        role: "Algorithm Developer",
        achievements: [
          "83% performance increase over industry standard",
          "Reduced computational requirements by 35%",
          "Algorithm patented and implemented in production devices"
        ]
      },
      {
        id: "5",
        title: "Siemens Gen AI Hackathon",
        category: "ai",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
        description: "Built a multi-agent Gen AI system, automating spy analysis and generating business reports and presentations.",
        link: "#",
        fullDescription: "Created an innovative multi-agent generative AI system during the Siemens Hackathon that automates complex data analysis, generates comprehensive business reports, and creates professional presentations with minimal human input.",
        technologies: ["GPT-4", "LangChain", "Multi-agent Systems", "Python"],
        duration: "48 hours",
        role: "Team Lead",
        achievements: [
          "First place in hackathon",
          "Solution adopted for pilot implementation at Siemens",
          "Reduced reporting time from days to minutes"
        ]
      },
      {
        id: "6",
        title: "Fitness Tracking Platform",
        category: "dev",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
        description: "Developed a dynamic health and fitness exercise app and efficiently integrated it into the company's web app.",
        link: "#",
        fullDescription: "Designed and developed a comprehensive fitness tracking platform that monitors user activity, provides personalized workout recommendations, and integrates with existing health data ecosystems.",
        technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
        duration: "5 months",
        role: "Full Stack Developer",
        achievements: [
          "Acquired 10,000+ users within first month",
          "Implemented real-time progress tracking",
          "Seamless integration with wearable devices"
        ]
      }
    ];
    
    // Find the project by ID
    const foundProject = projects.find(p => p.id === id);
    
    if (foundProject) {
      setTimeout(() => {
        setProject(foundProject);
        setLoading(false);
      }, 1000); // Simulate loading delay
    } else {
      toast({
        title: "Project not found",
        description: "The requested project could not be found.",
        variant: "destructive"
      });
      setLoading(false);
    }
  }, [id, toast]);

  if (loading) {
    return (
      <div className="min-h-screen bg-got-dark flex items-center justify-center">
        <div className="text-got-gold text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p className="mt-4 text-xl">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-got-dark flex items-center justify-center">
        <div className="text-center text-white max-w-md mx-auto p-6 bg-got-charcoal rounded-md shadow-lg">
          <h2 className="text-2xl font-serif mb-4">Project Not Found</h2>
          <p className="mb-6 text-gray-300">We couldn't find the project you're looking for.</p>
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  // Determine which icon to show based on category
  const getIcon = (category) => {
    switch(category) {
      case 'ai':
        return <Brain className="text-got-gold animate-bounce" size={40} />;
      case 'ml':
        return <Network className="text-got-gold animate-pulse" size={40} />;
      case 'dev':
        return <Code className="text-got-gold animate-pulse" size={40} />;
      default:
        return <Database className="text-got-gold animate-pulse" size={40} />;
    }
  };

  const getCategoryText = (category) => {
    switch(category) {
      case 'ai':
        return 'AI Project';
      case 'ml':
        return 'ML Research';
      case 'dev':
        return 'Development';
      default:
        return 'Project';
    }
  };

  return (
    <div className="min-h-screen bg-got-dark text-white">
      {/* Hero section */}
      <div 
        className="h-[50vh] relative flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.9)), url('${project.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-8 left-8">
          <Link 
            to="/#portfolio" 
            className="flex items-center space-x-2 text-white hover:text-got-gold transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
        </div>
        
        <div className="container text-center z-10 animate-fade-in">
          <div className="inline-block mb-4">
            {getIcon(project.category)}
          </div>
          <span className="inline-block px-4 py-1 mb-4 text-xs font-medium uppercase tracking-widest border border-got-gold text-got-gold">
            {getCategoryText(project.category)}
          </span>
          <h1 className="text-3xl md:text-5xl font-serif mb-4 text-white">{project.title}</h1>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main description */}
          <div className="md:col-span-2 animate-on-scroll">
            <h2 className="text-2xl font-serif mb-6 text-got-gold">Project Overview</h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              {project.fullDescription}
            </p>
            
            <h2 className="text-2xl font-serif mb-6 text-got-gold">Key Achievements</h2>
            <ul className="space-y-4 mb-12">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-4 mt-1 text-got-gold">❖</div>
                  <div className="text-gray-300">{achievement}</div>
                </li>
              ))}
            </ul>
            
            {project.link !== "#" && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Visit Project
              </a>
            )}
          </div>
          
          {/* Project details sidebar */}
          <div className="bg-got-charcoal/50 p-8 rounded-md shadow-md border border-got-gold/10 animate-on-scroll delay-200">
            <h3 className="font-serif text-xl mb-6 text-got-gold">Project Details</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-got-dark px-3 py-1 text-xs rounded-full border border-got-gold/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Duration</h4>
                <p className="text-white">{project.duration}</p>
              </div>
              
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">My Role</h4>
                <p className="text-white">{project.role}</p>
              </div>
              
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-400 mb-2">Category</h4>
                <p className="text-white">{getCategoryText(project.category)}</p>
              </div>
            </div>
            
            <div className="animate-pulse mt-12 p-4 border border-got-gold/20 rounded-md bg-got-dark/50">
              <ChartBar className="text-got-gold mx-auto mb-3" size={28} />
              <p className="text-center text-sm text-gray-300">
                This project showcases my expertise in {project.category === 'ai' ? 'artificial intelligence' : project.category === 'ml' ? 'machine learning' : 'software development'}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
