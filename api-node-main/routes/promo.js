var express = require('express');
const app = require('../app');
const promoController = require('../controllers/promoController');
var router = express.Router();

/* GET home page. */
router.get('/', promoController.promo_all);
router.get('/:id', promoController.promo_single);
router.delete('/:id', promoController.promo_delete);
router.put('/:id', promoController.promo_update);
router.post('/', promoController.promo_create);

module.exports = router;