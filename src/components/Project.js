import React from "react";

const Project = (props) => {
  return (
    <a href={props.link}>
      {props.linkName}
      <div class="border">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.skills}</p>
      </div>
    </a>
  );
};

export default Project;
