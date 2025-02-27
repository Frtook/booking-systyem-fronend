"use client";
import { invalidateQueries } from "@/helper/helper";
import apiClient from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetAdminDoctors = () => {
  return useQuery({
    queryKey: ["admin-doctor"],
    queryFn: async () => {
      const res = await apiClient.get<IResponse>("/api/admin/view-doctors");
      return res.data;
    },
  });
};

export const useUpdateDoctors = () => {
  return useMutation({
    mutationFn: async (docotrData: IUser) => {
      return await apiClient.put<IResponse>(
        `/api/admin/update-doctor/${docotrData.id}`,
        docotrData
      );
    },
    onSuccess: (data) => {
      toast.success("updated success ");
      invalidateQueries("dmin-doctor");
      return data.data;
    },
    onError: (error) => {
      toast.error(error.message);
      return error;
    },
  });
};
