import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { salonInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-white">Royal</span>
                <span className="text-[#fad24b]"> Glow</span>
              </h3>
              <p className="text-[#bbb5ae] mb-4">
                Chandrapur's premier unisex salon for all your grooming needs.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#fad24b] hover:to-[#ff8c19] flex items-center justify-center transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#fad24b] hover:to-[#ff8c19] flex items-center justify-center transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#fad24b] hover:to-[#ff8c19] flex items-center justify-center transition-all"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('home')}
                    className="text-[#bbb5ae] hover:text-[#fad24b] transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-[#bbb5ae] hover:text-[#fad24b] transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-[#bbb5ae] hover:text-[#fad24b] transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('gallery')}
                    className="text-[#bbb5ae] hover:text-[#fad24b] transition-colors"
                  >
                    Gallery
                  </button>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-[#bbb5ae]">
                <li>Haircut & Styling</li>
                <li>Beard Styling</li>
                <li>Hair Spa</li>
                <li>Facial Treatment</li>
                <li>Bridal Makeup</li>
                <li>Hair Coloring</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#fad24b] flex-shrink-0 mt-1" />
                  <span className="text-[#bbb5ae] text-sm">
                    {salonInfo.address}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#fad24b] flex-shrink-0" />
                  <a 
                    href={`tel:${salonInfo.phone}`}
                    className="text-[#bbb5ae] hover:text-[#fad24b] transition-colors text-sm"
                  >
                    {salonInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#fad24b] flex-shrink-0" />
                  <a 
                    href={`mailto:${salonInfo.email}`}
                    className="text-[#bbb5ae] hover:text-[#fad24b] transition-colors text-sm"
                  >
                    {salonInfo.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#bbb5ae] text-sm">
                © {currentYear} Royal Glow Salon. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-[#bbb5ae] hover:text-[#fad24b] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-[#bbb5ae] hover:text-[#fad24b] transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
