import chai from 'chai';
import 'chai/register-should';
import chaiHttp from 'chai-http';
import { app } from '../index';

chai.use(chaiHttp);
describe('Hello API Request', () => {
  it('should return response on call', () =>
    chai
      .request(app)

      .get('/')

      .then((res) => {
        chai.expect(res.text).to.eql('Hello');
      }));
});
