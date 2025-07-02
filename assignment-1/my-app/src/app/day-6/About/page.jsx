// app/about/page.jsx
"use client";
import LazyWrapper from "@/components/LazyWrapper";

const AboutContent = LazyWrapper(() => import("@/components/About"));

export default function AboutPage() {
  return <AboutContent />;
}
