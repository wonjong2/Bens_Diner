const router = require("express").Router();
const { User, Menu, OrderHistory, Categories } = require("../../models");
const withAuth = require("../../utils/auth");

// GET route for clicked on section of the menu
router.get("/:id", async (req, res) => {
  try {
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
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
