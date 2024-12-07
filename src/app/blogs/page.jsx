import BlogCard from "@/components/BlogCard";
import { getBlogs } from "@/lib/action";

const page = async () => {
  const blogs = await getBlogs();

  return (
    <div className="min-h-screen flex flex-col ustify-center bg-[#F4F1EF] md:px-10 sm:px-3 xs:px-2">
      <h1 className="text-center text-[36px] xl:text-[60px] lg:text-[54px] md:text-[48px] sm:text-[38px] font-denton hor-grad">
        Our Blogs
      </h1>
      <span className="text-center font-gilroy font-light md:text-lg sm:text-[16px] xs:text-[14px] text-gray-500">
        Explore insights, updates, and stories with Our Blogs – where we share
        knowledge and inspire innovation.
      </span>
      <div className="flex items-center lg:justify-start md:justify-center sm:justify-center xs:justify-center flex-wrap">
        {blogs.map((blog) => (
          <div key={blog._id.toString()} className="">
            <BlogCard
              id={blog._id.toString()} // Convert ObjectId to string
              title={blog.title}
              image={blog.image}
              author={blog.author}
              publishDate={new Date(blog.createdAt).toLocaleDateString("en-GB")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
