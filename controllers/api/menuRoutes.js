const router = require("express").Router();
const { Menu, Order } = require("../models");
const withAuth = require("../../utils/auth");

// GET route for menu page
router.get("/menu", async (req, res) => {
  try {
    const getMenu = await insertModel.findAll({
      include: [
        {
          model: insertModel,
          attributes: ["insertAttributes"],
        },
        {
          model: insertModel,
          attributes: ["insertAttributes"],
        },
      ],
    });

    const makeMenu = getMenu.map((menu) => menu.get({ plain: true }));

    res.render("menu", {
      makeMenu,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET route for clicked on section of the menu
router.get("/menu/:id", async (req, res) => {
  try {
    const getMenuCategory = await insertModel.findByPk(req.params.id, {
      include: [
        {
          model: insertModel,
          attributes: ["insertAttributes"],
        },
        {
          model: insertModel,
          attributes: ["insertAttributes"],
        },
      ],
    });

    const makeMenuCategory = getMenuCategory.map((menu) =>
      menu.get({ plain: true })
    );

    res.render("menu", {
      makeMenuCategory,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
