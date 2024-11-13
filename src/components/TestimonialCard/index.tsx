import React from "react";

interface TestimonialCardProps {
  avatarSrc: string;
  name: string;
  role: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatarSrc,
  name,
  role,
  quote,
}) => {
  return (
    <div className="px-6 py-8 bg-[#151515]/40 rounded-3xl backdrop-blur-[30px] flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <img className="w-12 h-12 rounded-full" src={avatarSrc} alt={name} />
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-medium">{name}</h3>
            <p className="text-xs">{role}</p>
          </div>
        </div>
        <img src="/public/icons/small-quote.svg" alt="quote" />
      </div>
      <div>{quote}</div>
    </div>
  );
};

export default TestimonialCard;
