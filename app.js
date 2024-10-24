const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Initialize Express app
const app = express();

// Load environment variables
dotenv.config();

// Connect to the database
const connectDB = require("./config/db");
connectDB();

// Middleware to handle JSON payloads with increased limit
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Apply CORS middleware
app.use(cors());

// Import routes
const empRoutes = require("./routes/emp-Routes");
const authRoutes = require("./routes/admin-route");
const offerRoutes = require("./routes/offers-route");
const categorieRoute = require("./routes/categories-route");
const subCategorieRoute = require("./routes/sub-categories-route");
const reviewsRoute = require("./routes/reviews-route");
const bookingRoutes = require("./routes/booking-route");
const reportRoutes = require("./routes/report-route");

// Define routes
app.use("/v1/emp", empRoutes);
app.use("/v1/admin", authRoutes);
app.use("/v1/offer", offerRoutes);
app.use("/v1/categorie", categorieRoute);
app.use("/v1/reviews", reviewsRoute);
app.use("/v1/booking", bookingRoutes);

// v2 engine version routes
app.use("/v2/categorie", subCategorieRoute);
app.use("/v2/reports", reportRoutes);

// Error handling middleware (optional, but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error In App File' });
});

module.exports = app;
