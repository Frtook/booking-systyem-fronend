"use server";
import { cookies } from "next/headers";

export async function getCookies(key: string): Promise<string | undefined> {
  const data = (await cookies()).get(key)?.value;
  if (data) {
    console.log("from getCookies", data);
    return JSON.parse(data);
  }
  return undefined;
}

export async function deleteCookies(key: string) {
  return (await cookies()).delete(key);
}

export async function setCookies(
  key: string,
  data: string | number | object,
  maxAge: number
) {
  const serializedData = JSON.stringify(data);
  (await cookies()).set(key, serializedData, {
    maxAge,
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return null;
}
