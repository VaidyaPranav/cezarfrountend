import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "./models/Event.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const sports = await Event.find({ category:"Sports" });

for(const e of sports){

  e.roundWinners = {
    r1:["",""],
    semifinal:[
      {team1:"",team2:""},
      {team1:"",team2:""}
    ],
    final:{
      team1:"",
      team2:"",
      winner:""
    }
  };

  e.runner=null;
  e.winner=null;

  await e.save();
}

console.log("✅ Sports rounds reset");
process.exit();
