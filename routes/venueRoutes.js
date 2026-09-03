const venueController = require("../controller/venueController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Venue
 *   description: Venue management
 */

/**
 * @swagger
 * /api/venues:
 *   post:
 *     tags: [Venue]
 *     summary: Create a new venue
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Venue created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/venues", venueController.createVenue);

/**
 * @swagger
 * /api/venues:
 *   get:
 *     tags: [Venue]
 *     summary: Get all venues
 *     responses:
 *       200:
 *         description: List of all venues
 *       500:
 *         description: Server error
 */
router.get("/venues", venueController.getVenues);
/**
 * @swagger
 * /api/venues/search:
 *   get:
 *     tags: [Venue]
 *     summary: Search venues
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching venues
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/venues/search", venueController.searchVenues);

/**
 * @swagger
 * /api/venues/{id}:
 *   get:
 *     tags: [Venue]
 *     summary: Get venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue ID
 *     responses:
 *       200:
 *         description: Venue details
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
router.get("/venues/:id", venueController.getVenueById);

/**
 * @swagger
 * /api/venues/{id}:
 *   put:
 *     tags: [Venue]
 *     summary: Update venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue ID
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
 *         description: Venue not found
 *       500:
 *         description: Internal server error
 */
router.put("/venues/:id", venueController.updateVenue);

/**
 * @swagger
 * /api/venues/{id}:
 *   delete:
 *     tags: [Venue]
 *     summary: Delete venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Internal server error
 */
router.delete("/venues/:id", venueController.deleteVenue);

module.exports = router;
