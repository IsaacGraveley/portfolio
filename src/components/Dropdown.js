import React from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen ? "grid grid-rows-4 text-center items-center" : "hidden"
      }
      onClick={toggle}
    >
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
      <div class="flex justify-center items-center pt-5">
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
    </div>
  );
};

export default Dropdown;
