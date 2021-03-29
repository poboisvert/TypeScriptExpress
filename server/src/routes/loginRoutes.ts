import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Login");
});

export { router }; // {} Export a variable already declared
