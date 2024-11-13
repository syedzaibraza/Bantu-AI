import { ReactNode } from "react";
import { BsGlobe } from "react-icons/bs";
import { FaTags } from "react-icons/fa6";

interface ServiceCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  image: string;
  className: string;
  iconStyle: string;
}

export const serviceCardsData: ServiceCardProps[] = [
  {
    icon: <BsGlobe size={36} color="white" />,
    title: "Website Development",
    description:
      "help you to build website company that is modern, user friendly, good CEO, and Clean design",
    image: "/home/web-dev.svg",
    className: "col-span-4 bg-[#504cff]",
    iconStyle: "bg-[#9694ff]",
  },
  {
    icon: "/icons/ui-icon.svg",
    title: "UI/UX Design",
    description:
      "help you to build website company that is modern, user friendly, good CEO, and Clean design",
    image: "/home/ui-ux.svg",
    className: "col-span-3 bg-[#151515] backdrop-blur-xl",
    iconStyle: "bg-[#737376]",
  },
  {
    icon: <FaTags size={36} color="white" />,
    title: "Digital Marketing",
    description:
      "help you to build website company that is modern, user friendly, good CEO, and Clean design",
    image: "/home/branding.svg",
    className: "col-span-3 bg-[#151515] backdrop-blur-xl",
    iconStyle: "bg-[#737376]",
  },
  {
    icon: "/icons/shopify-icon.svg",
    title: "Shopify",
    description:
      "help you to build website company that is modern, user friendly, good CEO, and Clean design",
    image: "/home/Shopify.svg",
    className: "col-span-4 bg-[#854cff]",
    iconStyle: "bg-[#b694ff]",
  },
];

interface Project {
  title: string;
  description: string;
  tag: string;
  imageSrc: string;
  cardDesc: string;
}

export const ProjectsData: Project[] = [
  {
    title: "MStore",
    description:
      "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress",
    tag: "Development Project",
    imageSrc: "/home/MS-store.svg",
    cardDesc: "Mangcoding is a biggest company in Indonesia, who provides the",
  },
  {
    title: "Beauty",
    description:
      "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress",
    tag: "Development Project",
    imageSrc: "/home/beauty.svg",
    cardDesc: "Mangcoding is a biggest company in Indonesia, who provides the",
  },
  {
    title: "Jual",
    description:
      "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress",
    tag: "Development Project",
    imageSrc: "/home/jaul.svg",
    cardDesc: "Mangcoding is a biggest company in Indonesia, who provides the",
  },
  {
    title: "MangStore",
    description:
      "Mangcoding is a biggest company in Indonesia, who provides the services in Development Website, Shopify and Wordpress",
    tag: "Development Project",
    imageSrc: "/home/mang-store.svg",
    cardDesc: "Mangcoding is a biggest company in Indonesia, who provides the",
  },
];

interface Testimonial {
  avatarSrc: string;
  name: string;
  role: string;
  quote: string;
}
export const TestimonialsData: Testimonial[] = [
  {
    avatarSrc: "/public/icons/avatar.svg",
    name: "Nugraha",
    role: "Founder of Mangcoding",
    quote:
      "Mangcoding is the biggest company in Indonesia, providing services in Website Development, Shopify, and WordPress.",
  },
  {
    avatarSrc: "/public/icons/avatar.svg",
    name: "Nugraha",
    role: "Founder of Mangcoding",
    quote:
      "Mangcoding is the biggest company in Indonesia, providing services in Website Development, Shopify, and WordPress.",
  },
  {
    avatarSrc: "/public/icons/avatar.svg",
    name: "Nugraha",
    role: "Founder of Mangcoding",
    quote:
      "Mangcoding is the biggest company in Indonesia, providing services in Website Development, Shopify, and WordPress.",
  },
  {
    avatarSrc: "/public/icons/avatar.svg",
    name: "Nugraha",
    role: "Founder of Mangcoding",
    quote:
      "Mangcoding is the biggest company in Indonesia, providing services in Website Development, Shopify, and WordPress.",
  },
  {
    avatarSrc: "/public/icons/avatar.svg",
    name: "Nugraha",
    role: "Founder of Mangcoding",
    quote:
      "Mangcoding is the biggest company in Indonesia, providing services in Website Development, Shopify, and WordPress.",
  },
  {
    avatarSrc: "/public/icons/avatar.svg",
    name: "Nugraha",
    role: "Founder of Mangcoding",
    quote:
      "Mangcoding is the biggest company in Indonesia, providing services in Website Development, Shopify, and WordPress.",
  },
];
