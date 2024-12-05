"use client";
import Image from "next/image";
import Link from "next/link";

const Top = () => {
  return (
    <div className="flex items-center flex-wrap justify-center bg-[#EAE8E1] w-full h-full xs:p-4 sm:p-5 md:p-10 pb-20">
      <div className="bg-[#F4F1EF] w-full h-full box rounded-[60px] flex flex-col gap-4 items-center p-8">
        <div className="self-end">
          <button className="btn flex items-center justify-center gap-1 xs:w-[150px] xs:h-[35px] md:w-[200px] md:h-[45px] md:px-[32px] md:py-[20px] text-white rounded-full mr-4">
            <i className="xs:text-[11px] md:text-[14px]">
              Subscribe For Updates
            </i>
            {/* <i className="font-thin font-gilroy xs:text-[11px] md:text-[12px]">it's Free</i> */}
          </button>
        </div>
        <div className="border border-gray-400 text-[16px] px-[24px] py-[10px] rounded-full font-gilroy mt-2">
          20+ Fintech Company already trust us
        </div>
        <div className="text-center flex flex-col text-[36px] xl:text-[60px] lg:text-[54px] md:text-[48px] sm:text-[38px] font-denton heading tracking-wide">
          <span>Want to build a digital presence & grow</span>
          <span>your brand? We make social media</span>
          <span>easy for Finance brands.</span>
        </div>

        <div className="mt-10">
          <button className="btn flex items-center justify-center gap-1 w-[274px] h-[73px] px-[32px] py-[20px] text-white text-[20px] rounded-full mr-4">
            <Link href="/blogs">Read Our Blogs</Link>
            {/* <i className="font-thin font-gilroy">it's Free</i> */}
          </button>
        </div>

        <div className="flex xs:flex-col sm:flex-col md:flex-row items-center justify-between gap-10 mt-[4rem]">
          <div className="flex items-center justify-center flex-col gap-3">
            <Image
              height={200}
              width={2000}
              src="/images/video-play.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div className="flex flex-col items-center">
              <span className="font-gilroy font-bold text-lg">
                Curated Reels & Edits
              </span>
              <span className="font-gilroy text-sm">
                Stop the scroll, grab attention
              </span>
            </div>
          </div>

          <div className="w-[2px] h-[80px] separator opacity-50 xs:hidden sm:hidden md:block"></div>

          <div className="flex items-center justify-center flex-col gap-3">
            <Image
              height={200}
              width={2000}
              src="/images/image.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div className="flex flex-col items-center">
              <span className="font-gilroy font-bold text-lg">
                Engaging Posts & Carousels
              </span>
              <span className="font-gilroy text-sm">
                Spark conversations, build communities.
              </span>
            </div>
          </div>

          <div className="w-[2px] h-[80px] separator opacity-50 xs:hidden sm:hidden md:block"></div>

          <div className="flex items-center justify-center flex-col gap-3">
            <Image
              height={200}
              width={2000}
              src="/images/box.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div className="flex flex-col items-center">
              <span className="font-gilroy font-bold text-lg">
                Strategic Planning
              </span>
              <span className="font-gilroy text-sm">
                Goals that get results, not just likes.
              </span>
            </div>
          </div>

          <div className="w-[2px] h-[80px] separator opacity-50 xs:hidden sm:hidden md:block"></div>

          <div className="flex items-center justify-center flex-col gap-3">
            <Image
              height={200}
              width={2000}
              src="/images/colorfilter.png"
              alt=""
              className="w-[40px] h-[40px]"
            />
            <div className="flex flex-col items-center">
              <span className="font-gilroy font-bold text-lg">
                Data-Driven Approach
              </span>
              <span className="font-gilroy text-sm">
                Track what works, optimize your success.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
