const venuePhotoController = require("../controller/venuePhotoController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: VenuePhoto
 *   description: Venue Photo management
 */

/**
 * @swagger
 * /api/venue-photos:
 *   post:
 *     tags: [VenuePhoto]
 *     summary: Create a new venue-photo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Venue Photo created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/venue-photos", venuePhotoController.createVenuePhoto);

/**
 * @swagger
 * /api/venue-photos:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Get all venue-photos
 *     responses:
 *       200:
 *         description: List of all venue-photos
 *       500:
 *         description: Server error
*/
router.get("/venue-photos", venuePhotoController.getVenuePhotos);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Get venue-photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue Photo ID
 *     responses:
 *       200:
 *         description: Venue Photo details
 *       404:
 *         description: Venue Photo not found
 *       500:
 *         description: Server error
*/
router.get("/venue-photos/:id", venuePhotoController.getVenuePhotoById);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   put:
 *     tags: [VenuePhoto]
 *     summary: Update venue-photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue Photo ID
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
 *         description: Venue Photo not found
 *       500:
 *         description: Internal server error
 */
router.put("/venue-photos/:id", venuePhotoController.updateVenuePhoto);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   delete:
 *     tags: [VenuePhoto]
 *     summary: Delete venue-photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Venue Photo ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Venue Photo not found
 *       500:
 *         description: Internal server error
 */
router.delete("/venue-photos/:id", venuePhotoController.deleteVenuePhoto);

module.exports = router;
