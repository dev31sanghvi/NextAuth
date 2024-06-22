"use client";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react"
export const Appbar = () => {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
        signIn();
        }}
      >
        Signin
      </button>
      <br />
      <button
        onClick={() => {
        signOut();
        }}
      >
        SignOut
      </button>
    </div>
  );
};
