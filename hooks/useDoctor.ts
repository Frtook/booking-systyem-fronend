"use client";
import apiClient from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useGetDoctorAppointments = () => {
  return useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await apiClient.get<IResponse>(
        "/api/doctor/get-appointments"
      );
      return res.data as IAppointmentDoctor[];
    },
  });
};
