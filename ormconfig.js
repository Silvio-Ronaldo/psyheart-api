module.exports = {
    "type": "postgres",
    "url": process.env.DATABASE_URL || process.env.DATABASE_URL_LOCAL,
    "ssl": process.env.DATABASE_URL ? true : false,
    "entities": [
        "./dist/models/*.js"
    ],
    "migrations": [
        "./dist/database/migrations/*.js"
    ],
    "cli": {
        "migrationsDir": "./src/database/migrations"
    }
}