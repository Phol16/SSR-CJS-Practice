import {Router} from 'express';
import { home } from '../controller/pages/home.js';
import uploadImage from '../controller/pages/uploadImage.js';

const router = Router();

router.route('/')
.get(home)
.post(uploadImage)

export default router