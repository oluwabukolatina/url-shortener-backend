import chai from 'chai';
import 'chai/register-should';
import chaiHttp from 'chai-http';
import { app } from '../index';
import database from '../utils/database';

const BASE_URL = '/api/v1/urls';
process.env.Env = 'Test';
chai.use(chaiHttp);
describe('Url Tests', () => {
  before((done) => {
    database
      .connectToDb()
      .then(() => {
        done();
      })
      .catch((err) => done(err));
  });
  after((done) => {
    database
      .disconnectFromDB()
      .then(() => done())
      .catch((err) => done(err));
  });
  /**
   * Test the POST /urls/ route
   */
  describe('POST /urls', () => {
    it('it should not generate url without originalUrl being a valid url', (done) => {
      const url = { originalUrl: 'str116' };
      chai
        .request(app)
        .post(`${BASE_URL}`)
        .send(url)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('status').eql(false);
          res.body.should.have.property('message').eql('Not a valid URI');
          done();
        });
    });
    it('it should not create a url that already has a shortened url ', (done) => {
      const url = {
        originalUrl:
          // eslint-disable-next-line max-len
          'https://www.amazon.com/Airhead-Insulated-Cooler-Removable-Floating/dp/B000FE5P88/ref=pd_sim_468_6/140-1538736-7192840?_encoding=UTF8&pd_rd_i=B000FE5P88&pd_rd_r=ac32b4af-f2bf-43c9-8773-7fbaf66a7f0b&pd_rd_w=APa6j&pd_rd_wg=UnKrM&pf_rd_p=3c412f72-0ba4-4e48-ac1a-8867997981bd&pf_rd_r=KAE3FAFE281P95B3XJTM&psc=1&refRID=KAE3FAFE281P95B3XJTM',
      };
      chai
        .request(app)
        .post(`${BASE_URL}`)
        .send(url)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.url.should.be.a('object');
          res.body.should.have.property('status').eql(false);
          res.body.should.have.property('message').eql('Url already exists');
          done();
        });
    });
    it('it generates a shortened url', (done) => {
      const url = {
        originalUrl:
          // eslint-disable-next-line max-len
          'https://medium.com/@theoluwabukolatina/understanding-redux-build-a-news-app-with-react-part-1-96ee4fa8b443',
      };
      chai
        .request(app)
        .post(`${BASE_URL}`)
        .send(url)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.url.should.be.a('object');
          res.body.should.have.property('status').eql(true);
          res.body.should.have.property('message').eql('Url created');
          res.body.url.should.have.property('_id');

          done();
        });
    });
  });

  describe('GET /urls', () => {
    it('should get all urls', (done) => {
      chai
        .request(app)
        .get(`${BASE_URL}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Fetched Urls');
          res.body.should.have.property('status').eql(true);
          res.body.data.should.be.a('array');
          done();
        });
    });
    it('it should not GET a url that is not available', (done) => {
      const code = 'isn292s';
      chai
        .request(app)
        .get(`${BASE_URL}/${code}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.a('object');
          res.body.should.have.property('message').eql('Url not found');
          res.body.should.have.property('status').eql(false);
          done();
        });
    });
    it('it redirect to original url', (done) => {
      const code = 'vZSmce5t';
      chai
        .request(app)
        .get(`${BASE_URL}/${code}`)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});
