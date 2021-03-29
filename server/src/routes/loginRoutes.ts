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

  // ROUTE - /login

  router.post("/login", (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;
    // res.send(email + password);
    if (email && password && email === "test@test.com" && password === "test") {
      // Create the session cookie
      req.session = { loggedIn: true, name: "test" };

      // Redirect
      res.redirect("/");
    } else {
      res.send("Invalid email");
    }
  });
});

// ROUTE - /
router.get("/", (req: Request, res: Response) => {
  //Confirm if session is saved
  if (req.session && req.session.loggedIn) {
    // req.session.loggedI RS confirm undefined
    res.send(`
    <div>
    <h3>Hi ${req.session.name}</h3>
    
    <a href="/logout">Sign Out</a>
    </div>`);
  } else {
    res.send(`
    <div>
        <h3>Please Sign In</h3>
       <a href="/login">Sign In</a>
    </div>`);
  }
  }
});

// ROUTE - /logout
router.get("/logout", (req: Request, res: Response) => { 
    // Reset session
    req.session = undefined
    // Redirect
    res.redirect("/");
}
export { router }; // {} Export a variable already declared
