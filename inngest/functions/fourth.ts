import { inngest } from "../client";

export const fourth = inngest.createFunction(
  { id: "fourth" },
  { event: "test/fourth" },
  async ({ event, step }) => {
    const result = await step.run("say-hello", () => {
      return { message: "Hello from fourth function!" };
    });

    return result;
  }
);
