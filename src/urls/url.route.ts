import { Router } from 'express';
import controller from './url.controller';

const router = Router();
const {
  generateShortenedUrl,
  redirectFromShortUrl,
  getAllGeneratedUrls,
} = controller;

// @route  POST /api/v1/urls
router.post('/', generateShortenedUrl);
router.get('/', getAllGeneratedUrls);
router.get('/:url', redirectFromShortUrl);
export default router;
