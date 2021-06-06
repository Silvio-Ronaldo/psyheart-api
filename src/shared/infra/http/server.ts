import { config } from 'dotenv';
import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';

import uploadConfig from '../../../config/upload';
import AppError from '../../errors/AppError';
import routes from './routes';

import '../typeorm';
import '../../container';

config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    return response.status(500).json({
        status: 'error',
        message: `Internal Server Error`,
    });
});

app.listen(process.env.PORT || 3000);
