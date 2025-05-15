
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone } from 'lucide-react';

const AppDevelopment = () => {
  const appServices = [
    {
      title: "Mobile App Development (Android & iOS)",
      description: "Create native and cross-platform mobile applications that deliver exceptional user experiences on both Android and iOS platforms.",
      features: [
        "Native Android development (Java/Kotlin)",
        "Native iOS development (Swift)",
        "Cross-platform development (React Native/Flutter)",
        "UI/UX design for mobile applications",
      ],
      icon: "📱"
    },
    {
      title: "Business App Solutions",
      description: "Develop custom enterprise applications that streamline operations, improve productivity, and solve specific business challenges.",
      features: [
        "Enterprise resource planning (ERP) systems",
        "Customer relationship management (CRM) apps",
        "Inventory management solutions",
        "Field service management applications",
      ],
      icon: "💼"
    },
    {
      title: "E-commerce Mobile Apps",
      description: "Build engaging shopping applications that provide seamless buying experiences and boost your online sales.",
      features: [
        "Product catalog and search functionality",
        "Secure payment gateway integration",
        "User accounts and order history",
        "Push notifications for offers and updates",
      ],
      icon: "🛍️"
    },
    {
      title: "App Maintenance & Support",
      description: "Ensure your application continues to perform optimally with our comprehensive maintenance and support services.",
      features: [
        "Regular updates and feature enhancements",
        "Bug fixes and performance optimization",
        "OS compatibility updates",
        "Security patch implementation",
      ],
      icon: "🔧"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 font-poppins">App Development Services</h1>
              <p className="text-xl text-gray-600 font-inter">
                Custom mobile applications that transform your ideas into powerful digital solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary font-poppins">Mobile App Development Excellence</h2>
                <p className="text-gray-600 mb-4 font-inter">
                  At Perform Digi, we specialize in creating feature-rich, user-friendly mobile applications that help businesses connect with their customers, streamline operations, and stay ahead in the digital marketplace.
                </p>
                <p className="text-gray-600 mb-6 font-inter">
                  Our experienced development team works with cutting-edge technologies to deliver high-performing apps for Android, iOS, or both platforms simultaneously through cross-platform development approaches.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Android Apps</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">iOS Apps</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Cross-Platform</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Enterprise Solutions</span>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <AspectRatio ratio={16/9} className="bg-muted">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixid=M3wzODQ3NjV8MHwxfHNlYXJjaHwzfHxtb2JpbGUlMjBhcHB8ZW58MHx8fHwxNjkwMjkyMjgyfDA&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
                    alt="Mobile App Development" 
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
            <h2 className="text-3xl font-bold mb-2 text-center text-primary font-poppins">Our App Development Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-inter">
              Comprehensive mobile solutions to meet your business needs
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {appServices.map((service, index) => (
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

        {/* Technologies Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center text-primary font-poppins">Technologies We Use</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-inter">
              Modern technologies that power our robust mobile applications
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-3">⚛️</div>
                <h3 className="font-semibold font-poppins">React Native</h3>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-semibold font-poppins">Flutter</h3>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-3">☕</div>
                <h3 className="font-semibold font-poppins">Java/Kotlin</h3>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-3">🍎</div>
                <h3 className="font-semibold font-poppins">Swift</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4 text-primary font-poppins">Our App Portfolio</h2>
                <p className="text-gray-600 mb-6 font-inter">
                  We've created successful mobile applications for businesses across various industries. Check out our portfolio to see examples of our work and the results we've achieved for our clients.
                </p>
                <Link to="/portfolio" className="bg-primary text-white font-bold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors inline-flex items-center gap-2 font-inter">
                  View Our Portfolio <ArrowRight size={20} />
                </Link>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden h-40 bg-white shadow-md"></div>
                  <div className="rounded-lg overflow-hidden h-40 bg-white shadow-md"></div>
                  <div className="rounded-lg overflow-hidden h-40 bg-white shadow-md"></div>
                  <div className="rounded-lg overflow-hidden h-40 bg-white shadow-md"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-poppins">Ready to Build Your Mobile App?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-inter">
              Let's discuss your app idea and turn it into a successful digital product.
            </p>
            <Link to="/contact" className="bg-white text-primary font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors inline-flex items-center gap-2 font-inter">
              Start Your App Project <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppDevelopment;
