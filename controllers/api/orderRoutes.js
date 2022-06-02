const router = require("express").Router();
const { Order } = require("../models");
const withAuth = require("../../utils/auth");

// GET route for menu page
router.get("/menu", async (req, res) => {
  res.render("menu");
});

// PUT route to update cart - display updated cart
router.put("/menu", async (req, res) => {
  res.render("");
});

// POST route for order - send the order in and render the order page
router.post("/order-page", async (req, res) => {
  res.render("");
});
