const countryController = require("../controller/countryController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Country
 *   description: Country management
 */

/**
 * @swagger
 * /api/countries:
 *   post:
 *     tags: [Country]
 *     summary: Create a new countrie
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Countrie created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/countries", countryController.createCountry);

/**
 * @swagger
 * /api/countries:
 *   get:
 *     tags: [Country]
 *     summary: Get all countries
 *     responses:
 *       200:
 *         description: List of all countries
 *       500:
 *         description: Server error
 */
router.get("/countries", countryController.getCountries);
/**
 * @swagger
 * /api/countries/search:
 *   get:
 *     tags: [Country]
 *     summary: Search countries
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching countries
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/countries/search", countryController.searchCountries);

/**
 * @swagger
 * /api/countries/{id}:
 *   get:
 *     tags: [Country]
 *     summary: Get countrie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Countrie ID
 *     responses:
 *       200:
 *         description: Countrie details
 *       404:
 *         description: Countrie not found
 *       500:
 *         description: Server error
 */
router.get("/countries/:id", countryController.getCountryById);

/**
 * @swagger
 * /api/countries/{id}:
 *   put:
 *     tags: [Country]
 *     summary: Update countrie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Countrie ID
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
 *         description: Countrie not found
 *       500:
 *         description: Internal server error
 */
router.put("/countries/:id", countryController.updateCountry);

/**
 * @swagger
 * /api/countries/{id}:
 *   delete:
 *     tags: [Country]
 *     summary: Delete countrie by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Countrie ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Countrie not found
 *       500:
 *         description: Internal server error
 */
router.delete("/countries/:id", countryController.deleteCountry);

module.exports = router;
