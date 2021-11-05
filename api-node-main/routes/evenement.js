var express = require('express');
const app = require('../app');
const evenementController = require('../controllers/evenementController');
var router = express.Router();

/* GET home page. */
router.get('/', evenementController.evenement_all);
router.get('/:id', evenementController.evenement_single);
router.delete('/:id', evenementController.evenement_delete);
router.put('/:id', evenementController.evenement_update);
router.post('/', evenementController.evenement_create);

module.exports = router;