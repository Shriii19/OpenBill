import { Router, Response } from "express";
import { ProductsService } from "./products.service";
import { authGuard, AuthRequest } from "../common/guards/auth.guard";
import { rolesGuard } from "../common/guards/roles.guard";
import { handleError } from "../common/filters/http-exception.filter";
import { toInt, toStr, param } from "../common/utils/query";

const router = Router();
const productsService = new ProductsService();

router.get("/", async (req: AuthRequest, res: Response) => {
  try {
    const page = toInt(req.query.page, 1);
    const limit = toInt(req.query.limit, 20);
    const category = toStr(req.query.category);
    const result = await productsService.findAll(page, limit, category);
    res.json({ success: true, ...result });
  } catch (err) {
    handleError(err, res);
  }
});

router.get("/:id", async (req: AuthRequest, res: Response) => {
  try {
    const product = await productsService.findById(param(req.params.id));
    res.json({ success: true, data: product });
  } catch (err) {
    handleError(err, res);
  }
});

router.post("/", authGuard, rolesGuard("admin"), async (req: AuthRequest, res: Response) => {
  try {
    const product = await productsService.create(req.body);
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    handleError(err, res);
  }
});

router.put("/:id", authGuard, rolesGuard("admin"), async (req: AuthRequest, res: Response) => {
  try {
    const product = await productsService.update(param(req.params.id), req.body);
    res.json({ success: true, data: product });
  } catch (err) {
    handleError(err, res);
  }
});

router.delete("/:id", authGuard, rolesGuard("admin"), async (req: AuthRequest, res: Response) => {
  try {
    await productsService.remove(param(req.params.id));
    res.json({ success: true, message: "Product deleted" });
  } catch (err) {
    handleError(err, res);
  }
});

export default router;
