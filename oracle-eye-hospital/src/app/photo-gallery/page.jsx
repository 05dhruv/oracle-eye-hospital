"use client";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div
        className="dz-bnr-inr style-1 dz-bnr-inr-sm"
        style={{ backgroundImage: "url(/Assets/img/inner-bg.jpg)" }}
      >
        <div className="container">
          <div className="dz-bnr-inr-entry d-table-cell">
            <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
              Photo Gallery
            </h1>
          </div>
        </div>
      </div>

      <section className="content-inner-1 bg-light overflow-hidden content-wrapper style-3">
        <div className="container">
          <div className="row">
            {/* Card 1: Oracle Eye Hospital */}
            <div className="col-xxl-4 col-lg-4 col-md-6 m-b30">
              <div className="dz-card style-3 h-100 d-flex flex-column shadow-sm rounded-3 overflow-hidden">
                <div className="dz-media position-relative">
                  <Link href="/gallery-details/oracle-eye-hospital">
                    <img
                      src="/uploads/photogallery/16567d17-c657-460d-9dae-98d91660fb1a.jpg"
                      alt="Oracle Eye Hospital"
                      style={{ height: "260px", width: "100%", objectFit: "cover" }}
                    />
                  </Link>
                  <span
                    className="badge bg-primary text-white position-absolute"
                    style={{ top: "14px", right: "14px", borderRadius: "20px", padding: "6px 12px" }}
                  >
                    6 Photos
                  </span>
                </div>
                <div className="dz-info p-4 flex-grow-1 d-flex flex-column justify-content-between">
                  <h3 className="dz-title mb-3" data-aos="fade-up">
                    <Link href="/gallery-details/oracle-eye-hospital" className="text-dark">
                      Oracle Eye Hospital
                    </Link>
                  </h3>
                  <Link
                    className="btn-link icon-link-hover-end fw-semibold text-primary d-inline-flex align-items-center gap-1"
                    href="/gallery-details/oracle-eye-hospital"
                  >
                    View Gallery <i className="feather icon-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Hospital Interior */}
            <div className="col-xxl-4 col-lg-4 col-md-6 m-b30">
              <div className="dz-card style-3 h-100 d-flex flex-column shadow-sm rounded-3 overflow-hidden">
                <div className="dz-media position-relative">
                  <Link href="/gallery-details/hospital-interior">
                    <img
                      src="/uploads/photogallery/543ba95a-8e05-4a52-85bb-18a72382f33d.jpg"
                      alt="Hospital Interior"
                      style={{ height: "260px", width: "100%", objectFit: "cover" }}
                    />
                  </Link>
                  <span
                    className="badge bg-primary text-white position-absolute"
                    style={{ top: "14px", right: "14px", borderRadius: "20px", padding: "6px 12px" }}
                  >
                    30 Photos
                  </span>
                </div>
                <div className="dz-info p-4 flex-grow-1 d-flex flex-column justify-content-between">
                  <h3 className="dz-title mb-3" data-aos="fade-up">
                    <Link href="/gallery-details/hospital-interior" className="text-dark">
                      Hospital Interior
                    </Link>
                  </h3>
                  <Link
                    className="btn-link icon-link-hover-end fw-semibold text-primary d-inline-flex align-items-center gap-1"
                    href="/gallery-details/hospital-interior"
                  >
                    View Gallery <i className="feather icon-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

