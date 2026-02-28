import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { salonInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${salonInfo.whatsapp}?text=Hi, I would like to book an appointment`, '_blank');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="cursor-pointer" 
            onClick={() => scrollToSection('home')}
          >
            <h1 className="text-2xl sm:text-3xl font-bold">
              <span className="text-white">Royal</span>
              <span className="text-[#fad24b]"> Glow</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-[#fad24b] transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-[#fad24b] transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#fad24b] transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-[#fad24b] transition-colors font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-[#fad24b] transition-colors font-medium"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-[#fad24b] transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-[#fad24b] to-[#ff8c19] text-black hover:shadow-lg hover:shadow-[#fad24b]/50 border-0"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-black/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-[#fad24b] transition-colors font-medium text-left px-4"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-[#fad24b] transition-colors font-medium text-left px-4"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[#fad24b] transition-colors font-medium text-left px-4"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-white hover:text-[#fad24b] transition-colors font-medium text-left px-4"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-white hover:text-[#fad24b] transition-colors font-medium text-left px-4"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[#fad24b] transition-colors font-medium text-left px-4"
              >
                Contact
              </button>
              <div className="px-4 pt-2">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-[#fad24b] to-[#ff8c19] text-black border-0"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Book Appointment
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
