const bookingController = require("../controller/bookingController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     tags: [Bookings]
 *     summary: Create a booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Booking created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/bookings", bookingController.createBooking);

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     tags: [Bookings]
 *     summary: Get all bookings
 *     responses:
 *       200:
 *         description: List of all bookings
 *       500:
 *         description: Server error
 */
router.get("/bookings", bookingController.getBookings);

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     tags: [Bookings]
 *     summary: Get booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking details
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.get("/bookings/:id", bookingController.getBookingById);

/**
 * @swagger
 * /api/bookings/{id}:
 *   put:
 *     tags: [Bookings]
 *     summary: Update booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: integer
 *               payment_method_id:
 *                 type: integer
 *               delivery_method_id:
 *                 type: integer
 *               discount_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */
router.put("/bookings/:id", bookingController.updateBooking);

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     tags: [Bookings]
 *     summary: Delete booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Internal server error
 */
router.delete("/bookings/:id", bookingController.deleteBooking);

module.exports = router;
