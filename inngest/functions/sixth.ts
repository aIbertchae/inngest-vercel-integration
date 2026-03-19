import { inngest } from "../client";

export const sixth = inngest.createFunction(
  { id: "sixth" },
  { event: "test/sixth" },
  async ({ event, step }) => {
    const result = await step.run("say-hello", () => {
      return { message: "Hello from sixth function!" };
    });

    return result;
  }
);
