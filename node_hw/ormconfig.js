// Used for command line in local dev env only !!
module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '9567418a69',
  database: 'dev',
  entities: ['src/typeorm/models/*.ts'],
  synchronize: false,
  migrations: ['src/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/typeorm/migrations',
  },
  logging: 'true',
}
