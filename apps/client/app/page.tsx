import { SignedIn, ClerkProvider, useSignIn } from "@clerk/nextjs";
import { UserProvider } from "@/app/providers/UserProvider";
import { SignInButton } from "@/app/signIn";

export default function Home() {
  return (
    <ClerkProvider>
      <UserProvider>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <SignInButton />
          <SignedIn>
            <div>This content is visible only to signed in users.</div>
          </SignedIn>
        </main>
      </UserProvider>
    </ClerkProvider>
  );
}
