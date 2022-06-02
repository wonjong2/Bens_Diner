const router = require("express").Router();

const userRoutes = require("./user-routes");
const orderRoutes = require("./order-routes");
const menuRoutes = require("./menu-routes");

router.use("/users", userRoutes);
router.use("/order", orderRoutes);
router.use("/menu", menuRoutes);

module.exports = router;
