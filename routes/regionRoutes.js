const regionController = require("../controller/regionController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Region
 *   description: Region management
 */

/**
 * @swagger
 * /api/regions:
 *   post:
 *     tags: [Region]
 *     summary: Create a new region
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Region created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/regions", regionController.createRegion);

/**
 * @swagger
 * /api/regions:
 *   get:
 *     tags: [Region]
 *     summary: Get all regions
 *     responses:
 *       200:
 *         description: List of all regions
 *       500:
 *         description: Server error
 */
router.get("/regions", regionController.getRegions);
/**
 * @swagger
 * /api/regions/search:
 *   get:
 *     tags: [Region]
 *     summary: Search regions
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching regions
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/regions/search", regionController.searchRegions);

/**
 * @swagger
 * /api/regions/{id}:
 *   get:
 *     tags: [Region]
 *     summary: Get region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Region ID
 *     responses:
 *       200:
 *         description: Region details
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
router.get("/regions/:id", regionController.getRegionById);

/**
 * @swagger
 * /api/regions/{id}:
 *   put:
 *     tags: [Region]
 *     summary: Update region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Region ID
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
 *         description: Region not found
 *       500:
 *         description: Internal server error
 */
router.put("/regions/:id", regionController.updateRegion);

/**
 * @swagger
 * /api/regions/{id}:
 *   delete:
 *     tags: [Region]
 *     summary: Delete region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Region ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Region not found
 *       500:
 *         description: Internal server error
 */
router.delete("/regions/:id", regionController.deleteRegion);

module.exports = router;
