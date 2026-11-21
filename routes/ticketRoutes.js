import express from "express";
import {
  createTicket,
  getAllTickets,
  getTicketById,
  updateTicket,
  buyTicket,
  deleteTicket,
} from "../controllers/ticketController.js";

const router = express.Router();

router.post("/", createTicket);
router.get("/", getAllTickets);
router.get("/:id", getTicketById);
router.put("/:id", updateTicket);
router.post("/:id/beli", buyTicket);
router.delete("/:id", deleteTicket);

export default router;