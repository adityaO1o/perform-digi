
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const SmallBusiness = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow pt-24">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Digital Marketing for Small Businesses</h1>
            <p className="text-center mb-12">This page content will be developed with information about our digital marketing services tailored for small businesses.</p>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Budget-Friendly Marketing Solutions</h2>
                <p>Content about our affordable marketing solutions for small businesses.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-semibold mb-4">Local SEO for Small Businesses</h2>
                <p>Information about our local SEO strategies for small business growth.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Small Business Success Stories</h2>
                <p>Case studies and success stories of small businesses we've worked with.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SmallBusiness;
