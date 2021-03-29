console.log("TS INIT");

import express from "express";
import { router } from "./routes/loginRoutes";

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

app.use(router);

app.listen(PORT, () => {
  console.log(`àctive on ${PORT}`);
});
