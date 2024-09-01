import express, { Request, Response } from "express";
import { ProductController } from "../controllers/product.controller";

const router = express.Router();
const productController = new ProductController();

router.get("/", async (req: Request, res: Response) => {
  const productsJSON = await productController.getPageOfProducts(req);
  return res.status(200).json(productsJSON);
});

router.get("/bulk", async (req: Request, res: Response) => {
  try {
    await productController.createProductsFromJson();
    return res.status(200).json({ message: "Products created" });
  }
  catch(error: any) {
    return res.status(500).json({ message: error.message });
  }
  
});

export default router;
