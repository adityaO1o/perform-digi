
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const WhyPerformdigi = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Why Choose Performdigi</h1>
            <p className="text-center mb-12">This page content will be developed with detailed information about why clients should choose Performdigi.</p>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Results-Driven Approach</h2>
                <p>Content about our results-driven methodology and approach to digital marketing.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Industry Expertise</h2>
                <p>Information about our specialized knowledge across various industries.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Transparent Communication</h2>
                <p>Details about our communication process and reporting methodology.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyPerformdigi;
