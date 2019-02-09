/*eslint-disable*/
// api/controllers/parties

const partyRecord = require('../models/party');

module.exports = {

    createParty : (req, res) => {

        const party = {  id : partyRecord.length,
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
                error: 'Please fill in party details'
            });
        }
    },

    getAllParties : (req, res) => {

            if(partyRecord.length > 0) {

            let partyArray = partyRecord.map((party) => {
                return {id: party.id, name: party.name, logoUrl: party.logoUrl };
            });
            res.status(200).json({
                status: 200,
                 data : partyArray
            });
        } else {
            res.status(404).json({
                status: 400,
                error: 'No record found'
            })
        }
    },

    getParty : (req, res) => {
        const id = req.params.id;
        const partyId = parseInt(id, 10);

        if(partyRecord.length > 0) {

            let findParty = (party) => {
                return party.id === partyId;
            }

            let oneParty = partyRecord.find(findParty);

            res.status(200).json({
                status: 200,
                 data : [oneParty]
            });
        } else {
            res.status(404).json({
                status: 400,
                error: 'No record found'
            });
        }
    },


    changePartyName : (req, res) => {

        const id = req.params.id;
        const partyId = parseInt(id, 10);

        if(partyRecord.length > 0) {

            let findParty = (party) => {
                return party.id === partyId;
            }

            let oneParty = partyRecord.find(findParty);
                oneParty.name = req.body.name;

            res.status(200).json({
                status: 200,
                 data : [{id: oneParty.id,
                        name: oneParty.name}]
            });
        } else {
            res.status(400).json({
                status: 400,
                error: 'No record found'
            });
        }
    },



    deleteParty : (req, res) => {
        const id = req.params.id;
        const partyId = parseInt(id, 10);

        if(partyRecord.length > 0) {

            let findParty = (party) => {
                return party.id === partyId;
            }

            let oneParty = partyRecord.find(findParty);

            partyRecord.splice(oneParty.id - 1, 1);

            res.status(200).json({
                status: 200,
                 message : 'Party record deleted'
            });
        } else {
            res.status(404).json({
                status: 400,
                error: 'No record found'
            });
        }
    }


}
