import React, { useRef } from "react";
import Slider from "react-slick";
import { CircleArrowRight } from "lucide-react";
import { CircleCheck, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = ["/image4.png", "/image4.png", "/image4.png", "/image4.png"];

const HeroContent = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "0px", // Use 0 if you want full width images
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    customPaging: () => (
      <div className="w-4 h-1 bg-gray-800 rounded-xl hover:bg-yellow-500 transition-all"></div>
    ),
    appendDots: (dots) => (
  <div className="absolute bottom-6 w-full flex justify-center z-30">
    <ul className="flex space-x-3">{dots}</ul>
  </div>
)
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[600px] object-cover"
            />
          </div>
        ))}
      </Slider>


      {/* Arrows */}
      <button
        onClick={() => sliderRef.current.slickPrev()}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-400 rounded-full p-2 z-20"
      >
        <ChevronLeft className="text-black w-5 h-5" />
      </button>
      <button
        onClick={() => sliderRef.current.slickNext()}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-400 rounded-full p-2 z-20"
      >
        <ChevronRight className="text-black w-5 h-5" />
      </button>

      {/* Content Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-20 px-6 md:px-20 flex flex-col justify-center text-white font-bold">
        <h1 className="text-4xl md:text-5xl mb-6">
          Your Vision,<br />Our Expertise
        </h1>
        <p className='mb-2 flex items-center space-x-2'>
          <CircleCheck className="w-5 h-5 fill-amber-300 text-black" />
          Quality Control System, Satisfaction Guarantee
        </p>
        <p className='mb-2 flex items-center space-x-2'>
          <CircleCheck className="w-5 h-5 fill-amber-300 text-black" />
          Highly Professional Staff, Accurate Testing
        </p>
        <p className='mb-6 flex items-center space-x-2'>
          <CircleCheck className="w-5 h-5 fill-amber-300 text-black" />
          Unrivalled, Professional and Qualified
        </p>

        <div className="flex justify-start w-fit">
  <a
    href="#"
    className=" flex gap-x-2 rounded-md border border-black px-6 py-3 text-black bg-amber-300 text-base font-semibold hover:bg-amber-200 transition"
  >
    <CircleArrowRight className="fill-white" />
    Know More
  </a>
</div>

      </div>
    </div>
  );
};

export default HeroContent;
