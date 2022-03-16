var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
let skillsCtrl = require('../controllers/skills')

// All actual paths begin with "/skills"

// GET /skills
router.get('/', skillsCtrl.index)
router.get('/:id', skillsCtrl.show);

module.exports = router;
