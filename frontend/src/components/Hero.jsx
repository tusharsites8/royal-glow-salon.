import React from 'react';
import { Button } from './ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import { salonInfo, heroImage } from '../data/mock';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${salonInfo.whatsapp}?text=Hi, I would like to book an appointment at Royal Glow Salon`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${salonInfo.phone}`;
  };

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Royal Glow Salon Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Logo/Brand Name */}
          <div className="mb-8 animate-fadeIn">
            <div className="inline-block">
              <h1 className="salon-brand-name text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2">
                Royal Glow
              </h1>
              <div className="h-1 bg-gradient-to-r from-[#fad24b] via-[#ff8c19] to-transparent"></div>
            </div>
          </div>

          {/* Tagline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-slideUp">
            Look Stylish.<br />
            Feel Confident.
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl animate-slideUp" style={{animationDelay: '0.2s'}}>
            Experience premium grooming services at Chandrapur's finest unisex salon. 
            Where style meets excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{animationDelay: '0.4s'}}>
            <Button 
              onClick={handleWhatsAppClick}
              className="cta-primary group text-lg px-8 py-6 bg-gradient-to-r from-[#fad24b] to-[#ff8c19] text-black hover:shadow-2xl hover:shadow-[#fad24b]/50 border-0"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Book Appointment
            </Button>
            <Button 
              onClick={handleCallClick}
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>

          {/* Features */}
          <div className="mt-12 flex flex-wrap gap-6 text-white animate-slideUp" style={{animationDelay: '0.6s'}}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#fad24b] rounded-full"></div>
              <span className="text-sm sm:text-base">{salonInfo.experience} Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#fad24b] rounded-full"></div>
              <span className="text-sm sm:text-base">Trained Professionals</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#fad24b] rounded-full"></div>
              <span className="text-sm sm:text-base">Unisex Services</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#fad24b] rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#fad24b] rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
