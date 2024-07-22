"use client";

import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  username: z.string().min(2).max(50),
  name: z.string().min(2).max(50),
  bio: z.string().min(2).max(1000),
});
