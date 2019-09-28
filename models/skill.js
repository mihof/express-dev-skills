// Skills Model (including instances)


const skills = [
  {
    name: 'JS',
    description: 'The greatest programming language of all time. No questions.',
    level: 5
  },
  {
    name: 'HTML',
    description: 'Handles structure',
    level: 3
  },
  {
    name: 'CSS',
    description: 'Handles style',
    level: 9
  }
]

module.exports = {
  getAll,
  getOne,
  create,
  del
};

function create(skill) {
  skills.push(skill);
}

function del(id) {
  skills.splice(id, 1);
}

function getAll() {
  return skills;
}

function getOne(id) {
  return skills[id -1];
}
