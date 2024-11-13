import TestimonialCard from "../TestimonialCard";
import { TestimonialsData } from "../data";

const Testimonials = () => {
  return (
    <div className="px-[120px] pb-[120px] bg-testimonial bg-no-repeat bg-right-top flex flex-col gap-10 relative">
      <div className=" w-1/2 flex-col justify-start items-start gap-5 inline-flex">
        <div className="gradient-text text-6xl">What they say about us</div>
        <div className="w-4/5 text-white ">
          Work in the IT field includes Web Design, UI/UX Design, Branding and
          Shopify Development
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TestimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            avatarSrc={testimonial.avatarSrc}
            name={testimonial.name}
            role={testimonial.role}
            quote={testimonial.quote}
          />
        ))}
      </div>
      <div className="w-1/5 h-[287px] bg-[#504cff]/60 blur-[160px] absolute left-0 top-10" />
      <div className="w-1/5 h-[287px] bg-[#854cff]/60 blur-[130px] absolute right-0 bottom-[20%]" />
    </div>
  );
};

export default Testimonials;
