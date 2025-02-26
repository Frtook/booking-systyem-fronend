"use client";
import apiClient from "@/lib/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetDoctor = () => {
  return useQuery({
    queryKey: ["doctor"],
    queryFn: async () => {
      const res = await apiClient.get<IResponse>("/api/patent/get-doctors");
      return res.data;
    },
  });
};
export const useBookAppointment = () => {
  return useMutation({
    mutationKey: ["appointments"],
    mutationFn: async (bookAppointment: IBookAppoinetment) => {
      return await apiClient.post(
        "/api/patent/book-appointment",
        bookAppointment
      );
    },
    onSuccess: (data) => data,
    onError: (error) => error,
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
