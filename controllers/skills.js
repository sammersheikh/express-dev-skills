const DevSkill = require('../models/skill');

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render('skills/index', {
        devSkills: DevSkill.getAll()
    })
} 

function show(req, res) {
    console.log(req.params.id)
    res.render('skills/show', {
        devSkill: DevSkill.getOne(req.params.id)
    })
}