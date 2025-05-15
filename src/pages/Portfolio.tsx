
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "E-commerce Website Redesign",
      category: "Web Development",
      image: "/placeholder.svg",
      description: "Complete redesign of an e-commerce platform resulting in 45% increase in conversions."
    },
    {
      title: "Social Media Campaign",
      category: "Digital Marketing",
      image: "/placeholder.svg",
      description: "Integrated social media campaign that increased engagement by 78%."
    },
    {
      title: "Mobile App Development",
      category: "App Development",
      image: "/placeholder.svg",
      description: "Custom iOS and Android app for a retail client with over 50,000 downloads."
    },
    {
      title: "SEO Optimization",
      category: "Digital Marketing",
      image: "/placeholder.svg",
      description: "Comprehensive SEO strategy that improved rankings for over 200 keywords."
    },
    {
      title: "Product Photography",
      category: "Creative Services",
      image: "/placeholder.svg",
      description: "Professional product photography for a fashion brand's catalog and website."
    },
    {
      title: "Brand Identity Design",
      category: "Creative Services",
      image: "/placeholder.svg",
      description: "Complete brand identity redesign including logo, colors, and brand guidelines."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
              <p className="text-xl text-gray-600">
                Explore our recent projects and see how we've helped businesses achieve their digital goals.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">{item.category}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals and create amazing results together.
            </p>
            <a href="/contact" className="bg-white text-primary font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors">
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
