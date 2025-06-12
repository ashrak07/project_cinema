const express = require("express");
const {
  createOrder,
  deleteOrderById,
  getAllOrder,
  getOrderById,
  getOrderByProjectionId,
} = require("../Controllers/orderController");

const router = express.Router();

router.post("/order/", createOrder);

router.delete("/order/:id", deleteOrderById);

router.get("/order/all", getAllOrder);

router.get("/order/:id", getOrderByProjectionId);

router.get("/order/:id", getOrderById);

module.exports = router;
