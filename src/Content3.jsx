import React from "react";
import { Award, CheckCircle, Users, CircleArrowRight } from "lucide-react";

const Content3 = () => {
  return (
    <div className="flex flex-row mb-10">
      <div className="bg-yellow-300 text-black w-1/2 px-12 py-10 pb-20">
        <span className="font-bold text-3xl ">
          We Help You Build On Your Past And <br />
          Prepare For Your Future
        </span>
        <br />
        <br />
        <span className="text-[14px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          reiciendis harum eum qui recusandae commodi earum suscipit, libero
          tempore molestias!
        </span>
        <div className="flex flex-row justify-between py-10 text-center">
          <div className="bg-white text-black px-4 py-4 font-bold w-45 text-[14px] flex flex-col items-center justify-center gap-2 rounded">
            <Award className="w-10 h-10" />
            Where Integrity Meets Excellence
          </div>
          <div className="bg-white text-black px-4 py-4 font-bold w-45 text-[14px] flex flex-col items-center justify-center gap-2 rounded">
            <CheckCircle className="w-10 h-10" />
            Quality Control System
          </div>
          <div className="bg-white text-black px-4 py-4 font-bold w-45 text-[14px] flex flex-col items-center justify-center gap-2 rounded">
            <Users className="w-10 h-10" />
            Collaborating For Success
          </div>
        </div>
        <span className="text-[14px] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          reiciendis harum eum qui recusandae commodi earum suscipit, libero
          tempore molestias!
        </span>
        <br /> <br />
        <a
          href="#"
          className="bg-black rounded text-white px-4 py-4 inline-flex items-center gap-x-2"
        >
          <CircleArrowRight />
          Know More
        </a>
      </div>
      <div className="bg-[url('image4.png')] bg-cover bg-center w-1/2 h-auto"></div>
    </div>
  );
};

export default Content3;
