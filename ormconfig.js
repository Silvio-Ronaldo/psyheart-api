export default {
    "type": process.env.DATABASE_TYPE,
    "url": process.env.DATABASE_URL,
    "host": process.env.DATABASE_HOST,
    "port": Number(process.env.DATABASE_PORT),
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_DATABASE,
    "entities": [
        "./src/models/*.ts"
    ],
    "migrations": [
        "./src/database/migrations/*.ts"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}