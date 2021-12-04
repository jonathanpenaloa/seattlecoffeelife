const express = require('express');
const router = express.Router();
const coffeeCtrl = require('../../controllers/api/coffee');


router.get('/hot', coffeeCtrl.searchHot);

router.get('/iced', coffeeCtrl.searchCold);

module.exports = router;