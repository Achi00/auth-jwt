require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const loginRoutes = require("./routes/AuthRoute");

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// for auth
app.use("/auth", loginRoutes);

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
