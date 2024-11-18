import React, { createContext, useContext, useState, ReactNode } from "react";

type UserSession = {
  username: string;
  email: string;
};

type UserContextType = {
  session: UserSession | null;
  setSession: (session: UserSession | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState<UserSession | null>(null);

  return (
    <UserContext.Provider value={{ session, setSession }}>
      {children}
    </UserContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useSession debe ser usado dentro de un UserProvider");
  }
  return context;
};
