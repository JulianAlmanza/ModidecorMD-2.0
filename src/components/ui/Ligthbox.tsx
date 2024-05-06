import React from "react";

const Ligthbox = (src: string, alt: string, name: string) => {
  return (
    <div className="absolute h-screen w-screen bg-black/70">
      <img src={src} alt={alt} />
      <h3>{name}</h3>
    </div>
  );
};

export default Ligthbox;
