const customerCardController = require("../controller/customerCardController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: CustomerCard
 *   description: Customer Card management
 */

/**
 * @swagger
 * /api/customer-cards:
 *   post:
 *     tags: [CustomerCard]
 *     summary: Create a new customer-card
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Customer Card created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/customer-cards", customerCardController.createCustomerCard);

/**
 * @swagger
 * /api/customer-cards:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Get all customer-cards
 *     responses:
 *       200:
 *         description: List of all customer-cards
 *       500:
 *         description: Server error
*/
router.get("/customer-cards", customerCardController.getCustomerCards);
/**
 * @swagger
 * /api/customer-cards/search:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Search customer cards
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching customer cards
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/customer-cards/search", customerCardController.searchCustomerCards);

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Get customer-card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer Card ID
 *     responses:
 *       200:
 *         description: Customer Card details
 *       404:
 *         description: Customer Card not found
 *       500:
 *         description: Server error
*/
router.get("/customer-cards/:id", customerCardController.getCustomerCardById);

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   put:
 *     tags: [CustomerCard]
 *     summary: Update customer-card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer Card ID
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
 *         description: Customer Card not found
 *       500:
 *         description: Internal server error
 */
router.put("/customer-cards/:id", customerCardController.updateCustomerCard);

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   delete:
 *     tags: [CustomerCard]
 *     summary: Delete customer-card by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer Card ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Customer Card not found
 *       500:
 *         description: Internal server error
 */
router.delete("/customer-cards/:id", customerCardController.deleteCustomerCard);

module.exports = router;
