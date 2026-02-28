import React from 'react';
import { Button } from './ui/button';
import { Scissors, Sparkles, Droplets, Sun, Gem, Palette, MessageCircle } from 'lucide-react';
import { services, salonInfo } from '../data/mock';

const iconMap = {
  Scissors,
  Sparkles,
  Droplets,
  Sun,
  Gem,
  Palette
};

const Services = () => {
  const handleBookNow = () => {
    window.open(`https://wa.me/${salonInfo.whatsapp}?text=Hi, I would like to book an appointment`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-[#1e1919]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fad24b] to-[#ff8c19] mx-auto mb-6"></div>
            <p className="text-lg text-[#bbb5ae] max-w-2xl mx-auto">
              Discover our range of premium grooming services designed to make you look and feel amazing
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <div 
                  key={service.id}
                  className="service-card group relative bg-white rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-[#fad24b]/20 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#fad24b] via-[#ff8c19] to-transparent opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#fad24b] to-[#ff8c19] mb-6 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>

                    {/* Service Name */}
                    <h3 className="text-2xl font-bold text-[#1e1919] mb-3">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[#736c64] mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-[#1e1919]">
                        {service.price}
                      </span>
                      <span className="text-sm text-[#736c64]">
                        onwards
                      </span>
                    </div>

                    {/* Decorative line */}
                    <div className="mt-6 h-1 bg-gradient-to-r from-[#fad24b] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-[#bbb5ae] mb-6 text-lg">
              Ready to transform your look?
            </p>
            <Button 
              onClick={handleBookNow}
              size="lg"
              className="bg-gradient-to-r from-[#fad24b] to-[#ff8c19] text-black hover:shadow-2xl hover:shadow-[#fad24b]/50 text-lg px-10 py-6 border-0"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Book Your Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
