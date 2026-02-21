import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import adminRoutes from "./routes/adminRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import Registration from "./routes/registrationRoutes.js";  

dotenv.config();

const app = express();

/* ============================= */
/* FIX __dirname FOR ES MODULES */
/* ============================= */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ============================= */
/* MIDDLEWARES */
/* ============================= */

app.use(cors({
  origin: "*"
}));
app.use(express.json());

/* ============================= */
/* STATIC UPLOADS FOLDER */
/* ============================= */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/* ============================= */
/* MONGODB CONNECTION */
/* ============================= */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Mongo Error:", err));

/* ============================= */
/* ROUTES */
/* ============================= */

app.get("/", (req,res)=>{
  res.send("🚀 API Running");
});

app.use("/api/events", eventRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/registrations", Registration);

/* ============================= */
/* SERVER */
/* ============================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});
