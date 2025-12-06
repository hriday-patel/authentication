import { z } from "zod";
import { Role } from "../generated/prisma/enums";
import crypto from "crypto";
import { client } from "./redis";
import { cookies } from "next/headers";

const sessionSchema = z.object({
  id: z.number(),
  role: z.enum(Role),
});

const SESSION_EXPIRATION_TIME = 60 * 60 * 24 * 7;

type UserSession = z.infer<typeof sessionSchema>;

export type Cookies = {
  set: (
    key: string,
    value: string,
    options?: {
      secure?: boolean;
      httpOnly?: boolean;
      sameSite: "strict" | "lax";
      expires?: number;
    }
  ) => void;
  get: (key: string) => { name: string; value: string } | undefined;
  delete: (key: string) => void;
};

export async function createSession(
  user: UserSession,
  cookies: Pick<Cookies, "set">
) {
  const sessionId = crypto.randomBytes(512).toString("hex").normalize();
  await client.set(
    `session:${sessionId}`,
    JSON.stringify(sessionSchema.parse(user)),
    {
      expiration: {
        type: "EX",
        value: SESSION_EXPIRATION_TIME,
      },
    }
  );
  setCookies(sessionId, cookies);
}

function setCookies(sessionId: string, cookies: Pick<Cookies, "set">) {
  cookies.set("session-id", sessionId, {
    secure: true,
    httpOnly: true,
    sameSite: "lax",
    expires: Date.now() + SESSION_EXPIRATION_TIME * 1000,
  });
}

export async function getUserBySessionId() {
  const cooky = await cookies();
  return await getUserSessionId(cooky);
 }

async function getUserSessionId(cookies: Pick<Cookies, "get">) {
    const userSession = cookies.get("session-id")?.value;
    if(!userSession) return null;
    return await getCurrentUserInfo(userSession);
}


async function getCurrentUserInfo(userSession: string) {
    const userDetails = await client.get(`session:${userSession}`);
    const {success, data: user} = sessionSchema.safeParse(userDetails);
    if(!success) return null;
    return user;
}



