import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/usersRouter.js";
import educationRouter from "./routers/educationRouter.js";
import projectsRouter from "./routers/projectsRouter.js"
import contactsRouter from "./routers/contactsRouter.js"
import authRouter from "./routers/authRouter.js";
import profileRoutes from "./routers/profileRouter.js";
import { errorController } from "./controllers/errorController.js";


dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/education",educationRouter);
app.use("/api/projects", projectsRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/auth", authRouter);
app.use("/api/profile", profileRoutes);

app.use(errorController);

const URL = process.env.MONGO_URI;
mongoose.connect(URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err.message));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

app.get("/api/contacts", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
