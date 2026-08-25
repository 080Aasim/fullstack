import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import path from "path";
import { fileURLToPath } from "url";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://fullstack-frontend-sable-three.vercel.app",
      "https://fullstack-admin-xi.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "token"],
    credentials: true,
  }),
);
app.use(express.json());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.json({
//     status: "success",
//     message: "Fullstack E-Commerce API is running",
//     version: "1.0.0",
//     endpoints: {
//       user: {
//         register: "POST /api/user/register",
//         login: "POST /api/user/login",
//         adminLogin: "POST /api/user/admin"
//       },
//       product: {
//         list: "GET /api/product/list",
//         single: "POST /api/product/single",
//         add: "POST /api/product/add",
//         remove: "POST /api/product/remove"
//       },
//       cart: {
//         get: "POST /api/cart/get",
//         add: "POST /api/cart/add",
//         update: "POST /api/cart/update"
//       },
//       order: {
//         list: "POST /api/order/list",
//         status: "POST /api/order/status",
//         place: "POST /api/order/place",
//         stripe: "POST /api/order/stripe",
//         razorpay: "POST /api/order/razorpay",
//         userOrders: "POST /api/order/userorders",
//         verifyStripe: "POST /api/order/verifyStripe"
//       }
//     }
//   });
// });

app.listen(port, () => console.log("Server started on PORT:" + port));
