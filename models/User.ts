import { Appointment } from "./Appointment";

enum Role {
  ADMIN = "ADMIN",
  PATIENT = "PATIENT",
  DOCTOR = "DOCTOR"
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  status:boolean ;
  specialist: string;
  role:Role;
  createdAt: string;
  updatedAt: string;
  appointmentsAsPatient: Appointment[];
  appointmentsAsDoctor: Appointment[];
}