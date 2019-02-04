// test-parties.spec.js


const chai = require('chai'),
	  should = chai.should(),
      expect  = require('chai').expect,
      chaiHttp = require('chai-http'),
      server = require('../server'),
      offices = require('../api/controllers/offices');



      describe('Political offices', () => {

          it('should exist', () => {
             expect(offices).to.not.be.undefined;

          });


          describe('Create a political office', () => {

	          it('POST /api/v1/offices', (done) => {

	          			chai.request(server)
	          				.post('/api/v1/offices')
	          				.send({
	          					type: 'State',
	          					name: 'Governor'
	          				})
	          				.end((err, res) => {
	          					res.should.have.status(200);
	          					res.should.be.json;
	          					res.body.should.be.a('object');
	          					res.body.should.have.property('status');
	          					res.body.status.should.equal(200);
	          					res.body.should.have.property('data');
	          					res.body.data.should.be.a('array');
	          					res.body.data[0].should.have.property('id');
	          					res.body.data[0].should.have.property('type');
	          					res.body.data[0].should.have.property('name');
	          					done();
	          				})

	          });
          })



          describe('Return all registered political offices', () => {


          		it('should return an array of all political offices', (done) => {


          				chai.request(server)
          					.get('/api/v1/offices')
          					.end((err, res) => {
          						res.should.have.status(200);
          						res.should.be.json;
          						res.body.should.be.a('object');
          						res.body.should.have.property('status');
          						res.body.status.should.equal(200);
          						res.body.should.have.property('data');
          						res.body.data.should.be.a('array');
          						res.body.data[0].should.have.property('id');
          						res.body.data[0].should.have.property('type');
          						res.body.data[0].should.have.property('name');
          						done();
          					})

             });

          })



          describe('Return a specific political office by ID', () => {


             it('should return a specific political office', (done) => {


                 		chai.request(server)
                 			.get('/api/v1/offices')
                 			.end((err, res) => {
                 				res.should.have.status(200);
                 				res.should.be.json;
                 				res.body.should.be.a('object');
                 				res.body.should.have.property('status');
                 				res.body.status.should.equal(200);
                 				res.body.should.have.property('data');
                 				res.body.data.should.be.a('array');
                 				res.body.data[0].should.have.property('id');
                 				res.body.data[0].should.have.property('type');
                 				res.body.data[0].should.have.property('name');
                 				done();
                 			})
             });

          })


      });