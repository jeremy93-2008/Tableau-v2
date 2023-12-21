"use client";

import { useClerk } from "@clerk/nextjs";

export function SignInButton() {
  const { redirectToSignIn } = useClerk();

  return <button onClick={() => redirectToSignIn()}>Sign In</button>;
}
