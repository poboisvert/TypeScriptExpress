console.log("TS INIT");

import express from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

const app = express(); // Init middleware
const PORT = 3000; // Express user app port
// ROUTING
/* app.get("/", (req: Request, res: Response) => {
  console.log("Home / ");

  res.send(`
    <div>
    Home
    </div>`);
}); */

app.use(bodyParser.urlencoded({ extended: true })); // Middleware agg. post content
app.use(cookieSession({ keys: ["mykey"] })); // cookie navigation middle ware
app.use(router);

app.listen(PORT, () => {
  console.log(`àctive on ${PORT}`);
});
