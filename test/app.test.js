//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();
let assert = require('chai').assert;


chai.use(chaiHttp);

describe('Routing test', () => {

/*
  * Test the /GET route
  */
  describe('/GET ', () => {
      it('it should GET start page', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
              res.body.should.exist;
              assert.equal(res.status, 200);
            // assert.include(res.body.toString(), '<title>Express</title>');
              done();
            });
      });
  });

});
