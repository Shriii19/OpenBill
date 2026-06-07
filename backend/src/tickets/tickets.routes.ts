import { Router, Response } from "express";
import { TicketsService } from "./tickets.service";
import { authGuard, AuthRequest } from "../common/guards/auth.guard";
import { handleError } from "../common/filters/http-exception.filter";
import { toInt, param } from "../common/utils/query";

const router = Router();
const ticketsService = new TicketsService();

router.get("/", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const page = toInt(req.query.page, 1);
    const limit = toInt(req.query.limit, 20);
    const userId = req.user!.role === "admin" ? undefined : req.user!.id;
    const result = await ticketsService.findAll(page, limit, userId);
    res.json({ success: true, ...result });
  } catch (err) {
    handleError(err, res);
  }
});

router.get("/:id", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const ticket = await ticketsService.findById(param(req.params.id));
    res.json({ success: true, data: ticket });
  } catch (err) {
    handleError(err, res);
  }
});

router.post("/", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const ticket = await ticketsService.create(req.body, req.user!.id);
    res.status(201).json({ success: true, data: ticket });
  } catch (err) {
    handleError(err, res);
  }
});

router.post("/:id/close", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const ticket = await ticketsService.close(param(req.params.id));
    res.json({ success: true, data: ticket });
  } catch (err) {
    handleError(err, res);
  }
});

export default router;
