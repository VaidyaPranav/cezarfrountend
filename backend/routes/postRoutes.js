import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import Post from "../models/Post.js";

const router = express.Router();

/* CLOUDINARY STORAGE */
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "cezar_posts",
    resource_type: "auto",   // supports image + video
  },
});

const upload = multer({ storage });

/* CREATE POST */
router.post("/", upload.single("media"), async (req,res)=>{
  try{

    const post = await Post.create({
      adminName:req.body.adminName,
      text:req.body.text,
      // when using CloudinaryStorage, multer provides the uploaded file's
      // URL in `req.file.path` (or similar). Use that directly instead of
      // assuming a local `/uploads/...` path.
      mediaUrl: req.file ? (req.file.path || req.file.url || "") : "",
      // guard optional chaining to avoid calling startsWith on undefined
      mediaType: req.file?.mimetype?.startsWith("video") ? "video" : "image"
    });

    res.json(post);

  }catch(err){
  console.error(JSON.stringify(err, null, 2));
  res.status(500).json({error:"Post failed"});
}
});

/* GET POSTS */
router.get("/", async (req,res)=>{
  const posts = await Post.find().sort({createdAt:-1});
  res.json(posts);
});

export default router;