import { z } from "zod";

const enquiryTypeValues = ["project", "chat", "other"] as const;

export const enquiryTypes = enquiryTypeValues.map((value) => {
  if (value === "project") {
    return { value, label: "We should make something together" };
  }
  if (value === "chat") {
    return { value, label: "We should chat" };
  }
  return { value, label: "Something else" };
});

const EnquiryTypeEnum = z.enum(enquiryTypeValues, {
  errorMap: () => ({ message: "Please select an option" }),
});

export type EnquiryType = z.infer<typeof EnquiryTypeEnum>;

export const ContactInput = z.object({
  name: z.string().min(1, {
    message: "Please add your name, anon is fine if you don't want to",
  }),
  enquiryType: EnquiryTypeEnum,
  context: z
    .string()
    .min(1, { message: "Please add some context, it's super helpful for me" }),
  contact: z.string().min(1, { message: "Please add your contact info" }),
});

export type Inputs = z.infer<typeof ContactInput>;
