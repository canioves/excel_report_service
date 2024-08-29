import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/data.model";

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "0000",
  database: "data_db",
  models: [Product],
});

export default connection;
