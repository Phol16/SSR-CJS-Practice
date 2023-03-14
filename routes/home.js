import {Router} from 'express';
import Images from '../models/images.js';

const router = Router();

router.route('/')
.get(async(req,res)=>{
  const data = await Images.find()
  res.render('index',{
    data
  })
})

.post(async(req, res)=>{
  const {image} = req.body

  const newImage = new Images({
    image
  })
 await newImage.save()
 res.status(200).json({message:'success'})
})

export default router