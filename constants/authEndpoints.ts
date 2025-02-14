// src/components/constants/endpoints.ts
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL ="https://booking-system-backend-orpin.vercel.app/api/auth";

export const ENDPOINTS = {
  
    LOGIN: `${BASE_URL}/login`,
    REGISTER: `${BASE_URL}/register`,
  
  };