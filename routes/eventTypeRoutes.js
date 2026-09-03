const eventTypeController = require("../controller/eventTypeController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: EventType
 *   description: Event Type management
 */

/**
 * @swagger
 * /api/event-types:
 *   post:
 *     tags: [EventType]
 *     summary: Create a new event-type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Event Type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
*/
router.post("/event-types", eventTypeController.createEventType);

/**
 * @swagger
 * /api/event-types:
 *   get:
 *     tags: [EventType]
 *     summary: Get all event-types
 *     responses:
 *       200:
 *         description: List of all event-types
 *       500:
 *         description: Server error
*/
router.get("/event-types", eventTypeController.getEventTypes);
/**
 * @swagger
 * /api/event-types/search:
 *   get:
 *     tags: [EventType]
 *     summary: Search event types
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         schema:
 *           type: string
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of matching event types
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/event-types/search", eventTypeController.searchEventTypes);

/**
 * @swagger
 * /api/event-types/{id}:
 *   get:
 *     tags: [EventType]
 *     summary: Get event-type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event Type ID
 *     responses:
 *       200:
 *         description: Event Type details
 *       404:
 *         description: Event Type not found
 *       500:
 *         description: Server error
 */
router.get("/event-types/:id", eventTypeController.getEventTypeById);

/**
 * @swagger
 * /api/event-types/{id}:
 *   put:
 *     tags: [EventType]
 *     summary: Update event-type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event Type ID
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
 *         description: Event Type not found
 *       500:
 *         description: Internal server error
 */
router.put("/event-types/:id", eventTypeController.updateEventType);

/**
 * @swagger
 * /api/event-types/{id}:
 *   delete:
 *     tags: [EventType]
 *     summary: Delete event-type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event Type ID
 *     responses:
 *       200:
 *         description: Deleted successfully
 *       404:
 *         description: Event Type not found
 *       500:
 *         description: Internal server error
 */
router.delete("/event-types/:id", eventTypeController.deleteEventType);

module.exports = router;
