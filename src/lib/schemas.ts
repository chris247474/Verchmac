import { z } from "zod";

export const inquirySchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  workEmail: z.string().email("Please enter a valid work email"),
  organization: z.string().min(1, "Organization is required"),
  inquiryType: z.enum(["education", "enterprise", "smb", "other"], {
    message: "Please select an inquiry type",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InquirySchema = z.infer<typeof inquirySchema>;
