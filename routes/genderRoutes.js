const genderController = require("../controller/genderController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Gender
 *   description: Gender management
 */

/**
 * @swagger
 * /api/genders:
 *   post:
 *     tags: [Gender]
 *     summary: Create a new gender
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Gender created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/genders", genderController.createGender);

/**
 * @swagger
 * /api/genders:
 *   get:
 *     tags: [Gender]
 *     summary: Get all genders
 *     responses:
 *       200:
 *         description: List of all genders
 *       500:
 *         description: Server error
 */
router.get("/genders", genderController.getGenders);
/**
 * @swagger
 * /api/genders/search:
 *   get:
 *     tags: [Gender]
 *     summary: Search genders
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching genders
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/genders/search", genderController.searchGenders);

/**
 * @swagger
 * /api/genders/{id}:
 *   get:
 *     tags: [Gender]
 *     summary: Get gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Gender ID
 *     responses:
 *       200:
 *         description: Gender details
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Server error
 */
router.get("/genders/:id", genderController.getGenderById);

/**
 * @swagger
 * /api/genders/{id}:
 *   put:
 *     tags: [Gender]
 *     summary: Update gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Gender ID
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
 *         description: Gender not found
 *       500:
 *         description: Internal server error
 */
router.put("/genders/:id", genderController.updateGender);

/**
 * @swagger
 * /api/genders/{id}:
 *   delete:
 *     tags: [Gender]
 *     summary: Delete gender by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Gender ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Gender not found
 *       500:
 *         description: Internal server error
 */
router.delete("/genders/:id", genderController.deleteGender);

module.exports = router;
