import { Request, Response } from "express";
import { Product } from "../models/data.model";
import bulk from "../test_data/bulk.json";

export class ProductController {
  async getAllProducts(): Promise<Product[]> {
    const products: Product[] = await Product.findAll();
    return products;
  }

  async createProductsFromJson(req: Request, res: Response): Promise<void> {
    await Product.bulkCreate(bulk);
    res.status(200).json({ message: "Products created" });
  }
}
