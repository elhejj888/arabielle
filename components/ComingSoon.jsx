import React from 'react';

const OrnamentalFlourish = ({ className }) => (
  <div className={`flex items-center justify-center my-4 ${className}`}>
    <div className="h-px w-20 bg-desert-border"></div>
    <div className="px-2">
      <svg viewBox="0 0 60 20" className="w-12 h-6 fill-desert-border">
        <path d="M30,2 C32,5 36,8 42,8 C48,8 52,5 54,2 C56,-1 58,3 60,5 M30,2 C28,5 24,8 18,8 C12,8 8,5 6,2 C4,-1 2,3 0,5 M30,1 C30,1 32,0 30,3 C28,0 30,1 30,1 Z" />
      </svg>
    </div>
    <div className="h-px w-20 bg-desert-border"></div>
  </div>
);

const ComingSoon = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
      {/* Top Ornamental Flourish */}
      <OrnamentalFlourish className="mb-6" />
      
      {/* Arabielle Script Logo */}
      <h1 className="font-script text-7xl md:text-9xl text-desert-border mb-2">
        Arabielle
      </h1>
      
      {/* Bottom Ornamental Flourish */}
      <OrnamentalFlourish className="mt-0 mb-8" />
      
      {/* Arabielle Serif Text */}
      <h2 className="font-serif uppercase tracking-widest text-xl md:text-2xl text-gray-800 mb-2">
        Arabielle
      </h2>
      
      {/* Luxury Handbags Text */}
      <p className="font-serif uppercase tracking-wider text-sm md:text-base text-gray-600 mb-12">
        Luxury Handbags
      </p>
      
      {/* Coming Soon */}
      <div className="mt-8">
        <p className="text-lg md:text-xl uppercase tracking-widest text-desert-dark mb-8">
          Coming Soon
        </p>
        
        {/* Email Subscription Form */}
        <div className="max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="px-4 py-2 border border-sand-400 bg-sand-50 focus:outline-none focus:ring-1 focus:ring-desert-border"
              required
            />
            <button 
              type="submit" 
              className="px-6 py-2 bg-desert-border text-white uppercase tracking-wider text-sm hover:bg-sand-500 transition-colors"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
      
      {/* Desert Silhouettes - Camels and Woman */}
      <div className="absolute bottom-12 w-full max-w-xl mx-auto opacity-70">
        <div className="relative h-24">
          {/* First Camel */}
          <div className="absolute left-1/4 bottom-0">
            <svg width="40" height="40" viewBox="0 0 100 100" className="fill-sand-400">
              <path d="M20,80 C20,75 30,70 35,70 C40,70 45,75 48,80 C51,85 55,80 58,75 C61,70 65,80 70,80 C75,80 80,70 82,75 C85,80 90,75 95,80 L90,85 C85,90 80,85 75,80 C70,75 65,80 60,85 C55,90 50,85 45,80 C40,75 35,80 30,85 L20,80 Z M50,80 L45,60 L42,50 L40,60 L45,75 M75,80 L70,60 L65,55 L65,70" />
            </svg>
          </div>
          
          {/* Second Camel */}
          <div className="absolute right-1/4 bottom-0">
            <svg width="40" height="40" viewBox="0 0 100 100" className="fill-sand-400">
              <path d="M20,80 C20,75 30,70 35,70 C40,70 45,75 48,80 C51,85 55,80 58,75 C61,70 65,80 70,80 C75,80 80,70 82,75 C85,80 90,75 95,80 L90,85 C85,90 80,85 75,80 C70,75 65,80 60,85 C55,90 50,85 45,80 C40,75 35,80 30,85 L20,80 Z M50,80 L45,60 L42,50 L40,60 L45,75 M75,80 L70,60 L65,55 L65,70" />
            </svg>
          </div>
          
          {/* Woman in Traditional Attire */}
          <div className="absolute right-20 bottom-0">
            <svg width="24" height="40" viewBox="0 0 60 100" className="fill-desert-dark">
              <path d="M30,20 A10,10 0 1,0 30,0 A10,10 0 1,0 30,20 Z M20,30 C20,25 25,20 30,20 C35,20 40,25 40,30 L40,50 C40,55 30,60 30,70 C30,80 25,90 25,100 L35,100 C35,90 40,80 40,70 C40,60 30,55 30,50 L30,30" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;