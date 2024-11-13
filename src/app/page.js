import Experience from "@/pages/Experience";
import Info from "@/pages/Info";
import Middle from "@/pages/Middle";
import Testimonials from "@/pages/Testimonials";
import Top from "@/pages/Top";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Top />
      <Image
        width={1500}
        height={1500}
        src="/images/bg-img.png"
        alt=""
        className="w-full"
      />
      <Middle />
      <Testimonials />
      <Info />
      <Experience />
    </div>
  );
}
