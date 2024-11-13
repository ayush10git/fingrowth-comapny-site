import Image from "next/image";
import React from "react";

const TestimonialCard = () => {
  return (
    <div className="bg-[#F4F1EF] min-w-[288px] h-[330px] p-[24px] rounded-[20px] flex flex-col justify-between gap-2">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Image
            src="/images/like-icon.png"
            width={2000}
            height={2000}
            alt=""
            className="w-5 h-5"
          />
          <Image
            src="/images/like-icon.png"
            width={2000}
            height={2000}
            alt=""
            className="w-5 h-5"
          />
          <Image
            src="/images/like-icon.png"
            width={2000}
            height={2000}
            alt=""
            className="w-5 h-5"
          />
          <Image
            src="/images/like-icon.png"
            width={2000}
            height={2000}
            alt=""
            className="w-5 h-5"
          />
        </div>
        <Image
          src="/images/test-icon.png"
          width={2000}
          height={2000}
          alt=""
          className="w-7 h-7"
        />
      </div>
      <div className="font-gilroy font-light flex flex-col gap-5 text-[14px]">
        <span>Our customers are loving the new designs made by Fingrowth.</span>
        <span>
          It has been a true game-changer for us to acquire & retain more
          customers.
        </span>
      </div>
      <hr />
      <div className="flex items-center gap-2">
        <Image
          src="/images/photo.png"
          width={2000}
          height={2000}
          className="w-10 h-10"
          alt=""
        />
        <div className="flex flex-col">
          <span className="font-gilroy font-semibold text-[14px]">Himanshu Potdar</span>
          <span className="font-gilroy font-light text-[12px]">Founder, One Finance</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
