"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    // Redirect to /blogs/new if the user is on the / route
    router.push('/blogs/new');
  }, [router]);

  return null;
  }
