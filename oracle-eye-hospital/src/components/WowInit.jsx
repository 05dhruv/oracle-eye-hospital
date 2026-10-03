"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function WowInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const initWow = async () => {
        // Dynamically import to avoid server-side errors
        const WOW = (await import("wowjs")).WOW;
        new WOW({
          boxClass: "wow", // default
          animateClass: "animated", // default
          offset: 0, // default
          mobile: true, // default
          live: false, // default
        }).init();
      };
      // Short delay ensures DOM is fully painted after route change
      setTimeout(() => {
        initWow();
      }, 100);
    }
  }, [pathname]); // Re-runs on every page load/navigation

  return null;
}

