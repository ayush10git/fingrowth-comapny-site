import VideoCard from "@/components/VideoCard";
import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <div className="bg-[#EAE8E1] py-10 flex flex-col gap-8 px-4 sm:px-8 lg:px-[120px]">
      <h1 className="text-center text-[36px] xl:text-[60px] lg:text-[54px] md:text-[48px] sm:text-[38px] font-denton hor-grad mb-4 ">
        Experience you can trust
      </h1>
      <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-row gap-8 about p-5 rounded-3xl">
        <Image
          src="/images/about.jpg"
          width={2000}
          height={2000}
          alt=""
          className="lg:w-[610px] h-[517px] object-cover sm:my-2 md:my-0 rounded-l-3xl"
        />
        <div className="flex flex-col gap-2 text-[16px] font-gilroy font-light h-full lg:h-[517px] lg:overflow-y-scroll scrollbar-hide">
          <span>
            Hi! I am CA Kanan Bahl, Founder at Fingrowth Media and I help
            finance based entities and CEOs to research and make content for
            their building their distribution.
          </span>
          <span>
            I was studying Profit & Loss for Class 9th Maths unit test, when my
            Father (who is also a CA) asked me something about Assets and Cash
            Flows.
          </span>
          <span>
            I got really inquisitive and that is when I read the book 'Rich Dad
            Poor Dad' at the age of 14.
          </span>
          <span className="">
            The book helped in gaining invaluable insights coupled with my Dad's
            experiments with Money.
          </span>
          <span>
            He has done a lot of experiments with money using stock markets and
            real estate.
          </span>
          <span>
            I started my investing journey with my first stipend from KPMG in
            the year 2017 and I was lucky enough to use my father's expertise to
            have invested in multi-baggers like Deepak Nitrite.
          </span>
          <span>
            In 2021, after almost 2 years of qualifying as a CA, I decided to
            quit my hectic job to learn from his experience with money. I was
            lucky enough to find fundamentally strong companies (which turned
            out to be multi-baggers) to invest my 2 years of savings from jobs.
            This helped me in bootstrapping my startup (www.rupeetool.com) from
            profits in stock markets.
          </span>
          <span>
            It still involved a lot of courage as I come from a family where I
            have seen everyone doing a job. Infact, my grandfather (who is
            unfortunately, not with us now) was not very healthy in his last
            days, really boasted about my job at a Big 4 firm, advised me at
            least over 10 times to not quit my job as starting up is a very
            tough thing.
          </span>
          <span>
            But still I decided to experiment with my life. Now a typical day in
            my life revolves around helping people with their personal finances.
            I help them reduce their loan burden, increase their SIPs to an
            optimum level so as to match with their financial goals.
          </span>
          <span>
            Not only this, I help my clients in optimizing their real estate
            portfolio. In India, there is a lot of wealth locked in Residential
            Real Estate which yields hardly 1.8-2.5% of rental yield with barely
            any capital appreciation.
          </span>
          <span>
            We recommend them to transfer their wealth from flats to commercial
            real estate where they can increase their rental yield from 2% to
            5-9% (even 12-14% for the under construction) and yet have a strong
            chance of capital appreciation.
          </span>
          <span>
            We do all this with the help of strong legal and commercial
            diligence checks by conducting surveys around the property and
            dealing with the best builders only.
          </span>
          <span>
            Cheers, <br /> CA Kanan
          </span>
        </div>
      </div>

      <div className="flex xs:flex-col sm:flex-col md:flex-row gap-5 md:gap-6 xl:gap-10 justify-center items-center">
        <VideoCard
          image="/images/thumb1.png"
          title="He Built 7 Figure Agency After Two Failures | Ft. CA Kanan Bahl | TLL
        #08 - Yash Sanghavi"
        />
        <VideoCard
          image="/images/thumb2.png"
          title="Buy or Rent a House in 2023 | @Groww Personal Finance ft. CA Kanan Bahl"
        />
      </div>
    </div>
  );
};

export default Experience;
