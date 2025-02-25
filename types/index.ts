interface IRegister {
  username: string;
  email: string;
  password: string;
}

interface ILogin {
  email: string;
  password: string;
}

type ILoginResponse = {
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
};

type SessionPayload = {
  userId: number;
  role: string;
  expiresAt: Date;
};
