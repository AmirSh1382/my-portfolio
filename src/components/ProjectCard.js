import React from "react";

const ProjectCard = ({ img, projectLink, description, features, techStack, githubLink }) => {
  return (
    <div className="bg-slate-600 border-2 border-slate-500 max-w-[420px] mx-auto p-3">
      <div className="relative">
        <img src={img} alt="project-img" className="brightness-[60%] w-full" />
        <a
          target="blank"
          href={projectLink}          
          className="inline-block absolute top-1/2 left-1/2 -translate-x-1/2 w-[60%] 
             overflow-hidden flex"
        >
          <span className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
            {projectLink}
          </span>
          <i className="bi bi-link-45deg text-lg"></i>
        </a>
      </div>
      <div className="flex flex-col gap-y-3 mt-4">
        <div>
          <span className="text-primary font-semibold">Project:</span>
          &nbsp;
          <span className="text-sm">{description}</span>
        </div>
        <div>
          <span className="text-primary font-semibold">Features:</span>
          &nbsp;
          <span className="text-sm">{features}</span>
        </div>
        <div>
          <span className="text-primary font-semibold">Tech-stack:</span>
          &nbsp;
          <span className="text-sm">{techStack}</span>
        </div>
        <a
          target="blank"
          href={githubLink}
          className="w-fit text-sm hover:bg-slate-600 border border-slate-500 mx-auto mt-2 py-2 px-10"
        >
          Github Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;