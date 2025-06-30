"use client";

import { PreferenceTheme } from "@/components/Components-3/PreferenceTheme";
import { AuthProvider } from "@/context/context-3/AuthContext";
import { ThemeProvider } from "@/context/context-3/ThemeContext";

export default function showPreferenceTheme() {
  return (
    <>
      <AuthProvider>
        <PreferenceTheme />
      </AuthProvider>
    </>
  );
}
