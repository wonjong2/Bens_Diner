const router = require("express").Router();
const { Menu, Order } = require("../models");
const withAuth = require("../../utils/auth");

// PUT route to update cart - display updated cart
router.put("/menu/:id", async (req, res) => {
  try {
    console.log(req.body);
    const updateCart = await insertModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!insertName[0]) {
      res.status(404).json({ message: "No order with this id!" });
      return;
    }
    res.status(200).json(insertName);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE route for deleting items from a cart
router.delete("/menu/:id", async (req, res) => {
  try {
    const deleteItem = await insertModel.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(deleteItem);
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST route for order - send the order in and render the order page
router.post("/order-summary", async (req, res) => {
  try {
    const newOrder = await insertModel.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newOrder);
  } catch (err) {
    res.status(400).json(err);
  }
});
