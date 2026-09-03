const humanCategoryController = require("../controller/humanCategoryController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: HumanCategory
 *   description: Human category management
 */

/**
 * @swagger
 * /api/human-categories:
 *   post:
 *     tags: [HumanCategory]
 *     summary: Create a new human-categorie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Human Categorie created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/human-categories", humanCategoryController.createHumanCategory);

/**
 * @swagger
 * /api/human-categories:
 *   get:
 *     tags: [HumanCategory]
 *     summary: Get all human-categories
 *     responses:
 *       200:
 *         description: List of all human-categories
 *       500:
 *         description: Server error
 */
router.get("/human-categories", humanCategoryController.getHumanCategories);
/**
 * @swagger
 * /api/human-categories/search:
 *   get:
 *     tags: [HumanCategory]
 *     summary: Search human categories
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching human categories
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/human-categories/search", humanCategoryController.searchHumanCategories);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   get:
 *     tags: [HumanCategory]
 *     summary: Get human-categorie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Human Categorie ID
 *     responses:
 *       200:
 *         description: Human Categorie details
 *       404:
 *         description: Human Categorie not found
 *       500:
 *         description: Server error
 */
router.get("/human-categories/:id", humanCategoryController.getHumanCategoryById);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   put:
 *     tags: [HumanCategory]
 *     summary: Update human-categorie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Human Categorie ID
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
 *         description: Human Categorie not found
 *       500:
 *         description: Internal server error
 */
router.put("/human-categories/:id", humanCategoryController.updateHumanCategory);

/**
 * @swagger
 * /api/human-categories/{id}:
 *   delete:
 *     tags: [HumanCategory]
 *     summary: Delete human-categorie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Human Categorie ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Human Categorie not found
 *       500:
 *         description: Internal server error
 */
router.delete("/human-categories/:id", humanCategoryController.deleteHumanCategory);

module.exports = router;
