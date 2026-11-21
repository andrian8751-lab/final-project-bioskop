import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Berhasil Terhubung!");
  } catch (error) {
    console.error("Koneksi MongoDB Gagal:", error.message);
    process.exit(1);
  }
};

export default connectDB;