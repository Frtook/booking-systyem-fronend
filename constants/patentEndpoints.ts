// src/components/constants/endpoints.ts
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL ="https://booking-system-backend-orpin.vercel.app/api/patent";

export const ENDPOINTS = {
  
    BOOK_APPOINTMENT: `${BASE_URL}/book-appointment`,
    GET_APPOINTMENTS: `${BASE_URL}/get-appointments`,
    GET_DOCTORS: `${BASE_URL}/get-doctors`,
    
  };