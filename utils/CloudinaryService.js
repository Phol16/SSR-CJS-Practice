import cloudinary from 'cloudinary'

export class CloudinaryService{
  static cloudinaryUtil;

  constructor(cloudName, apiKey, apiSecret){
    this.cloudinary = cloudinary.v2
    this.cloudName = cloudName;
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
  }
  get uploader(){
    return this.cloudinary.uploader
  }
}