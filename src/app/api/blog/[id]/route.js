import { Blog } from "@/models/blog";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    connectMongoDB();

    const posts = await Blog.findById(id);
    return NextResponse.json(posts);
  } catch (error) {
    throw new Error("Failed to fetch posts!");
  }
};