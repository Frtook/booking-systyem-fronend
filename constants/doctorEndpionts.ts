// src/components/constants/endpoints.ts
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL ="https://booking-system-backend-orpin.vercel.app/api/doctor";

export const ENDPOINTS = {
  
    GET_APPOINTMENTS: `${BASE_URL}/get-appointments`,
}