module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    entities: [
        "./dist/models/*.js"
    ],
    migrations: [
        "./dist/shared/infra/typeorm/migrations/*.js"
    ],
    cli: {
        "migrationsDir": "./src/shared/infra/typeorm/migrations"
    }
}