import React from "react";
import { Link } from "react-router-dom";
import HeroButtons from "./HeroButtons";

const Hero = () => {
  return (
    <div class="bg-white h-screen flex flex-col justify-center text-center">
      <h1 class="lg:text-9xl md:text-7xl sm:text-5xl text-center text-3xl font-black mb-14">
        Isaac Graveley. Tetsing
      </h1>
      <h2 class="lg:text-5xl md:text-3xl sm:text-xl text-center text-xl font-black mb-14">
        Front-End Developer in Toronto, Ontario.
        <br />
        Working with React.JS and other fun stuff.
      </h2>
      <h3 className="pb-12">
        Please note: Website Started Construction August 1st, 2021 and is not
        complete. Projects listed are just placeholders.
      </h3>
      <div class="flex justify-center items-center">
        <HeroButtons title={"View My Projects"} linkName={"#projects"} />
        <HeroButtons title={"Contact Me"} className="bg-white border-red-500" />
      </div>

      <Link></Link>
    </div>
  );
};

export default Hero;
