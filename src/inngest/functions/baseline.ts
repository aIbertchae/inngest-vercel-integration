import { inngest } from "../client.js";

export const baseline = inngest.createFunction(
  { id: "baseline" },
  { event: "test/baseline" },
  async ({ event, step }) => {
    const result = await step.run("say-hello", () => {
      return { message: "Hello from baseline function!" };
    });

    return result;
  }
);
