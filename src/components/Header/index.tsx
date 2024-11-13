import { Link } from "react-router-dom";
import Button from "../Button";
import { TbCircleArrowUpRight } from "react-icons/tb";

const Header = () => {
  return (
    <div className="p-5 flex w-screen items-center bg-transparent justify-around absolute top-0 left-0 z-10">
      <Link to={"/"}>
        <img src="/logo.svg" alt="Logo" className="h-12" />
      </Link>
      <div className="flex gap-8 ">
        <Link to={"#"}>About</Link>
        <Link to={"#"}>Services</Link>
        <Link to={"#"}>Portfolio</Link>
        <Link to={"/contact-us"}>Contact Us</Link>
      </div>
      <Button
        text={"Get Started"}
        url={"#"}
        background="bg-transparent"
        icon={<TbCircleArrowUpRight color="white" size={24} />}
      />
    </div>
  );
};

export default Header;
