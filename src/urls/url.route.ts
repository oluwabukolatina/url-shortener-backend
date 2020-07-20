import { Router } from 'express';
import controller from './url.controller';

const router = Router();
const { generateShortenedUrl } = controller;

router.post('/', generateShortenedUrl);
export default router;
