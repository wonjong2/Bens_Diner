const router = require("express").Router();

const userRoutes = require("./user-routes");
const orderRoutes = require("./order-routes");

router.use("/users", userRoutes);
router.use("/order", orderRoutes);

module.exports = router;
