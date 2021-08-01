import React from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import AvatarComponent from "avataaars";
import { SocialIcon } from "react-social-icons";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8 flex items-center justify-center">
        <AvatarComponent
          style={{ width: "50px", height: "50px" }}
          avatarStyle="Transparent"
          topType="ShortHairShortFlat"
          accessoriesType="Blank"
          hairColor="Black"
          facialHairType="Blank"
          clotheType="Hoodie"
          clotheColor="Gray01"
          eyeType="Default"
          eyebrowType="Default"
          mouthType="Default"
          skinColor="Light"
        />
        <div class="pt-1 pl-1">
          Isaac
          <br />
          Graveley
        </div>
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div class="pr-8 md:block hidden">
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/menu">
          Projects
        </Link>
        <Link className="p-4" to="/about">
          Skills
        </Link>
        <Link className="p-4" to="/contact">
          Contact
        </Link>
        <SocialIcon
          url="https://twitter.com/Isaacgraveley"
          bgColor="#E2527A"
          className="mx-2"
          style={{ width: "30px", height: "30px" }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/isaac-graveley/"
          bgColor="#E2527A"
          className="mx-2"
          style={{ width: "30px", height: "30px" }}
        />
        <SocialIcon
          url="https://github.com/IsaacGraveley"
          bgColor="#E2527A"
          className="mx-2"
          style={{ width: "30px", height: "30px" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
