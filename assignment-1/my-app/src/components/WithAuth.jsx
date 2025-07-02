"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Simulate an auth check
const isAuthenticated = () => {
  // Replace this with your real auth logic
  return typeof window !== "undefined" && localStorage.getItem("token");
};

export default function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated()) {
        router.push("/login"); // Redirect to login page if not authenticated
      }
    }, []);

    if (!isAuthenticated()) {
      return null; // Or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };
}
