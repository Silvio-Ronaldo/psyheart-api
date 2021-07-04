module.exports = [
    {
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: true,
        extra: {
            ssl: {
                rejectUnauthorized: false
            },
        },
        entities: [
            "./dist/modules/**/infra/typeorm/entities/*.js"
        ],
        migrations: [
            "./dist/shared/infra/typeorm/migrations/*.js"
        ],
        cli: {
            "migrationsDir": "./src/shared/infra/typeorm/migrations"
        }
    },
    {
        name: "mongo",
        type: "mongodb",
        url: process.env.DATABASE_DEV_MONGO,
        useUnifiedTopology: true,
        entities: [
            "./dist/modules/**/infra/typeorm/schemas/*.js"
        ]
    }
]