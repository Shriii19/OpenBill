import { Router, Response } from "express";
import { ClientsService } from "./clients.service";
import { authGuard, AuthRequest } from "../common/guards/auth.guard";
import { handleError } from "../common/filters/http-exception.filter";
import { toInt, toStr, param } from "../common/utils/query";

const router = Router();
const clientsService = new ClientsService();

router.get("/", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const page = toInt(req.query.page, 1);
    const limit = toInt(req.query.limit, 20);
    const search = toStr(req.query.search);
    const result = await clientsService.findAll(page, limit, search);
    res.json({ success: true, ...result });
  } catch (err) {
    handleError(err, res);
  }
});

router.get("/:id", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const client = await clientsService.findById(param(req.params.id));
    res.json({ success: true, data: client });
  } catch (err) {
    handleError(err, res);
  }
});

router.post("/", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const client = await clientsService.create(req.body);
    res.status(201).json({ success: true, data: client });
  } catch (err) {
    handleError(err, res);
  }
});

router.put("/:id", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const client = await clientsService.update(param(req.params.id), req.body);
    res.json({ success: true, data: client });
  } catch (err) {
    handleError(err, res);
  }
});

router.delete("/:id", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    await clientsService.remove(param(req.params.id));
    res.json({ success: true, message: "Client deleted" });
  } catch (err) {
    handleError(err, res);
  }
});

export default router;
