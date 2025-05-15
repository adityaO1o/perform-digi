
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Ecommerce = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Digital Marketing for Retail & Ecommerce</h1>
            <p className="text-center mb-12">This page content will be developed with information about our digital marketing services tailored for retail and ecommerce businesses.</p>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Ecommerce SEO Strategies</h2>
                <p>Content about our SEO strategies specifically for ecommerce websites.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Conversion Rate Optimization</h2>
                <p>Information about our CRO techniques for ecommerce stores.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Ecommerce PPC Campaigns</h2>
                <p>Details about our PPC advertising strategies for retail and ecommerce businesses.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ecommerce;
