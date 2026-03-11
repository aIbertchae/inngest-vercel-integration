import { serve } from "inngest/vercel";
import { inngest } from "../src/inngest/client.js";
import { baseline } from "../src/inngest/functions/baseline.js";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [baseline],
});
