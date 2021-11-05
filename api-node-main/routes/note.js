var express = require('express');
const app = require('../app');
const noteController = require('../controllers/noteController');
var router = express.Router();

/* GET home page. */
router.get('/', noteController.note_all);
router.get('/:id', noteController.note_single);
router.delete('/:id', noteController.note_delete);
router.put('/:id', noteController.note_update);
router.post('/', noteController.note_create);

module.exports = router;