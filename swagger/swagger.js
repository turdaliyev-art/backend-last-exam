const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const routesGlob = `${__dirname.replace(/\\/g, "/")}/../routes/*.js`;

const requestExamples = {
    "/api/admins": {
        post: { name: "Alice Admin", login: "alice", hashed_password: "password123", is_active: true, is_creator: false },
    },
    "/api/bookings": {
        post: { cart_id: 1, payment_method_id: 1, delivery_method_id: 1, discount_id: null, status_id: 1 },
        put: { status_id: 2, payment_method_id: 1 },
    },
    "/api/carts": {
        post: { customer_id: 1, status_id: 1, fineshedAt: null },
        put: { status_id: 2, fineshedAt: "2026-09-03T18:00:00.000Z" },
    },
    "/api/cart-items": {
        post: { ticket_id: 1, cart_id: 1 },
        put: { ticket_id: 2 },
    },
    "/api/countries": { post: { country_name: "Uzbekistan" }, put: { country_name: "Republic of Uzbekistan" } },
    "/api/customer-addresses": {
        post: { customer_id: 1, name: "Home", region_id: 1, district_id: 1, street: "Main Street", house: "12A", flat_id: 4, location: "41.3,69.2", post_index: "100000", info: "Near the park" },
        put: { street: "Updated Street", house: "14B", info: "Updated delivery instructions" },
    },
    "/api/customer-cards": {
        post: { customer_id: 1, name: "Jane Doe", phone: "+998901234567", number: "4111111111111111", year: "2028", month: "09", is_active: true, is_main: true },
        put: { is_active: false, is_main: false },
    },
    "/api/delivery-methods": { post: { name: "Courier delivery" }, put: { name: "Express courier delivery" } },
    "/api/discounts": { post: { discount: "10%", finish_date: "2026-12-31T23:59:59.000Z" }, put: { discount: "15%", finish_date: "2027-01-31T23:59:59.000Z" } },
    "/api/districts": { post: { name: "Yunusabad", region_id: 1 }, put: { name: "Yunusabad District", region_id: 2 } },
    "/api/events": {
        post: { name: "Live Concert", photo: "concert.jpg", start_date: "2026-10-01T00:00:00.000Z", start_time: "19:00:00", finish_date: "2026-10-01T00:00:00.000Z", finish_time: "22:00:00", info: "Main concert", event_type_id: 1, human_category_id: 1, venue_id: 1, lang_id: 1, release_date: "2026-09-10T00:00:00.000Z" },
        put: { name: "Updated Live Concert", start_time: "20:00:00", venue_id: 2 },
    },
    "/api/event-types": { post: { name: "Concert", parent_event_type_id: null }, put: { name: "Music Concert", parent_event_type_id: 1 } },
    "/api/flats": { post: { etaj: 3, condition: "Available" }, put: { etaj: 4, condition: "Occupied" } },
    "/api/genders": { post: { name: "Female" }, put: { name: "Woman" } },
    "/api/human-categories": { post: { name: "Adult", start_age: 18, finish_age: 64, gender_id: 1 }, put: { name: "Senior Adult", start_age: 25, finish_age: 70, gender_id: 1 } },
    "/api/langs": { post: { name: "English" }, put: { name: "English (US)" } },
    "/api/payment-methods": { post: { name: "Visa" }, put: { name: "Visa / Mastercard" } },
    "/api/regions": { post: { name: "Tashkent" }, put: { name: "Tashkent Region" } },
    "/api/seats": { post: { sector_id: 1, row_number: 3, number: 12, venue_id: 1, seat_type_id: 1, location_in_schema: "A3-12" }, put: { row_number: 4, number: 13, location_in_schema: "A4-13" } },
    "/api/seat-types": { post: { name: "VIP" }, put: { name: "Premium VIP" } },
    "/api/sectors": { post: { sector_name: "North Sector" }, put: { sector_name: "North Premium Sector" } },
    "/api/tickets": { post: { event_id: 1, seat_id: 12, price: 150000, service_fee: 15000, status_id: 1, ticket_type_id: 1 }, put: { price: 175000, status_id: 2 } },
    "/api/ticket-statuses": { post: { name: "Available" }, put: { name: "Sold" } },
    "/api/ticket-types": { post: { ticket_type: "Standard" }, put: { ticket_type: "VIP" } },
    "/api/types": { post: { name: "Stadium" }, put: { name: "Concert Hall" } },
    "/api/venues": { post: { name: "City Arena", address: "1 Central Avenue", location: "41.3,69.2", site: "https://cityarena.example", phone: "+998712223344", schema: "arena-schema.json", region_id: 1, district_id: 1 }, put: { address: "2 Central Avenue", phone: "+998719998877", district_id: 2 } },
    "/api/venue-photos": { post: { venue_id: 1, url: "https://example.com/venue.jpg" }, put: { url: "https://example.com/venue-updated.jpg" } },
    "/api/venue-types": { post: { venue_id: 1, type_id: 1 }, put: { venue_id: 2, type_id: 2 } },
    "/api/customers": {
        post: { first_name: "Jane", last_name: "Doe", phone: "+998901234567", hashed_password: "password123", email: "jane@example.com", birth_date: "1995-05-10T00:00:00.000Z", gender_id: 1, lang_id: 1 },
        put: { phone: "+998909876543", lang_id: 2 },
    },
};

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Express API with Swagger",
            version: "1.0.0",
        },
        tags: [
            { name: "Admin", description: "Admin management" },
            { name: "Customer", description: "Customer management" },
            { name: "Bookings", description: "Booking management" },
            { name: "Country", description: "Country management" },
            { name: "CustomerAddress", description: "Customer address management" },
            { name: "HumanCategory", description: "Human category management" },
            { name: "TicketStatus", description: "Ticket status management" },
            { name: "Types", description: "Type management" },
        ],
    },
    apis: [routesGlob],
};

const swaggerSpec = swaggerJsDoc(options);

Object.entries(requestExamples).forEach(([routePath, methods]) => {
    Object.entries(methods).forEach(([method, example]) => {
        const operation = swaggerSpec.paths[routePath]?.[method];
        const mediaType = operation?.requestBody?.content?.["application/json"];
        if (mediaType) mediaType.example = example;
    });
});

const operationOrder = (path, method) => {
    if (method === "post" && !path.endsWith("/login")) return 0;
    if (path.endsWith("/login")) return 1;
    if (method === "get" && path.endsWith("/search")) return 4;
    if (method === "get" && !path.includes("{")) return 2;
    if (method === "get" && path.includes("{")) return 3;
    if (method === "put") return 5;
    if (method === "delete") return 6;
    return 99;
};

const setupSwagger = (app) => {
    app.get("/swagger.json", (req, res) => res.json(swaggerSpec));
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
        customCss: ".swagger-ui .opblock-tag { font-size: 20px; }",
        tagsSorter: (a, b) => (options.definition.tags.findIndex((tag) => tag.name === a) - options.definition.tags.findIndex((tag) => tag.name === b)),
        operationsSorter: (a, b) => operationOrder(a.get("path"), a.get("method")) - operationOrder(b.get("path"), b.get("method")),
    }));
};

module.exports = setupSwagger;
