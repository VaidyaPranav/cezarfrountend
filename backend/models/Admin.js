import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  username:String,
  password:String
});

// force collection name = "admin"
export default mongoose.model("Admin", adminSchema, "admins");
