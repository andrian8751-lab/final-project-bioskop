import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    judulFilm: {
      type: String,
      required: [true, "Judul film wajib diisi"],
      trim: true,
    },
    studio: {
      type: String,
      required: [true, "Nama studio wajib diisi"],
    },
    jadwalTayang: {
      type: String,
      required: [true, "Jadwal tayang wajib diisi"],
    },
    hargaTiket: {
      type: Number,
      required: [true, "Harga tiket wajib diisi"],
      min: 0,
    },
    stokKursi: {
      type: Number,
      required: [true, "Stok kursi wajib diisi"],
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;