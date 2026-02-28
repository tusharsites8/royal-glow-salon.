import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mock';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1e1919] mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fad24b] to-[#ff8c19] mx-auto mb-6"></div>
            <p className="text-lg text-[#736c64] max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="relative bg-gradient-to-br from-[#f7f5f2] to-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#fad24b] to-[#ff8c19] rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#fad24b] text-[#fad24b]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#736c64] mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-bold text-[#1e1919] text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#736c64]">
                    {testimonial.location}
                  </p>
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#fad24b]/10 to-transparent rounded-tl-full"></div>
              </div>
            ))}
          </div>

          {/* Overall Rating Stats */}
          <div className="mt-16 text-center bg-gradient-to-r from-[#1e1919] to-[#3a3535] rounded-lg p-8 text-white">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">5.0</div>
                <div className="flex gap-1 justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#fad24b] text-[#fad24b]" />
                  ))}
                </div>
                <p className="text-[#bbb5ae]">Average Rating</p>
              </div>
              <div className="w-px h-16 bg-white/20 hidden sm:block"></div>
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <p className="text-[#bbb5ae]">Happy Customers</p>
              </div>
              <div className="w-px h-16 bg-white/20 hidden sm:block"></div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <p className="text-[#bbb5ae]">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
