// api/controllers/offices

const officeRecord = require('../models/office');


module.exports = {

    createOffice : (req, res) => {
        
        let office =  { id : officeRecord.length,
                      type : req.body.type,
                      name : req.body.name
                    };
            
            if(office) {
                office.id = officeRecord.length + 1;
                officeRecord.push(office);

                res.status(200).json({
                    status: 200,
                    data: [{
                          id: office.id,
                        type: office.type,
                        name: office.name
                    }]
                })
            } else {
                res.status(400).json({
                    status: 400,
                    error: 'Please fill in office details'
                })
            }
    }
}