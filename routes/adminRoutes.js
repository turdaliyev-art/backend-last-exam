const adminController = require("../controller/adminController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin management
 */



/**
 * @swagger
 * /api/admins:
 *   post:
 *     tags: [Admin]
 *     summary: Create a new admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Admin created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/admins", adminController.createAdmin);
/**
 * @swagger
 * /api/admins/login:
 *   post:
 *     tags: [Admin]
 *     summary: Admin login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [login, password]
 *             properties:
 *               login: { type: string }
 *               password: { type: string, format: password }
 *     responses:
 *       200: { description: Login successful }
 *       401: { description: Invalid credentials }
 */
router.post("/admins/login", adminController.loginAdmin);

/**
 * @swagger
 * /api/admins:
 *   get:
 *     tags: [Admin]
 *     summary: Get all admins
 *     responses:
 *       200:
 *         description: List of all admins
 *       500:
 *         description: Server error
*/
router.get("/admins", adminController.getAdmins);
/**
 * @swagger
 * /api/admins/search:
 *   get:
 *     tags: [Admin]
 *     summary: Search admins
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching admins
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/admins/search", adminController.searchAdmins);

/**
 * @swagger
 * /api/admins/{id}:
 *   get:
 *     tags: [Admin]
 *     summary: Get admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Admin details
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */

router.get("/admins/:id", adminController.getAdminById);
/**
 * @swagger
 * /api/admins/{id}:
 *   put:
 *     tags: [Admin]
 *     summary: Update admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Admin ID
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
 *         description: Admin not found
 *       500:
 *         description: Internal server error
 */
router.put("/admins/:id", adminController.updateAdmin);

/**
 * @swagger
 * /api/admins/{id}:
 *   delete:
 *     tags: [Admin]
 *     summary: Delete admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Internal server error
 */
router.delete("/admins/:id", adminController.deleteAdmin);

module.exports = router;
