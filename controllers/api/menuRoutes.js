const router = require("express").Router();
const { User, Menu, OrderHistory, Categories } = require("../../models");
const withAuth = require("../../utils/auth");

// GET route for clicked on section of the menu
router.get("/:id", async (req, res) => {
  try {
    console.log(req.session.user_id);
    const getUser = await User.findByPk(req.session.user_id);
    const user = getUser.get({ plain: true });
    console.log(user);

    const getCategories = await Categories.findAll();
    const categories = getCategories.map((category) =>
      category.get({ plain: true })
    );
    console.log(categories);

    const getMenuCategory = await Categories.findByPk(req.params.id, {
      include: [
        {
          model: Menu,
        },
      ],
    });

    const makeMenu = getMenuCategory.get({ plain: true });

    // res.status(200).json(makeMenuCategory);
    res.render("main-page", {
      categories,
      makeMenu,
      user,
      loggedIn: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
