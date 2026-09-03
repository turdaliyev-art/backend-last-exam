const customerAddressController = require("../controller/customerAddressController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: CustomerAddress
 *   description: Customer address management
 */

/**
 * @swagger
 * /api/customer-addresses:
 *   post:
 *     tags: [CustomerAddress]
 *     summary: Create a new customer-addresse
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Customer Addresse created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/customer-addresses", customerAddressController.createCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get all customer-addresses
 *     responses:
 *       200:
 *         description: List of all customer-addresses
 *       500:
 *         description: Server error
 */
router.get("/customer-addresses", customerAddressController.getCustomerAddresses);
/**
 * @swagger
 * /api/customer-addresses/search:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Search customer addresses
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching customer addresses
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/customer-addresses/search", customerAddressController.searchCustomerAddresses);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get customer-addresse by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer Addresse ID
 *     responses:
 *       200:
 *         description: Customer Addresse details
 *       404:
 *         description: Customer Addresse not found
 *       500:
 *         description: Server error
 */
router.get("/customer-addresses/:id", customerAddressController.getCustomerAddressById);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   put:
 *     tags: [CustomerAddress]
 *     summary: Update customer-addresse by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer Addresse ID
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
 *         description: Customer Addresse not found
 *       500:
 *         description: Internal server error
 */
router.put("/customer-addresses/:id", customerAddressController.updateCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   delete:
 *     tags: [CustomerAddress]
 *     summary: Delete customer-addresse by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer Addresse ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Customer Addresse not found
 *       500:
 *         description: Internal server error
 */
router.delete("/customer-addresses/:id", customerAddressController.deleteCustomerAddress);

module.exports = router;
