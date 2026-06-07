import express from "express";
import cors from "cors";
import authRoutes from "./auth/auth.routes";
import usersRoutes from "./users/users.routes";
import clientsRoutes from "./clients/clients.routes";
import productsRoutes from "./products/products.routes";
import invoicesRoutes from "./invoices/invoices.routes";
import paymentsRoutes from "./payments/payments.routes";
import ticketsRoutes from "./tickets/tickets.routes";
import settingsRoutes from "./settings/settings.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ success: true, message: "OpenBill API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/clients", clientsRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/invoices", invoicesRoutes);
app.use("/api/payments", paymentsRoutes);
app.use("/api/tickets", ticketsRoutes);
app.use("/api/settings", settingsRoutes);

export default app;
