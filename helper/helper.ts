"use server";
import { QueryClient } from "@tanstack/react-query";

export const invalidateQueries = async (key: string) => {
  const queryClient = new QueryClient();
  queryClient.invalidateQueries({ queryKey: [key] });
};
