const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');

// Router

// Get all skills
router.get('/', skillsController.index);

// Add a new skill
router.get('/new', skillsController.new);
router.post('/', skillsController.addSkill);

// Get one skill
router.get('/:id', skillsController.show);
router.delete('/:id', skillsController.delSkill)

module.exports = router;