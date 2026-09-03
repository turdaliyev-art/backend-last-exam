const cartController = require("../controller/cartController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart management
 */

/**
 * @swagger
 * /api/carts:
 *   post:
 *     tags: [Cart]
 *     summary: Create a new cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Cart created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/carts", cartController.createCart);

/**
 * @swagger
 * /api/carts:
 *   get:
 *     tags: [Cart]
 *     summary: Get all carts
 *     responses:
 *       200:
 *         description: List of all carts
 *       500:
 *         description: Server error
*/
router.get("/carts", cartController.getCarts);

/**
 * @swagger
 * /api/carts/{id}:
 *   get:
 *     tags: [Cart]
 *     summary: Get cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cart ID
 *     responses:
 *       200:
 *         description: Cart details
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
router.get("/carts/:id", cartController.getCartById);

/**
 * @swagger
 * /api/carts/{id}:
 *   put:
 *     tags: [Cart]
 *     summary: Update cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cart ID
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
 *         description: Cart not found
 *       500:
 *         description: Internal server error
*/
router.put("/carts/:id", cartController.updateCart);

/**
 * @swagger
 * /api/carts/{id}:
 *   delete:
 *     tags: [Cart]
 *     summary: Delete cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Cart ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Internal server error
 */
router.delete("/carts/:id", cartController.deleteCart);

module.exports = router;
