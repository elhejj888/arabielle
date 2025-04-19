'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We'll notify ${email} when we launch our collection.`);
    setEmail("");
  };

  return (
    <div className={`relative min-h-screen bg-[#fdfaf7] flex flex-col items-center justify-between overflow-hidden transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Delicate border frame */}
      <div className="absolute inset-3 md:inset-6 border border-[#e6d5c3] pointer-events-none z-20"></div>
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fdfaf7] via-[#fdf7f1] to-[#f9f0e6] opacity-70"></div>
      
      {/* Desert scene as a gentle accent */}
      <div className="absolute top-1/4 left-0 right-0 mx-auto w-full max-w-2xl h-64 opacity-10 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/desert-scene.png"
            alt=""
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            quality={100}
          />
        </div>
      </div>
      
      {/* Main content with enhanced whitespace and feminine typography */}
      <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-3xl mx-auto px-8 pt-16 pb-24 z-10">
        {/* Refined brand presentation */}
        <div className="relative mb-16 text-center transform transition-all duration-1000 translate-y-0">
          <span className="block font-serif uppercase tracking-[0.3em] text-[#c1a173] opacity-80 mb-6 font-light text-xs md:text-sm">
            CRAFTED WITH INTENTION
          </span>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#b69067] tracking-wide mb-6">
            Arabielle
          </h1>
          
          <span className="block font-serif uppercase tracking-[0.25em] text-[#c1a173] opacity-80 font-light text-xs md:text-sm">
            HEIRLOOMS IN THE MAKING
          </span>
        </div>
        
        {/* Simple, elegant divider */}
        
        {/* Refined feminine tagline */}
        <div className="relative px-4 py-8 text-center">
        <div className="relative mb-16 max-w-lg w-full">
          <div className="absolute -left-3 -top-3 w-8 h-8 border-t border-l border-[#e6d5c3] opacity-70"></div>
          <div className="absolute -right-3 -top-3 w-8 h-8 border-t border-r border-[#e6d5c3] opacity-70"></div>
          
            <p className="font-serif text-lg md:text-2xl text-[#8c7361] tracking-wide">
              <span className="block mb-3 font-light opacity-90">For the woman who carries</span>
              <span className="block text-[#b69067] font-normal tracking-widest md:text-3xl transform transition-all duration-700 hover:scale-105">stories</span>
              <span className="block mt-3 font-light italic opacity-90">not just things.</span>
            </p>
          
          <div className="absolute -left-3 -bottom-3 w-8 h-8 border-b border-l border-[#e6d5c3] opacity-70"></div>
          <div className="absolute -right-3 -bottom-3 w-8 h-8 border-b border-r border-[#e6d5c3] opacity-70"></div>
        </div>
        </div>
        
        {/* Softer email subscription form */}
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md mb-16 space-y-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full px-6 py-4 bg-white bg-opacity-70 border-b border-[#e6d5c3] focus:border-[#c1a173] text-[#8c7361] outline-none tracking-wider text-center placeholder:text-[#c1a173]/50 placeholder:font-light"
            required
          />
          <button
            type="submit"
            className="w-full px-8 py-4 bg-[#f1e6d8] text-[#8c7361] uppercase tracking-widest text-sm hover:bg-[#e6d5c3] transition-colors duration-500 font-light"
          >
            Join the Waitlist
          </button>
        </form>
        
        {/* Gentle coming soon indication */}
        <div className="relative mb-16">
          <div className="border-t border-b border-[#e6d5c3] px-12 py-4 inline-block text-[#b69067] text-sm tracking-[0.3em] uppercase font-light">
            Coming Soon
          </div>
        </div>
      </div>

      {/* Feminine, refined footer */}
      <div className={`w-full py-6 transition-all duration-500 ease-in-out z-30 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-3xl mx-auto px-8">
          <p className="text-[#c1a173] text-xs font-light tracking-wider mb-4 md:mb-0">
            © {new Date().getFullYear()} Arabielle • All rights reserved
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-[#c1a173] hover:text-[#8c7361] transition-colors duration-300">
              <span className="sr-only">Instagram</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-[#c1a173] hover:text-[#8c7361] transition-colors duration-300">
              <span className="sr-only">Pinterest</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="text-[#c1a173] hover:text-[#8c7361] transition-colors duration-300">
              <span className="sr-only">TikTok</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}