import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router()

router.post('/create-student', StudentController.createStudent);
router.get('/get-student', StudentController.getStudent);
router.get('/student/:id', StudentController.getStudentById);

// // //
export const StudentRoute = router;