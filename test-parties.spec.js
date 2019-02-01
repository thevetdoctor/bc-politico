// test-parties.spec.js


const   app   = require('./js/app'),
      parties = require('./api/controllers/parties'),
      expect  = require('chai').expect;


      describe('Politico API endpoints', () => {
          it('should exist', () => {
              expect(app).to.not.be.undefined;
          });
      });


      describe('Political parties', () => {

          it('should exist', () => {
                expect(parties).to.not.be.undefined;
          });

          
          it('should create a political party', () => {
            
            let party = { 'status' : new Number,
                            'data'   : [{
                                'id' : new Number,
                                'name': ''
                            }]
                        };
                        console.log(party);
                expect(parties.createParty()).to.eql(party);
              });
      

            it('should fetch a specific political party record', () => {

            let party = {'status': new Number,
                        'data': [{
                            'id': 1,
                            'name': '',
                            'logoUrl': ''
                        }]
                    };

                    expect(parties.getParty(1)).to.eql(party);
            });


            it('should return an array of all political parties', () => {
                let allParties = {'status': new Number,
                                    'data': [{
                                          'id': new Number,
                                        'name': '',
                                     'logoUrl': ''
                                    },
                                         {'id': new Number,
                                        'name': '',
                                     'logoUrl': ''
                                    },
                                         {'id': new Number,
                                        'name': '',
                                     'logoUrl': ''
                                    },
                                         {'id': new Number,
                                        'name': '',
                                     'logoUrl': ''
                                    }]
                                };
                    expect(parties.getAllParties()).to.eql(allParties);
            });


            it('should edit the name of a specific political party', () => {

                let allParties = {'status': new Number,
                                    'data': [{
                                          'id': 1,
                                        'name': '',
                                     'logoUrl': ''
                                    },
                                         {'id': 2,
                                        'name': '',
                                     'logoUrl': ''
                                    },
                                         {'id': 3,
                                        'name': '',
                                     'logoUrl': ''
                                    },
                                         {'id': 4,
                                        'name': '',
                                     'logoUrl': ''
                                    }]
                                },
                    expected = {   'status' : new Number,
                                    'data': [{
                                        'id': 3,
                                        'name': 'newName'
                                    }]
                                };
                    
                expect(parties.changePartyName(3, 'newName')).to.eql(expected);
            });


            it('should delete a specific political party', () => {
                let allParties = {'status': new Number,
                                    'data': [{
                                          'id': 1,
                                        'name': '',
                                     'logoUrl': ''
                                    },
                                         {'id': 2,
                                        'name': '',
                                     'logoUrl': ''
                                    },
                                         {'id': 3,
                                        'name': '',
                                     'logoUrl': ''
                                    },
                                         {'id': 4,
                                        'name': '',
                                     'logoUrl': ''
                                    }]
                                },

                    expected = {   'status' : new Number,
                                      'data': [{
                                         'message': ''
                                        }]
                            };

                    expect(parties.deleteParty(4)).to.eql(expected);
                
            })

        
        
        });