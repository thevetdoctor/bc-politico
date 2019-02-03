/* eslint-disable import/newline-after-import */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
// api/routes/parties.js

const express = require('express');
const router  = express.Router();

const partiesController = require('../controllers/parties');



router.post('/', partiesController.createParty);

router.get('/', partiesController.getAllParties);

router.get('/:id', partiesController.getParty);

router.patch('/:id', partiesController.changePartyName);

router.delete('/:id', partiesController.deleteParty);


module.exports = router;