const express = require('express');
const router = express.Router();
const coffeeCtrl = require('../../controllers/api/coffee');


router.post('/hot', coffeeCtrl.searchHot);

router.post('/iced', coffeeCtrl.searchCold);

module.exports = router;