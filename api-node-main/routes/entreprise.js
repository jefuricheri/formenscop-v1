var express = require('express');
const app = require('../app');
const entrepriseController = require('../controllers/entrepriseController');
var router = express.Router();

/* GET home page. */
router.get('/', entrepriseController.entreprise_all);
router.get('/:id', entrepriseController.entreprise_single);
router.delete('/:id', entrepriseController.entreprise_delete);
router.put('/:id', entrepriseController.entreprise_update);
router.post('/', entrepriseController.entreprise_create);

module.exports = router;