import React from "react";

const Project = (props) => {
  return (
    <a href={props.link}>
      {props.linkName}
      <div className="border w-96 min-w-min lg:mx-12 rounded-lg text-center pb-6 bg-gray-100 flex flex-col justify-center items-center">
        <img
          src={props.imageLink}
          alt={props.imageAlt}
          className="border rounded-t-lg"
        />
        <h3 className="text-center text-white px-6 py-2 text-xl font-bold bg-pinkred inline-block w-full rounded-b-2xl">
          {props.title}
        </h3>
        <p className="pt-4 tracking-wider text-pink-600 font-bold uppercase text-sm">
          Made with:
        </p>
        <p className="pb-1 text-xl text-black font-black">{props.skills}</p>
        <p className="pt-6 pb-8 text-gray-700 font-medium">
          {props.description}
        </p>
        <button className="bg-pinkred text-white text-xl px-6 py-1 font-bold block rounded-full mx-4 border hover:bg-pink-700 hover:text-white min-w-max w-1/12 mb-2">
          View Live
        </button>
        <button className="bg-white text-pink-600  px-4 py-1 block font-medium rounded-full mx-4 border hover:bg-pink-700 hover:text-white  min-w-max w-1/12">
          Read More
        </button>
      </div>
    </a>
  );
};

export default Project;
