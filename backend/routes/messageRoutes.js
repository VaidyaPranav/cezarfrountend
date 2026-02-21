import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

/* SAVE MESSAGE */
router.post("/", async (req,res)=>{
  try{
    const msg = await Message.create(req.body);
    res.json(msg);
  }catch(err){
    res.status(500).json({message:"Failed to save"});
  }
});

/* GET ALL MESSAGES (ADMIN) */
router.get("/", async (req,res)=>{
  const msgs = await Message.find().sort({createdAt:-1});
  res.json(msgs);
});

export default router;
