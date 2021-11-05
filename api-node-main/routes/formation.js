var express = require('express');
const app = require('../app');
const formationController = require('../controllers/formationController');
var router = express.Router();

/* GET home page. */
router.get('/', formationController.formation_all);
router.get('/:id', formationController.formation_single);
router.delete('/:id', formationController.formation_delete);
router.put('/:id', formationController.formation_update);
router.post('/', formationController.formation_create);

module.exports = router;