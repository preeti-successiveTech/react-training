// app/contact/page.jsx
"use client";
import LazyWrapper from "@/components/LazyWrapper";

const ContactContent = LazyWrapper(() => import("@/components/Contact"));

export default function ContactPage() {
  return <ContactContent />;
}
