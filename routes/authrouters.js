const express=require('express');
const { route } = require('./testroutes');
const { registerController, loginController,currentUserController } = require('../controllers/authController');
const authMiddlewares = require('../middlewares/authMiddlewares');
const router=express.Router()

//routes
//register
router.post('/register',registerController);

//login
router.post('/login',loginController);

//Get Current user || GET
router.get("/current-user",authMiddlewares, currentUserController);
module.exports = router;