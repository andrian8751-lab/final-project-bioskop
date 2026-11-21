import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/database.js";
import ticketRoutes from "./routes/ticketRoutes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint utama
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Selamat datang di REST API Sistem Tiket Bioskop",
  });
});

// Routes CRUD tiket bioskop
app.use("/api/tickets", ticketRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});