
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { ArrowRight, Image } from 'lucide-react';

const CreativeServices = () => {
  const creativeServices = [
    {
      title: "Product Photography & Shoots",
      description: "Professional photography services that showcase your products in the best light to attract customers and boost sales.",
      features: [
        "Studio product photography",
        "Lifestyle product photography",
        "360° product views",
        "Photo editing and retouching",
      ],
      icon: "📸"
    },
    {
      title: "Graphic Design Services",
      description: "Eye-catching visual designs that communicate your brand message effectively and create lasting impressions.",
      features: [
        "Logo design and brand identity",
        "Marketing materials and collateral",
        "Social media graphics",
        "Packaging design",
      ],
      icon: "🎨"
    },
    {
      title: "Video Editing Services",
      description: "Professional video editing that transforms raw footage into compelling visual stories that engage your audience.",
      features: [
        "Marketing and promotional videos",
        "Product demonstrations",
        "Social media video content",
        "Animation and motion graphics",
      ],
      icon: "🎬"
    },
    {
      title: "Content Creation",
      description: "Engaging content that resonates with your audience and drives meaningful interactions with your brand.",
      features: [
        "Copywriting for websites and ads",
        "Blog post creation",
        "Social media content planning",
        "Email marketing content",
      ],
      icon: "✏️"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 font-poppins">Creative Services</h1>
              <p className="text-xl text-gray-600 font-inter">
                Bring your brand to life with our professional creative services that make you stand out from the competition.
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
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=M3wzODQ3NjV8MHwxfHNlYXJjaHwyfHxjcmVhdGl2ZSUyMGRlc2lnbnxlbnwwfHx8fDE2OTAyOTIyODJ8MA&ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60" 
                    alt="Creative Design Services" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AspectRatio>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6 text-primary font-poppins">Creative Excellence</h2>
                <p className="text-gray-600 mb-4 font-inter">
                  At Perform Digi, our creative team combines artistic talent with strategic thinking to deliver visuals that not only look stunning but also drive business results.
                </p>
                <p className="text-gray-600 mb-6 font-inter">
                  From professional product photography to captivating graphic design and dynamic video content, our creative services are designed to elevate your brand presence and connect with your audience on a deeper level.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Photography</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Graphic Design</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Video Production</span>
                  <span className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">Content Creation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center text-primary font-poppins">Our Creative Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-inter">
              Professional creative solutions to enhance your brand presence
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {creativeServices.map((service, index) => (
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

        {/* Portfolio Gallery */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center text-primary font-poppins">Creative Portfolio</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-inter">
              A showcase of our creative work across different industries
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square bg-blue-100 rounded-lg overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">Product Photography</div>
              </div>
              <div className="aspect-square bg-blue-100 rounded-lg overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">Packaging Design</div>
              </div>
              <div className="aspect-square bg-blue-100 rounded-lg overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">Logo Design</div>
              </div>
              <div className="aspect-square bg-blue-100 rounded-lg overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">Social Media Graphics</div>
              </div>
              <div className="aspect-square bg-blue-100 rounded-lg overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">Video Production</div>
              </div>
              <div className="aspect-square bg-blue-100 rounded-lg overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">Brand Identity</div>
              </div>
              <div className="aspect-square bg-blue-100 rounded-lg overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">Product Catalogs</div>
              </div>
              <div className="aspect-square bg-blue-100 rounded-lg overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">Promotional Videos</div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/portfolio" className="bg-primary text-white font-bold px-8 py-3 rounded-md hover:bg-primary/90 transition-colors inline-flex items-center gap-2 font-inter">
                View Full Portfolio <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center text-primary font-poppins">Our Creative Process</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto font-inter">
              How we bring your creative vision to life
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 font-poppins">Discovery & Briefing</h3>
                <p className="text-gray-700 font-inter">
                  We start by understanding your brand, objectives, target audience, and project requirements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 font-poppins">Concept Development</h3>
                <p className="text-gray-700 font-inter">
                  Our creative team develops concepts and ideas that align with your brand and project goals.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="font-bold text-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 font-poppins">Production & Delivery</h3>
                <p className="text-gray-700 font-inter">
                  We create the final product with attention to detail and deliver high-quality assets ready for use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 font-poppins">Elevate Your Brand With Our Creative Services</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-inter">
              Let our creative team help you make a lasting impression on your audience.
            </p>
            <Link to="/contact" className="bg-white text-primary font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors inline-flex items-center gap-2 font-inter">
              Discuss Your Creative Project <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CreativeServices;
