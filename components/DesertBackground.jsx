import React from 'react';

const DesertBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Desert Mountains */}
      <div className="absolute inset-x-0 top-0 h-full">
        <div className="absolute left-0 right-0 h-64 md:h-96 bg-sand-200 opacity-30 rounded-full -top-32 md:-top-48 scale-x-150"></div>
        <div className="absolute left-1/4 right-0 h-64 md:h-80 bg-sand-100 opacity-30 rounded-full -top-20 md:-top-36 scale-x-125"></div>
      </div>
      
      {/* Desert Dunes */}
      <div className="absolute inset-x-0 bottom-0 h-full">
        <div className="absolute left-0 right-0 h-64 desert-gradient opacity-50 rounded-tl-full rounded-tr-full bottom-0"></div>
        <div className="absolute left-0 right-0 h-48 desert-gradient opacity-60 rounded-tl-full rounded-tr-full bottom-0 scale-x-125"></div>
        <div className="absolute left-0 right-0 h-32 desert-gradient opacity-70 rounded-tl-full rounded-tr-full bottom-0 scale-x-150"></div>
      </div>
      
      {/* Clouds */}
      <div className="absolute top-20 left-10 w-32 h-6 bg-sand-100 opacity-30 rounded-full"></div>
      <div className="absolute top-16 right-16 w-40 h-8 bg-sand-100 opacity-30 rounded-full"></div>
      <div className="absolute top-32 left-1/3 w-36 h-7 bg-sand-100 opacity-30 rounded-full"></div>
      
      {/* Border */}
      <div className="absolute inset-0 border-2 border-desert-border m-4 md:m-8 pointer-events-none"></div>
    </div>
  );
};

export default DesertBackground;