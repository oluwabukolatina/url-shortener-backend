// import chai from 'chai';
// import 'chai/register-should';
// import chaiHttp from 'chai-http';
// import { app } from '../index';

// chai.use(chaiHttp);
// describe('Hello API Request', () => {
//   it('should return response on call', () =>
//     chai
//       .request(app)
//       .get('/')
//       .then((res) => {
//         chai.expect(res.text).to.eql('Hello');
//       }));
// });

import request from 'supertest';
import { app } from '../index';

describe('GET / - a simple api endpoint', () => {
  it('Hello API Request', async () => {
    const result = await request(app).get('/');
    expect(result.text).toEqual('Hello');
  });
});
