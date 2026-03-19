import { inngest } from "../client";

export const eighth = inngest.createFunction(
  { id: "eighth" },
  { event: "test/eighth" },
  async ({ event, step }) => {
    const result = await step.run("say-hello", () => {
      return { message: "Hello from eighth function!" };
    });

    return result;
  }
);
