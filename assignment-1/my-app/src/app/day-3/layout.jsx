"use client";

import Navigation from "@/components/Components-3/Navigation";
import { AuthProvider } from "@/context/context-3/AuthContext";
import { ThemeProvider } from "@/context/context-3/ThemeContext";

export default function Layout({ children }) {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <AuthProvider>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </AuthProvider>
    </div>
  );
}
