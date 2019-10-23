const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');

router.get('/getAllAuctions', controllers.getAllAuctions);
router.get('/getAuction', controllers.getAuction);
router.post('/createAuction', controllers.createAuction);
router.put('/updateAuction', controllers.updateAuction);
router.delete('/deleteAuction', controllers.deleteAuction);

module.exports = router;