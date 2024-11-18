import mongoose from "mongoose";

// User schema with more flexibility
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: false,  // Password is optional, especially for OAuth users
    },
    img: {
      type: String,
      default: "default-profile.png", // Default image if none is provided
    },
    isAdmin: {
      type: Boolean,
      default: false,  // Set default to false for non-admin users
    },
    waitlist_status: {
      type: String,
      enum: ["ACCEPTED", "REJECTED", "PENDING"],
      default: "PENDING",  // Default to PENDING if no status is provided
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Post schema, remains unchanged
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: "default-post-image.png", // Default post image
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to User
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

// Export models
export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
