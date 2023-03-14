import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from 'dotenv';
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from "url";
import { CloudinaryService } from "./utils/CloudinaryService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));
app.use(cors())
app.use(helmet());
//img src 
app.use(helmet.contentSecurityPolicy({
  useDefaults:true,
  directives:{
    'img-src': ['self', 'https: data:']
  }
}))
app.use(helmet.crossOriginResourcePolicy({policy: 'same-origin'}));

app.use(express.static(path.join(__dirname,'/public')));
app.set('view engine', 'ejs');

app.set(CloudinaryService.cloudinaryUtil, new CloudinaryService(
  process.env.CLOUD_NAME,
  process.env.CLOUD_APIKEY,
  process.env.CLOUD_APISECRET,
))

export default app
