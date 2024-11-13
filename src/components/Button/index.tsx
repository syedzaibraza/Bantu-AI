import { Link } from "react-router-dom";
import React, { ReactNode } from "react";

interface ButtonProps {
  icon?: ReactNode;
  text: string;
  url?: string;
  background?: string;
}

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  url = "#",
  background,
}) => {
  return (
    <Link
      to={url}
      type="button"
      className={`${
        background ? background : "bg-white"
      } min-w-32 cursor-pointer flex gap-2 w-auto items-center justify-center rounded-full px-6 py-3.5 ${
        background && "border-2"
      } border-[#504CFF] ${background ? "text-white" : "text-black"}`}
    >
      {text}
      {icon && icon}
    </Link>
  );
};

export default Button;
