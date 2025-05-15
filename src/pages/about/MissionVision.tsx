
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const MissionVision = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Our Mission & Vision</h1>
            <p className="text-center mb-12">This page content will be developed with information about our company's mission, vision, and values.</p>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p>Content about our company's mission statement and purpose.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p>Information about our long-term vision and aspirations.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Core Values</h2>
                <p>Details about the values that guide our work and company culture.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MissionVision;
