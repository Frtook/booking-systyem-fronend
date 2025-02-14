import { User } from "./User";





export interface Appointment {
    id: number;
    appointment_date: string;
    status: boolean; 
    createdAt: string;
    patent: User;
    patentId: number;
    doctor: User;
    doctorId: number;
  }
  
  