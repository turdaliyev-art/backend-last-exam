const deliveryMethodController = require("../controller/deliveryMethodController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: DeliveryMethod
 *   description: Delivery Method management
 */

/**
 * @swagger
 * /api/delivery-methods:
 *   post:
 *     tags: [DeliveryMethod]
 *     summary: Create a new delivery-method
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Delivery Method created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/delivery-methods", deliveryMethodController.createDeliveryMethod);

/**
 * @swagger
 * /api/delivery-methods:
 *   get:
 *     tags: [DeliveryMethod]
 *     summary: Get all delivery-methods
 *     responses:
 *       200:
 *         description: List of all delivery-methods
 *       500:
 *         description: Server error
*/
router.get("/delivery-methods", deliveryMethodController.getDeliveryMethods);
/**
 * @swagger
 * /api/delivery-methods/search:
 *   get:
 *     tags: [DeliveryMethod]
 *     summary: Search delivery methods
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching delivery methods
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/delivery-methods/search", deliveryMethodController.searchDeliveryMethods);

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   get:
 *     tags: [DeliveryMethod]
 *     summary: Get delivery-method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Delivery Method ID
 *     responses:
 *       200:
 *         description: Delivery Method details
 *       404:
 *         description: Delivery Method not found
 *       500:
 *         description: Server error
*/
router.get("/delivery-methods/:id", deliveryMethodController.getDeliveryMethodById);

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   put:
 *     tags: [DeliveryMethod]
 *     summary: Update delivery-method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Delivery Method ID
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
 *         description: Delivery Method not found
 *       500:
 *         description: Internal server error
 */
router.put("/delivery-methods/:id", deliveryMethodController.updateDeliveryMethod);

/**
 * @swagger
 * /api/delivery-methods/{id}:
 *   delete:
 *     tags: [DeliveryMethod]
 *     summary: Delete delivery-method by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Delivery Method ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Delivery Method not found
 *       500:
 *         description: Internal server error
 */
router.delete("/delivery-methods/:id", deliveryMethodController.deleteDeliveryMethod);

module.exports = router;
