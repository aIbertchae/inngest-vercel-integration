import { inngest } from "../client";

export const eleventh = inngest.createFunction(
  { id: "eleventh" },
  { event: "test/eleventh" },
  async ({ event, step }) => {
    const result = await step.run("say-hello", () => {
      return { message: "Hello from eleventh function!" };
    });

    return result;
  }
);
