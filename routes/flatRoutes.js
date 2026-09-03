const flatController = require("../controller/flatController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Flat
 *   description: Flat management
 */

/**
 * @swagger
 * /api/flats:
 *   post:
 *     tags: [Flat]
 *     summary: Create a new flat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Flat created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/flats", flatController.createFlat);

/**
 * @swagger
 * /api/flats:
 *   get:
 *     tags: [Flat]
 *     summary: Get all flats
 *     responses:
 *       200:
 *         description: List of all flats
 *       500:
 *         description: Server error
 */
router.get("/flats", flatController.getFlats);
/**
 * @swagger
 * /api/flats/search:
 *   get:
 *     tags: [Flat]
 *     summary: Search flats
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching flats
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/flats/search", flatController.searchFlats);

/**
 * @swagger
 * /api/flats/{id}:
 *   get:
 *     tags: [Flat]
 *     summary: Get flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Flat ID
 *     responses:
 *       200:
 *         description: Flat details
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
router.get("/flats/:id", flatController.getFlatById);

/**
 * @swagger
 * /api/flats/{id}:
 *   put:
 *     tags: [Flat]
 *     summary: Update flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Flat ID
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
 *         description: Flat not found
 *       500:
 *         description: Internal server error
 */
router.put("/flats/:id", flatController.updateFlat);

/**
 * @swagger
 * /api/flats/{id}:
 *   delete:
 *     tags: [Flat]
 *     summary: Delete flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Flat ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Internal server error
 */
router.delete("/flats/:id", flatController.deleteFlat);

module.exports = router;
