const router = require("express").Router();
const { User, Menu, Order } = require("../models");
const withAuth = require("../utils/auth");

// GET for the homepage
router.get("/", async (req, res) => {
  try {
    const insertName = await insertModel.findAll({
      include: [
        {
          model: insertModel,
          attributes: ["insertAttributes"],
        },
      ],
    });

    const insertname = insertName.map((insertname) =>
      insertname.get({ plain: true })
    );
    res.render("homepage", {
      insertname,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET route for order status
router.get("/:id", async (req, res) => {
  try {
    const findOrder = await insertModel.findByPk(req.params.id, {
      include: [
        {
          model: insertModel,
          attributes: ["insertAttributes"],
        },
      ],
    });

    const getOrderStatus = findOrder.map((order) => order.get({ plain: true }));
    res.render("order-summary", {
      getOrderStatus,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Sign-Up GET route
router.get("/sign-up", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/insert page to redirect to");
    return;
  }
  res.render("sign-up");
});

// // Login GET route
// router.get("/", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/insert page to redirect to");
//     return;
//   }
//   res.render("homepage");
// });

module.exports = router;
