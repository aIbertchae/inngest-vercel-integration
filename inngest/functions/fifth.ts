import { inngest } from "../client";

export const fifth = inngest.createFunction(
  { id: "fifth" },
  { event: "test/fifth" },
  async ({ event, step }) => {
    const result = await step.run("say-hello", () => {
      return { message: "Hello from fifth function!" };
    });

    return result;
  }
);
