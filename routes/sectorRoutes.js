const sectorController = require("../controller/sectorController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Sector
 *   description: Sector management
 */

/**
 * @swagger
 * /api/sectors:
 *   post:
 *     tags: [Sector]
 *     summary: Create a new sector
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Sector created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/sectors", sectorController.createSector);

/**
 * @swagger
 * /api/sectors:
 *   get:
 *     tags: [Sector]
 *     summary: Get all sectors
 *     responses:
 *       200:
 *         description: List of all sectors
 *       500:
 *         description: Server error
 */
router.get("/sectors", sectorController.getSectors);
/**
 * @swagger
 * /api/sectors/search:
 *   get:
 *     tags: [Sector]
 *     summary: Search sectors
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching sectors
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/sectors/search", sectorController.searchSectors);

/**
 * @swagger
 * /api/sectors/{id}:
 *   get:
 *     tags: [Sector]
 *     summary: Get sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Sector ID
 *     responses:
 *       200:
 *         description: Sector details
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
router.get("/sectors/:id", sectorController.getSectorById);

/**
 * @swagger
 * /api/sectors/{id}:
 *   put:
 *     tags: [Sector]
 *     summary: Update sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Sector ID
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
 *         description: Sector not found
 *       500:
 *         description: Internal server error
*/
router.put("/sectors/:id", sectorController.updateSector);

/**
 * @swagger
 * /api/sectors/{id}:
 *   delete:
 *     tags: [Sector]
 *     summary: Delete sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Sector ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Internal server error
 */
router.delete("/sectors/:id", sectorController.deleteSector);

module.exports = router;
