import { Router, Response } from "express";
import { InvoicesService } from "./invoices.service";
import { authGuard, AuthRequest } from "../common/guards/auth.guard";
import { handleError } from "../common/filters/http-exception.filter";
import { toInt, toStr, param } from "../common/utils/query";

const router = Router();
const invoicesService = new InvoicesService();

router.get("/", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const page = toInt(req.query.page, 1);
    const limit = toInt(req.query.limit, 20);
    const clientId = toStr(req.query.clientId);
    const result = await invoicesService.findAll(page, limit, clientId);
    res.json({ success: true, ...result });
  } catch (err) {
    handleError(err, res);
  }
});

router.get("/:id", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const invoice = await invoicesService.findById(param(req.params.id));
    res.json({ success: true, data: invoice });
  } catch (err) {
    handleError(err, res);
  }
});

router.post("/", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const invoice = await invoicesService.create(req.body);
    res.status(201).json({ success: true, data: invoice });
  } catch (err) {
    handleError(err, res);
  }
});

router.post("/:id/pay", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const invoice = await invoicesService.markPaid(param(req.params.id));
    res.json({ success: true, data: invoice });
  } catch (err) {
    handleError(err, res);
  }
});

router.post("/:id/cancel", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const invoice = await invoicesService.cancel(param(req.params.id));
    res.json({ success: true, data: invoice });
  } catch (err) {
    handleError(err, res);
  }
});

export default router;
