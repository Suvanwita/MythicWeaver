const express=require('express')
const router=express.Router()

const {createPlot,getPlots}=require('../controllers/characterController')
const {protect}=require('../middleware/authMiddleware')

router.post("/",protect,createPlot)
router.get("/",protect,getPlots)

module.exports=router