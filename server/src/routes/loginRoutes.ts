import { Router, Response, Request } from "express";

// TS Interface validation
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }; // Override body in Request
}

// VARIABLE DELCARATION
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

  router.post("/login", (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;
    // res.send(email + password);
    if (email && password && email === "test@test.com" && password === "test") {
      res.send(email.toUpperCase()); // Need type guard
    } else {
      res.send("Invalid email");
    }
  });
});

export { router }; // {} Export a variable already declared
