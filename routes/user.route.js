var express = require('express');
var controller = require('../controllers/user.controller');

const router = express.Router();
router.get('/', controller.index);
router.get('/search', controller.search);
router.get('/create', controller.create);
router.get('/:id', controller.viewUser);
router.post('/create', controller.postCreate);

module.exports = router;