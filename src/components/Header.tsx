import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navLinks = [{
    name: "Home",
    href: "#home"
  }, {
    name: "About",
    href: "#about"
  }, {
    name: "Portfolio",
    href: "#portfolio"
  }, {
    name: "Skills",
    href: "#skills"
  }, {
    name: "Contact",
    href: "#contact"
  }];
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-got-charcoal/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="text-2xl font-serif font-bold text-got-gold tracking-wider">IIT Kharagpur</a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map(link => <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>)}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground hover:text-got-gold transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="absolute top-full left-0 w-full bg-got-charcoal/95 backdrop-blur-sm shadow-md py-5 md:hidden animate-fade-in">
            <nav className="container">
              <ul className="flex flex-col space-y-4">
                {navLinks.map(link => <li key={link.name}>
                    <a href={link.href} className="nav-link block py-2" onClick={() => setIsMenuOpen(false)}>
                      {link.name}
                    </a>
                  </li>)}
              </ul>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;