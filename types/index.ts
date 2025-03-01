interface IRegister {
  username: string;
  email: string;
  password: string;
}

interface ILogin {
  email: string;
  password: string;
}

interface ILoginResponse {
  data: {
    data: {
      user: {
        id: number;
        name: string;
        email: string;
        role: string;
      };
      token: string;
    };
  };
}

interface SessionPayload {
  userId?: number;
  role?: string;
  user?: IUser;
  expiresAt?: Date;
}

interface IUser {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  status?: boolean;
  specialist?: string;
  workingTime?: any;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
}
interface IResponsePatent {
  data: IUser[];
}
interface IResponse {
  data: any;
}
interface IResponseAppoinement {
  data: IAppointment[];
}

interface IBookAppoinetment {
  appointment_date: string;
  doctorId: number;
}

interface IAppointment {
  id: number;
  docotrID: string;
  appointment_date?: string;
  createdAt?: string;
  doctor: IUser;
}

interface IAppointmentDoctor {
  id: number;
  appointment_date: string;
  status: boolean;
  createdAt: string;
  patentId: number;
  doctorId: number;
  patent: {
    id: number;
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
  };
}
