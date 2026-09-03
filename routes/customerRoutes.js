const customerController = require("../controller/customerController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/customers/login:
 *   post:
 *     tags: [Customer]
 *     summary: Customer login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email: { type: string, format: email }
 *               password: { type: string, format: password }
 *     responses:
 *       200: { description: Login successful }
 *       401: { description: Invalid credentials }
 */
router.post("/customers/login", customerController.loginCustomer);

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer management
 */

/**
 * @swagger
 * /api/customers:
 *   post:
 *     tags: [Customer]
 *     summary: Create a new customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Customer created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/customers", customerController.createCustomer);

/**
 * @swagger
 * /api/customers:
 *   get:
 *     tags: [Customer]
 *     summary: Get all customers
 *     responses:
 *       200:
 *         description: List of all customers
 *       500:
 *         description: Server error
*/
router.get("/customers", customerController.getCustomer);
/**
 * @swagger
 * /api/customers/search:
 *   get:
 *     tags: [Customer]
 *     summary: Search customers by name or email
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query for customer name or email
 *     responses:
 *       200:
 *         description: List of matching customers
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/customers/search", customerController.searchCustomers);

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     tags: [Customer]
 *     summary: Get customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer details
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.get("/customers/:id", customerController.getCustomerById);

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     tags: [Customer]
 *     summary: Update customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer ID
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
 *         description: Customer not found
 *       500:
 *         description: Internal server error
*/
router.put("/customers/:id", customerController.updateCustomer);

/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     tags: [Customer]
 *     summary: Delete customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Internal server error
 */
router.delete("/customers/:id", customerController.deleteCustomer);

module.exports = router;
