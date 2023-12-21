"use client";
import { UserButton, useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => {
      const headers = new Headers();
      headers.set("Authorization", `Bearer ${token}`);

      fetch("http://localhost:4200/api/user/current", {
        headers,
      })
        .then((res) => res.json())
        .then(console.log);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserButton />
    </main>
  );
}
