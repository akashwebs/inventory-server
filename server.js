const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
mongoose.set("strictQuery", false);
const app = require("./app");

// database connection
mongoose
  .connect(process.env.DATABASE_LOCAL, { useNewUrlParser: true })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));
// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
