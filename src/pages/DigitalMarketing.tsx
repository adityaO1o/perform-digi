
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DigitalMarketing = () => {
  // Handler to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const industries = [
    {
      id: "small-business",
      name: "Small Businesses",
      description: "Cost-effective digital solutions designed specifically for small businesses and startups.",
      icon: "💼",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "shark-tank",
      name: "Shark Tank Brands",
      description: "Specialized marketing strategies for brands featured on Shark Tank or seeking similar growth.",
      icon: "🦈",
      image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "manufacturers",
      name: "Manufacturers & Wholesalers",
      description: "B2B digital marketing strategies to connect with retailers and distributors.",
      icon: "🏭",
      image: "https://images.unsplash.com/photo-1507215210622-539686c5a0c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "ecommerce",
      name: "Retail & Ecommerce",
      description: "Drive online sales and improve your ecommerce presence with tailored strategies.",
      icon: "🛒",
      image: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "doctors-clinics",
      name: "Doctors & Clinics",
      description: "Healthcare marketing for medical professionals to attract new patients and build trust.",
      icon: "👨‍⚕️",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "hospitals",
      name: "Hospitals",
      description: "Comprehensive digital strategies for hospitals to enhance their online presence and patient engagement.",
      icon: "🏥",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "chartered-accountants",
      name: "Chartered Accountants",
      description: "Marketing solutions to help CA firms attract clients and showcase expertise.",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "restaurants",
      name: "Restaurants & Cafes",
      description: "Food and beverage marketing to increase foot traffic and online orders.",
      icon: "🍽️",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "furniture",
      name: "Furniture & Interior Brands",
      description: "Visual-focused marketing for interior design and furniture businesses.",
      icon: "🪑",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "jewelry",
      name: "Jewellery & Fashion Marketing",
      description: "Luxury marketing strategies for jewelry and fashion brands to build exclusivity.",
      icon: "💍",
      image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    },
    {
      id: "health-wellness",
      name: "Health & Wellness Industry",
      description: "Marketing for fitness centers, spas, and wellness products to promote healthy lifestyles.",
      icon: "🧘",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
    }
  ];
  
  const services = [
    {
      name: "SEO Services",
      description: "Website SEO, Local SEO, YouTube SEO optimization to improve your visibility.",
      icon: "🔍"
    },
    {
      name: "Social Media Optimization (SMO)",
      description: "Strategic management of your social presence to build brand awareness.",
      icon: "📱"
    },
    {
      name: "Pay-Per-Click (PPC) Management",
      description: "Targeted ad campaigns that deliver results and maximize your ROI.",
      icon: "👆"
    },
    {
      name: "Google Ads Management",
      description: "Expert management of your Google Ads campaigns for maximum performance.",
      icon: "🎯"
    },
    {
      name: "Facebook & Instagram Ads",
      description: "Engaging social media ad campaigns that reach your ideal audience.",
      icon: "📸"
    },
    {
      name: "YouTube Ads Services",
      description: "Video advertising solutions to boost your brand's visibility.",
      icon: "▶️"
    },
    {
      name: "Lead Generation Services",
      description: "Strategies to capture and convert high-quality leads for your business.",
      icon: "📊"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-poppins">Digital Marketing Solutions</h1>
              <p className="text-xl text-gray-600 font-inter mb-8">
                Boost your online presence and grow your business with our comprehensive digital marketing strategies.
              </p>
              <Link 
                to="/contact" 
                className="bg-primary text-white px-6 py-3 rounded-md shadow-lg hover:bg-primary/90 transition-colors inline-flex items-center gap-2 font-medium"
                onClick={scrollToTop}
              >
                Get a Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white" id="overview">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary font-poppins">Digital Marketing Overview</h2>
                <p className="text-gray-600 mb-4 font-inter">
                  At Perform Digi, we offer a complete suite of digital marketing services designed to help your business thrive online. Our data-driven approach ensures that your marketing budget is spent efficiently, maximizing your return on investment.
                </p>
                <p className="text-gray-600 mb-6 font-inter">
                  From search engine optimization to social media management and paid advertising, our comprehensive strategies are tailored to meet your specific business goals and target audience.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Search Marketing</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Social Media</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Content Strategy</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">PPC Advertising</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Analytics</span>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=M3wzODQ3NjV8MHwxfHNlYXJjaHw0fHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTY5MDI5MjI4Mnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
                  alt="Digital Marketing Strategy" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary font-poppins">Our Digital Marketing Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-primary font-poppins">{service.name}</h3>
                  <p className="text-gray-600 font-inter">{service.description}</p>
                  <div className="mt-4 text-right">
                    <Link 
                      to="/contact" 
                      onClick={scrollToTop}
                      className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-full text-primary transition-colors"
                    >
                      <Plus size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white" id="industries">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-primary font-poppins">Digital Marketing For Different Industries</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-2xl mb-2">{industry.icon}</div>
                        <h3 className="text-xl font-semibold mb-2 text-primary font-poppins">{industry.name}</h3>
                      </div>
                      <Link 
                        to="/contact" 
                        onClick={scrollToTop}
                        className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-full text-primary transition-colors"
                      >
                        <Plus size={18} />
                      </Link>
                    </div>
                    <p className="text-gray-600 mb-4 font-inter">{industry.description}</p>
                    <a 
                      href={`#${industry.id}`} 
                      className="text-primary font-medium inline-flex items-center hover:underline"
                    >
                      Learn more <ArrowRight size={16} className="ml-1" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-poppins">Ready to Boost Your Digital Presence?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-inter">
              Get in touch with our digital marketing experts for a free consultation and strategy session.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-primary font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                onClick={scrollToTop}
              >
                Contact Us Today <ArrowRight size={20} />
              </Link>
              <a 
                href="https://wa.me/917303272405" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 text-white font-bold px-8 py-3 rounded-md hover:bg-green-600 transition-colors inline-flex items-center gap-2"
              >
                WhatsApp Us <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
