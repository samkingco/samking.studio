import sendgrid from "@sendgrid/mail";
import { initTRPC, TRPCError } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { stripIndents } from "common-tags";
import { ContactInput, enquiryTypes } from "../../../utils/contact";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

const t = initTRPC.create();

const appRouter = t.router({
  contact: t.procedure.input(ContactInput).mutation(async ({ input }) => {
    const { name, enquiryType, context, contact } = input;

    const message = stripIndents`
      ${name}
      ${contact}
      ${new Date().toString()}
      
      ---

      # ${
        enquiryTypes.find((i) => i.value === enquiryType)?.label ??
        "Something else"
      }
      
      ${context}
    `;

    try {
      await sendgrid.send({
        to: "accounts@samking.studio",
        from: "accounts@samking.studio",
        subject: `Website message from ${name}`,
        text: message,
      });
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        cause: error,
      });
    }
  }),
});

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
