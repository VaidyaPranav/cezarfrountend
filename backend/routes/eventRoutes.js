import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

/* GET ALL EVENTS */
router.get("/", async(req,res)=>{
  const events = await Event.find().sort({createdAt:-1});
  res.json(events);
});

/* CREATE EVENT */
router.post("/", async(req,res)=>{
  const event = await Event.create(req.body);
  res.json(event);
});

/* UPDATE EVENT */
router.put("/:id", async (req,res)=>{
  const updated = await Event.findByIdAndUpdate(
    req.params.id,
    { $set:req.body },   // ← THIS FIXES DROPDOWN ISSUE
    { new:true }
  );

  res.json(updated);
});


/* DELETE EVENT */
router.delete("/:id", async(req,res)=>{
  await Event.findByIdAndDelete(req.params.id);
  res.json({success:true});
});

export default router;
