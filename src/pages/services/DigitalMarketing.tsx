
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, Globe, Search, Smartphone, Plus } from 'lucide-react';

const DigitalMarketingServices = () => {
  // Handler to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Define the main service categories with their details
  const serviceCategories = [
    {
      title: "Social Media Optimization (SMO Services)",
      description: "Build and maintain a strong social media presence across multiple platforms to engage with your audience and increase brand awareness.",
      features: [
        "Platform-specific content creation",
        "Community management and engagement",
        "Social media profile optimization",
        "Cross-platform strategy development",
      ],
      icon: "🔄"
    },
    {
      title: "Organic Social Media Growth",
      description: "Develop sustainable growth strategies for your social media accounts without relying on paid advertising.",
      features: [
        "Content calendar planning",
        "Hashtag research and strategy",
        "Engagement campaigns",
        "Analytics tracking and reporting",
      ],
      icon: "📈"
    },
    {
      title: "SEO Services",
      description: "Improve your website's visibility in search engine results to attract more organic traffic and potential customers.",
      features: [
        "Website SEO audits and optimization",
        "Local SEO for businesses targeting specific regions",
        "YouTube SEO for video content optimization",
        "Technical SEO improvements",
      ],
      icon: "🔍"
    },
    {
      title: "Pay-Per-Click (PPC) Management",
      description: "Create and manage targeted advertising campaigns that deliver measurable results and maximize your return on investment.",
      features: [
        "Campaign strategy development",
        "Ad creation and optimization",
        "Bid management",
        "Performance tracking and reporting",
      ],
      icon: "👆"
    },
    {
      title: "Google Ads Management",
      description: "Leverage the power of Google's advertising platform to reach potential customers at the moment they're searching for your products or services.",
      features: [
        "Search campaign management",
        "Display network advertising",
        "Remarketing campaigns",
        "Shopping ads for e-commerce",
      ],
      icon: "🎯"
    },
    {
      title: "Facebook & Instagram Ads (Meta Ads)",
      description: "Create compelling social media advertising campaigns that target specific demographics, interests, and behaviors on Meta platforms.",
      features: [
        "Audience targeting and segmentation",
        "Ad creative development",
        "A/B testing for optimal performance",
        "Budget optimization",
      ],
      icon: "📱"
    },
    {
      title: "YouTube Ads Services",
      description: "Reach your target audience through engaging video advertisements on the world's largest video platform.",
      features: [
        "Video ad campaign strategy",
        "Different YouTube ad formats",
        "Audience targeting",
        "Performance analytics",
      ],
      icon: "▶️"
    },
    {
      title: "Lead Generation Services",
      description: "Implement strategies to capture potential customer information and nurture them through the marketing funnel.",
      features: [
        "Landing page optimization",
        "Form design and implementation",
        "Lead magnet creation",
        "Lead nurturing email campaigns",
      ],
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 font-poppins">Digital Marketing Services</h1>
              <p className="text-xl text-gray-600 font-inter">
                Comprehensive digital marketing solutions to help your business thrive online and reach your target audience effectively.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary font-poppins">Our Digital Marketing Expertise</h2>
                <p className="text-gray-600 mb-4 font-inter">
                  At Perform Digi, we offer a complete suite of digital marketing services designed to help your business establish a strong online presence, attract qualified leads, and convert them into loyal customers.
                </p>
                <p className="text-gray-600 mb-6 font-inter">
                  Our data-driven approach ensures that every campaign is strategically planned, meticulously executed, and continuously optimized for maximum results. We stay ahead of industry trends and algorithm changes to keep your business at the forefront of digital marketing innovation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Search Engine Optimization</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Social Media Marketing</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">PPC Advertising</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Content Strategy</span>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <AspectRatio ratio={16/9} className="bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=M3wzODQ3NjV8MHwxfHNlYXJjaHw0fHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDB8fHx8MTY5MDI5MjI4Mnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
                    alt="Digital Marketing Strategy" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center text-primary font-poppins">Our Digital Marketing Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-inter">
              Comprehensive solutions to boost your online presence and drive business growth
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((service, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="text-3xl mb-4">{service.icon}</div>
                      <Link 
                        to="/contact" 
                        onClick={scrollToTop}
                        className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-full text-primary transition-colors"
                      >
                        <Plus size={18} />
                      </Link>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-primary font-poppins">{service.title}</h3>
                    <p className="text-gray-600 mb-4 font-inter">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2 font-bold">✓</span>
                          <span className="text-gray-700 font-inter text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center text-primary font-poppins">Why Choose Our Digital Marketing Services?</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-inter">
              Our strategic approach and proven methodology deliver measurable results for businesses of all sizes
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-poppins">Data-Driven Approach</h3>
                <p className="text-gray-700 font-inter">
                  We base our strategies on comprehensive analytics and market research to deliver measurable results.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-poppins">Industry Expertise</h3>
                <p className="text-gray-700 font-inter">
                  Our team brings specialized knowledge across various industries to create tailored marketing solutions.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-poppins">Transparent Reporting</h3>
                <p className="text-gray-700 font-inter">
                  Regular detailed reports that showcase your campaign performance, ROI, and strategic insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-poppins">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-inter">
              Get in touch with our digital marketing experts for a personalized strategy tailored to your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-white text-primary font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors inline-flex items-center gap-2 font-inter"
                onClick={scrollToTop}
              >
                Schedule a Consultation <ArrowRight size={20} />
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

export default DigitalMarketingServices;
