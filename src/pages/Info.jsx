import InfoCard from "@/components/InfoCard";
import React from "react";

const Info = () => {
  return (
    <div className="bg-[#EAE8E1] px-4 sm:px-8 md:px-12 lg:px-[120px] flex flex-col gap-4 py-10">
      <h1 className="text-center text-[36px] xl:text-[60px] lg:text-[54px] md:text-[48px] sm:text-[38px] font-denton hor-grad">
        Things You Can Never Go Back From
      </h1>
      <span className="text-[22px] font-gilroy font-light text-center -mt-3 mb-5">
        We not only provide a premium user experience to your customers but also
        to our clients.
      </span>
      <div className="flex flex-col sm:flex-col lg:flex-row gap-4">
        <div className="w-full lg:basis-[60%]">
          <InfoCard />
        </div>
        <div className="w-full lg:basis-[40%]">
          <InfoCard />
        </div>
      </div>
      <div className="flex flex-col sm:flex-col lg:flex-row gap-4">
        <div className="w-full lg:basis-[40%]">
          <InfoCard />
        </div>
        <div className="w-full lg:basis-[60%]">
          <InfoCard />
        </div>
      </div>
      <div className="flex flex-col sm:flex-col lg:flex-row gap-4">
        <div className="w-full lg:basis-[60%]">
          <InfoCard />
        </div>
        <div className="w-full lg:basis-[40%]">
          <InfoCard />
        </div>
      </div>
    </div>
  );
};

export default Info;
