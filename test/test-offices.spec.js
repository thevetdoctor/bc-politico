// test-parties.spec.js


const chai = require('chai');
const should = chai.should();
const expect  = require('chai').expect;
const chaiHttp = require('chai-http');
const server = require('../server');
const offices = require('../api/controllers/offices');



      describe('Political Offices', () => {

          it('should exist', () => {
             offices.should.exist;

          });
      });


      describe('Office Routes', () => {

          describe('Create a new political office', () => {

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


          		it('GET /api/v1/offices', (done) => {


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


             it('GET /api/v1/offices/:id', (done) => {


                 		chai.request(server)
                 			.get('/api/v1/offices/1')
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