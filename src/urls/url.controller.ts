import { Request, Response } from 'express';
import validUrl from 'valid-url';
import Helpers from '../utils/helpers';
import UrlService from './url.service';

const BASE_URL = 'https://pbid.io';
// const BASE_URL = 'https://fierce-wildwood-87279.herokuapp.com/api/v1/urls';

class UrlController {
  // @desc Generate Short Url
  static async generateShortenedUrl(req: Request, res: Response) {
    const { originalUrl } = req.body;
    if (validUrl.isUri(originalUrl)) {
      const query = {
        originalUrl,
      };
      const code = Helpers.generateAlphaNumericCharacters(8);
      try {
        const response = await UrlService.getAUrl(query);
        if (response) {
          return res.status(400).json({
            message: 'Url already exists',
            url: response,
            status: false,
          });
        }
        const shortenedUrl = `${BASE_URL}/${code}`;
        const data = {
          shortenedUrl,
          originalUrl,
          urlCode: code,
        };
        const create = await UrlService.generateUrl(data);
        if (create) {
          return res
            .status(201)
            .json({ message: 'Url created', status: true, url: create });
        }
        return res
          .status(400)
          .json({ message: 'Unable to create url', status: false });
      } catch (error) {
        return res
          .status(500)
          .json({ message: 'Something went wrong!', status: false });
      }
    } else {
      // return new Error('The email was invalid');
      return res
        .status(400)
        .json({ message: 'Not a valid URI', status: false });
    }
  }

  // @desc redirect to short url
  static async redirectFromShortUrl(req: Request, res: Response) {
    const { url } = req.params;
    const query = { urlCode: url };
    try {
      const foundUrl = await UrlService.getAUrl(query);
      if (foundUrl) {
        return res.redirect(foundUrl.originalUrl);
      }
      return res.status(404).json({ message: 'Url not found', status: false });
    } catch (error) {
      return res
        .status(500)
        .json({ message: 'Something went wrong', status: false });
    }
  }

  static async getAllGeneratedUrls(req: Request, res: Response) {
    try {
      const urls = await UrlService.getAllUrls();
      if (!urls)
        res.status(400).json({ Message: 'Could not get urls', status: false });
      return res
        .status(200)
        .json({ message: 'Fetched Urls', status: true, urls });
    } catch (error) {
      return res
        .status(500)
        .json({ Message: 'Something went wrong', status: false });
    }
  }
}
export default UrlController;
