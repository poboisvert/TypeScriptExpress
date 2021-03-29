console.log("TS INIT");

import express, { Response, Request } from "express";

const app = express(); // Init middleware
const PORT = 3000;
// ROUTING
app.get("/", (req: Request, res: Response) => {
  console.log("Home / ");

  res.send(`
    <div>
    Home
    </div>`);
});

app.listen(PORT, () => {
  console.log(`àctive on ${PORT}`);
});
