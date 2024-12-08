import { createContext, useContext } from 'react';

export const UserContext = createContext();

export const useUserContext = () => {
  const user = useContext(UserContext);

  if (!user)
    throw new Error(
      'Kompoentai turi būti naudojami UserContextProvider viduje'
    );

  return user;
};
