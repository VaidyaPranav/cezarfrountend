
import mongoose from "mongoose";
import dotenv from "dotenv";
import Event from "./models/Event.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const events = [
  {
    id: 1,
    title: "Tech Quiz",
    category: "Technical",
    image: "/quiz.png",
    description: "Test your technical knowledge across various domains",
    rules: ["Individual participation", "60 minutes duration", "No external resources"],
    venue: "IT  Block",
    timing: "10:00 AM - 11:00 AM",
    date: "March 5, 2025"
  },
  {
    id: 2,
    title: "Project Expo",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    description: "Create and showcase innovative projects in this hands-on workshop",
    rules: ["Team of 2-4", "Project must be original", "Presentation required"],
    venue: "IT Block ",
    timing: "2:00 PM - 5:00 PM",
    date: "March 5, 2025"
  },
  {
    id: 3,
    title: "Code-a-thon",
    category: "Technical",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
    description: "Showcase your coding skills in this competitive programming event",
    rules: ["Individual participation", "24-hour duration", "No external resources"],
    venue: "Main Stage",
    timing: "6:00 PM - 8:00 PM",
    date: "March 6, 2025"
  },
  {
    id: 4,
    title: "Mems and Photography Contest",
    category: "Non-Technical",
    image: "/phoyo.png",
    description: "Unleash your creativity in our mems and photography contest with exciting themes",
    rules: ["Max 3 entries per participant", "JPEG/PNG format", "Max 5MB per image"],
    venue: "Online",
    timing: "9:00 AM - 5:00 PM",
    date: "March 7, 2025"
  },
  {
    id: 5,
    title: "Vishleshan",
    category: "Technical",
    image: "/ppt.jpeg",
    description: "PPT is a powerful, easy to use presentation graphics but allows to create professional looking slide shows",
    rules: ["Max 5 submissions", "JPEG/PNG format", "Max 5MB per image"],
    venue: "Online",
    timing: "Till March 10, 2025",
    date: "March 5-10, 2025"
  },
  {
    id: 6,
    title: "Arn Wrestling",
    category: "Non-Technical",
    image: "/nontech.png",
    description: "Test your strength and technique in this thrilling arm wrestling competition",
    rules: ["2 speakers per team", "10 mins per round", "English medium"],
    venue: "Seminar Hall",
    timing: "2:00 PM - 6:00 PM",
    date: "March 6, 2025"
  },
  {
    id: 7,
    title: "Tressure Hunt",
    category: "Non-Technical",
    image: "/tressure.png",
    description: "Embark on an adventurous treasure hunt across the campus with exciting clues and challenges",
    rules: ["Team of 3-5", "Clues provided at the start", "No external help allowed"],
    venue: "campus-wide",
    timing: "10:00 AM - 5:00 PM",
    date: "March 5-8, 2025"
  },
  {
    id: 8,
    title: "Art Gallery",
    category: "Non-Technical",
    image: "/art.png",
    description: "Showcase your artistic talents in our annual art gallery exhibition",
    rules: ["Individual or group work", "Max 2x2m display area", "Eco-friendly materials preferred"],
    venue: "Art Gallery",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025"
  },

  // ✅ SPORTS EVENTS (teams added, CIVIL replaced with MTECH)

  {
    id: 9,
    title: "Carrom Tournament Boys",
    category: "Sports",
    image: "/carrom.png",
    description: "Compete in this exciting carrom tournament with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "Seminar Hall",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:0,
    runnerPoints:0,

    winner:null,
    runner:null       // how many points this sport gives
    
    
  },
    {
    id: 11,
    title: "Carrom Tournament Girls",
    category: "Sports",
    image: "/carrom.png",
    description: "Compete in this exciting carrom tournament with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "Seminar Hall",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    points: 5,        // how many points this sport gives
    winner: "IT",
        winnerPoints:0,
    runnerPoints:0,

    winner:null,
    runner:null
    
  },
  {
    id: 12,
    title: "Chess Tournament Boys",
    category: "Sports",
    image: "/chess.png",
    description: "Compete in this exciting chess tournament with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "hostel",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:0,
    runnerPoints:0,

    winner:null,
    runner:null
  },
    {
    id: 13,
    title: "Chess Tournament Girls",
    category: "Sports",
    image: "/chess.png",
    description: "Compete in this exciting chess tournament with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "hostel",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:0,
    runnerPoints:0,

    winner:null,
    runner:null
  },
  {
    id: 14 ,
    title: "Volleyball Tournament Boys",
    category: "Sports",
    image: "/volleyball.png",
    description: "Compete in this exciting volleyball tournament with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "volleyball court",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:5,
    runnerPoints:3,

    winner:null,
    runner:null
  },
    {
    id: 15,
    title: "Volleyball Tournament Girls",
    category: "Sports",
    image: "/volleyball.png",
    description: "Compete in this exciting volleyball tournament with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "volleyball court",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
       winnerPoints:5,
    runnerPoints:3,

    winner:null,
    runner:null
  },
  {
    id: 16,
    title: "Basketball Tournament Boys",
    category: "Sports",
    image: "/basketball.png",
    description: "Compete in this exciting basketball tournament with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "basketball court",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:5,
    runnerPoints:3,

    winner:null,
    runner:null
  },
   {
    id: 17,
    title: "Basketball Tournament Girls",
    category: "Sports",
    image: "/basketball.png",
    description: "Compete in this exciting basketball tournament with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "basketball court",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:5,
    runnerPoints:3,

    winner:null,
    runner:null
  },
  {
    id: 18,
    title: "Football Tournament",
    category: "Sports",
    image: "/football.png",
    description: "Compete in this exciting football tournament with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "football ground",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:5,
    runnerPoints:3,

    winner:null,
    runner:null
  },
  {
    id: 19,
    title: "Cricket Tournament",
    category: "Sports",
    image: "/cricket.png",
    description: "Compete in this exciting cricket tournament with teams of 11 players each",
    rules: ["Team of 11 players", "3 rounds per match", "Tournament format"],
    venue: "cricket ground",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:5,
    runnerPoints:3,

    winner:null,
    runner:null
  },
  {
    id: 20,
    title: "kho-kho Tournament Boys",
    category: "Sports",
    image: "/khokho.png",
    description: "Compete in this exciting kho-kho tournament with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "kho-kho court",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:5,
    runnerPoints:3,

    winner:null,
    runner:null
  },
    {
    id: 21,
    title: "kho-kho Tournament Girls",
    category: "Sports",
    image: "/khokho.png",
    description: "Compete in this exciting kho-kho tournament with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "kho-kho court",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:5,
    runnerPoints:3,

    winner:null,
    runner:null
  },
  {
    id: 22,
    title: "Badminton Tournament Boys",
    category: "Sports",
    image: "/badminton.png",
    description: "Compete in this exciting badminton tournament with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "badminton court",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:0,
    runnerPoints:0,

    winner:null,
    runner:null
  },
  {
    id: 23,
    title: "Badminton Tournament Girls",
    category: "Sports",
    image: "/badminton.png",
    description: "Compete in this exciting badminton tournament with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "badminton court",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:0,
    runnerPoints:0,

    winner:null,
    runner:null
  },
  {
    id: 24,
    title: "Table Tennis Tournament Boys",
    category: "Sports",
    image: "/tabletennis.png",
    description: "Compete in this exciting table tennis tournament with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "table tennis court",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:0,
    runnerPoints:0,

    winner:null,
    runner:null
  },
  {
    id: 25,
    title: "Table Tennis Tournament Girls",
    category: "Sports",
    image: "/tabletennis.png",
    description: "Compete in this exciting table tennis tournament with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "table tennis court",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:0,
    runnerPoints:0,

    winner:null,
    runner:null
  },

  {
    id: 26,
    title: "FlashMob Dance",
    category: "Flash Mob",
    image: "/mob.jpeg",
    description: "vibe and enjoy in this exciting flashmob dance event bring up your energy and dance .",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "flashmob dance floor",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    
  },
  {
    id: 27,
    title: "  Cult Night Dance",
    category: "Cult Night",
    image: "/cultnight.jpeg",
    description: "Compete in this exciting cult night dance event with teams of 2 players each",
    rules: ["Team of 2 players", "3 rounds per match", "Tournament format"],
    venue: "cult night dance floor",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025"
  },
  {
    id: 28,
    title: "Throwball Tournament",
    category: "Sports",
    image: "/throwballl.png",
    description: "Compete in this exciting throwball tournament with teams of 2 players each",
    rules: ["2 teams", "Tournament format"],
    venue: "throwball court",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:5,
    runnerPoints:3,

    winner:null,
    runner:null
  },

  {
    id: 29,
    title: "kabaddi Tournament Boys",
    category: "Sports",
    image: "/kabaddi.png",
    description: "Compete in this exciting kabaddi tournament with teams of 2 players each",
    rules: ["2 teams", "Tournament format"],
    venue: "kabaddi court",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:5,
    runnerPoints:3,

    winner:null,
    runner:null
  },
   {
    id: 30,
    title: "kabaddi Tournament Girls",
    category: "Sports",
    image: "/kabaddi.png",
    description: "Compete in this exciting kabaddi tournament with teams of 2 players each",
    rules: ["2 teams", "Tournament format"],
    venue: "kabaddi court",
    timing: "10:00 AM - 5:00 PM",
    date: "March 8-9, 2025",
    teams: ["CSE","ECE","EEE","MECH","MTECH","IT"],
    winnerPoints:5,
    runnerPoints:3,

    winner:null,
    runner:null
  }
];


await Event.deleteMany(); // clears old data
await Event.insertMany(events);

console.log("✅ Events seeded");
process.exit();
