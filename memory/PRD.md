# Royal Glow Salon Website - Product Requirements Document

## Original Problem Statement
Create a modern, professional, and mobile-friendly website for a premium unisex salon named "Royal Glow Salon" located in Chandrapur, Maharashtra. The website should look clean, stylish, and trustworthy using a black, gold, and white color theme.

## User Personas
1. **Local Customers**: Residents of Chandrapur looking for premium grooming services
2. **Walk-in Visitors**: People searching for "Best Salon in Chandrapur" on Google
3. **Mobile Users**: 70%+ users accessing via mobile devices
4. **Appointment Seekers**: Customers who prefer booking via WhatsApp

## Core Requirements
- SEO-friendly structure for local search optimization
- Fast-loading, responsive design
- WhatsApp integration for appointment booking
- Multiple CTAs throughout the page
- Professional black, gold, and white color theme
- Following db brand design guidelines

## Sections Required
1. ✅ Hero section with headline and CTA
2. ✅ About Us section (5+ years experience)
3. ✅ Services section with pricing
4. ✅ Image gallery
5. ✅ Customer testimonials (3 reviews)
6. ✅ Google Maps location embed
7. ✅ Contact section with phone, WhatsApp, hours, address
8. ✅ Header with navigation
9. ✅ Footer with links and social media

## What's Been Implemented (Phase 1 - Dec 28, 2025)

### Frontend Components Created
- **Header.jsx**: Sticky navigation with smooth scroll, mobile menu, Book Now CTA
- **Hero.jsx**: Full-screen hero with gradient background, animated text, dual CTAs
- **About.jsx**: Story section with image, 4 feature cards with icons
- **Services.jsx**: 6 service cards with pricing, icons, and hover effects
- **Gallery.jsx**: 6-image grid with lightbox modal functionality
- **Testimonials.jsx**: 3 customer reviews with 5-star ratings and stats section
- **Contact.jsx**: Contact info, business hours, Google Maps embed, CTAs
- **Footer.jsx**: Multi-column footer with links, contact info, social media

### Design Implementation
- Black (#1e1919), Gold (#fad24b, #ff8c19), White color scheme
- Gradient effects on CTAs and decorative elements
- Smooth animations (fadeIn, slideUp, scroll indicator)
- Responsive grid layouts (mobile-first approach)
- Glass morphism and shadow effects
- Lucide React icons (no emoji icons)

### Integrations
- WhatsApp booking links on all CTAs
- Click-to-call phone links
- Google Maps embed
- Social media links (Facebook, Instagram, Twitter)

### Mock Data Structure
All data stored in `/app/frontend/src/data/mock.js`:
- Salon information (name, contact, hours, address)
- 6 services with pricing
- 3 testimonials
- 6 gallery images
- WhatsApp number for booking

## Prioritized Backlog

### P0 Features (Not Required for MVP)
- Backend API (optional - website is fully functional without it)
- Contact form with email notifications
- Online booking system with calendar
- Admin dashboard for managing content

### P1 Features (Enhancement Ideas)
- SEO meta tags optimization
- Schema.org markup for local business
- Image lazy loading optimization
- Google Analytics integration
- Customer review submission form

### P2 Features (Future Considerations)
- Blog section for hair care tips
- Before/After gallery
- Staff profiles
- Service package bundles
- Gift vouchers/promotions section

## Next Tasks
1. ✅ Frontend MVP complete with mock data
2. User review and feedback on design
3. (Optional) Backend development if dynamic content management needed
4. SEO optimization with meta tags
5. Performance optimization

## Technical Stack
- **Frontend**: React 19, Tailwind CSS, Shadcn UI components
- **Backend**: FastAPI, MongoDB (optional for this static website)
- **Deployment**: Preview URL available

## Success Metrics
- Mobile-responsive design (100%)
- Fast page load (<3 seconds)
- Clear CTAs on every section
- Professional design matching agency quality
- WhatsApp booking integration functional

## Notes
- Website is fully functional with mock data
- No backend required as this is primarily an informational/landing page
- All interactive elements (WhatsApp, phone, email) work without backend
- Can easily update mock data for real information later
