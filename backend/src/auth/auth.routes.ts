import { Router, Request, Response } from "express";
import { AuthService } from "./auth.service";
import { handleError } from "../common/filters/http-exception.filter";

const router = Router();
const authService = new AuthService();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const result = await authService.register(req.body);
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    handleError(err, res);
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const result = await authService.login(req.body);
    res.json({ success: true, data: result });
  } catch (err) {
    handleError(err, res);
  }
});

export default router;
