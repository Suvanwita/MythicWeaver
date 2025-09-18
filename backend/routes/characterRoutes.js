const express=require('express')
const router=express.Router()

const {createCharacter,getCharacters}=require('../controllers/characterController')
const {protect}=require('../middleware/authMiddleware')

router.post("/",protect,createCharacter)
router.get("/",protect,getCharacters)

module.exports=router