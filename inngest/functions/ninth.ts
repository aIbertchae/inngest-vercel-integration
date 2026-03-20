import { inngest } from "../client";

export const ninth = inngest.createFunction(
  { id: "ninth" },
  { event: "test/ninth" },
  async ({ event, step }) => {
    const result = await step.run("say-hello", () => {
      return { message: "Hello from ninth function!" };
    });

    return result;
  }
);
