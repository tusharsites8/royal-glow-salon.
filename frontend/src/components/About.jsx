import React from 'react';
import { Award, Users, Sparkles, Clock } from 'lucide-react';
import { salonInfo } from '../data/mock';

const About = () => {
  const features = [
    {
      icon: Award,
      title: `${salonInfo.experience} Years Experience`,
      description: 'Delivering excellence in beauty and grooming services'
    },
    {
      icon: Users,
      title: 'Expert Stylists',
      description: 'Highly trained and certified professionals'
    },
    {
      icon: Sparkles,
      title: 'Premium Products',
      description: 'Using only the finest quality products'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Open 7 days a week for your convenience'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1e1919] mb-4">
              About Royal Glow Salon
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fad24b] to-[#ff8c19] mx-auto mb-6"></div>
            <p className="text-lg text-[#736c64] max-w-2xl mx-auto">
              Chandrapur's premier unisex salon offering world-class grooming services 
              with a perfect blend of style, comfort, and expertise.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#fad24b] to-[#ff8c19] rounded-lg opacity-20 group-hover:opacity-30 transition-opacity blur-xl"></div>
              <img 
                src="https://images.pexels.com/photos/4783286/pexels-photo-4783286.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="About Royal Glow Salon" 
                className="relative rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>

            {/* Text Content */}
            <div>
              <h3 className="text-3xl font-bold text-[#1e1919] mb-6">
                Your Destination for Beauty & Style
              </h3>
              <p className="text-[#736c64] mb-6 leading-relaxed">
                Welcome to <span className="font-semibold text-[#1e1919]">Royal Glow Salon</span>, 
                where we've been transforming looks and boosting confidence for over {salonInfo.experience} years. 
                Located in the heart of Chandrapur, we pride ourselves on delivering exceptional grooming 
                experiences for both men and women.
              </p>
              <p className="text-[#736c64] mb-6 leading-relaxed">
                Our team of highly trained and certified stylists stays updated with the latest trends 
                and techniques to ensure you always leave looking and feeling your absolute best. 
                We use only premium quality products that are gentle on your hair and skin.
              </p>
              <p className="text-[#736c64] leading-relaxed">
                At Royal Glow, we believe that everyone deserves to look and feel royal. 
                That's why we've created a welcoming space where style meets comfort, 
                and every visit is a luxurious experience.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-lg bg-gradient-to-br from-[#f7f5f2] to-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#fad24b] to-[#ff8c19] mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-[#1e1919] mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-[#736c64]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
