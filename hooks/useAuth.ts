"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import { useRouter } from "next/navigation";
import { createSession } from "@/lib/session";

const DAYS = 60 * 60 * 24 * 7; // 7 days

export const useRegester = () => {
  return useMutation({
    mutationFn: async (regesterData: IRegister) => {
      return await apiClient.post("/api/auth/register", regesterData);
    },
    onSuccess: (data) => data,
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
      await createSession(data.data.data.user.id, data.data.data.user.role);
      push("/dashboard");
    },
    onError: (error) => error,
  });
};
