import { Router, Response, Request } from "express";

const router = Router();

router.get("/login", (req: Request, res: Response) => {
  //res.send("Login");
  res.send(`
  <form method="POST">
  <div>
    <label>Email</label>
    <input name="email" />
  </div>
  <div>
    <label>Password</label>
    <input type="password" name="password" />
  </div>
  <button>Button</button>
  </form>
  `);
});

export { router }; // {} Export a variable already declared
