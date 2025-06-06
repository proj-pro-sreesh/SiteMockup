import React from "react";
import { CircleArrowRight } from "lucide-react";
const HeroContent4 = () => {
  return (
    <div className="flex flex-col w-full items-center text-center ">
      <span className="text-[14px] text-yellow-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
      <br/><br/>
      <span className="text-3xl font-bold">
        Our Services Beyond Expectations
      </span>
      <div className="flex flex-row justify-between m-10 w-2/3">
        <div className="text-left text-[14px] w-1/3 rounded-md shadow-lg px-6 pt-8 mx-3 hover:scale-[1.1] transition-all flex justify-end flex-col">
          <span className="font-bold text-2xl ">
            Architectural
            <br /> Design
          </span>
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat.
          <br />
          <br />
          <a href="#" className="text-black inline-flex items-center gap-x-2 ">
            <CircleArrowRight className="fill-yellow-300" />
            Read More
          </a>
          <br />
          <br />
          <div className="-mx-6">
            <img src="image5.png" className="w-full h-auto object-cover "></img>
          </div>
        </div>
        <div className="text-left text-[14px] w-1/3 rounded-md shadow-lg px-6 pt-8 mx-3 hover:scale-[1.1] transition-all flex justify-end flex-col">
          <span className="font-bold text-2xl ">
            Structural
            <br /> Engineering
          </span>
          <br />
          <br />
          Pulvinar vivamus fringilla lacus nec Ut hendrerit semper vel class
          aptent metus bibendum egestas. laculis massa taciti sociosqu. <br />
          <br />
          <a href="#" className="text-black inline-flex items-center gap-x-2 ">
            <CircleArrowRight className="fill-yellow-300" />
            Read More
          </a>
          <br />
          <br />
          <div className="-mx-6">
            <img src="image5.png" className="w-full h-auto object-cover "></img>
          </div>
        </div>
        <div className="text-left text-[14px] w-1/3 rounded-md shadow-lg px-6 pt-8 mx-3 hover:scale-[1.1] transition-all flex flex-col justify-end  ">
          <span className="font-bold text-2xl ">
            Steel & Rebar
            <br /> Detailing
          </span>
          <br />
          <br />
          Ad litora torquent per malesuada lacinia integer nunc posuere. conubia
          nostra inceptos himenaeos. <br />
          <br />
          <a href="#" className="text-black inline-flex items-center gap-x-2 ">
            <CircleArrowRight className="fill-yellow-300" />
            Read More
          </a>
          <br />
          <br />
          
          <div className="-mx-6">
            <img src="image5.png" className="w-full h-auto object-cover "></img>
          </div>
        </div>
      </div>
      <a
        href="#"
        className="bg-yellow-300 gap-x-2 rounded-sm flex flex-row px-4 py-4 m-10"
      >
        <CircleArrowRight className="fill-yellow-300" />
        View All
      </a>
    </div>
  );
};

export default HeroContent4;
