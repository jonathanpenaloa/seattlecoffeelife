const express = require('express');
const router = express.Router();
const coffeeCtrl = require('../../controllers/api/coffee');

router.post('/hot', coffeeCtrl.searchHot);

router.post('/iced', coffeeCtrl.searchCold);

router.post('/items', coffeeCtrl.create);

router.get('/myDrinks', coffeeCtrl.getAll);

router.delete('/:id', coffeeCtrl.findOneAndDelete);

module.exports = router;