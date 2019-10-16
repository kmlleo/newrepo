const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
	res.status(200).json({message:'Hello, Have a cup of green tea twice a day'})
})


module.exports = router