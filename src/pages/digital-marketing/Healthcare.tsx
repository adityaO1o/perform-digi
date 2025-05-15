
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Healthcare = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Digital Marketing for Healthcare</h1>
            <p className="text-center mb-12">This page content will be developed with information about our digital marketing services tailored for healthcare providers and organizations.</p>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Medical SEO Services</h2>
                <p>Content about our specialized SEO services for healthcare providers.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Healthcare Social Media Marketing</h2>
                <p>Information about our social media strategies for medical practices and hospitals.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Patient Lead Generation</h2>
                <p>Details about our lead generation techniques for acquiring new patients.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Healthcare;
