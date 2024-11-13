import { FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import Button from "../Button";
import { TbCircleArrowUpRight } from "react-icons/tb";

const Hero = () => {
  return (
    <div className="relative bg-hero-pattern flex flex-col gap-4 items-center bg-no-repeat justify-center bg-contain p-20 pb-3 pt-40">
      <div className="relative z-10 flex flex-col justify-center items-center">
        <div className="flex items-center gap-3">
          <GrInstagram size={24} />
          <FaWhatsapp size={24} />
          <FaLinkedinIn size={24} />
          <FaTwitter size={24} />
        </div>
        <h5 className="text-custom-105 text-center gradient-text">
          Amazing website creation with Bantu agency
        </h5>
        <div className="flex flex-col justify-center items-center gap-7">
          <p>
            help you to build website company that is modern, user friendly,
            good CEO, and Clean design
          </p>
          <Button
            text="Get Started"
            icon={<TbCircleArrowUpRight color="black" size={24} />}
          />
        </div>
        <div className="absolute top-8 right-0 w-1/3 h-1/4 bg-[#854CFF] rounded-full blur-[200px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/4 bg-[#504CFF]  blur-[100px] pointer-events-none"></div>
      </div>
      <img src="/home/scroll-icon.svg" alt="Scroll Icon" />
    </div>
  );
};

export default Hero;
