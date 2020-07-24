// import chai from 'chai';
// import 'chai/register-should';
// import chaiHttp from 'chai-http';
// import { app } from '../index';
import request from 'supertest';
import database from '../utils/database';
import { app } from '../index';

const BASE_URL = '/api/v1/urls';
describe('Url Endpoints', () => {
  beforeAll((done) => {
    database
      .connectToDb()
      .then(() => {
        done();
      })
      .catch((err) => done(err));
  });
  afterAll((done) => {
    database
      .disconnectFromDB()
      .then(() => done())
      .catch((err) => done(err));
  });
  it('it should not generate url without originalUrl being a valid url', async () => {
    const url = { originalUrl: 'str116' };
    const res = await request(app).post(`${BASE_URL}`).send(url);
    expect(res.status).toEqual(400);
    expect(res.body.message).toEqual('Not a valid URI');
    expect(res.body.status).toEqual(false);
    expect(res.status).toBe(400);
    expect(typeof res.body).toBe('object');
    expect(res.body.status).toBe(false);
    expect(res.body.message).toBe('Not a valid URI');
  });
  it('it should not create a url that already has a shortened url', async () => {
    const url = { originalUrl: 'https://jestjs.io/docs/en/getting-started' };
    const res = await request(app).post(`${BASE_URL}`).send(url);
    expect(res.status).toEqual(400);
    expect(typeof res.body).toBe('object');
    expect(typeof res.body.url).toBe('object');
    expect(res.body.status).toEqual(false);
    expect(res.body.message).toEqual('Url already exists');
  });
  it('it generates a url', async () => {
    const url = {
      originalUrl: 'https://github.com/oluwabukolatina/url-shortner-frontend',
    };
    const res = await request(app).post(`${BASE_URL}`).send(url);
    expect(res.status).toEqual(201);
    expect(typeof res.body).toBe('object');
    expect(typeof res.body.url).toBe('object');
    expect(res.body.status).toEqual(true);
    expect(res.body.message).toEqual('Url created');
    expect(res.body.url).toHaveProperty('_id');
  });
  it('should get all urls', async () => {
    const res = await request(app).get(`${BASE_URL}`);
    expect(res.status).toEqual(200);
    expect(typeof res.body).toBe('object');
    expect(res.body.message).toEqual('Fetched Urls');
    expect(res.body.status).toEqual(true);
    expect(res.body).toHaveProperty('urls');
  });
  it('should not get a url that does not exist', async () => {
    const code = 'isn292s';
    const res = await request(app).get(`${BASE_URL}/${code}`);
    expect(res.status).toEqual(404);
    expect(typeof res.body).toBe('object');
    expect(res.body.message).toEqual('Url not found');
    expect(res.body.status).toEqual(false);
  });
  it('should redirect to original url', async () => {
    const code = 'uUnFBUMJ';
    const res = await request(app).get(`${BASE_URL}/${code}`);
    expect(res.status).toEqual(302);
  });
});
