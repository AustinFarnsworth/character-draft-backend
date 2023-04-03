const router = require("express").Router();
const appearanceRoutes = require("./appearances");
const characterRoutes = require("./characterRoutes");

router.use("/appearance", appearanceRoutes);
router.use("/character", characterRoutes);

module.exports = router;
