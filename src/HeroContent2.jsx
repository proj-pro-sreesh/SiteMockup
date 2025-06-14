import React from "react";
import { ShieldCheck, Landmark } from "lucide-react";

const HeroContent2 = () => {
  return (
    <section className="flex sm:flex-row flex-col md:flex-row items-center gap-12 px-6 sm:px-10 py-20 max-w-7xl mx-auto">
      {/* Left - Image with overlay box */}
      <div className="relative w-full md:w-1/2 flex justify-center sm:justify-start">
        <img
          src="image3.png"
          alt="Building"
          className="rounded-lg shadow-lg w-2/3 sm:w-3/4 md:w-full max-w-md object-cover"
        />
        <div className="absolute top-1/2 left-5/12 transform -translate-y-1/2 translate-x-6 sm:translate-x-10 bg-yellow-400 border-white p-4 sm:p-6 rounded-lg shadow-lg max-w-[160px] sm:max-w-[200px] text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">10</h2>
          <p className="text-base sm:text-lg font-semibold mt-1">Years Of Experience!</p>
          <span className="text-xl mt-2 block">→</span>
        </div>
      </div>

      {/* Right - Text content */}
      <div className="w-full md:w-1/2">
        <p className="text-sm text-yellow-600 font-semibold uppercase mb-2">
          Ut enim minim quis nostrud exercitation ullamco
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
          About SB Engineers
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-prose">
          SB Engineers is a premier engineering design firm dedicated to
          delivering comprehensive solutions for a diverse range of structural
          projects. With a strong emphasis on excellence and innovation, we
          provide unparalleled engineering design services across various
          disciplines.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-6">
          <div className="flex items-start gap-3">
            <Landmark className="text-yellow-500 w-8 h-8" />
            <div>
              <h4 className="font-bold text-base sm:text-lg">
                Visionary Solutions<br />Lasting Impact
              </h4>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck className="text-yellow-500 w-8 h-8" />
            <div>
              <h4 className="font-bold text-base sm:text-lg">
                Accurate Processes<br />Testing Guarantee
              </h4>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-prose">
          Our unwavering commitment to high-quality design and strict adherence to
          industry standards guarantees to our clients.
        </p>

        <a
          href="#"
          className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition inline-flex items-center gap-2"
        >
          → More About Us
        </a>
      </div>
    </section>
  );
};

export default HeroContent2;
