import { createContext, useContext } from 'react';

const FirestoreContext = createContext(null);

export const useFirestore = () => useContext(FirestoreContext);

export const FirestoreProvider = ({ children }) => {
  const value = {};

  return <FirestoreContext.Provider value={value}>{children}</FirestoreContext.Provider>;
};
