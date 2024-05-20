import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoute } from './app/modules/student/student.route';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1/students', StudentRoute);


// invalid endpoint checker.
app.all("*", (req: Request, res: Response) => {

  res.status(400).json({
    message: 'endpoint not valid'
  });
})

export default app;
