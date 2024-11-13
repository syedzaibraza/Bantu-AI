import { TbArrowUpRight } from "react-icons/tb";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  image: string;
  className: string;
  iconStyle: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  image,
  className,
  iconStyle,
}) => {
  return (
    <div className={`${className} pl-8 pt-10 rounded-3xl flex justify-between`}>
      <div className="flex flex-col items-start justify-start gap-6 w-1/2">
        <div className={`${iconStyle} w-fit rounded-full p-3 `}>
          {typeof icon === "string" ? (
            <img src={icon} className="w-9 h-9" />
          ) : (
            icon
          )}
        </div>
        <div className="flex flex-col items-start justify-start gap-4">
          <h3 className="font-medium text-3xl">{title}</h3>
          <p>{description}</p>
          <button className="underline flex items-center gap-1">
            Start with us
            <TbArrowUpRight size={24} color="white" />
          </button>
        </div>
      </div>
      <img
        src={image}
        alt={title}
        className="object-contain object-right-bottom w-1/2 h-[338px] rounded-br-3xl"
      />
    </div>
  );
};

export default ServiceCard;
