const express = require('express');
const router = express.Router();
const studentsController = require('../../controllers/studentsController');


router.route('/')
    .get(studentsController.geatAllStudents)
    .post(studentsController.createNewStudent)
    .put(studentsController.updateStudent)
    .delete(studentsController.deleteStudent);

router.route('/:id')
    .get(studentsController.getStudent);

module.exports = router;
