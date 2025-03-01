import { useMutation } from "@tanstack/react-query";
import apiClient from "@/lib/axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { setCookies } from "@/helper/cookie";
const DAYS = 60 * 60 * 1000 * 7;
export const useRegester = () => {
  const { push } = useRouter();
  return useMutation({
    mutationFn: async (regesterData: IRegister) => {
      return await apiClient.post("/api/auth/register", regesterData);
    },
    onSuccess: async () => {
      toast.success("success register");
      push("/login");
    },
    onError: (error) => {
      toast.error(error.message);
      return error;
    },
  });
};

export const useLogin = () => {
  const { push } = useRouter();
  return useMutation({
    mutationFn: async (loginData: ILogin) => {
      return await apiClient.post<ILoginResponse>("/api/auth/login", loginData);
    },
    onSuccess: async (data) => {
      toast.success("welcome back");
      await setCookies("token", data.data.data.token, DAYS);
      if (data.data.data.user.role === "ADMIN") push("/admin");
      else if (data.data.data.user.role === "DOCTOR") push("/doctor");
      else push("/");
    },
    onError: (error) => {
      toast.error(error.message);
      return error;
    },
  });
};
