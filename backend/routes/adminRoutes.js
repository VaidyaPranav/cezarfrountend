import express from "express";
import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const router = express.Router();

router.post("/login", async (req,res)=>{

  try{

    const { username, password } = req.body;

    console.log("LOGIN BODY:", req.body);

    // 🔹 find admin by username only
    const admin = await Admin.findOne({ username });

    console.log("FOUND ADMIN:", admin);

    if(!admin){
      return res.status(401).json({ message:"Invalid credentials" });
    }

    // 🔹 compare password manually
    if(admin.password !== password){
      return res.status(401).json({ message:"Invalid credentials" });
    }

    // 🔹 create token
    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn:"1d" }
    );

    res.json({ token });

  }catch(err){

    console.error("LOGIN ERROR:", err);
    res.status(500).json({ message:"Server error" });

  }

});

export default router;
