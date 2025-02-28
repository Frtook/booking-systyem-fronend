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

export const useUpdateDoctors = (id: number) => {
  return useMutation({
    mutationFn: async (status: boolean) => {
      return await apiClient.put<IResponse>(`/api/admin/update-doctor/${id}`, {
        status,
      });
    },
    onSuccess: (data) => {
      toast.success("updated success ");
      invalidateQueries("admin-doctor");
      return data.data;
    },
    onError: (error) => {
      toast.error(error.message);
      return error;
    },
  });
};

export const useDeleteDoctors = () => {
  return useMutation({
    mutationKey: ["admin-doctor"],
    mutationFn: async (id: number) => {
      return await apiClient.delete<IResponse>(
        `/api/admin/delete-doctor/${id}`
      );
    },
    onSuccess: (data) => {
      toast.success("delete success ");
      invalidateQueries("admin-doctor");
      return data.data;
    },
    onError: (error) => {
      toast.error(error.message);
      return error;
    },
  });
};
