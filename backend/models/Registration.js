import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema({

  name: { type:String, required:true },
  phone: { type:String, required:true },
  email: { type:String, required:true },

  event: { type:String, required:true },
  eventCategory: { type:String, required:true },

  teamName: String,
  teamMembers: String

},{ timestamps:true });

export default mongoose.model("Registration", registrationSchema);
