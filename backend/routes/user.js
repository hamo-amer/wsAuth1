const express=require('express')
const { register, login } = require('../controllers/controller.user')
const { registerRules,validator, loginRules } = require('../middlewars/validator')
const isAuth=require('../middlewars/passport-setup')
const router=express.Router()

router.post("/register",registerRules(),validator,register)
router.post('/login',loginRules(),validator,login)
router.get('/current',isAuth(),(req,res)=>res.json(req.user))



module.exports=router