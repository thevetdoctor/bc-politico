// api/offices.js

module.exports = {
            createOffice : () => {
                
                return {   'status': new Number,
                             'data': [{
                                  'id': new Number,
                                'type': '',
                                'name': ''
                            }]
                    };
            },


            getAllOffices : () => {

            return   {'status': new Number,
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
            },

            getOffice : (value) => {

                return {
                    'status': new Number,
                    'data': [{
                        'id': value,
                        'type': '',
                        'name': ''
                    }]
                };
            }
};