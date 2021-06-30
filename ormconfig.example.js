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
            "./src/modules/**/infra/typeorm/entities/*.ts"
        ],
        migrations: [
            "./src/shared/infra/typeorm/migrations/*.ts"
        ],
        cli: {
            "migrationsDir": "./src/shared/infra/typeorm/migrations"
        }
    },
    {
        name: 'mongo',
        type: "mongodb",
        url: process.env.DATABASE_DEV_MONGO,
        useUnifiedTopology: true,
        entities: [
            "./src/modules/**/infra/typeorm/schemas/*.ts"
        ]
    }
]