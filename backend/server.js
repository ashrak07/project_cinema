const express = require("express");
const dotenv = require("dotenv").config();
const { connectionDB } = require("./Config/dbConnection");

connectionDB();
const app = express();
const port = process.env.PORT;

console.log("port ==>", port);

app.use(express.json());
app.use("/cinema", require("./Routes/userRoute"));

app.listen(port, () => {
  console.log(`Serveur running on port ${port} `);
});
