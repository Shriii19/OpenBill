import { Router, Response } from "express";
import { PaymentsService } from "./payments.service";
import { authGuard, AuthRequest } from "../common/guards/auth.guard";
import { handleError } from "../common/filters/http-exception.filter";
import { toInt } from "../common/utils/query";

const router = Router();
const paymentsService = new PaymentsService();

router.get("/", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const page = toInt(req.query.page, 1);
    const limit = toInt(req.query.limit, 20);
    const result = await paymentsService.findAll(page, limit);
    res.json({ success: true, ...result });
  } catch (err) {
    handleError(err, res);
  }
});

router.post("/process", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const payment = await paymentsService.process(req.body);
    res.status(201).json({ success: true, data: payment });
  } catch (err) {
    handleError(err, res);
  }
});

export default router;
