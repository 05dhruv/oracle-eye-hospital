"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AosAnimationProvider() {
  const pathname = usePathname();

  useEffect(() => {
    let observer = null;

    const initAnimations = () => {
      // Find all wow elements as well as any elements with data-aos
      const animElements = document.querySelectorAll(".wow, [data-aos]");
      if (!animElements.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;

              // Read delay and duration
              const delay =
                el.getAttribute("data-wow-delay") ||
                el.getAttribute("data-aos-delay") ||
                "0s";
              const duration =
                el.getAttribute("data-wow-duration") ||
                el.getAttribute("data-aos-duration") ||
                "0.8s";

              el.style.animationDelay = delay;
              el.style.animationDuration = duration;
              el.style.visibility = "visible";
              el.classList.add("animated");

              // If data-aos was used without wow class, add corresponding animation class
              const aosType = el.getAttribute("data-aos");
              if (aosType) {
                if (aosType === "fade-up") el.classList.add("fadeInUp");
                else if (aosType === "fade-down") el.classList.add("fadeInDown");
                else if (aosType === "fade-left") el.classList.add("fadeInLeft");
                else if (aosType === "fade-right") el.classList.add("fadeInRight");
                else if (aosType === "zoom-in") el.classList.add("zoomIn");
                else el.classList.add("fadeIn");
              }

              // Stop observing once animated (one-shot trigger, exactly like WOW/AOS)
              observer.unobserve(el);
            }
          });
        },
        {
          rootMargin: "0px 0px -40px 0px", // Trigger when element is 40px into view
          threshold: 0.05,
        }
      );

      animElements.forEach((el) => {
        // If already animated on initial render, keep it visible
        if (el.classList.contains("animated")) {
          el.style.visibility = "visible";
        } else {
          el.style.visibility = "hidden";
          observer.observe(el);
        }
      });
    };

    // Small delay to ensure DOM is fully ready after React mount/navigation
    const timer = setTimeout(initAnimations, 80);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}
