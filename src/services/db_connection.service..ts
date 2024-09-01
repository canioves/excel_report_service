import { Sequelize } from "sequelize-typescript";
import { Product } from "../models/product.model";
import dotenv from "dotenv";

dotenv.config();

const connection = new Sequelize({
  dialect: "postgres",
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.DB_USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  models: [Product],
});

export default connection;
