import { invalidateQueries } from "@/helper/helper";
import apiClient from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAdminDoctors = () => {
  return useQuery({
    queryKey: ["admin-doctor"],
    queryFn: async () => {
      const res = await apiClient.get<IResponse>("/view-doctors");
      return res.data;
    },
  });
};

export const useUpdateDoctors = () => {
  return useMutation({
    mutationFn: async (docotrData: IUser) => {
      return await apiClient.put<IResponse>(
        `update-doctor/${docotrData.id}`,
        docotrData
      );
    },
    onSuccess: (data) => {
      invalidateQueries("dmin-doctor");
      return data.data;
    },
    onError: (error) => error,
  });
};
