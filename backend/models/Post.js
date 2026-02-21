import mongoose from "mongoose";

const postSchema = new mongoose.Schema({

  adminName: String,
  text: String,

  mediaUrl: String,     // image or video
  mediaType: String,    // "image" | "video"

},{ timestamps:true });

export default mongoose.model("Post", postSchema);
