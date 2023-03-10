import uploadImg from '../../utils/uploadImg.js'
const uploadImage = (req, res)=>{
  uploadImg(req.body.image).then((url)=>res.json(url)).catch((err)=>res.json(err))
}

export default uploadImage