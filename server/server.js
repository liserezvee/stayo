import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDb from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRouter from "./routes/userRoutes.js";
import hotelRouter from "./routes/hotelRoutes.js";
import connectCloudinary from "./configs/cloudinary.js";
import roomRouter from "./routes/roomRoutes.js";

connectDb();
connectCloudinary();

const app = express();
app.use(cors()); // enable cross-origin resource sharing

//middleware
app.use(express.json());
app.use(clerkMiddleware());

//api to listen clerk webhook
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => {
  res.send("Api is working ");
});
app.use("/api/user", userRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/rooms", roomRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server is running on prot ${PORT}`));
