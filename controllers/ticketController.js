import Ticket from "../models/ticketModel.js";

// CREATE (POST)
export const createTicket = async (req, res) => {
  try {
    const newTicket = await Ticket.create(req.body);
    res.status(201).json({
      success: true,
      message: "Data tiket film berhasil ditambahkan",
      data: newTicket,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Gagal menambahkan data tiket",
      error: error.message,
    });
  }
};

// READ (GET)
export const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json({
      success: true,
      total: tickets.length,
      data: tickets,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

// READ (GET)
export const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Data tiket film tidak ditemukan",
      });
    }
    res.status(200).json({
      success: true,
      data: ticket,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "ID tidak valid atau terjadi kesalahan server",
      error: error.message,
    });
  }
};

// UPDATE (PUT)
export const updateTicket = async (req, res) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedTicket) {
      return res.status(404).json({
        success: false,
        message: "Data tiket film tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data tiket film berhasil diperbarui",
      data: updatedTicket,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Gagal memperbarui data tiket",
      error: error.message,
    });
  }
};

// BUSINESS LOGIC (POST)
export const buyTicket = async (req, res) => {
  try {
    const { jumlahBeli } = req.body;
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Tiket film tidak ditemukan",
      });
    }

    if (!jumlahBeli || jumlahBeli <= 0) {
      return res.status(400).json({
        success: false,
        message: "Jumlah pembelian tiket minimal 1",
      });
    }

    if (ticket.stokKursi < jumlahBeli) {
      return res.status(400).json({
        success: false,
        message: `Stok kursi tidak mencukupi. Sisa kursi: ${ticket.stokKursi}`,
      });
    }

    ticket.stokKursi -= jumlahBeli;
    await ticket.save();

    const totalBayar = ticket.hargaTiket * jumlahBeli;

    res.status(200).json({
      success: true,
      message: "Pembelian tiket berhasil!",
      transaksi: {
        judulFilm: ticket.judulFilm,
        studio: ticket.studio,
        jumlahTiket: jumlahBeli,
        totalBayar,
        sisaKursi: ticket.stokKursi,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Terjadi kesalahan saat memproses transaksi",
      error: error.message,
    });
  }
};

// DELETE
export const deleteTicket = async (req, res) => {
  try {
    const deletedTicket = await Ticket.findByIdAndDelete(req.params.id);

    if (!deletedTicket) {
      return res.status(404).json({
        success: false,
        message: "Data tiket film tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data tiket film berhasil dihapus",
      data: deletedTicket,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal menghapus data tiket",
      error: error.message,
    });
  }
};