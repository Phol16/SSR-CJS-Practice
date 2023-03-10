import cloudinary from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_APIKEY,
  api_secret: process.env.CLOUD_APISECRET,
});

const opts = {
  overwrite:true,
  invaliddate:true,
  resource_type:'auto',
}

 const uploadImg = (image)=>{ 
  return new Promise((resolve, reject)=>{
    cloudinary.uploader.upload(image, opts, (error, result)=>{
      if(result && result.secure_url){
        console.log(result.secure_url);
        return resolve(result.secure_url);
      }
      console.log(error.message);
      return reject({message:error.message});
    })
  })

}

export default uploadImg