import React from "react";

// import DesertVideo from "../public/desertBackground.mp4";

export default function About() {
  return (
    <>
       <div className="text-center h-screen bg-gradient-to-r from-orange-400 via-brown-400 to-red-400">
        <div>
        <h1 className="text-5xl text-white py-8">About Me</h1>
        <p className="absolute w-full bottom-50 pt-72 text-white text-2xl">A buncha text about myself</p>
          <video loop autoPlay muted className="w-screen pb-10">
            <source repeat src="./desertBackground.mp4" type="video/mp4" />
          </video>
        
        </div>
      </div>
    </>
  );
}
