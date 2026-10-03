"use client";
import { useState, useEffect, useRef } from "react";

export default function StatsCounters() {
  const [counts, setCounts] = useState({ surgeries: 0, patients: 0, years: 0 });
  const rowRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const startTime = performance.now();
            const duration = 2800; // All 3 count simultaneously for exact same duration

            const updateCounts = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // Smooth cubic ease-out deceleration matching counterUp
              const easeOut = 1 - Math.pow(1 - progress, 3);

              setCounts({
                surgeries: Math.floor(easeOut * 25000),
                patients: Math.floor(easeOut * 50000),
                years: Math.floor(easeOut * 15),
              });

              if (progress < 1) {
                requestAnimationFrame(updateCounts);
              } else {
                setCounts({ surgeries: 25000, patients: 50000, years: 15 });
              }
            };

            requestAnimationFrame(updateCounts);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rowRef} className="row m-b10">
      <div className="col-xxl-4 col-sm-4 col-6 wow fadeInRight" data-wow-delay="0.6s" data-wow-duration="0.8s">
        <div className="content-bx style-1 m-b30">
          <span className="content-text">
            <span className="counter">{counts.surgeries.toLocaleString("en-US")}</span>+
          </span>
          <h3 className="title m-b0">Surgeries Done</h3>
        </div>
      </div>
      <div className="col-xxl-4 col-sm-4 col-6 wow fadeInRight" data-wow-delay="0.8s" data-wow-duration="0.8s">
        <div className="content-bx style-1 m-b30">
          <span className="content-text">
            <span className="counter">{counts.patients.toLocaleString("en-US")}</span>+
          </span>
          <h3 className="title m-b0">Happy Patients</h3>
        </div>
      </div>
      <div className="col-xxl-4 col-sm-4 col-6 wow fadeInRight" data-wow-delay="1.0s" data-wow-duration="0.8s">
        <div className="content-bx style-1 m-b30">
          <span className="content-text">
            <span className="counter">{counts.years}</span>+
          </span>
          <h3 className="title m-b0">Years of Excellence</h3>
        </div>
      </div>
    </div>
  );
}
