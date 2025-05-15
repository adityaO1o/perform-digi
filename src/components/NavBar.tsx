
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageSquare, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handler to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const navItemClassName = "font-medium hover:text-primary transition-colors px-3";
  const mobileNavItemClassName = "block font-medium py-2 hover:text-primary transition-colors";
  const activeNavItemClassName = "text-primary";

  const digitalMarketingCategories = [
    { name: "Small Businesses", path: "/digital-marketing#small-business" },
    { name: "Shark Tank Brands", path: "/digital-marketing#shark-tank" },
    { name: "Manufacturers & Wholesalers", path: "/digital-marketing#manufacturers" },
    { name: "Retail & Ecommerce", path: "/digital-marketing#ecommerce" },
    { name: "Doctors & Clinics", path: "/digital-marketing#doctors-clinics" },
    { name: "Hospitals", path: "/digital-marketing#hospitals" },
    { name: "Chartered Accountants", path: "/digital-marketing#chartered-accountants" },
    { name: "Restaurants & Cafes", path: "/digital-marketing#restaurants" },
    { name: "Furniture & Interior Brands", path: "/digital-marketing#furniture" },
    { name: "Jewellery & Fashion", path: "/digital-marketing#jewelry" },
    { name: "Health & Wellness", path: "/digital-marketing#health-wellness" }
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary font-poppins" onClick={scrollToTop}>Perform Digi</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className={cn(navItemClassName, isActive('/') && activeNavItemClassName)}
              onClick={scrollToTop}
            >
              Home
            </Link>
            
             <Link 
              to="/about" 
              className={cn(navItemClassName, isActive('/about') && activeNavItemClassName)}
              onClick={scrollToTop}
            >
              About Us
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={cn("bg-transparent", isActive('/services') && "text-primary")}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid grid-cols-2 w-[600px] gap-3 p-4">
                      <li className="col-span-2">
                        <NavigationMenuLink asChild>
                          <Link to="/services" className="block p-3 hover:bg-accent rounded-md" onClick={scrollToTop}>
                            <div className="text-sm font-medium">All Services</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/services/digital-marketing" className="block p-3 hover:bg-accent rounded-md" onClick={scrollToTop}>
                            <div className="text-sm font-medium">Digital Marketing Services</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/services/website-development" className="block p-3 hover:bg-accent rounded-md" onClick={scrollToTop}>
                            <div className="text-sm font-medium">Website Development</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/services/app-development" className="block p-3 hover:bg-accent rounded-md" onClick={scrollToTop}>
                            <div className="text-sm font-medium">App Development</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/services/creative" className="block p-3 hover:bg-accent rounded-md" onClick={scrollToTop}>
                            <div className="text-sm font-medium">Creative Services</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Digital Marketing with hover dropdown */}
            <Link 
              to="/digital-marketing"
              className={cn(navItemClassName, isActive("/digital-marketing") && activeNavItemClassName)}
              onClick={scrollToTop}
            >
              Digital Marketing
            </Link>
            
            <Link 
              to="/portfolio" 
              className={cn(navItemClassName, isActive('/portfolio') && activeNavItemClassName)}
              onClick={scrollToTop}
            >
              Portfolio
            </Link>
            
            <Link 
              to="/blog" 
              className={cn(navItemClassName, isActive('/blog') && activeNavItemClassName)}
              onClick={scrollToTop}
            >
              Blog
            </Link>
            
            <Link 
              to="/contact" 
              className={cn(navItemClassName, isActive('/contact') && activeNavItemClassName)}
              onClick={scrollToTop}
            >
              Contact
            </Link>
          </div>
          
          <div className="flex space-x-2 ml-6">
            <a 
              href="https://wa.me/917303272405" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>
            <Link 
              to="/contact" 
              onClick={scrollToTop}
              className="inline-flex items-center justify-center gap-1 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
            >
              <Phone size={16} />
              <span>+91 73032 72405</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation Trigger */}
        <button 
          className="md:hidden text-slate p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="py-4 px-6 space-y-3">
            <li><Link to="/" className={mobileNavItemClassName} onClick={scrollToTop}>Home</Link></li>
            <li className="py-2">
              <div className="flex items-center justify-between">
                <Link to="/about" className="font-medium hover:text-primary transition-colors" onClick={scrollToTop}>About Us</Link>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center justify-between">
                <Link to="/services" className="font-medium hover:text-primary transition-colors" onClick={scrollToTop}>Services</Link>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center justify-between">
                <Link to="/digital-marketing" className="font-medium hover:text-primary transition-colors" onClick={scrollToTop}>Digital Marketing</Link>
                
              </div>
            </li>
            <li><Link to="/portfolio" className={mobileNavItemClassName} onClick={scrollToTop}>Portfolio</Link></li>
            <li><Link to="/blog" className={mobileNavItemClassName} onClick={scrollToTop}>Blog</Link></li>
            <li><Link to="/contact" className={mobileNavItemClassName} onClick={scrollToTop}>Contact</Link></li>
          </ul>
          <div className="flex flex-col space-y-2 p-6 pt-0">
            <a 
              href="https://wa.me/917303272405" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-md"
            >
              <MessageSquare size={16} />
              <span>WhatsApp</span>
            </a>
            <Link 
              to="/contact" 
              onClick={scrollToTop}
              className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 py-2 px-4 rounded-md"
            >
              <Phone size={16} />
              <span>+91 73032 72405</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
