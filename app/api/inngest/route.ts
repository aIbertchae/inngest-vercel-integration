import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { baseline } from "@/inngest/functions/baseline";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [baseline],
});
