// api/routes/offices

const express = require('express');
const router  = express.Router();

const officesController = require('../controllers/offices');



router.post('/', officesController.createOffice);

router.get('/', officesController.getAllOffices);

router.get('/:id', officesController.getOffice);




module.exports = router;