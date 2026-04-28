import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', path: '/#about' },
    { name: 'Style Guide', path: '/#styles' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Book Now', path: '/book' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-brand-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-brand-charcoal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Centered Nav */}
        <div className="hidden md:flex flex-1 justify-center space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-xs uppercase tracking-[0.2em] font-medium hover:text-brand-muted-gold transition-colors relative group"
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-px bg-brand-muted-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
            </Link>
          ))}
        </div>

        {/* Logo - Centered in navbar layout but separate for mobile/desktop flex */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 order-first md:order-none">
          <span className="font-serif text-xl md:text-2xl tracking-tighter italic">The Picnic Project</span>
        </Link>
        
        {/* Spacer for mobile to keep logo centered */}
        <div className="w-6 md:hidden" />
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-cream border-t border-brand-charcoal/5 px-6 py-8 md:hidden shadow-xl"
        >
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest font-medium border-b border-brand-charcoal/5 pb-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
