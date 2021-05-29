import { Secret } from 'jsonwebtoken';

import secrets from './secrets';

type JWTProps = {
    secret: Secret;
    expiresIn: string;
};

export default {
    jwt: {
        secret: secrets.SECRET,
        expiresIn: secrets.EXPIRES,
    } as JWTProps,
};
