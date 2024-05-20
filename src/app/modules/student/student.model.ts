import { Schema, model, connect } from 'mongoose';
import { Student } from './student.interface';

const studentSchema = new Schema<Student>({

    dob: { type: String, required: true },
    email: { type: String, required: true },
    gender: ['female', 'male'],
    name: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    }
});

const StudentModel = model<Student>('Student', studentSchema)

export default StudentModel


