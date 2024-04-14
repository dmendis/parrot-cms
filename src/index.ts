import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get('/', (request: Request, response: Response) => {
    response.status(200).send('Hello World, this is Parrot!');
});

app.listen(PORT, () => {
    console.info('Server running at PORT: ', PORT);
}).on('error', (error) => {
    throw new Error(error.message);
});