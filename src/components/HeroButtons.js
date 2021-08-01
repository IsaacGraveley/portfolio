import React from "react";

const HeroButtons = (props) => {
  return (
    <button className="bg-pink-600 inline-block text-white px-6 py-2 rounded mx-4 border hover:bg-white hover:text-pink-600 border-pink-600 min-w-max w-1/12">
      <a href={props.linkName}>{props.title}</a>
    </button>
  );
};

export default HeroButtons;
