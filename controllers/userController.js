const { User } = require("../models");

const userController = {};

// NUEVO USUARIO

userController.createUser = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const newUser = await User.create({
        username: username,
        password: password,
        role_id: req.body.rol_id || 2, //En el registro puede elegir que rol es, si no lo elije, por defecto es 1
      });
      console.log(newUser);
      return res.json({
        success: true,
        message: "Usuario Registrado",
        data: newUser,
      });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };