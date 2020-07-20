import { Request, Response } from 'express';

class UrlController {
  static async generateShortenedUrl(req:Request, res: Response) {
    console.log('hello');
  }
}
export default UrlController;
