import { Router } from 'express';
import controller from './url.controller';

const router = Router();
const { generateShortenedUrl, redirectToShortUrl, getAllGeneratedUrls } = controller;

// @route  POST /api/v1/urls
router.post('/', generateShortenedUrl);
router.get('/', getAllGeneratedUrls);
router.get('/:url', redirectToShortUrl);
export default router;
