import { FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col gap-3 relative z-10">
      <div className="flex items-start justify-around p-8">
        <div className="flex flex-col items-start gap-6 w-[30%]">
          <img src="/logo.svg" className="h-12" />
          <p className="gradient-text">
            Companies that can help you in developing your company for the
            future
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
          <div>Services</div>
          <div className="flex flex-col gap-4">
            <div>Web Development</div>
            <div>UI/UX Designer</div>
            <div>Branding</div>
            <div>Shopify</div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
          <div>Business Features</div>
          <div className="flex flex-col gap-4">
            <div>Data-Based Chatbot Training</div>
            <div>Model Fine-Tuning</div>
            <div>Sales & Customer Service Smart Agents</div>
          </div>
        </div>
      </div>
      <div className="p-6 flex w-screen items-center bg-transparent justify-around ">
        <p>© 2023 Mangcoding. All rights reserved.</p>
        <div className="flex gap-6 ">
          <Link to={"#"}>About</Link>
          <Link to={"#"}>Services</Link>
          <Link to={"#"}>Portfolio</Link>
          <Link to={"/contact-us"}>Contact Us</Link>
        </div>
        <div className="flex items-center gap-4">
          <GrInstagram size={24} />
          <FaWhatsapp size={24} />
          <FaLinkedinIn size={24} />
          <FaTwitter size={24} />
        </div>
      </div>
      <div className="absolute left-0 -top-32 w-[500px] h-[150px] bg-[#854cff]/60 blur-[150px]"></div>
      <div className="absolute right-0 bottom-1/3 w-[500px] h-[150px] bg-[#504cff]/60 blur-[120px] rounded-full"></div>
    </div>
  );
};

export default Footer;
