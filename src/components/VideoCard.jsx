import Image from "next/image";
import React from "react";

const VideoCard = ({image, title}) => {
  return (
    <div className="bg-[#F4F1EF] p-5 flex flex-col gap-4 sm:w-full md:w-[660px] xs:w-full rounded-3xl">
      <Image
        src={image}
        className="w-full"
        width={2000}
        height={2000}
        alt=""
      />
      <span className="font-gilroy font-bold text-[18px]">
        {title}
      </span>
      <div className="flex items-center justify-center gap-2 border-b-2 border-[#32325D] w-[203px] p-1">
      <Image
        src="/images/yt-icon.png"
        className="w-[20px] h-[16px]"
        width={2000}
        height={2000}
        alt=""
      />
      <span className="font-gilroy font-semibold text-[16px]">Watch it on YouTube</span>
      </div>
    </div>
  );
};

export default VideoCard;
