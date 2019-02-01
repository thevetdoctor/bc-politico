// api/routes/parties.js

const express = require('express');
const router  = express.Router();

const partiesController = require('../controllers/parties');


// router.get('/',  (req, res) => {
//     res.status(200).json({
//         message: 'Welcome to our political parties'
//       })
//     });


router.post('/', partiesController.createParty);

router.get('/', partiesController.getAllParties);

router.get('/:id', partiesController.getParty);

router.patch('/:id', partiesController.changePartyName);

router.delete('/:id', partiesController.deleteParty);


module.exports = router;