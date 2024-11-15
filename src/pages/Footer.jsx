import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#EAE8E1] py-[4rem] flex flex-col gap-8 px-4 sm:px-8 lg:px-[120px]">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-[36px] xl:text-[60px] lg:text-[54px] md:text-[48px] sm:text-[38px] font-denton hor-grad">
          Tell us about your project
        </h1>
        <span className="font-gilroy text-[20px]">
          We only onboard two clients per month due to the personalized nature
          of our work.
        </span>

        <button className="btn flex items-center justify-center gap-1 w-[274px] h-[73px] px-[32px] py-[20px] text-white text-[20px] rounded-full mr-4 mt-10">
          <span>Book a demo </span>-{" "}
          <i className="font-thin font-gilroy">it's Free</i>
        </button>
      </div>

      <div className="flex items-center justify-around mt-[5rem]">
        <div className="flex items-center justify-between md:w-[224px] sm:w-[160px] border border-b-black border-opacity-30 py-3">
          <div className="flex gap-2 items-center">
            <Image
              width={1000}
              height={1000}
              src="/images/linkedin.png"
              alt="linkedin-logo"
              className="md:h-8 md:w-8 sm:w-6 sm:h-6 xs:w-5 xs:h-5"
            />
            <span className="font-gilroy md:text-[24px] font-light xs:text-[14px] sm:text-[18px]">LinkedIn</span>
          </div>
          <Image
            width={500}
            height={500}
            src="/images/arrow-right.png"
            alt="arrow-right"
            className="h-8 w-8 xs:hidden sm:hidden md:block"
          />
        </div>
        <div className="flex items-center justify-between md:w-[224px] sm:w-[160px] border border-b-black border-opacity-30 py-3">
          <div className="flex gap-2 items-center">
            <Image
              width={1000}
              height={1000}
              src="/images/twitter.png"
              alt="linkedin-logo"
              className="md:h-8 md:w-8 sm:w-6 sm:h-6 xs:w-5 xs:h-5"
            />
            <span className="font-gilroy md:text-[24px] font-light xs:text-[14px] sm:text-[18px]">Twitter</span>
          </div>
          <Image
            width={500}
            height={500}
            src="/images/arrow-right.png"
            alt="arrow-right"
            className="h-8 w-8 xs:hidden sm:hidden md:block"
          />
        </div>
        <div className="flex items-center justify-between md:w-[224px] sm:w-[160px] border border-b-black border-opacity-30 py-3">
          <div className="flex gap-2 items-center">
            <Image
              width={1000}
              height={1000}
              src="/images/instagram.png"
              alt="linkedin-logo"
              className="md:h-8 md:w-8 sm:w-6 sm:h-6 xs:w-5 xs:h-5"
            />
            <span className="font-gilroy md:text-[24px] font-light xs:text-[14px] sm:text-[18px]">
              Instagram
            </span>
          </div>
          <Image
            width={500}
            height={500}
            src="/images/arrow-right.png"
            alt="arrow-right"
            className="h-8 w-8 xs:hidden sm:hidden md:block"
          />
        </div>
      </div>
      <span className="text-center md:text-[20px] text-gray-500 font-light font-gilroy sm:text-[12px] xs:text-[12px]">
        Fingrowthmedia © 2024. Contact at kanan@fingrowthmedia.com
      </span>
    </div>
  );
};

export default Footer;
