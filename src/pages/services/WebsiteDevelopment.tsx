
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone } from 'lucide-react';

const WebsiteDevelopment = () => {
  const websiteServices = [
    {
      title: "Ecommerce Website Development",
      description: "Build powerful online stores that drive sales and provide seamless shopping experiences across all devices.",
      features: [
        "Responsive product catalogs and category pages",
        "Secure payment gateway integration",
        "Inventory management systems",
        "Order tracking and customer accounts",
      ],
      icon: "🛒"
    },
    {
      title: "Shopify Website Development",
      description: "Create customized Shopify stores that highlight your brand identity while leveraging the platform's robust ecommerce capabilities.",
      features: [
        "Custom Shopify theme development",
        "App integration and configuration",
        "Payment and shipping setup",
        "Store optimization for conversions",
      ],
      icon: "🏪"
    },
    {
      title: "WordPress Website Development",
      description: "Design and develop flexible WordPress websites that are easy to manage and update while maintaining excellent performance.",
      features: [
        "Custom WordPress theme development",
        "Plugin integration and configuration",
        "Content management system setup",
        "Speed and performance optimization",
      ],
      icon: "📝"
    },
    {
      title: "Custom Website Design & Development",
      description: "Create unique, tailor-made websites that perfectly align with your business objectives and brand identity.",
      features: [
        "Bespoke UI/UX design process",
        "Front-end and back-end development",
        "API integrations and custom functionality",
        "Comprehensive testing and quality assurance",
      ],
      icon: "✨"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 font-poppins">Website Development Services</h1>
              <p className="text-xl text-gray-600 font-inter">
                Custom website solutions designed to elevate your online presence and drive business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <AspectRatio ratio={16/9} className="bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=M3wzODQ3NjV8MHwxfHNlYXJjaHw0fHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8fHwxNjkwMjkyMjgyfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
                    alt="Website Development" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AspectRatio>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary font-poppins">Professional Website Development</h2>
                <p className="text-gray-600 mb-4 font-inter">
                  At Perform Digi, we create websites that not only look stunning but also deliver exceptional user experiences and drive business results. Our development team combines technical expertise with creative design to build websites that stand out.
                </p>
                <p className="text-gray-600 mb-6 font-inter">
                  Whether you need an ecommerce platform, a corporate website, or a custom web application, our development process ensures your site is responsive, secure, and optimized for both users and search engines.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Responsive Design</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">SEO Optimization</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Fast Loading</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">User Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center text-primary font-poppins">Our Website Development Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-inter">
              Custom solutions to meet your unique business requirements
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {websiteServices.map((service, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">{service.icon}</div>
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

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center text-primary font-poppins">Our Development Process</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-inter">
              A streamlined approach to delivering high-quality websites
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 font-poppins">Discovery</h3>
                <p className="text-gray-700 font-inter">
                  We analyze your requirements, goals, and target audience to create a strategic plan.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 font-poppins">Design</h3>
                <p className="text-gray-700 font-inter">
                  Our designers create wireframes and visual concepts that align with your brand identity.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 font-poppins">Development</h3>
                <p className="text-gray-700 font-inter">
                  Our developers build your website with clean code and modern technologies.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 font-poppins">Launch</h3>
                <p className="text-gray-700 font-inter">
                  After thorough testing, your website goes live with ongoing support and maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-poppins">Ready to Build Your New Website?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-inter">
              Let's discuss your project and create a website that perfectly represents your brand.
            </p>
            <Link to="/contact" className="bg-white text-primary font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors inline-flex items-center gap-2 font-inter">
              Start Your Project <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
