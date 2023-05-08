const dotenv = require("dotenv");
const { DataSource } = require("typeorm");

dotenv.config({ path: ".env" });

const appDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [
    require("../../entities/pet.entitie"),
    require("../../entities/user.entitie"),
  ],
  migrations: [],
  migrationsRun: true,
});

module.exports = { appDataSource };
