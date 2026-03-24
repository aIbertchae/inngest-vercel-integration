import { inngest } from "../client";

export const tenth = inngest.createFunction(
  { id: "tenth" },
  { event: "test/tenth" },
  async ({ event, step }) => {
    const result = await step.run("say-hello", () => {
      return { message: "Hello from tenth function!" };
    });

    return result;
  }
);
