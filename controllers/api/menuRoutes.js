const router = require("express").Router();
const { User, Menu, OrderHistory, Categories } = require("../../models");
const withAuth = require("../../utils/auth");

// GET route for menu page
router.get("/", async (req, res) => {
  try {
    const getMenu = await Menu.findAll({
      // include: [
      //   {
      //     model: Categories,
      //   },
      // ],
    });

    const makeMenu = getMenu.map((menu) => menu.get({ plain: true }));
    res.status(200).json(makeMenu);
    // res.render("menu", {
    //   makeMenu,
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET route for clicked on section of the menu
router.get("/:id", async (req, res) => {
  try {
    const getMenuCategory = await Categories.findByPk(req.params.id, {
      include: [
        {
          model: Menu,
        },
      ],
    });

    const makeMenuCategory = getMenuCategory.get({ plain: true });

    res.status(200).json(makeMenuCategory);
    // res.render("menu", {
    //   makeMenuCategory,
    // });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
