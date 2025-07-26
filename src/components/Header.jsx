import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

const Header=()=> {
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const [isScrolled,setIsScrolled]=useState(false);

  useEffect(()=> {
    const handleScroll=()=> {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll',handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll);
  },[]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">FA</span>
            </div>
            <span className="text-xl font-bold text-blue-900">Florida Apostille App</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Services
            </a>
            <a href="#process" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Process
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
            <Link to="/form" className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Start Now
            </Link>
          </div>

          <button 
            className="md:hidden flex flex-col space-y-1"
            onClick={()=> setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-600"></span>
            <span className="w-6 h-0.5 bg-gray-600"></span>
            <span className="w-6 h-0.5 bg-gray-600"></span>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</a>
              <a href="#process" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Process</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
              <Link to="/form" className="block px-3 py-2 text-blue-600 font-semibold">Start Now</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;