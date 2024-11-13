import { TbArrowUpRight } from "react-icons/tb";
import Button from "../Button";

const LetsWork = () => {
  return (
    <div className="flex justify-between items-center border-t-2 border-b-[1px] border-[#635189] p-24 relative">
      <div className="flex flex-col items-start gap-6 w-1/2">
        <h3 className="font-normal text-6xl gradient-text">
          Let’s work with Us
        </h3>
        <p className="text-base">
          Mangcoding is a biggest company in Indonesia, who provides the
          services in Development Website, Shopify and Wordpress
        </p>
      </div>
      <Button text="Know More" icon={<TbArrowUpRight size={24} />} />
    </div>
  );
};

export default LetsWork;
