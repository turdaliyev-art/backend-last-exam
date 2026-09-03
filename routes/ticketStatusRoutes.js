const ticketStatusController = require("../controller/ticketStatusController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: TicketStatus
 *   description: Ticket status management
 */

/**
 * @swagger
 * /api/ticket-statuses:
 *   post:
 *     tags: [TicketStatus]
 *     summary: Create a new ticket-statuse
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Ticket Statuse created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/ticket-statuses", ticketStatusController.createTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses:
 *   get:
 *     tags: [TicketStatus]
 *     summary: Get all ticket-statuses
 *     responses:
 *       200:
 *         description: List of all ticket-statuses
 *       500:
 *         description: Server error
 */
router.get("/ticket-statuses", ticketStatusController.getTicketStatuses);
/**
 * @swagger
 * /api/ticket-statuses/search:
 *   get:
 *     tags: [TicketStatus]
 *     summary: Search ticket statuses
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching ticket statuses
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/ticket-statuses/search", ticketStatusController.searchTicketStatuses);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   get:
 *     tags: [TicketStatus]
 *     summary: Get ticket-statuse by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket Statuse ID
 *     responses:
 *       200:
 *         description: Ticket Statuse details
 *       404:
 *         description: Ticket Statuse not found
 *       500:
 *         description: Server error
 */
router.get("/ticket-statuses/:id", ticketStatusController.getTicketStatusById);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   put:
 *     tags: [TicketStatus]
 *     summary: Update ticket-statuse by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket Statuse ID
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
 *         description: Ticket Statuse not found
 *       500:
 *         description: Internal server error
 */
router.put("/ticket-statuses/:id", ticketStatusController.updateTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   delete:
 *     tags: [TicketStatus]
 *     summary: Delete ticket-statuse by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket Statuse ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Ticket Statuse not found
 *       500:
 *         description: Internal server error
 */
router.delete("/ticket-statuses/:id", ticketStatusController.deleteTicketStatus);

module.exports = router;
