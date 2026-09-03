const seatTypeController = require("../controller/seatTypeController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: SeatType
 *   description: Seat Type management
 */

/**
 * @swagger
 * /api/seat-types:
 *   post:
 *     tags: [SeatType]
 *     summary: Create a new seat-type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Seat Type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/seat-types", seatTypeController.createSeatType);

/**
 * @swagger
 * /api/seat-types:
 *   get:
 *     tags: [SeatType]
 *     summary: Get all seat-types
 *     responses:
 *       200:
 *         description: List of all seat-types
 *       500:
 *         description: Server error
*/
router.get("/seat-types", seatTypeController.getSeatTypes);
/**
 * @swagger
 * /api/seat-types/search:
 *   get:
 *     tags: [SeatType]
 *     summary: Search seat types
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching seat types
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/seat-types/search", seatTypeController.searchSeatTypes);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   get:
 *     tags: [SeatType]
 *     summary: Get seat-type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Seat Type ID
 *     responses:
 *       200:
 *         description: Seat Type details
 *       404:
 *         description: Seat Type not found
 *       500:
 *         description: Server error
 */
router.get("/seat-types/:id", seatTypeController.getSeatTypeById);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   put:
 *     tags: [SeatType]
 *     summary: Update seat-type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Seat Type ID
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
 *         description: Seat Type not found
 *       500:
 *         description: Internal server error
 */
router.put("/seat-types/:id", seatTypeController.updateSeatType);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   delete:
 *     tags: [SeatType]
 *     summary: Delete seat-type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Seat Type ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Seat Type not found
 *       500:
 *         description: Internal server error
 */
router.delete("/seat-types/:id", seatTypeController.deleteSeatType);

module.exports = router;
