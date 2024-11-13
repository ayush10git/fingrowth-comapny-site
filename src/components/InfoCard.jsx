import Image from "next/image";
import React from "react";

const InfoCard = () => {
  return (
    <div className="bg-[#F4F1EF] flex p-7 items-center gap-4 rounded-2xl h-[169px]">
      <div className="bg-[#EAE8E1] p-6 rounded-3xl min-w-[64px] h-[64px] flex items-center justify-center">
        <Image
          width={300}
          height={300}
          alt=""
          src="/images/flash.png"
          className="w-5 h-5"
        />
      </div>
      <div className="flex flex-col flex-wrap gap-3">
        <h3 className="font-gilroy font-bold">Superfast Designs</h3>
        <span className="font-gilroy font-light">
          Fast doesn’t mean cheap. Due to our unique experience in Fintech &
          structured process, we know exactly what you want & deliver it to you
          fast.
        </span>
      </div>
    </div>
  );
};

export default InfoCard;
