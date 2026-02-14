"use client";

import { useEffect, useState } from "react";

export default function useLogoDocked() {
  const [isDocked, setIsDocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsDocked(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isDocked;
}
