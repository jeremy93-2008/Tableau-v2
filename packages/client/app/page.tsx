"use client"
import { UserButton, useAuth } from "@clerk/nextjs";
import {useEffect} from "react";

export default function Home() {
    const {getToken} = useAuth()

    useEffect(() => {
        getToken().then(token => console.log(token))
    }, [])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserButton />
    </main>
  )
}
