const dotenv = require("dotenv");
const { DataSource } = require("typeorm");

dotenv.config({ path: ".env" });

const appDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [`./src/modules/**/*.entity.ts`],
  migrations: [],
  migrationsRun: true,
});

module.exports = { appDataSource };
