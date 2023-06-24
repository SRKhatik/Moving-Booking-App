import { TOKEN } from "../utils/constants";

export const isUserLoggedIn = () => {
  const token = localStorage.getItem(TOKEN);
  return token !== undefined;
};
