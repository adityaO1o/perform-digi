import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Link, useNavigate } from 'react-router-dom'; // ✅ Added useNavigate

const Services = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  // ✅ Function to scroll and navigate
  const handleScrollAndNavigate = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate('/contact'), 300); // Delay to let scroll finish
  };

  const serviceCategories = [
    {
      title: "Digital Marketing Services",
      description: "Boost your online visibility and drive targeted traffic to grow your business.",
      path: "/services/digital-marketing",
      icon: "🚀"
    },
    {
      title: "Website Development",
      description: "Custom, responsive, and user-friendly websites tailored to your unique business needs.",
      path: "/services/website-development",
      icon: "💻"
    },
    {
      title: "App Development",
      description: "Native and cross-platform mobile applications for Android and iOS platforms.",
      path: "/services/app-development",
      icon: "📱"
    },
    {
      title: "Creative Services",
      description: "Eye-catching designs, engaging content, and compelling brand experiences.",
      path: "/services/creative",
      icon: "🎨"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-600">
                Comprehensive digital solutions to grow your online presence and business success.
              </p>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <Link to={category.path} key={index}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="text-4xl mb-4">{category.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Reach out to discuss your project requirements and how we can help you achieve your business goals.
            </p>
            {/* ✅ Button with scroll and navigate */}
            <button
              onClick={handleScrollAndNavigate}
              className="bg-white text-primary font-bold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Get Started
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
