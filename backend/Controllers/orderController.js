const asyncHandler = require("express-async-handler");
const Orders = require("../Models/orderModel");

const createOrder = asyncHandler(async (req, res) => {
  try {
    const { projection, seats, client, clientName, clientEmail } = req.body;

    console.log("request =>", req.body);

    // 1. Vérifie si les places sont déjà prises pour la projection
    const orders = await Orders.find({ projection });
    const takenSeats = orders.flatMap((o) => o.seats);

    // 2. Vérifie s’il y a un conflit
    const conflictSeats = seats.filter((seat) => takenSeats.includes(seat));

    if (conflictSeats.length > 0) {
      return res.status(409).json({
        message: "Certaines places sont déjà réservées",
        conflictSeats,
      });
    }

    // 3. Sinon, crée la commande
    const order = new Orders({
      projection,
      seats,
      client,
      clientName,
      clientEmail,
    });
    await order.save();

    // 4. Émet WebSocket pour mettre à jour tous les clients
    const allOrders = await Orders.find({ projection });
    const allSeats = allOrders.flatMap((o) => o.seats);
    global.io.emit("updateTakenSeats", {
      projectionId: projection,
      seats: allSeats,
    });

    res.status(200).json({
      message: "Réservation réussie",
      data: order,
      takenSeats: allSeats,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

const getAllOrder = asyncHandler(async (req, res) => {
  try {
    const order = await Orders.find();
    res.status(200).json({
      message: "order list",
      data: order,
      count: order.length,
    });
  } catch (error) {
    console.error(error);
  }
});

const getOrderById = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const order = await Orders.findById({ _id: id });
    res.status(200).json({
      data: order,
    });
  } catch (error) {
    console.error(error);
  }
});

const getOrderByProjectionId = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    const order = await Orders.find({ projection: id });
    console.log("io order =>", order);
    const seat = order.map((s) => s.seats);
    console.log("seat ==>", seat);
    const seats = seat.toString().split(",");
    console.log("seats ==>", seats);

    res.status(200).json({
      message: "order list by projectionId",
      // data: order,
      seat: seats,
    });
  } catch (error) {
    console.error(error);
  }
});

const deleteOrderById = asyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    await Orders.deleteOne({ _id: id });

    const remainingOrder = await Orders.find();
    res.status(200).json({
      message: "order list",
      data: remainingOrder,
      count: remainingOrder.length,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = {
  createOrder,
  getAllOrder,
  getOrderById,
  deleteOrderById,
  getOrderByProjectionId,
};
