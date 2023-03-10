import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from 'dotenv';
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from "url";
import expressEjsLayouts from "express-ejs-layouts";
import home from './routes/home.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
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

app.use('/', home)

export default app
