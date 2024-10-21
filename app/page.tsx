"use client";

import { useEffect } from "react";
import { getCookie } from "./global/actions";
import { useRouter } from "next/navigation";

export default function Main() {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("user-token");
    if (!token || token === "") router.push("/register");
  }, []);

  return <main>Main</main>;
}
