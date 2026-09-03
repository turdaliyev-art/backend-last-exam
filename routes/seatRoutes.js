const seatController = require("../controller/seatController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Seat
 *   description: Seat management
 */

/**
 * @swagger
 * /api/seats:
 *   post:
 *     tags: [Seat]
 *     summary: Create a new seat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Seat created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/seats", seatController.createSeat);

/**
 * @swagger
 * /api/seats:
 *   get:
 *     tags: [Seat]
 *     summary: Get all seats
 *     responses:
 *       200:
 *         description: List of all seats
 *       500:
 *         description: Server error
 */
router.get("/seats", seatController.getSeats);

/**
 * @swagger
 * /api/seats/{id}:
 *   get:
 *     tags: [Seat]
 *     summary: Get seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Seat ID
 *     responses:
 *       200:
 *         description: Seat details
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
router.get("/seats/:id", seatController.getSeatById);

/**
 * @swagger
 * /api/seats/{id}:
 *   put:
 *     tags: [Seat]
 *     summary: Update seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Seat ID
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
 *         description: Seat not found
 *       500:
 *         description: Internal server error
 */
router.put("/seats/:id", seatController.updateSeat);

/**
 * @swagger
 * /api/seats/{id}:
 *   delete:
 *     tags: [Seat]
 *     summary: Delete seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Seat ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Internal server error
 */
router.delete("/seats/:id", seatController.deleteSeat);

module.exports = router;
