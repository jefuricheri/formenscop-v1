var express = require('express');
const app = require('../app');
const stagiaireController = require('../controllers/stagiaireController');
var router = express.Router();

/* GET home page. */
router.get('/', stagiaireController.stagiaire_all);
router.get('/:id', stagiaireController.stagiaire_single);
router.delete('/:id', stagiaireController.stagiaire_delete);
router.put('/:id', stagiaireController.stagiaire_update);
router.post('/', stagiaireController.stagiaire_create);

module.exports = router;