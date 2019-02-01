// api/controllers/parties

const partyRecord = require('../models/party');

module.exports = {

    createParty : (req, res) => {

        const party = {   
                        id : partyRecord.length,
                        name: req.body.name,
                    hqAddress: req.body.hqAddress,  
                    logoUrl: req.body.logoUrl
                    }     
             
            if(party) {

                party.id = partyRecord.length + 1;
                partyRecord.push(party);

            res.status(200).json({
                status : 200,
                data : [{
                    id: party.id,
                  name: party.name
                }]
            });
        } else {
            res.status(404).json({
                message: 'Please fill in party details'
            });
        }
    }

}
