import Button from "../Button";
import { TbCircleArrowUpRight } from "react-icons/tb";
import ProjectCard from "../ProjectCard";
import { ProjectsData } from "../data";

const Projects = () => {
  return (
    <div className="p-[120px] flex flex-col gap-10">
      <div className="flex justify-between items-end">
        <div className=" w-[500px] flex-col justify-start items-start gap-5 inline-flex">
          <div className="gradient-text text-6xl">Our Products</div>
          <div className=" text-white leading-7">
            help you to build website company that is modern, user friendly,
            good CEO, and Clean design
          </div>
        </div>
        <Button
          text="All Portfollio"
          icon={<TbCircleArrowUpRight size={24} />}
        />
      </div>
      <div className="relative grid grid-cols-2 gap-x-6 gap-y-8">
        {ProjectsData.map((project, index) => (
          <ProjectCard
            key={index}
            className={
              index === 0 || index === 1 ? "border-b border-[#635189]" : ""
            }
            cardDesc={project.cardDesc}
            title={project.title}
            description={project.description}
            tag={project.tag}
            imageSrc={project.imageSrc}
          />
        ))}
        <div className="w-1/4 h-[287px] bg-[#854cff]/60 blur-[150px] absolute -top-36 -left-40" />
        <div className="w-1/4 h-[287px] bg-[#504cff]/60 blur-[100px] absolute -bottom-16 right-0" />
      </div>
    </div>
  );
};

export default Projects;
