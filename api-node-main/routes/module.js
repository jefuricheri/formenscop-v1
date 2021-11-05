var express = require('express');
const app = require('../app');
const moduleController = require('../controllers/moduleController');
var router = express.Router();

/* GET home page. */
router.get('/', moduleController.module_all);
router.get('/:id', moduleController.module_single);
router.delete('/:id', moduleController.module_delete);
router.put('/:id', moduleController.module_update);
router.post('/', moduleController.module_create);

module.exports = router;