const express = require("express");
const dotenv = require("dotenv").config();
const http = require("http"); // 👈 Importer http
const { Server } = require("socket.io");
const cors = require("cors");
const path = require("path");
const { connectionDB } = require("./Config/dbConnection");

connectionDB();
const app = express();
const port = process.env.PORT;

// 👇 Créer httpServer à partir d'express
const httpServer = http.createServer(app);

// 👇 Attacher Socket.IO au httpServer
const io = new Server(httpServer, {
  cors: {
    origin: "*", // Adapter selon ton front
  },
});
global.io = io;

console.log("port ==>", port);

app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(cors());

app.use("/cinema", require("./Routes/userRoute"));
app.use("/cinema", require("./Routes/roomRoute"));
app.use("/cinema", require("./Routes/movieRoute"));
app.use("/cinema", require("./Routes/projectionRoute"));
app.use("/cinema", require("./Routes/orderRoute"));

// ⚠️ Démarrer le httpServer (pas app.listen !)
httpServer.listen(port, () => {
  console.log(`Serveur running on port ${port}`);
});
