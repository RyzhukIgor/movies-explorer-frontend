import { createContext, useContext } from "react";

export const CurrentUserContext = createContext();

export const useUserStore = () => {
  return useContext(CurrentUserContext);
};
