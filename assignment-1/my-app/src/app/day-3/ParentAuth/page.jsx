"use client";

import { ChildAuthenticate } from "@/components/Components-3/ChildAuthenticate";
import { AuthProvider } from "@/context/context-3/AuthContext";

export default function ParentAuth() {
  return (
    <>
      <AuthProvider>
        <ChildAuthenticate />
      </AuthProvider>
    </>
  );
}
