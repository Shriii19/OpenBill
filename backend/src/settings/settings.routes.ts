import { Router, Response } from "express";
import { SettingsService } from "./settings.service";
import { authGuard, AuthRequest } from "../common/guards/auth.guard";
import { rolesGuard } from "../common/guards/roles.guard";
import { handleError } from "../common/filters/http-exception.filter";

const router = Router();
const settingsService = new SettingsService();

router.get("/", async (req: AuthRequest, res: Response) => {
  try {
    const settings = await settingsService.get();
    res.json({ success: true, data: settings });
  } catch (err) {
    handleError(err, res);
  }
});

router.put("/", authGuard, rolesGuard("admin"), async (req: AuthRequest, res: Response) => {
  try {
    const settings = await settingsService.update(req.body);
    res.json({ success: true, data: settings });
  } catch (err) {
    handleError(err, res);
  }
});

export default router;
