const router = require("express").Router();
const { User, Menu, OrderHistory, Categories } = require("../../models");
const withAuth = require("../../utils/auth");
const { orderHistory_to_String } = require("../../utils/helpers");

// POST route for order - send the order in and render the order page
router.post("/order-summary", async (req, res) => {
  try {
    let orderString = orderHistory_to_String(req.body.item_list);

    //Setting date with a random time. The random time corresponds to the approximate time it takes to make the order
    var future_date = new Date();
    future_date.setMinutes(
      future_date.getMinutes() + (Math.floor(Math.random() * 5) + 5)
    );

    const newOrder = await OrderHistory.create({
      item_list: orderString,
      price_total: req.body.price_total,
      user_id: req.session.user_id,
      pickup_time: future_date,
      loggedIn: req.session.logged_in,
    });

    res.status(200).json(newOrder);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE route for cancelling an order
router.delete("/order-summary/:id", async (req, res) => {
  try {
    const deleteOrder = await OrderHistory.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deleteOrder) {
      res.status(404).json({ message: "No order found with this id!" });
      return;
    }

    res.status(200).json(deleteOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
