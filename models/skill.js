const devSkills = [
    { id: 1, skill: 'HTML' },
    { id: 2, skill: 'CSS' },
    { id: 3, skill: 'JavaScript' },
    { id: 4, skill: 'jQuery' },
    { id: 5, skill: 'Node.js' },
    { id: 6, skill: 'Express' },
    { id: 7, skill: 'git' },
    { id: 8, skill: 'Command Line' },

];

module.exports = {
    getAll,
    getOne,
    createOne,
    deleteOne
}

function getAll() {
    return devSkills;
}

function getOne(id) {
    id = parseInt(id);
    return devSkills.find(skill => skill.id === id)
}

function createOne(skill) {
    skill.id = Math.floor(Math.random() * 10000)
    devSkills.push(skill);
}

function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    let idx = devSkills.findIndex(skill => skill.id === id);
    devSkills.splice(idx, 1);
  }