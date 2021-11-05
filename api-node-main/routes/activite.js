var express = require('express');
const app = require('../app');
const activiteController = require('../controllers/activiteController');
var router = express.Router();

/* GET home page. */
router.get('/', activiteController.activite_all);
router.get('/:id', activiteController.activite_single);
router.delete('/:id', activiteController.activite_delete);
router.put('/:id', activiteController.activite_update);
router.post('/', activiteController.activite_create);

module.exports = router;