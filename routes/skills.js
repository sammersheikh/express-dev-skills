var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
let skillsCtrl = require('../controllers/skills')

// All actual paths begin with "/skills"

// GET /skills
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.post('/', skillsCtrl.create);


module.exports = router;
