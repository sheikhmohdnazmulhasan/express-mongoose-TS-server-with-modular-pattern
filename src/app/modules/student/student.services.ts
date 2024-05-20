import { Student } from "./student.interface";
import StudentModel from "./student.model";

async function createStudentIntoDB(student: Student) {

    try {
        const result = await StudentModel.create(student);
        return result;

    } catch (error) {

        console.log(error);
    };
};

async function getStudentFromDB(studentEmail: string) {

    try {
        const result = await StudentModel.find({ email: studentEmail });
        if (result) return result;

    } catch (error) {
        console.log(error);
    }

};

async function getStudentByIdFromDb(id: string) {

    try {
        const result = await StudentModel.findById(id);

        if (result) return result;

    } catch (error) {
        console.log(error);
    }
}


export const StudentService = { createStudentIntoDB, getStudentFromDB, getStudentByIdFromDb }