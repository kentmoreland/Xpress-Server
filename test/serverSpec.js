const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');


chai.use(chaiHttp);

describe('/', function() {
  it('should make a successful connection', function() {
    chai.request(server)
    .get('/')
    .end(function(req, res) {
      expect(res.status).to.equal(200);
      done();
    });
  });

  it('should handle an unsuccessful connection', function(){
    chai.request(server)
    .get('/test')
    .end(function(req, res) {
      expect(res.status).to.equal(404);
      done();
    });
  });
});

describe('/api', function() {
  it('should make a succussful connection', function() {
    chai.request(server)
    .get('/api')
    .end(function(req, res) {
      expect(res.status).to.equal(200);
    });
  });

  it('should handle an unsuccessful connection', function() {
    chai.request(server)
    .get('/test')
    .end(function(req, res) {
      expect(res.status).to.equal(404);
    });
  });

});


