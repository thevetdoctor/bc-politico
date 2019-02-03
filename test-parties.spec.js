// test-parties.spec.js

const app = require('./js/app');
const parties = require('./api/controllers/parties');
const expect = require('chai').expect;

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const server = ('../server');

chai.use(chaiHttp);


      describe('Politico API endpoints', () => {
          it('should exist', () => {
              expect(app).to.not.be.undefined;
          });
      });


      describe('Political parties', () => {

          it('should exist', () => {
                expect(parties).to.not.be.undefined;
          });


          it('should take inputs of name, hqAddress and logoUrl and create a political party', (done) => {

            let testCases = [{
                 party:  {id : 1,
                         name: 'PDP',
                    hqAddress: 'Atiku House, Abuja',
                      logoUrl: 'www.pdp-logo.com'
                    },

                    expected : {
                        status : 200,
                        data : [{
                            id: 1,
                          name: 'PDP'
                        }]
                    }
                },
                {
                 party:   {id: 2,
                         name: 'APC',
                    hqAddress: 'Buhari Complex, Daura',
                      logoUrl: 'www.apc-logo.com'
                    },
                    expected : {
                        status : 200,
                        data : [{
                            id: 2,
                          name: 'APC'
                        }]
                    }
                },
                {
                party :   {id: 3,
                         name: 'AAC',
                    hqAddress: 'Sowore Plaza, Akure',
                      logoUrl:'www.sahara-reporters.com'
                },
                expected : {
                    status : 200,
                    data : [{
                        id: 3,
                      name: 'AAC'
                    }]
                }
                }];


                        // console.log(party);

                // testCases.forEach((p) => {
                //     let actual = parties.createParty(p.input);
                // expect(actual).to.equal(p.expected);
                // });

                chai.request(server)
                    .get('/api/v1/parties')
                    .end((err, res) => {
                        res.should.have.status(200);
                        // res.should.be.json;
                        // res.body.should.be.a('object');
                        // res.body[0].should.have.property('status');
                        // res.body[1].should.have.property('data');
                        // res.body[1].data.should.be.a('array');
                        done();
                    })

              });


            // it('should fetch a specific political party record', () => {

            // let party = {'status': new Number,
            //             'data': [{
            //                 'id': 1,
            //                 'name': '',
            //                 'logoUrl': ''
            //             }]
            //         };

            //         expect(parties.getParty(1)).to.eql(party);
            // });


            // it('should return an array of all political parties', () => {
            //     let allParties = {'status': new Number,
            //                         'data': [{
            //                               'id': new Number,
            //                             'name': '',
            //                          'logoUrl': ''
            //                         },
            //                              {'id': new Number,
            //                             'name': '',
            //                          'logoUrl': ''
            //                         },
            //                              {'id': new Number,
            //                             'name': '',
            //                          'logoUrl': ''
            //                         },
            //                              {'id': new Number,
            //                             'name': '',
            //                          'logoUrl': ''
            //                         }]
            //                     };
            //         expect(parties.getAllParties()).to.eql(allParties);
            // });


            // it('should edit the name of a specific political party', () => {

            //     let allParties = {'status': new Number,
            //                         'data': [{
            //                               'id': 1,
            //                             'name': '',
            //                          'logoUrl': ''
            //                         },
            //                              {'id': 2,
            //                             'name': '',
            //                          'logoUrl': ''
            //                         },
            //                              {'id': 3,
            //                             'name': '',
            //                          'logoUrl': ''
            //                         },
            //                              {'id': 4,
            //                             'name': '',
            //                          'logoUrl': ''
            //                         }]
            //                     },
            //         expected = {   'status' : new Number,
            //                         'data': [{
            //                             'id': 3,
            //                             'name': 'newName'
            //                         }]
            //                     };

            //     expect(parties.changePartyName(3, 'newName')).to.eql(expected);
            // });


            // it('should delete a specific political party', () => {
            //     let allParties = {'status': new Number,
            //                         'data': [{
            //                               'id': 1,
            //                             'name': '',
            //                          'logoUrl': ''
            //                         },
            //                              {'id': 2,
            //                             'name': '',
            //                          'logoUrl': ''
            //                         },
            //                              {'id': 3,
            //                             'name': '',
            //                          'logoUrl': ''
            //                         },
            //                              {'id': 4,
            //                             'name': '',
            //                          'logoUrl': ''
            //                         }]
            //                     },

            //         expected = {   'status' : new Number,
            //                           'data': [{
            //                              'message': ''
            //                             }]
            //                 };

            //         expect(parties.deleteParty(4)).to.eql(expected);

            // })



        });