var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server_2.js');
var chould = chai.should();

chai.use(chaiHttp);


describe('Tests the /api/v1/hello endpoint', function(){
	it('', function(){
		
		
	});
	
});

describe('Get test', function () {
    it('GET /api/v1/get', function (done) {
        chai.request(server)
            .get('/api/v1/get')
            .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.an('array');
                // res.body
                done();
            });
    });
});