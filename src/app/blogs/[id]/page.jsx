import Image from "next/image";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);

  if (!res.ok) throw new Error("Something went wrong");

  return res.json();
};

const BlogDetails = async ({ params }) => {
  const { id } = await params;

  const blog = await getData(id);

  if (!blog) return <div>Blog not found</div>;

  const publishDate = new Date(blog.createdAt).toLocaleDateString("en-GB");

  return (
    <div className="bg-[#F4F1EF] min-h-screen px-10 py-5 flex flex-col gap-6">
      <div className="flex items-center justify-between sm:flex-col sm:items-start sm:gap-3 xs:flex-col xs:items-start xs:gap-3 md:flex-row">
        <h1 className="font-denton md:text-4xl xs:text-[2rem] sm:text-3xl hor-grad">{blog.title}</h1>
        <div className="flex flex-col">
          <span className="font-gilroy">{blog.author}</span>
          <span className="font-gilroy font-light text-sm">{publishDate}</span>
        </div>
      </div>

      <div className="flex gap-8 sm:flex-col md:flex-row sm:items-center md:items-start xs:flex-col xs:items-center">
        <Image
          src={blog.image}
          height={2000}
          width={2000}
          className="w-[370px] h-[500px] object-cover"
          alt="Blog Image"
        />
        <div>
          {blog.content.split("\n").map((paragraph, index) => (
            <p
              key={index}
              className="mb-4 text-gray-600 font-gilroy text-[17px] font-medium"
            >
              {paragraph.trim()}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
