
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const SuccessStories = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Client Success Stories</h1>
            <p className="text-center mb-12">This page content will be developed with detailed case studies and success stories from our clients.</p>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">E-commerce Success Story</h2>
                <p>Content about an e-commerce client's success with our digital marketing services.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Healthcare Provider Case Study</h2>
                <p>Information about how we helped a healthcare client improve their online presence.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Small Business Growth Story</h2>
                <p>Details about how we helped a small business achieve significant growth through digital marketing.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStories;
