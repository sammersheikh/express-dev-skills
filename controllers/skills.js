const DevSkill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create
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

function newSkill(req, res) {
    res.render('skills/new');
}

function create(req, res) {
    console.log(req.body);
    DevSkill.createOne(req.body)
    res.redirect('/skills')
}