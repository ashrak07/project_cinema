const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const path = require("path");
const { connectionDB } = require("./Config/dbConnection");

connectionDB();
const app = express();
const port = process.env.PORT;

console.log("port ==>", port);

app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/cinema", require("./Routes/userRoute"));

app.use("/cinema", require("./Routes/movieRoute"));

app.use("/cinema", require("./Routes/projectionRoute"));

app.use("/cinema", require("./Routes/reservationRoute"));

app.listen(port, () => {
  console.log(`Serveur running on port ${port} `);
});
