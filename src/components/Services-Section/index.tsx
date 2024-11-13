import Button from "../Button";
import { TbArrowUpRight, TbCircleArrowUpRight } from "react-icons/tb";
import { serviceCardsData } from "../data";
import ServiceCard from "../ServiceCard";

const ServicesSection = () => {
  return (
    <div className="p-[120px] flex flex-col gap-[140px]">
      <div className="flex flex-col gap-8">
        <div>
          <div className="float-right w-[238px]">
            <Button text="Know More" icon={<TbArrowUpRight size={24} />} />
          </div>
          <div className="gradient-text text-6xl">
            Companies that can help you in developing your company for the
            future
          </div>
        </div>
        <div className="w-[486px] text-white leading-7">
          Work in the IT field includes Web Design, UI/UX Design, Branding and
          Shopify Development
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-end relative">
          <div className=" w-[500px] flex-col justify-start items-start gap-5 inline-flex">
            <div className="gradient-text text-6xl">
              Let’s work together with our us
            </div>
            <div className=" text-white leading-7">
              help you to build website company that is modern, user friendly,
              good CEO, and Clean design
            </div>
          </div>
          <Button
            text="Get Started"
            icon={<TbCircleArrowUpRight size={24} />}
          />
          <div className="w-1/4 h-[287px] bg-[#504cff]/60 blur-[150px] absolute -top-20 -left-40" />
        </div>

        <div className="grid grid-cols-7 gap-4 relative">
          {serviceCardsData.map((item, index) => (
            <ServiceCard
              className={item.className}
              iconStyle={item.iconStyle}
              icon={item.icon}
              title={item.title}
              description={item.description}
              image={item.image}
              key={index}
            />
          ))}
          <div className="w-1/4 h-[287px] bg-[#504cff]/60 blur-[150px] absolute -bottom-32 -left-40" />
          <div className="w-1/4 h-[287px] bg-[#854cff]/60 blur-[150px] absolute bottom-40 -right-40" />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
