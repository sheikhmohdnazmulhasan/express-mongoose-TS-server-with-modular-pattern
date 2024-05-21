import { z } from 'zod';

const nameSchema = z.object({
    firstName: z.string().nonempty().regex(/^[A-Z][a-z]*$/, {
        message: 'First name should start with an uppercase letter followed by lowercase letters'
    }),
    lastName: z.string().nonempty()
});

const StudentValidationSchema = z.object({
    dob: z.string(), // You might want to use a more specific date validation
    email: z.string().nonempty().email(),
    gender: z.enum(['female', 'male']),
    name: nameSchema
});

export default StudentValidationSchema;
