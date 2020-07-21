import Model from './url.model';

class UrlService {
  static async getAUrl(value: any) {
    try {
      return await Model.findOne(value);
    } catch (e) {
      return e;
    }
  }

  static async generateUrl(value:any) {
    try {
      return Model.create(value);
    } catch (error) {
      return error;
    }
  }

  static async getAllUrls() {
    try {
      return await Model.find().sort({ createdAt: -1 });
    } catch (e) {
      return e;
    }
  }
}
export default UrlService;
