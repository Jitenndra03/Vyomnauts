import React from "react";
const AboutUs = () => {
  return (<>
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col items-center p-6">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="./intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative mt-10 mb-6 text-center z-10">
        <h1 className="text-4xl font-bold mb-4 transition-all duration-500 ease-in-out transform hover:scale-105">
          About Us
        </h1>
        <p className="max-w-2xl mx-auto text-lg">
          Welcome to the Vyomnauts Club! We are a group of passionate space
          enthusiasts dedicated to exploring the wonders of the cosmos. Our
          mission is to foster interest in space technology through engaging
          events, educational programs, and collaborative projects.
        </p>
      </div>
      <div className="relative flex flex-wrap justify-center mt-8 z-10">
        <div className="p-4 max-w-xs">
          <img
            src="/team.png"
            alt="Club Members"
            className="rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
          />
          <h2 className="text-2xl font-semibold mt-4">Our Mission</h2>
          <p>
            To inspire and educate the next generation of space enthusiasts by
            providing hands-on experience with cutting-edge space technology.
          </p>
        </div>
        <div className="p-4 max-w-xs">
          <img
            src="/tech.png"
            alt="Space Technology"
            className="rounded-lg shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
          />
          <h2 className="text-2xl font-semibold mt-4">Our Vision</h2>
          <p>
            To become a leading hub for space exploration and innovation,
            connecting like-minded individuals across the globe.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutUs;
