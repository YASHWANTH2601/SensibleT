const express = require("express");
const connectDB = require("./config/db");
const transactions = require("./routes/transactions");
require("dotenv").config();
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/transactions", transactions);
app.get("/", (req, res) => res.send("Hello World!"));

const PORT = process.env.PORT || 5000;
startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
