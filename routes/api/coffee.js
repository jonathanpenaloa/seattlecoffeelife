const express = require('express');
const router = express.Router();
const coffeeCtrl = require('../../controllers/api/coffee');

// GET to /api/movies/search
router.get('/search', coffeeCtrl.searchHot);

router.get('/search', coffeeCtrl.searchCold);

module.exports = router;