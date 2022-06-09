const router = require("express").Router();
const { User, Menu, OrderHistory, Categories } = require("../../models");
const withAuth = require("../../utils/auth");
const orderHistory_to_String = require("../../utils/helpers");

// PUT route to update cart - display updated cart - just kidding local storage
// router.put("/cart/:id", async (req, res) => {
//   try {
//     console.log(req.body);
//     const updateCart = await insertModel.update(req.body, {
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });
//     if (!insertName[0]) {
//       res.status(404).json({ message: "No order with this id!" });
//       return;
//     }
//     res.status(200).json(insertName);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// DELETE route for deleting items from a cart - just kidding local storage
// router.delete("/cart/:id", async (req, res) => {
//   try {
//     const deleteItem = await insertModel.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(deleteItem);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// POST route for order - send the order in and render the order page
router.post("/order-summary", async (req, res) => {
  try {
    console.log(req.body);
    var orderString = "";

    if (req.body.item_list.length == 1) {
      orderString = req.body.item_list[0].toString();
      return orderString;
    }

    for (let i = 0; i < req.body.item_list.length - 1; i++) {
      orderString = orderString + req.body.item_list[i].toString() + ",";
    }

    orderString =
      orderString +
      req.body.item_list[req.body.item_list.length - 1].toString();

    const newOrder = await OrderHistory.create({
      item_list: orderString,
      price_total: req.body.price_total,
      user_id: req.session.user_id,
      pickup_time: new Date() + Math.floor(Math.random() * 15) * 60 * 1000,
    });
    console.log(newOrder);

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
