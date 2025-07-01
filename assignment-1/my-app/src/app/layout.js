"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import createEmotionCache from "@/createEmotionCache";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const clientSideEmotionCache = createEmotionCache();
const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5", // Make sure to match your bg color here
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{ backgroundColor: theme.palette.background.default }}
      >
        <CacheProvider value={clientSideEmotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
