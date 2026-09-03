const cartItemController = require("../controller/cartItemController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: CartItem
 *   description: Cart Item management
 */

/**
 * @swagger
 * /api/cart-items:
 *   post:
 *     tags: [CartItem]
 *     summary: Create a new cart-item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Cart Item created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/cart-items", cartItemController.createCartItem);

/**
 * @swagger
 * /api/cart-items:
 *   get:
 *     tags: [CartItem]
 *     summary: Get all cart-items
 *     responses:
 *       200:
 *         description: List of all cart-items
 *       500:
 *         description: Server error
 */
router.get("/cart-items", cartItemController.getCartItems);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   get:
 *     tags: [CartItem]
 *     summary: Get cart-item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cart Item ID
 *     responses:
 *       200:
 *         description: Cart Item details
 *       404:
 *         description: Cart Item not found
 *       500:
 *         description: Server error
*/
router.get("/cart-items/:id", cartItemController.getCartItemById);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   put:
 *     tags: [CartItem]
 *     summary: Update cart-item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cart Item ID
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
 *         description: Cart Item not found
 *       500:
 *         description: Internal server error
 */
router.put("/cart-items/:id", cartItemController.updateCartItem);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   delete:
 *     tags: [CartItem]
 *     summary: Delete cart-item by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cart Item ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Cart Item not found
 *       500:
 *         description: Internal server error
 */
router.delete("/cart-items/:id", cartItemController.deleteCartItem);

module.exports = router;
