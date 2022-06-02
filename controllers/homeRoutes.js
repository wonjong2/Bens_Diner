const router = require("express").Router();
const { User, Order } = require("../models");
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

// Login GET route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/insert page to redirect to");
    return;
  }
  res.render("login");
});

module.exports = router;
