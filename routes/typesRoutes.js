const typesController = require("../controller/typesController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Types
 *   description: Type management
 */

/**
 * @swagger
 * /api/types:
 *   post:
 *     tags: [Types]
 *     summary: Create a new type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/types", typesController.createTypes);

/**
 * @swagger
 * /api/types:
 *   get:
 *     tags: [Types]
 *     summary: Get all types
 *     responses:
 *       200:
 *         description: List of all types
 *       500:
 *         description: Server error
*/
router.get("/types", typesController.getTypes);
/**
 * @swagger
 * /api/types/search:
 *   get:
 *     tags: [Types]
 *     summary: Search types
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching types
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/types/search", typesController.searchTypes);

/**
 * @swagger
 * /api/types/{id}:
 *   get:
 *     tags: [Types]
 *     summary: Get type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Type ID
 *     responses:
 *       200:
 *         description: Type details
 *       404:
 *         description: Type not found
 *       500:
 *         description: Server error
*/
router.get("/types/:id", typesController.getTypesById);

/**
 * @swagger
 * /api/types/{id}:
 *   put:
 *     tags: [Types]
 *     summary: Update type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Type ID
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
 *         description: Type not found
 *       500:
 *         description: Internal server error
*/
router.put("/types/:id", typesController.updateTypes);

/**
 * @swagger
 * /api/types/{id}:
 *   delete:
 *     tags: [Types]
 *     summary: Delete type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Type ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Type not found
 *       500:
 *         description: Internal server error
 */
router.delete("/types/:id", typesController.deleteTypes);

module.exports = router;
