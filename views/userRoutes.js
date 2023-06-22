const userController = require("../controllers/userController");
const router = require("express").Router();


router.post("/users/reg", userController.createUser)