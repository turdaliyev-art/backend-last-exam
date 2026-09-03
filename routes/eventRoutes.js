const eventController = require("../controller/eventController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Event
 *   description: Event management
 */

/**
 * @swagger
 * /api/events:
 *   post:
 *     tags: [Event]
 *     summary: Create a new event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Event created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/events", eventController.createEvent);

/**
 * @swagger
 * /api/events:
 *   get:
 *     tags: [Event]
 *     summary: Get all events
 *     responses:
 *       200:
 *         description: List of all events
 *       500:
 *         description: Server error
 */
router.get("/events", eventController.getEvents);
/**
 * @swagger
 * /api/events/search:
 *   get:
 *     tags: [Event]
 *     summary: Search events
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching events
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/events/search", eventController.searchEvents);

/**
 * @swagger
 * /api/events/{id}:
 *   get:
 *     tags: [Event]
 *     summary: Get event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event details
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server error
 */
router.get("/events/:id", eventController.getEventById);

/**
 * @swagger
 * /api/events/{id}:
 *   put:
 *     tags: [Event]
 *     summary: Update event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
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
 *         description: Event not found
 *       500:
 *         description: Internal server error
 */
router.put("/events/:id", eventController.updateEvent);

/**
 * @swagger
 * /api/events/{id}:
 *   delete:
 *     tags: [Event]
 *     summary: Delete event by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Event not found
 *       500:
 *         description: Internal server error
 */
router.delete("/events/:id", eventController.deleteEvent);

module.exports = router;
