
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 SEO Tips for Small Businesses in 2025",
      category: "SEO",
      image: "/placeholder.svg",
      date: "May 15, 2025",
      excerpt: "Learn the latest SEO strategies that can help small businesses improve their online visibility and organic traffic."
    },
    {
      title: "How to Create Engaging Social Media Content",
      category: "Social Media",
      image: "/placeholder.svg",
      date: "May 10, 2025",
      excerpt: "Discover proven techniques to create content that resonates with your audience and drives engagement across platforms."
    },
    {
      title: "The Complete Guide to Google Ads in 2025",
      category: "PPC",
      image: "/placeholder.svg",
      date: "May 5, 2025",
      excerpt: "Everything you need to know about running successful Google Ads campaigns in the current digital landscape."
    },
    {
      title: "Mobile-First Web Design: Best Practices",
      category: "Web Development",
      image: "/placeholder.svg",
      date: "April 28, 2025",
      excerpt: "Learn why mobile-first design is essential and how to implement it effectively for better user experience."
    },
    {
      title: "Video Marketing Strategies That Convert",
      category: "Content Marketing",
      image: "/placeholder.svg",
      date: "April 22, 2025",
      excerpt: "Explore effective video marketing approaches that drive conversions and maximize ROI for your business."
    },
    {
      title: "Understanding Core Web Vitals For SEO",
      category: "Technical SEO",
      image: "/placeholder.svg",
      date: "April 15, 2025",
      excerpt: "A detailed look at Google's Core Web Vitals and how they impact your website's search rankings."
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Digital Marketing Blog</h1>
              <p className="text-xl text-gray-600">
                Latest insights, tips, and strategies to help you succeed in the digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <AspectRatio ratio={16 / 9}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-primary font-semibold">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <a href="#" className="text-primary font-semibold hover:underline">Read More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Stay updated with the latest digital marketing trends, tips, and insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
