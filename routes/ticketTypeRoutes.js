const ticketTypeController = require("../controller/ticketTypeController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: TicketType
 *   description: Ticket Type management
 */

/**
 * @swagger
 * /api/ticket-types:
 *   post:
 *     tags: [TicketType]
 *     summary: Create a new ticket-type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Ticket Type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/ticket-types", ticketTypeController.createTicketType);

/**
 * @swagger
 * /api/ticket-types:
 *   get:
 *     tags: [TicketType]
 *     summary: Get all ticket-types
 *     responses:
 *       200:
 *         description: List of all ticket-types
 *       500:
 *         description: Server error
 */
router.get("/ticket-types", ticketTypeController.getTicketTypes);
/**
 * @swagger
 * /api/ticket-types/search:
 *   get:
 *     tags: [TicketType]
 *     summary: Search ticket types
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching ticket types
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/ticket-types/search", ticketTypeController.searchTicketTypes);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   get:
 *     tags: [TicketType]
 *     summary: Get ticket-type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket Type ID
 *     responses:
 *       200:
 *         description: Ticket Type details
 *       404:
 *         description: Ticket Type not found
 *       500:
 *         description: Server error
 */
router.get("/ticket-types/:id", ticketTypeController.getTicketTypeById);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   put:
 *     tags: [TicketType]
 *     summary: Update ticket-type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket Type ID
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
 *         description: Ticket Type not found
 *       500:
 *         description: Internal server error
 */
router.put("/ticket-types/:id", ticketTypeController.updateTicketType);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   delete:
 *     tags: [TicketType]
 *     summary: Delete ticket-type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Ticket Type ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Ticket Type not found
 *       500:
 *         description: Internal server error
 */
router.delete("/ticket-types/:id", ticketTypeController.deleteTicketType);

module.exports = router;
