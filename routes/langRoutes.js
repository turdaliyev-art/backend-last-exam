const langController = require("../controller/langController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Lang
 *   description: Lang management
 */

/**
 * @swagger
 * /api/langs:
 *   post:
 *     tags: [Lang]
 *     summary: Create a new lang
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Lang created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/langs", langController.createLang);

/**
 * @swagger
 * /api/langs:
 *   get:
 *     tags: [Lang]
 *     summary: Get all langs
 *     responses:
 *       200:
 *         description: List of all langs
 *       500:
 *         description: Server error
 */
router.get("/langs", langController.getLangs);
/**
 * @swagger
 * /api/langs/search:
 *   get:
 *     tags: [Lang]
 *     summary: Search languages
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching languages
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/langs/search", langController.searchLangs);

/**
 * @swagger
 * /api/langs/{id}:
 *   get:
 *     tags: [Lang]
 *     summary: Get lang by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Lang ID
 *     responses:
 *       200:
 *         description: Lang details
 *       404:
 *         description: Lang not found
 *       500:
 *         description: Server error
*/
router.get("/langs/:id", langController.getLangById);

/**
 * @swagger
 * /api/langs/{id}:
 *   put:
 *     tags: [Lang]
 *     summary: Update lang by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Lang ID
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
 *         description: Lang not found
 *       500:
 *         description: Internal server error
 */
router.put("/langs/:id", langController.updateLang);

/**
 * @swagger
 * /api/langs/{id}:
 *   delete:
 *     tags: [Lang]
 *     summary: Delete lang by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Lang ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Lang not found
 *       500:
 *         description: Internal server error
 */
router.delete("/langs/:id", langController.deleteLang);

module.exports = router;
