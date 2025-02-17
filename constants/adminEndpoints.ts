// src/components/constants/endpoints.ts
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL ="https://booking-system-backend-orpin.vercel.app/api/admin";

export const ENDPOINTS = {
  
    UPDATE_DOCTOR: `${BASE_URL}/update-doctor`,
    ADD_DOCTOR: `${BASE_URL}/add-doctor`,
    DELETE_DOCTOR: `${BASE_URL}/delete-doctor`,
    VIEW_DOCTOR: `${BASE_URL}/view-doctor`,
    
  };