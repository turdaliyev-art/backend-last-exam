const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { sequelize } = require("./models");
const setupSwagger = require("./swagger/swagger");


const adminRoutes = require("./routes/adminRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const cartItemRoutes = require("./routes/cartItemRoutes");
const cartRoutes = require("./routes/cartRoutes");
const countryRoutes = require("./routes/countryRoutes");
const customerAddressRoutes = require("./routes/customerAddressRoutes");
const customerCardRoutes = require("./routes/customerCardRoutes");
const customerRoutes = require("./routes/customerRoutes");
const deliveryMethodRoutes = require("./routes/deliveryMethodRoutes");
const discountRoutes = require("./routes/discountRoutes");
const districtRoutes = require("./routes/districtRoutes");
const eventRoutes = require("./routes/eventRoutes");
const eventTypeRoutes = require("./routes/eventTypeRoutes");
const flatRoutes = require("./routes/flatRoutes");
const genderRoutes = require("./routes/genderRoutes");
const humanCategoryRoutes = require("./routes/humanCategoryRoutes");
const langRoutes = require("./routes/langRoutes");
const paymentMethodRoutes = require("./routes/paymentMethodRoutes");
const regionRoutes = require("./routes/regionRoutes");
const seatRoutes = require("./routes/seatRoutes");
const seatTypeRoutes = require("./routes/seatTypeRoutes");
const sectorRoutes = require("./routes/sectorRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const ticketStatusRoutes = require("./routes/ticketStatusRoutes");
const ticketTypeRoutes = require("./routes/ticketTypeRoutes");
const typesRoutes = require("./routes/typesRoutes");
const venuePhotoRoutes = require("./routes/venuePhotoRoutes");
const venueRoutes = require("./routes/venueRoutes");
const venueTypesRoutes = require("./routes/venueTypesRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupSwagger(app);

app.use("/api", adminRoutes);
app.use("/api", bookingRoutes);
app.use("/api", cartItemRoutes);
app.use("/api", cartRoutes);
app.use("/api", countryRoutes);
app.use("/api", customerAddressRoutes);
app.use("/api", customerCardRoutes);
app.use("/api", customerRoutes);
app.use("/api", deliveryMethodRoutes);
app.use("/api", discountRoutes);
app.use("/api", districtRoutes);
app.use("/api", eventRoutes);
app.use("/api", eventTypeRoutes);
app.use("/api", flatRoutes);
app.use("/api", genderRoutes);
app.use("/api", humanCategoryRoutes);
app.use("/api", langRoutes);
app.use("/api", paymentMethodRoutes);
app.use("/api", regionRoutes);
app.use("/api", seatRoutes);
app.use("/api", seatTypeRoutes);
app.use("/api", sectorRoutes);
app.use("/api", ticketRoutes);
app.use("/api", ticketStatusRoutes);
app.use("/api", ticketTypeRoutes);
app.use("/api", typesRoutes);
app.use("/api", venuePhotoRoutes);
app.use("/api", venueRoutes);
app.use("/api", venueTypesRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Bazaga ulandi✅");
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server ishlayapti 🚀`);
      console.log(`Local: http://localhost:${PORT}`);
      console.log(`Swagger: http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((err) => console.error("🔴 Server xatosi:", err));