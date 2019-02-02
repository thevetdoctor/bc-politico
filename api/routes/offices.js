// api/routes/offices

const express = require('express');
const router  = express.Router();

const officesController = require('../controllers/offices');



router.post('/', officesController.createOffice);





module.exports = router;