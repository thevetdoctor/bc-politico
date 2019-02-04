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
    },


    getAllOffices : (req, res) => {
                if(officeRecord.length > 0) {

            let officeArray = officeRecord.map((office) => {
                return {id: office.id, type: office.type, name: office.name}
            })

            res.status(200).json({
                status: 200,
                 data : officeArray
            });
        } else {
            res.status(404).json({
                status: 400,
                error: 'No record found'
            })
        }
    },


    getOffice : (req, res) => {

        const id = req.params.id;
        const officeId = parseInt(id, 10);

        if(officeRecord.length > 0) {

            let findOffice = (office) => {
                return office.id === officeId;
            }

            let oneOffice = officeRecord.find(findOffice);

            res.status(200).json({
                status: 200,
                 data : [oneOffice]
            });
        } else {
            res.status(404).json({
                status: 400,
                error: 'No record found'
            });
        }
    }
}