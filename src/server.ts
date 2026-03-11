import express from "express";
import { serve } from "inngest/express";
import { inngest } from "./inngest/client.js";
import { baseline } from "./inngest/functions/baseline.js";

const app = express();

app.use(
  "/api/inngest",
  serve({
    client: inngest,
    functions: [baseline],
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Inngest endpoint: http://localhost:${port}/api/inngest`);
});
