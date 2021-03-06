const router = require("express").Router();
const { User, Menu, OrderHistory, Categories } = require("../models");
const withAuth = require("../utils/auth");
const { orderHistory_to_Array } = require("../utils/helpers");

// GET for the homepage
router.get("/", async (req, res) => {
  try {
    res.render("landing-page");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET route for order status (will need withAuth), ID is order number
router.get("/orderhistory/:id", async (req, res) => {
  try {
    const findOrder = await OrderHistory.findByPk(req.params.id, {
      include: [
        {
          model: User,
        },
      ],
    });

    if (!findOrder) {
      res.status(400).json({ message: "No Order Found with this ID!" });
      return;
    }

    // console.log(findOrder);
    const getOrderStatus = findOrder.get({ plain: true });
    console.log("Get order status is:", getOrderStatus);

    var item_list_array = orderHistory_to_Array(getOrderStatus.item_list);
    console.log(`item_list_array is: `, item_list_array);

    try {
      var menu_list_all = [];

      for (let i = 0; i < item_list_array.length; i++) {
        let curr_item = await Menu.findByPk(item_list_array[i]);
        console.log(curr_item);
        menu_list_all.push(curr_item);
      }

      console.log("Menu list all is: ", menu_list_all);
      var menu_list = menu_list_all.map((item) => item.get({ plain: true }));
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

    if (req.session.user_id != getOrderStatus.user.user_id) {
      res.status(500).json({ message: "This is not your order!" });
      return;
    }

    //to check with Insomnia
    // res.status(200).json(getOrderStatus);
    res.render("order-summary", {
      getOrderStatus,
      menu_list,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Sign-Up GET route
// router.get("/sign-up", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/main-page");
//     return;
//   }
//   res.render("sign-up");
// });

// // Login GET route
// router.get("/", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/insert page to redirect to");
//     return;
//   }
//   res.render("homepage");
// });

module.exports = router;