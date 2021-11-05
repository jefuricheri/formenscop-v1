var express = require('express');
const app = require('../app');
const salarieController = require('../controllers/salarieController');
var router = express.Router();

/* GET home page. */
router.get('/', salarieController.salarie_all);
router.get('/:id', salarieController.salarie_single);
router.delete('/:id', salarieController.salarie_delete);
router.put('/:id', salarieController.salarie_update);
router.post('/', salarieController.salarie_create);

module.exports = router;