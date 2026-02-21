import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({

  title:String,
  category:String,
  description:String,
  venue:String,
  timing:String,
  date:String,
  image:String,

  rules:[String],
  teams:[String],

  // 🏆 tournament results
roundWinners:{
  r1:{
    type:[String],
    default:["",""]
  },

  semifinal:{
    type:[
      {
        team1:{ type:String, default:"" },
        team2:{ type:String, default:"" }
      }
    ],
    default:[
      {team1:"",team2:""},
      {team1:"",team2:""}
    ]
  },

  final:{
    team1:{ type:String, default:"" },
    team2:{ type:String, default:"" },
    winner:{ type:String, default:"" }
  }
},


  // 🥇 final standings (for championship points)
  winner:{ type:String, default:null },
  runner:{ type:String, default:null },

  // 🧮 scoring system
  winnerPoints:{ type:Number, default:5 },
  runnerPoints:{ type:Number, default:3 }

},{ timestamps:true });

export default mongoose.model("Event", eventSchema);
