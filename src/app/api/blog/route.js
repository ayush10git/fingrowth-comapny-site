import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { Blog } from "@/models/blog";

export async function GET(req) {
  try {
    await connectMongoDB();

    const blogs = await Blog.find({});

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
