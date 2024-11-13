import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  tag: string;
  imageSrc: string;
  cardDesc: string;
  className: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tag,
  imageSrc,
  cardDesc,
  className,
}) => (
  <div className={`${className} flex flex-col gap-6 pb-6`}>
    <div className="flex justify-between pl-6 pt-6 bg-gradient-to-r from-[#e6daff] via-[#f6f6f6] to-[#d7d6ff] rounded-3xl">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <div className="w-fit px-2.5 py-1 border border-[#504cff] rounded-full text-[#0a0c14] text-xs font-normal">
            {tag}
          </div>
          <div className="text-[#0a0c14] text-[32px] font-medium">{title}</div>
        </div>
        <p className="text-[#494c58] text-sm leading-normal ">{cardDesc}</p>
      </div>
      {imageSrc && <img src={imageSrc} alt={title} className="h-auto" />}
    </div>
    <div className="flex flex-col gap-3">
      <div className="text-3xl font-medium text-white">{title}</div>
      <p className="text-base leading-7 text-white">{description}</p>
    </div>
  </div>
);

export default ProjectCard;
