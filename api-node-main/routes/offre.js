var express = require('express');
const app = require('../app');
const offreController = require('../controllers/offreController');
var router = express.Router();

/* GET home page. */
router.get('/', offreController.offre_all);
router.get('/:id', offreController.offre_single);
router.delete('/:id', offreController.offre_delete);
router.put('/:id', offreController.offre_update);
router.post('/', offreController.offre_create);

module.exports = router;