import Image from "next/image";
import React from "react";

const Middle = () => {
  return (
    <div className="flex items-center flex-wrap justify-center bg-[#EAE8E1] w-full h-full p-10 pb-15">
      <div className="bg-[#F4F1EF] w-full h-full box rounded-[60px] flex flex-col gap-5 items-center p-8">
        <span className="font-denton text-[60px] hor-grad">
          Our Partners Hire us for
        </span>
        <div className="flex gap-5 mt-5">
          <div className="tab flex items-center justify-center px-[24px] py-[20px] gap-2 rounded-2xl">
            <Image
              src="/images/video-circle.png"
              width={500}
              height={500}
              alt=""
              className="w-[22px] h-[22px] "
            />
            <span className="font-gilroy font-bold text-white">
              Short form video editing
            </span>
          </div>
          <div className="flex items-center justify-center px-[24px] py-[20px] gap-2 rounded-2xl border border-black">
            <span className="font-gilroy font-medium">
              Long form video editing
            </span>
          </div>
          <div className="flex items-center justify-center px-[24px] py-[20px] gap-2 rounded-2xl border border-black">
            <span className="font-gilroy font-medium">
              YouTube Channel Management
            </span>
          </div>
          <div className="flex items-center justify-center px-[24px] py-[20px] gap-2 rounded-2xl border border-black">
            <span className="font-gilroy font-medium">Content Research</span>
          </div>
        </div>

        <div className="bg-[#f4f1ef] flex justify-center p-10 mx-5 gap-10 mt-4 rounded-[50px]">
          <div className="flex flex-col gap-10 flex-1 mx-3">
            <h2 className="font-denton text-[32px] heading">
              Short-Form Vertical
              <br /> Video Editing
            </h2>
            <div className="flex flex-col font-gilroy font-light gap-4">
              <span className="">
                TikTok, Reels and YouTube Shorts have taken the world by storm,
                and can grow your reach faster than ever. growth.
              </span>
              <span>
                We identify high virality potential moments from your long-form
                content, and edit them into short-form clips to boost your
              </span>
            </div>
          </div>

          <div className="info-card relative">
            <div className="flex">
              <Image
                src="/images/pass.png"
                width={1710}
                height={3010}
                alt=""
                className="w-[50%] h-[90%] absolute top-[50px] left-[10px] rotate-[-13deg]"
              />

              <Image
                src="/images/pass.png"
                width={1710}
                height={3010}
                alt=""
                className="w-[50%] h-[90%] absolute top-[50px] right-[10px] rotate-[13deg]"
              />
              <Image
                src="/images/pass.png"
                width={1710}
                height={3010}
                alt=""
                className="w-[55%] h-[100%] absolute top-[10px] left-[118px] z-1000"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
