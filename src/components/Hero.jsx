import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-2">
              Florida Apostille App
            </h1>
            <p className="text-xl lg:text-2xl mb-4 text-blue-100">
              <strong className="text-orange-300">Private intermediary service</strong> powered by the Notary Geek platform. 
              <strong className="text-orange-300"> NOT a government agency.</strong>
            </p>
            <p className="text-lg mb-8 text-blue-100">
              Get comprehensive apostille service with <strong className="text-orange-300">2-day processing</strong> target. 
              Government option: $10 direct at <a href="https://dos.myflorida.com" target="_blank" rel="noopener" className="underline text-yellow-300">dos.myflorida.com</a>
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-orange-300 text-xl">🏢</span>
                <span className="font-semibold">Private Service</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-orange-300 text-xl">⚡</span>
                <span className="font-semibold">2-Day Target</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="text-orange-300 text-xl">🌍</span>
                <span className="font-semibold">Foreign Signers Welcome</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                to="/form"
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors text-center shadow-lg"
              >
                Start Now
              </Link>
              <a
                href="https://notary.im"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors text-center shadow-lg"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Support</span>
              </a>
            </div>

            {/* Enhanced transparency notice */}
            <div className="bg-yellow-500/20 border border-yellow-300/50 rounded-2xl p-5 mb-4">
              <div className="flex items-center justify-center gap-3">
                <span className="text-yellow-300 text-2xl">⚠️</span>
                <span className="text-white font-bold text-lg">
                  Private service • NOT government • Compare options before choosing
                </span>
              </div>
            </div>

            {/* Enhanced Foreign Signers Notice */}
            <div className="bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl p-5 border border-orange-300 shadow-lg">
              <div className="flex items-center justify-center gap-3">
                <span className="text-white text-2xl">🌍</span>
                <span className="text-white font-bold text-xl">
                  Foreign signers welcome • No Social Security Number required
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/zAj1vU1QOj8"
                title="Florida Apostille Services - Powered by Notary Geek"
                frameBorder="0"
                allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;