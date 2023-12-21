import { SignInButton, SignedIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignInButton>
        <span className="text-3xl">Sign In</span>
      </SignInButton>
      <SignedIn>
        <div>This content is visible only to signed in users.</div>
      </SignedIn>
    </main>
  );
}
