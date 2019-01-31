module.exports = {

    createParty : () => {
        
        return {'status' : new Number,
                'data'   : [{
                    'id' : new Number,
                    'name': ''
                }]
              };
             
        
    },

    getParty : (value) => {
        
        return {'status': new Number,
                'data': [{
                    'id': value,
                    'name': '',
                    'logoUrl': ''
                }]
            };
    },

    getAllParties : () => {

        return {'status': new Number,
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
    },

    changePartyName : (value, newName) => {

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
                                         {'id': value,
                                        'name': '',
                                     'logoUrl': ''
                                    }]
                                };

                allParties.data.forEach((party) => {

                    if(party.id == value) {
                            party.name = newName;
                        return;
                    }
                });
                console.log(allParties.data)

                return {   'status' : new Number,
                            'data': [{
                                'id': value,
                                'name': newName
                            }]
                        };
    },

    deleteParty : (value) => {
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
                                         {'id': value,
                                        'name': '',
                                     'logoUrl': ''
                                    }]
                                };

                allParties.data.forEach((party) => {

                    if(party.id == value) {
                         allParties.data.splice(value - 1, 1)
                        return;
                    }
                });
                console.log(allParties.data)

                return {   'status' : new Number,
                            'data': [{
                                'message': ''
                            }]
                        };
    }


}