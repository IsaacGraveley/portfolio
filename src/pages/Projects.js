import React from "react";
import Project from "../components/Project";
const Projects = () => {
  return (
    <div className="pb-24">
      <div className="flex flex-col justify-center items-center md:flex-row">
        <Project
          imageLink={
            "https://cdn.dribbble.com/users/4208985/screenshots/15542674/media/da8804abbeded430b78cf80583cf5067.png?compress=1&resize=1200x900"
          }
          imageAlt={"a mockup of a task management app"}
          title={"Task Management App"}
          description={
            "Web App that allows you to view tiered content, requiring authentication. Allows users to leave comments below certain videos as well. "
          }
          skills={"React, Firebase"}
          link={"./about.js"}
        />
        <Project
          title={"eCommerce Store"}
          description={
            "Built an ecommerce store, complete with cart functionality, email capture popups, filtering, and stripe checkout"
          }
          skills={"React, Stripe API"}
          link={"./about.js"}
          imageLink={
            "https://cdn.dribbble.com/users/3550736/screenshots/15848860/media/74bc70659511fd4169f64ed424b42665.jpg?compress=1&resize=1200x900"
          }
          imageAlt={"eCommerce store"}
        />
        <Project
          title={"Course App"}
          description={
            "Web App that allows you to view tiered content, requiring authentication. Allows users to leave comments below certain videos as well."
          }
          skills={"React, Courseify"}
          link={"./about.js"}
          imageLink={
            "https://cdn.dribbble.com/users/1343196/screenshots/13970654/media/4df534fafdbe09025b8620a5295cda7a.png"
          }
          imageAlt={"course app"}
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
