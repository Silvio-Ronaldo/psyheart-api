import { config } from 'dotenv';
import { Secret } from 'jsonwebtoken';

config();

type JWTProps = {
    secret: Secret;
    expiresIn: string;
};

export default {
    jwt: {
        secret: process.env.SECRET || 'default',
        expiresIn: process.env.EXPIRES,
    } as JWTProps,
};
