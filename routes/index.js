const router = require("express").Router();
const draftRouter = require("./draftRoutes");

router.use("/draft", draftRouter);

module.exports = router;
