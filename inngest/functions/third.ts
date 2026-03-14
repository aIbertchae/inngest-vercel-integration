import { inngest } from "../client";

export const third = inngest.createFunction(
  { id: "third" },
  { event: "test/third" },
  async ({ event, step }) => {
    const result = await step.run("say-hello", () => {
      return { message: "Hello from third function!" };
    });

    return result;
  }
);
