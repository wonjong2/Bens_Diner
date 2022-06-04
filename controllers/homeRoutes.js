const router = require("express").Router();
const { User, Menu, OrderHistory, Categories } = require("../models");
const withAuth = require("../utils/auth");

// GET for the homepage
router.get("/", async (req, res) => {
  try {
    res.render("landing-page");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET route for order status
router.get("/:id", async (req, res) => {
  try {
    const findOrder = await OrderHistory.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });

    console.log(findOrder);
    const getOrderStatus = findOrder.get({ plain: true });
    // res.status(200).json(getOrderStatus);
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
