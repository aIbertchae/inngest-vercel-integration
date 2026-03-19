import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { baseline } from "@/inngest/functions/baseline";
import { second } from "@/inngest/functions/second";
import { third } from "@/inngest/functions/third";
import { fourth } from "@/inngest/functions/fourth";
import { fifth } from "@/inngest/functions/fifth";
import { sixth } from "@/inngest/functions/sixth";
import { seventh } from "@/inngest/functions/seventh";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [baseline, second, third, fourth, fifth, sixth, seventh],
});
