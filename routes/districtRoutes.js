const districtController = require("../controller/districtController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: District
 *   description: District management
 */

/**
 * @swagger
 * /api/districts:
 *   post:
 *     tags: [District]
 *     summary: Create a new district
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: District created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/districts", districtController.createDistrict);

/**
 * @swagger
 * /api/districts:
 *   get:
 *     tags: [District]
 *     summary: Get all districts
 *     responses:
 *       200:
 *         description: List of all districts
 *       500:
 *         description: Server error
 */
router.get("/districts", districtController.getDistricts);
/**
 * @swagger
 * /api/districts/search:
 *   get:
 *     tags: [District]
 *     summary: Search districts
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching districts
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/districts/search", districtController.searchDistricts);

/**
 * @swagger
 * /api/districts/{id}:
 *   get:
 *     tags: [District]
 *     summary: Get district by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: District ID
 *     responses:
 *       200:
 *         description: District details
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
router.get("/districts/:id", districtController.getDistrictById);

/**
 * @swagger
 * /api/districts/{id}:
 *   put:
 *     tags: [District]
 *     summary: Update district by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: District ID
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
 *         description: District not found
 *       500:
 *         description: Internal server error
 */
router.put("/districts/:id", districtController.updateDistrict);

/**
 * @swagger
 * /api/districts/{id}:
 *   delete:
 *     tags: [District]
 *     summary: Delete district by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: District ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: District not found
 *       500:
 *         description: Internal server error
 */
router.delete("/districts/:id", districtController.deleteDistrict);

module.exports = router;
