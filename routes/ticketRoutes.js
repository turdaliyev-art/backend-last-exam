const ticketController = require("../controller/ticketController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: Ticket management
 */

/**
 * @swagger
 * /api/tickets:
 *   post:
 *     tags: [Ticket]
 *     summary: Create a new ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Ticket created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/tickets", ticketController.createTicket);

/**
 * @swagger
 * /api/tickets:
 *   get:
 *     tags: [Ticket]
 *     summary: Get all tickets
 *     responses:
 *       200:
 *         description: List of all tickets
 *       500:
 *         description: Server error
 */
router.get("/tickets", ticketController.getTickets);

/**
 * @swagger
 * /api/tickets/{id}:
 *   get:
 *     tags: [Ticket]
 *     summary: Get ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket ID
 *     responses:
 *       200:
 *         description: Ticket details
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.get("/tickets/:id", ticketController.getTicketById);

/**
 * @swagger
 * /api/tickets/{id}:
 *   put:
 *     tags: [Ticket]
 *     summary: Update ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Internal server error
 */
router.put("/tickets/:id", ticketController.updateTicket);

/**
 * @swagger
 * /api/tickets/{id}:
 *   delete:
 *     tags: [Ticket]
 *     summary: Delete ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Internal server error
 */
router.delete("/tickets/:id", ticketController.deleteTicket);

module.exports = router;
