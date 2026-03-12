import { inngest } from "../client";

export const second = inngest.createFunction(
  { id: "second" },
  { event: "test/second" },
  async ({ event, step }) => {
    const result = await step.run("say-hello", () => {
      return { message: "Hello from second function!" };
    });

    return result;
  }
);
