const express=require('express')
const { createInventoryController, getInventoryController } = require('../controllers/inventoryController')
const authMiddlewares = require('../middlewares/authMiddlewares')

const  router=express.Router()
//routes
//ADD inventory || post
router.post('/create-inventory',authMiddlewares,createInventoryController)

//Get all blood request
router.get("/get-inventory", authMiddlewares, getInventoryController);

module.exports=router