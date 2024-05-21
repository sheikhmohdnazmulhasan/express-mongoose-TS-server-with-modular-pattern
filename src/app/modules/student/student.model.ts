import { Schema, model, connect } from 'mongoose';
import { Student } from './student.interface';
// import validator from 'validator';

const studentSchema = new Schema<Student>({

    dob: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, enum: ['female', 'male'], required: true },
    name: {
        firstName: {
            type: String, required: true,
            validate: function (value: string) {
                const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
                return firstNameStr === value;
            }
        },
        lastName: { type: String, required: true, }
    }
});

const StudentModel = model<Student>('Student', studentSchema);

export default StudentModel


