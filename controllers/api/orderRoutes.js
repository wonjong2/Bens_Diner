const router = require("express").Router();
const { User, Menu, OrderHistory, Categories } = require("../../models");
const withAuth = require("../../utils/auth");

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
    const newOrder = await OrderHistory.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newOrder);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE route for deleting items from a cart
router.delete("/order-summary/:id", async (req, res) => {
  try {
    const deleteOrder = await OrderHistory.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
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
