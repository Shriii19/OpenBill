import { Router, Response } from "express";
import { UsersService } from "./users.service";
import { authGuard, AuthRequest } from "../common/guards/auth.guard";
import { rolesGuard } from "../common/guards/roles.guard";
import { handleError } from "../common/filters/http-exception.filter";
import { toInt, param } from "../common/utils/query";

const router = Router();
const usersService = new UsersService();

router.get("/", authGuard, rolesGuard("admin"), async (req: AuthRequest, res: Response) => {
  try {
    const page = toInt(req.query.page, 1);
    const limit = toInt(req.query.limit, 20);
    const result = await usersService.findAll(page, limit);
    res.json({ success: true, ...result });
  } catch (err) {
    handleError(err, res);
  }
});

router.get("/me", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const user = await usersService.findById(req.user!.id);
    res.json({ success: true, data: user });
  } catch (err) {
    handleError(err, res);
  }
});

router.get("/:id", authGuard, rolesGuard("admin"), async (req: AuthRequest, res: Response) => {
  try {
    const user = await usersService.findById(param(req.params.id));
    res.json({ success: true, data: user });
  } catch (err) {
    handleError(err, res);
  }
});

router.put("/me", authGuard, async (req: AuthRequest, res: Response) => {
  try {
    const user = await usersService.update(req.user!.id, req.body);
    res.json({ success: true, data: user });
  } catch (err) {
    handleError(err, res);
  }
});

router.put("/:id", authGuard, rolesGuard("admin"), async (req: AuthRequest, res: Response) => {
  try {
    const user = await usersService.update(param(req.params.id), req.body);
    res.json({ success: true, data: user });
  } catch (err) {
    handleError(err, res);
  }
});

router.delete("/:id", authGuard, rolesGuard("admin"), async (req: AuthRequest, res: Response) => {
  try {
    await usersService.remove(param(req.params.id));
    res.json({ success: true, message: "User deleted" });
  } catch (err) {
    handleError(err, res);
  }
});

export default router;
