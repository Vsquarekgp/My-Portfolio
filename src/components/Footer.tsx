import { Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-got-charcoal text-white">
      <div className="container">
        <div className="py-12 border-b border-got-charcoal-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-serif mb-4">An Innovative Leader & Visionary Developer</h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Dedicated to solving real-world problems with cutting-edge technology and deep insights.
              </p>
              <div className="flex space-x-3">
                <a href="https://www.linkedin.com/in/vasu-verma-795287234/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-got-gold transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-got-gold transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-gray-400 hover:text-got-gold transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-got-gold transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-got-gold transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Contact Info</h4>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  Kharagpur, India
                </li>
                <li>
                  <a href="mailto:vasuverma132004@gmail.com" className="text-gray-400 hover:text-got-gold transition-colors">
                    vasuverma132004@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Vasu Verma. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-got-gold text-white hover:bg-got-gold/90 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
