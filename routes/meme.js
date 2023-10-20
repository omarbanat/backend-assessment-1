const express=require('express');
const router=express.Router();
const memeControllers=require('../controllers/meme');
router.get('/',memeControllers.getAllMemes);
router.get('/getOneMeme',memeControllers.getOne);
router.post('/add',memeControllers.add);
router.put('/update/:id',memeControllers.update);
router.delete('/remove/:id',memeControllers.remove);
module.exports=router;