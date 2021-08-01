import React from "react";
import Project from "../components/Project";
const Projects = () => {
  return (
    <div>
      <div className="block lg:flex lg:justify-around mx-auto lg:items-center">
        <Project
          title={"hello"}
          description={"description"}
          skills={"react"}
          link={"./about.js"}
        />
        <Project
          title={"hello"}
          description={"description"}
          skills={"react"}
          link={"./about.js"}
        />
        <Project
          title={"hello"}
          description={"description"}
          skills={"react"}
          link={"./about.js"}
        />
      </div>
      <a name="projects"></a>
    </div>
  );
};

export default Projects;

// {props.title}
// {props.description}
// {props.skills}
// {props.link}
