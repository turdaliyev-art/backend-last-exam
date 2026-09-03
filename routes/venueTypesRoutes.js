const venueTypesController = require("../controller/venueTypesController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: VenueType
 *   description: Venue Type management
 */

/**
 * @swagger
 * /api/venue-types:
 *   post:
 *     tags: [VenueType]
 *     summary: Create a new venue-type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Venue Type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/venue-types", venueTypesController.createVenueTypes);

/**
 * @swagger
 * /api/venue-types:
 *   get:
 *     tags: [VenueType]
 *     summary: Get all venue-types
 *     responses:
 *       200:
 *         description: List of all venue-types
 *       500:
 *         description: Server error
 */
router.get("/venue-types", venueTypesController.getVenueTypesList);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   get:
 *     tags: [VenueType]
 *     summary: Get venue-type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue Type ID
 *     responses:
 *       200:
 *         description: Venue Type details
 *       404:
 *         description: Venue Type not found
 *       500:
 *         description: Server error
 */
router.get("/venue-types/:id", venueTypesController.getVenueTypesById);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   put:
 *     tags: [VenueType]
 *     summary: Update venue-type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue Type ID
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
 *         description: Venue Type not found
 *       500:
 *         description: Internal server error
 */
router.put("/venue-types/:id", venueTypesController.updateVenueTypes);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   delete:
 *     tags: [VenueType]
 *     summary: Delete venue-type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue Type ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Venue Type not found
 *       500:
 *         description: Internal server error
 */
router.delete("/venue-types/:id", venueTypesController.deleteVenueTypes);

module.exports = router;
