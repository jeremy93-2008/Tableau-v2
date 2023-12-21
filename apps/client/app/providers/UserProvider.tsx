"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { User } from "@prisma/client";

export const UserContext = React.createContext<{
  currentUser: User | undefined;
}>({
  currentUser: undefined,
});

export function UserProvider({ children }: React.PropsWithChildren) {
  const { getToken } = useAuth();
  const [currentUser, setCurrentUser] = useState<User>();

  useEffect(() => {
    getToken().then((token) => {
      const headers = new Headers();
      headers.set("Authorization", `Bearer ${token}`);
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/current`, {
        headers,
      })
        .then((res) => res.json())
        .then((user) => {
          if (!user.email) return;
          setCurrentUser(user);
        });
    });
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
}
