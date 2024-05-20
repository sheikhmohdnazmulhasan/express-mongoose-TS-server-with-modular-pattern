import { Request, Response } from "express";
import { StudentService } from "./student.services";

async function createStudent(req: Request, res: Response) {

    const data = req.body;

    try {
        const result = await StudentService.createStudentIntoDB(data);

        if (result) {
            res.status(200).json({
                success: true,
                message: 'Student successfully saved into database'
            });
        };

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Something wrong!'
        });
    };
};

async function getStudent(req: Request, res: Response) {
    const studentEmail = req.query.email;

    try {
        const result = await StudentService.getStudentFromDB(studentEmail as string);

        if (result?.length) {
            res.status(200).json({
                data: result,
                success: true,
                message: 'data successfully fetched'
            });

        } else {
            res.status(404).json({
                success: false,
                message: `data successfully fetched but database is empty with this email: ${studentEmail}`
            });
        }


    } catch (error) {
        console.log(error);
    }

};

async function getStudentById(req: Request, res: Response) {
    const id = req.params.id;

    try {
        const result = await StudentService.getStudentByIdFromDb(id);
        res.status(200).json({ data: result });

    } catch (error) {
        console.log(error);
    }
}

export const StudentController = { createStudent, getStudent, getStudentById };