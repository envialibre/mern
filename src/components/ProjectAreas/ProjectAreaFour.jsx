import React from "react";
import { Link } from "react-router-dom";
import { PROJECT_LIST_FOUR } from "../../mocks/projects";
import { ProjectAreaFourItem } from "./ProjectAreaFourItem";
import cn from "classnames";

export const ProjectAreaFour = () => {
  return (
    <section className="project-area-four">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 text-center">
            <div className="section-title section-title-three mb-50 tg-heading-subheading animation-style1">
              <h2 className="title tg-element-title">
                Our services are designed to help your business stand out and turn your ideas into digital realities.
              </h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {PROJECT_LIST_FOUR.map((project, idx) => (
            <div
              key={project.id}
              className={cn(
                [0, 1].includes(idx) ? "col-lg-6 col-md-6" : "col-lg-4 col-md-6"
              )}
            >
              <ProjectAreaFourItem project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
