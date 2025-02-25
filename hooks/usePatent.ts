"use clinet";
import { useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
// import { useRouter } from "next/navigation";

export const useRegester = () => {
  return useMutation({
    mutationFn: async (regesterData: IRegister) => {
      return await apiClient.post("/api/auth/register", regesterData);
    },
    onSuccess: (data) => data,
    onError: (error) => error,
  });
};
