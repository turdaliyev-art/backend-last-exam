const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Booking = require("./booking.model")(sequelize, DataTypes);
const DeliveryMethod = require("./deliveryMethod.model")(sequelize, DataTypes);
const Discount = require("./discount.model")(sequelize, DataTypes);
const PaymentMethod = require("./paymentMethod.model")(sequelize, DataTypes);
const CartItem = require("./cartItem.model")(sequelize, DataTypes);
const TicketStatus = require("./ticketStatus.model")(sequelize, DataTypes);
const Ticket = require("./ticket.model")(sequelize, DataTypes);
const Event = require("./event.model")(sequelize, DataTypes);
const EventType = require("./eventType.model")(sequelize, DataTypes);
const HumanCategory = require("./humanCategory.model")(sequelize, DataTypes);
const Cart = require("./cart.model")(sequelize, DataTypes);
const TicketType = require("./ticketType.model")(sequelize, DataTypes);
const Customer = require("./customer.model")(sequelize, DataTypes);
const CustomerCard = require("./customerCard.model")(sequelize, DataTypes);
const CustomerAddress = require("./customerAdress.model")(sequelize, DataTypes);
const Admin = require("./admin.model")(sequelize, DataTypes);
const Flat = require("./flat.model")(sequelize, DataTypes);
const Seat = require("./seat.model")(sequelize, DataTypes);
const SeatType = require("./seatType.model")(sequelize, DataTypes);
const Gender = require("./gender.model")(sequelize, DataTypes);
const Sector = require("./sector.model")(sequelize, DataTypes);
const Venue = require("./venue.model")(sequelize, DataTypes);
const VenuePhoto = require("./venuePhoto.model")(sequelize, DataTypes);
const VenueTypes = require("./venueTypes.model")(sequelize, DataTypes);
const Types = require("./types.model")(sequelize, DataTypes);
const District = require("./district.model")(sequelize, DataTypes);
const Region = require("./region.model")(sequelize, DataTypes);
const Lang = require("./lang.model")(sequelize, DataTypes);
const Country = require("./country.model")(sequelize, DataTypes);

Booking.associate(sequelize.models);
DeliveryMethod.associate(sequelize.models);
Discount.associate(sequelize.models);
PaymentMethod.associate(sequelize.models);
CartItem.associate(sequelize.models);
TicketStatus.associate(sequelize.models);
Ticket.associate(sequelize.models);
Event.associate(sequelize.models);
EventType.associate(sequelize.models);
HumanCategory.associate(sequelize.models);
Cart.associate(sequelize.models);
TicketType.associate(sequelize.models);
Customer.associate(sequelize.models);
CustomerCard.associate(sequelize.models);
CustomerAddress.associate(sequelize.models);
Flat.associate(sequelize.models);
Seat.associate(sequelize.models);
SeatType.associate(sequelize.models);
Gender.associate(sequelize.models);
Sector.associate(sequelize.models);
Venue.associate(sequelize.models);
VenuePhoto.associate(sequelize.models);
VenueTypes.associate(sequelize.models);
Types.associate(sequelize.models);
District.associate(sequelize.models);
Region.associate(sequelize.models);
Lang.associate(sequelize.models);

module.exports = {
    Booking,
    DeliveryMethod,
    Discount,
    PaymentMethod,
    CartItem,
    TicketStatus,
    Ticket,
    Event,
    EventType,
    HumanCategory,
    Cart,
    TicketType,
    Customer,
    CustomerCard,
    CustomerAddress,
    Admin,
    Flat,
    Seat,
    SeatType,
    Gender,
    Sector,
    Venue,
    VenuePhoto,
    VenueTypes,
    Types,
    District,
    Region,
    Lang,
    Country,
    sequelize
};