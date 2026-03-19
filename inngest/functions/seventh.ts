import { inngest } from "../client";

export const seventh = inngest.createFunction(
  { id: "seventh" },
  { event: "test/seventh" },
  async ({ event, step }) => {
    const result = await step.run("say-hello", () => {
      return { message: "Hello from seventh function!" };
    });

    return result;
  }
);
