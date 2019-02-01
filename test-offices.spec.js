// test-parties.spec.js


const   offices = require('./api/controllers/offices'),
        expect  = require('chai').expect;


      describe('Political offices', () => {
          it('should exist', () => {
             expect(offices).to.not.be.undefined;
          });


          it('create a political office', () => {

            let newOffice = {
                            'status': new Number,
                            'data': [{
                                'id': new Number,
                                'type': '',
                                'name': ''
                            }]
                        };
                
                expect(offices.createOffice()).to.eql(newOffice);
          });


          it('should return an array of all political offices', () => {
              
            let allOffices = {   'status': new Number,
                                'data': [{
                                      'id': new Number,
                                    'type': '',
                                    'name': ''
                            }, {
                                      'id': new Number,
                                    'type': '',
                                    'name': '' 
                            }, {
                                      'id': new Number,
                                    'type': '',
                                    'name': ''
                            }]
                        };

                expect(offices.getAllOffices()).to.eql(allOffices);

             });


             it('should return a specific political office', () => {
                 let office = {
                     'status': new Number,
                     'data' : [{
                         'id': 2,
                         'type': '',
                         'name': ''
                     }]
                 };

                 expect(offices.getOffice(2)).to.eql(office);
             });

      });