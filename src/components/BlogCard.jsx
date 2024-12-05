import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ id, title, author, image, publishDate }) => {
  return (
    <div className="flex flex-col items-center justify-around p-4 m-5 bg-[#EAE8E1] w-[270px] h-[520px] rounded-lg hover:scale-105 transition-transform ease-in-out duration-300 box">
      <Image
        src={image}
        width={2000}
        height={2000}
        alt={title}
        className="w-[225px] h-[330px] rounded-t-lg object-cover"
      />
      <div className="flex flex-col">
        <div className="font-gilroy font-light flex gap-2">
          <span>Title: </span>
          <span className="font-gilroy font-medium">{title}</span>
        </div>
        <span className="font-gilroy font-light">
          Author: <span className="font-gilroy font-medium">{author}</span>
        </span>
        <span className="font-gilroy font-light">
          Published on:{" "}
          <span className="font-gilroy font-medium">{publishDate}</span>
        </span>
      </div>
      <Link
        href={`/blogs/${id}`}
        className="mt-2 self-start text-[#32325d] flex items-center gap-1"
      >
        <span>READ MORE</span>
        <Image
          src="/images/arrow-right.png"
          height={2000}
          width={2000}
          className="w-4 h-4"
          alt=""
        />
      </Link>
    </div>
  );
};

export default BlogCard;
