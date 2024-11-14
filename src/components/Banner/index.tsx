const Banner = () => {
  return (
    <div className=" h-[194px] relative">
      <div className="w-full h-[139px] -left-1 top-[54.47px] absolute origin-top-left -rotate-2 bg-[#191919]"></div>
      <div className="p-9 gap-6 w-full right-0 top-0 absolute origin-top-left rotate-2 bg-[#504cff] justify-end items-center inline-flex">
        {[
          "MStore_id",
          "Mangcoding",
          "Google",
          "MStore_id",
          "Mangcoding",
          "Google",
          "MStore_id",
        ].map((icon, index) => (
          <img
            key={index}
            src={`/icons/${icon}.svg`}
            className="h-20 w-44 flex-shrink-0"
            alt={`${icon} logo`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
