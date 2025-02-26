"use client";
import Cookies from "js-cookie";

import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import { useRouter } from "next/navigation";

const DAYS = 60 * 60 * 24 * 7; // 7 days
export const useRegester = () => {
  const { push } = useRouter();
  return useMutation({
    mutationFn: async (regesterData: IRegister) => {
      return await apiClient.post("/api/auth/register", regesterData);
    },
    onSuccess: async () => {
      push("/login");
    },
    onError: (error) => error,
  });
};

export const useLogin = () => {
  const { push } = useRouter();
  return useMutation({
    mutationFn: async (loginData: ILogin) => {
      return await apiClient.post<ILoginResponse>("/api/auth/login", loginData);
    },
    onSuccess: async (data) => {
      Cookies.set("token", JSON.stringify(data.data.data.token), {
        expires: 7,
      });
      Cookies.set("user", JSON.stringify(data.data.data.user), { expires: 7 });
      // await setCookies("user", data.data.data.user, DAYS);
      // await setCookies("token", data.data.data.token, DAYS);
      // await createSession(data.data.data.user.id, data.data.data.user.role);
      push("/dashboard");
    },
    onError: (error) => error,
  });
};
