import { useRef } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = ["/image4.png", "/image4.png", "/image4.png", "/image4.png"];

const ProjectsSection = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "20%",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "5%",
        },
      },
    ],
    customPaging: (i) => (
      <div className="w-4 h-1 bg-gray-800 rounded-xl hover:bg-yellow-500 transition-all"></div>
    ),
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center mt-6 space-x-3">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="relative w-full text-center mx-auto py-10">
      <span className="text-[14px] text-yellow-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
      <br />
      <br />
      <h2 className="text-center text-3xl font-bold text-black mb-6">
        Explore Our Projects
      </h2>
      <div className="relative w-full text-center mx-auto py-10">
        <Slider ref={sliderRef} {...settings}>
          {images.map((src, idx) => (
            <div key={idx} className="px-2">
              <img
                src={src}
                alt={`Project ${idx + 1}`}
                className="rounded-sm w-full h-[50svh] object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* Navigation Arrows */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-400 rounded-full p-2 z-10"
        >
          <ChevronLeft className="text-black w-5 h-5" />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-400 rounded-full p-2 z-10"
        >
          <ChevronRight className="text-black w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsSection;
