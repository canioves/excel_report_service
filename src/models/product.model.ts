import { DataTypes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";

interface CreateProductAttrs {
  name: string;
  category: string;
  price: number;
  stock: number;
}

@Table({ tableName: "Products", timestamps: false })
export class Product extends Model<Product, CreateProductAttrs> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ type: DataTypes.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataTypes.STRING })
  category!: string;

  @Column({ type: DataTypes.FLOAT })
  price!: number;

  @Column({ type: DataTypes.INTEGER })
  stock!: number;
}
