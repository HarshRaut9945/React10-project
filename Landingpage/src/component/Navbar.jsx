import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Import your navItems from constants
// import { navItems } from '../constants';

// Mock data - replace with your actual import
const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' }
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 bg-black/50'>
      <div className='container px-4 mx-auto relative'>
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center flex-shrink-0">
            <div className='h-10 w-10 mr-2 bg-gradient-to-br from-orange-500 to-orange-800 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-xl'>V</span>
            </div>
            {/* Replace the div above with your logo image:
            <img className='h-10 w-10 mr-2' src={logo} alt="logo" /> */}
            <span className='text-xl tracking-tight font-semibold text-white'>VirtualR</span>
          </div>

          {/* Desktop Navigation */}
          <ul className='hidden lg:flex space-x-8 flex-1 justify-center'>
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className='text-neutral-300 hover:text-white transition-colors duration-200'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Auth Buttons */}
          <div className='hidden lg:flex space-x-4 items-center'>
            <a 
              href="#" 
              className='py-2 px-4 border border-neutral-700 rounded-md text-neutral-300 hover:border-orange-500 hover:text-white transition-all duration-200'
            >
              Sign In
            </a>
            <a 
              href="#" 
              className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white hover:from-orange-600 hover:to-orange-900 transition-all duration-200 shadow-lg hover:shadow-orange-500/50'
            >
              Create Account
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className='lg:hidden'>
            <button 
              onClick={toggleNavbar}
              className='text-neutral-300 hover:text-white transition-colors p-2'
              aria-label='Toggle menu'
            >
              {mobileDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className='lg:hidden fixed left-0 right-0 top-[73px] bg-neutral-900/95 backdrop-blur-lg border-b border-neutral-700/80 shadow-xl'>
            <div className='px-4 py-6 space-y-4'>
              {/* Mobile Navigation Links */}
              <ul className='space-y-4'>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className='block py-2 text-neutral-300 hover:text-white transition-colors duration-200 text-lg'
                      onClick={toggleNavbar}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Mobile Auth Buttons */}
              <div className='pt-4 border-t border-neutral-700 space-y-3'>
                <a 
                  href="#" 
                  className='block w-full py-3 px-4 border border-neutral-700 rounded-md text-center text-neutral-300 hover:border-orange-500 hover:text-white transition-all duration-200'
                >
                  Sign In
                </a>
                <a 
                  href="#" 
                  className='block w-full bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md text-center text-white hover:from-orange-600 hover:to-orange-900 transition-all duration-200 shadow-lg'
                >
                  Create Account
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;