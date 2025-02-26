import Cookie from "js-cookie";

export const getUserId = () => {
  const userCookie = Cookie.get("user");
  if (userCookie) {
    const user: IUser = JSON.parse(userCookie);
    return user.id;
  }
};
