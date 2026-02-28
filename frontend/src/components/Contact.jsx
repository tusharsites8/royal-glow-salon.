import React from 'react';
import { Button } from './ui/button';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { salonInfo } from '../data/mock';

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${salonInfo.whatsapp}?text=Hi, I would like to know more about Royal Glow Salon`, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = `tel:${salonInfo.phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${salonInfo.email}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#1e1919]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Visit Us Today
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fad24b] to-[#ff8c19] mx-auto mb-6"></div>
            <p className="text-lg text-[#bbb5ae] max-w-2xl mx-auto">
              Find us in the heart of Chandrapur. We're here to make you look amazing!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#fad24b] to-[#ff8c19] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-[#bbb5ae] leading-relaxed">
                      {salonInfo.address}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group cursor-pointer" onClick={handleCallClick}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#fad24b] to-[#ff8c19] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <p className="text-[#bbb5ae] hover:text-[#fad24b] transition-colors">
                      {salonInfo.phone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group cursor-pointer" onClick={handleEmailClick}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#fad24b] to-[#ff8c19] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-[#bbb5ae] hover:text-[#fad24b] transition-colors">
                      {salonInfo.email}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#fad24b] to-[#ff8c19] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Business Hours</h4>
                    <p className="text-[#bbb5ae]">Mon - Sat: {salonInfo.hours.weekdays}</p>
                    <p className="text-[#bbb5ae]">Sunday: {salonInfo.hours.sunday}</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-[#fad24b] to-[#ff8c19] text-black hover:shadow-lg hover:shadow-[#fad24b]/50 border-0"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
                <Button 
                  onClick={handleCallClick}
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Map */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Find Us Here</h3>
              <div className="relative rounded-lg overflow-hidden shadow-2xl h-[400px] group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#fad24b] to-[#ff8c19] opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <iframe
                  src={salonInfo.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Royal Glow Salon Location"
                  className="relative z-10"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
