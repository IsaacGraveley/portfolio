import React from "react";

const HeroButtons = (props) => {
  return (
    <button className="bg-red-500 inline-block text-white px-6 py-2 rounded mx-4 border hover:bg-white hover:text-red-500 border-red-500">
      <a href={props.linkName}>{props.title}</a>
    </button>
  );
};

export default HeroButtons;
