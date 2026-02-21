import express from "express";
import Registration from "../models/Registration.js";

const router = express.Router();


// CREATE registration
router.post("/", async (req,res)=>{
  try{
    console.log("Incoming registration:", req.body);

    const newReg = await Registration.create(req.body);

    res.json(newReg);

  }catch(err){
    console.error("REGISTRATION ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});




// GET all registrations (admin page)
router.get("/", async (req,res)=>{
  try{
    const regs = await Registration.find().sort({createdAt:-1});
    res.json(regs);
  }catch(err){
    res.status(500).json({error:err.message});
  }
});
// DELETE
router.delete("/:id", async(req,res)=>{
  try{
    await Registration.findByIdAndDelete(req.params.id);
    res.json({success:true});
  }catch(err){
    res.status(500).json({error:err.message});
  }
});

export default router;
