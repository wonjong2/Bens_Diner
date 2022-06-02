const router = require("express").Router();

const userRoutes = require("./userRoutes");
const orderRoutes = require("./orderRoutes");
const menuRoutes = require("./menuRoutes");

router.use("/users", userRoutes);
router.use("/order", orderRoutes);
router.use("/menu", menuRoutes);

module.exports = router;
