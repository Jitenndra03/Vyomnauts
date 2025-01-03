import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className="flex relative justify-center content-center h-auto">
      <BsArrowLeftCircleFill onClick={prevSlide} className="absolute drop-shadow-[0_0_5px_rgba(85,85,85,1)] w-8 h-8 left-0 top-1/2 text-white hover:cursor-pointer" />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "" : "hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="absolute drop-shadow-[0_0_5px_rgba(85,85,85,1)] w-8 h-8 right-0 top-1/2 text-white hover:cursor-pointer"
      />
      <span className="flex absolute bottom-4">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "bg-white h-2 w-2 rounded-full border-none outline-none shadow-[0_0_5px_rgba(85,85,85,1)] mx-1 cursor-pointer" : "bg-white h-2 w-2 rounded-full border-none outline-none shadow-[0_0_5px_rgba(85,85,85,1)] mx-1 cursor-pointer bg-grey"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
