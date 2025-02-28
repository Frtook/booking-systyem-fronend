"use server";
import { encrypt } from "@/lib/session";
import { QueryClient } from "@tanstack/react-query";
import { cookies } from "next/headers";

export const invalidateQueries = async (key: string) => {
  const queryClient = new QueryClient();
  queryClient.invalidateQueries({ queryKey: [key] });
};

export async function createSession(user: IUser) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ user });
  const cookieStore = await cookies();

  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}
