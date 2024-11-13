import Hero from "../../components/Hero-Section";
import LetsWork from "../../components/Work-Section";
import Testimonials from "../../components/Testimonial-Section";
import ServicesSection from "../../components/Services-Section";
import Banner from "../../components/Banner";
import Projects from "../../components/Projects-Section";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Banner />
      <Projects />
      <Testimonials />
      <LetsWork />
    </>
  );
};

export default Home;
