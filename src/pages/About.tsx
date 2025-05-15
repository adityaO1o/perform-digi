import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ✅ Added for navigation

const About = () => {
  const navigate = useNavigate(); // ✅ Hook for programmatic navigation

  // ✅ Scroll and navigate handler
  const handleScrollAndNavigate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate("/contact"), 300); // Allow scroll animation before navigation
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About Perform Digi</h1>
              <p className="text-xl text-gray-600 mb-8">
                We're a team of digital marketing experts passionate about helping businesses grow their online presence.
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-16" id="who-we-are">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary">Who We Are</h2>
                <p className="text-gray-600 mb-4">
                  Perform Digi is a leading digital marketing agency with expertise in SEO, social media, paid advertising, web development, and creative services. We combine data-driven strategies with creative excellence to deliver exceptional results for our clients.
                </p>
                <p className="text-gray-600 mb-6">
                  Founded in 2015, we've grown from a small team of passionate marketers to a full-service digital agency serving clients across various industries.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-blue-50 py-16" id="why-performdigi">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-primary">Why Choose Performdigi</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-4">Results-Driven Approach</h3>
                <p className="text-gray-600">We focus on delivering measurable results that directly impact your business growth and ROI.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-4">Industry Expertise</h3>
                <p className="text-gray-600">Our team brings specialized knowledge across various industries to create tailored strategies.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-primary text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold mb-4">Transparent Communication</h3>
                <p className="text-gray-600">We believe in clear, honest communication with detailed reporting on all campaigns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16" id="mission-vision">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary">Our Mission & Vision</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Guiding principles that shape our approach to digital marketing excellence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-gray-700">
                  To empower businesses with innovative digital marketing solutions that drive growth, increase visibility, and create meaningful connections with their audience.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-blue-100 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-gray-700">
                  To be the most trusted digital marketing partner for businesses seeking sustainable growth in the digital landscape.
                </p>
              </div>
              
              <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-md mt-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Core Values</h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-4">
                    <div className="text-primary font-semibold mb-2">Innovation</div>
                    <p className="text-sm text-gray-600">Constantly exploring new ideas and technologies</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-primary font-semibold mb-2">Integrity</div>
                    <p className="text-sm text-gray-600">Honest and ethical in all our dealings</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-primary font-semibold mb-2">Excellence</div>
                    <p className="text-sm text-gray-600">Committed to delivering the highest quality</p>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-primary font-semibold mb-2">Client-Focus</div>
                    <p className="text-sm text-gray-600">Prioritizing client needs and satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="bg-blue-50 py-16" id="success-stories">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-primary">Client Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                    🛒
                  </div>
                  <h3 className="text-xl font-semibold">E-commerce Success</h3>
                </div>
                <p className="text-gray-600 mb-4">Helped an online retailer increase their sales by 150% through targeted SEO and PPC campaigns.</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-primary font-semibold">Results: +150% Sales</span>
                  <span className="text-gray-500">Fashion Industry</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                    🏥
                  </div>
                  <h3 className="text-xl font-semibold">Healthcare Growth</h3>
                </div>
                <p className="text-gray-600 mb-4">Increased patient inquiries by 200% for a healthcare provider through local SEO and content marketing.</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-primary font-semibold">Results: +200% Leads</span>
                  <span className="text-gray-500">Healthcare</span>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                    🏢
                  </div>
                  <h3 className="text-xl font-semibold">Small Business Growth</h3>
                </div>
                <p className="text-gray-600 mb-4">Helped a local business establish online presence and achieve 300% growth in organic traffic.</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-primary font-semibold">Results: +300% Traffic</span>
                  <span className="text-gray-500">Retail</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Get in touch with our team to discuss how we can help you achieve your business goals.
            </p>
            <Button
              onClick={handleScrollAndNavigate}
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-6 rounded-md text-lg flex items-center gap-2"
            >
              Contact Us Today <ArrowRight size={20} />
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
