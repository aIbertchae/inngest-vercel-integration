import { serve } from "inngest/node";
import { inngest } from "../src/inngest/client.js";
import { baseline } from "../src/inngest/functions/baseline.js";

export default serve({
  client: inngest,
  functions: [baseline],
});
