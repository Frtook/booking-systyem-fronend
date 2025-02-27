"use client";
import { invalidateQueries } from "@/helper/helper";
import apiClient from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetDoctor = () => {
  return useQuery({
    queryKey: ["doctor"],
    queryFn: async () => {
      const res = await apiClient.get<IResponsePatent>(
        "/api/patent/get-doctors"
      );
      return res.data;
    },
  });
};
export const useBookAppointment = () => {
  return useMutation({
    mutationFn: async (bookAppointment: IBookAppoinetment) => {
      return await apiClient.post<IResponse>(
        "/api/patent/book-appointment",
        bookAppointment
      );
    },
    onSuccess: (data) => {
      toast.success("success booking");
      invalidateQueries("appointments");
      return data.data;
    },
    onError: (error) => {
      toast.error(error.message);
      return error;
    },
  });
};

export const useGetAppoinments = () => {
  return useQuery({
    queryKey: ["appointments"],
    queryFn: async () => {
      const res = await apiClient.get<IResponseAppoinement>(
        "/api/patent/get-appointments"
      );
      return res.data;
    },
  });
};
