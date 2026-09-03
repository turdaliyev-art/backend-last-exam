const paymentMethodController = require("../controller/paymentMethodController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: PaymentMethod
 *   description: Payment Method management
 */

/**
 * @swagger
 * /api/payment-methods:
 *   post:
 *     tags: [PaymentMethod]
 *     summary: Create a new payment-method
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Payment Method created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/payment-methods", paymentMethodController.createPaymentMethod);

/**
 * @swagger
 * /api/payment-methods:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Get all payment-methods
 *     responses:
 *       200:
 *         description: List of all payment-methods
 *       500:
 *         description: Server error
 */
router.get("/payment-methods", paymentMethodController.getPaymentMethods);
/**
 * @swagger
 * /api/payment-methods/search:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Search payment methods
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching payment methods
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/payment-methods/search", paymentMethodController.searchPaymentMethods);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Get payment-method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Payment Method ID
 *     responses:
 *       200:
 *         description: Payment Method details
 *       404:
 *         description: Payment Method not found
 *       500:
 *         description: Server error
*/
router.get("/payment-methods/:id", paymentMethodController.getPaymentMethodById);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   put:
 *     tags: [PaymentMethod]
 *     summary: Update payment-method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Payment Method ID
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
 *         description: Payment Method not found
 *       500:
 *         description: Internal server error
 */
router.put("/payment-methods/:id", paymentMethodController.updatePaymentMethod);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   delete:
 *     tags: [PaymentMethod]
 *     summary: Delete payment-method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Payment Method ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Payment Method not found
 *       500:
 *         description: Internal server error
 */
router.delete("/payment-methods/:id", paymentMethodController.deletePaymentMethod);

module.exports = router;
