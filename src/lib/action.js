import { Blog } from "@/models/blog";
import { connectMongoDB } from "./mongodb";

export const getBlogs = async () => {
  try {
    connectMongoDB();

    const blogs = await Blog.find();
    
    return blogs;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch blogs!");
  }
};

export const getBlog = async (id) => {
  try {
    connectMongoDB();

    const blog = await Blog.findById(id);

    return blog;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch blog!");
  }
};
