import { Secret } from 'jsonwebtoken';

// In development
// import secrets from './secrets';

type JWTProps = {
    secret: Secret;
    expiresIn: string;
};

export default {
    jwt: {
        secret: process.env.SECRET,
        expiresIn: process.env.EXPIRES,
    } as JWTProps,
};
