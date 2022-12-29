import { __prod__ } from "./constants";
import { DataSource } from "typeorm";
import { User } from "./typeorm/entities/User";

const orm = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  synchronize: true,
  logging: !__prod__,
});

export default orm;
