// test-parties.spec.js

const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const chaiHttp = require('chai-http');
const parties = require('../api/controllers/parties');
const server = require('../server');
// const server = 'http://localhost:3000';


chai.use(chaiHttp);


      describe('Politico API endpoints', () => {

        it('should exist', () => {
             expect(parties).to.not.be.undefined;
          });

      });


      describe('Party Routes', () => {


        describe('Create a new party', () => {


            it('POST, should take inputs of name, hqAddress and logoUrl and create a political party', (done) => {

                        chai.request(server)
                            .post('/api/v1/parties')
                            .send({
                                   name: 'PDP',
                              hqAddress: 'Atiku House, Abuja',
                                logoUrl: 'www.pdp-logo.com'
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
                                res.body.data[0].should.have.property('name');
                                done();
                        });

                  });
        });


        describe('Return all registered parties', () => {

            it('GET, return a list of all political parties', (done) => {

                    chai.request(server)
                        .get('/api/v1/parties')
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.should.be.json;
                            res.body.should.be.a('object');
                            res.body.should.have.property('status');
                            res.body.status.should.equal(200);
                            res.body.should.have.property('data');
                            res.body.data.should.be.a('array');
                            res.body.data[0].should.have.property('id');
                            res.body.data[0].should.have.property('name');
                            res.body.data[0].should.have.property('logoUrl');
                            done();
                        })
            });
        });



        describe('Return a specific political party', () => {


            it('should fetch a specific political party record by :id', (done) => {

                    chai.request(server)
                        .get('/api/v1/parties/1')
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.should.be.json;
                            res.body.should.be.a('object');
                            res.body.should.have.property('status');
                            res.body.status.should.equal(200);
                            res.body.should.have.property('data');
                            res.body.data.should.be.a('array');
                            res.body.data[0].should.be.a('object');
                            res.body.data[0].should.have.property('id');
                            res.body.data[0].should.have.property('name');
                            res.body.data[0].should.have.property('logoUrl');
                            done();
                        })
            });
        });



        describe('Change the name of a specific political party', () => {

            it('should edit the name of a specific political party', (done) => {

                    chai.request(server)
                        .patch('/api/v1/parties/1')
                        .send({
                            name: 'Abubakar'
                        })
                        .end((err, res) => {
                            res.should.have.status(200)
                            res.should.be.json;
                            res.body.should.be.a('object');
                            res.body.should.have.property('status');
                            res.body.should.have.property('data');
                            res.body.data.should.be.a('array');
                            res.body.data[0].should.have.property('id');
                            res.body.data[0].id.should.equal(1);
                            res.body.data[0].should.have.property('name');
                            res.body.data[0].name.should.equal('Abubakar');
                            done();
                        })
            });
            // it('should return an error if ID field is part of the request', (done) => {

            //         chai.request(server)
            //             .patch('/api/v1/parties/1')
            //             .send({
            //                 id: 2,
            //                 name: 'Abubakar'
            //             })
            //             .end((err, res) => {
            //                 res.should.have.status(400)
            //                 res.should.be.json;
            //                 res.body.should.be.a('object');
            //                 res.body.shoud.have.property('error');
            //                 res.body.error.should.equal('No record found');
            //                 // res.body.error.should.equal('Only the name can be altered');
            //                 done();
            //             })
            // });

        });


        describe('Delete a specific political party', () => {

            it('should delete a specific political party', (done) => {

                        chai.request(server)
                            .delete('/api/v1/parties/1')
                            .end((err, res) => {
                                res.should.have.status(200);
                                res.should.be.json;
                                res.body.should.be.a('object');
                                res.body.should.have.property('status');
                                res.body.status.should.equal(200);
                                res.body.should.have.property('message');
                                res.body.message.should.equal('Party record deleted');
                                done();
                            })
            });

        });


    });