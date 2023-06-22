const router = require('express').Router();
const userRoutes = require("./views/userRoutes");

router.use('/',userRoutes);


module.exports = router;