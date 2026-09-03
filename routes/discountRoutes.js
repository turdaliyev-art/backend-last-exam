const discountController = require("../controller/discountController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Discount
 *   description: Discount management
*/

/**
 * @swagger
 * /api/discounts:
 *   post:
 *     tags: [Discount]
 *     summary: Create a new discount
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Discount created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/discounts", discountController.createDiscount);

/**
 * @swagger
 * /api/discounts:
 *   get:
 *     tags: [Discount]
 *     summary: Get all discounts
 *     responses:
 *       200:
 *         description: List of all discounts
 *       500:
 *         description: Server error
*/
router.get("/discounts", discountController.getDiscounts);
/**
 * @swagger
 * /api/discounts/search:
 *   get:
 *     tags: [Discount]
 *     summary: Search discounts
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching discounts
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/discounts/search", discountController.searchDiscounts);

/**
 * @swagger
 * /api/discounts/{id}:
 *   get:
 *     tags: [Discount]
 *     summary: Get discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Discount ID
 *     responses:
 *       200:
 *         description: Discount details
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
*/
router.get("/discounts/:id", discountController.getDiscountById);

/**
 * @swagger
 * /api/discounts/{id}:
 *   put:
 *     tags: [Discount]
 *     summary: Update discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Discount ID
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
 *         description: Discount not found
 *       500:
 *         description: Internal server error
*/
router.put("/discounts/:id", discountController.updateDiscount);

/**
 * @swagger
 * /api/discounts/{id}:
 *   delete:
 *     tags: [Discount]
 *     summary: Delete discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Discount ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Internal server error
 */
router.delete("/discounts/:id", discountController.deleteDiscount);

module.exports = router;
