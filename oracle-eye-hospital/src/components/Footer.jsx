import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="site-footer style-1 text-white"
      style={{ backgroundImage: "url(/Assets/images/background/bg3.webp)", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Footer Top */}
      <div className="footer-top py-5">
        <div className="container">
          <div className="row g-4">
            {/* About & Rating */}
            <div className="col-xl-4 col-sm-12">
              <div className="widget widget_about me-2">
                <div className="footer-logo logo-white mb-3">
                  <Link href="/">
                    <img
                      src="/uploads/logos/bb48fa7a-e46d-4dc6-932c-0e8e15a72925.png"
                      alt="Oracle Eye Hospital"
                      style={{ maxHeight: "75px" }}
                    />
                  </Link>
                </div>
                <p className="text-white-50 mb-4" style={{ lineHeight: "1.7" }}>
                  Providing world-class treatments in cataract, LASIK, retina, glaucoma, pediatric ophthalmology, and more.
                </p>

                <div className="widget-rating2 d-flex align-items-center p-3 rounded-3" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(5px)" }}>
                  <img src="/Assets/images/google.svg" alt="Google" className="me-3" style={{ width: "38px" }} />
                  <div className="clearfix">
                    <div className="d-flex align-items-center mb-1">
                      <ul className="star-list d-flex list-unstyled m-0 text-warning me-2" style={{ gap: "2px" }}>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                      </ul>
                      <span className="rating fw-bold text-white">(4.2)</span>
                    </div>
                    <span className="text text-white-50" style={{ fontSize: "12px" }}>
                      12k+ ratings on google
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-xl-2 col-lg-3 col-md-6">
              <div className="widget widget_services">
                <h2 className="footer-title text-white mb-3" style={{ fontSize: "20px", fontWeight: "600" }}>
                  Quick Links
                </h2>
                <ul className="list-hover1 list-unstyled">
                  <li className="mb-2"><Link href="/" className="text-white-50 hover-text-white transition">Home</Link></li>
                  <li className="mb-2"><Link href="/overview" className="text-white-50 hover-text-white transition">About Us</Link></li>
                  <li className="mb-2"><Link href="/community-outreach" className="text-white-50 hover-text-white transition">Community Outreach</Link></li>
                  <li className="mb-2"><Link href="/career" className="text-white-50 hover-text-white transition">Career</Link></li>
                  <li className="mb-2"><Link href="/contact-us" className="text-white-50 hover-text-white transition">Contact Us</Link></li>
                  <li className="mb-2"><Link href="/doctor-team" className="text-white-50 hover-text-white transition">Doctor's Team</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Us */}
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="widget widget-getintouch">
                <h2 className="footer-title text-white mb-3" style={{ fontSize: "20px", fontWeight: "600" }}>
                  Contacts Us
                </h2>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-start">
                    <i className="feather icon-mail text-primary me-2 mt-1" style={{ fontSize: "18px" }}></i>
                    <a href="mailto:oracleeyehospital@gmail.com" className="text-white-50 hover-text-white transition">
                      oracleeyehospital@gmail.com
                    </a>
                  </li>
                  <li className="mb-3 d-flex align-items-start">
                    <i className="feather icon-phone-call text-primary me-2 mt-1" style={{ fontSize: "18px" }}></i>
                    <span className="text-white-50">
                      <a href="tel:+91 8006803111" className="text-white-50 hover-text-white transition">+91 8006803111</a>,{" "}
                      <a href="tel:+91 7500503111" className="text-white-50 hover-text-white transition">+91 7500503111</a>
                    </span>
                  </li>
                  <li className="d-flex align-items-start">
                    <i className="feather icon-map-pin text-primary me-2 mt-1" style={{ fontSize: "18px" }}></i>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Oracle+Eye+Hospital+491+Hi+Street+Near+TDI+City+Parampara+MDA+Moradabad+Uttar+Pradesh+244001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white-50 hover-text-white transition"
                      style={{ lineHeight: "1.6" }}
                    >
                      491, Hi-Street, Near TDI City, Parampara, MDA, Moradabad, Uttar Pradesh-244001, India
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Working Hours & Appointment */}
            <div className="col-xl-3 col-lg-6 col-sm-12">
              <div className="widget me-2">
                <h2 className="footer-title text-white mb-3" style={{ fontSize: "20px", fontWeight: "600" }}>
                  Working Hours
                </h2>
                <p className="text-white mb-1 fw-bold">Mon - Sat</p>
                <p className="text-white mb-4">10:00AM - 8:00PM</p>

                <Link className="btn btn-icon btn-white hover-secondary text-primary shadow-sm mb-4" href="/contact-us">
                  Get Appointment <i className="feather icon-arrow-right ms-2"></i>
                </Link>

                <div className="dz-social-icon mt-3">
                  <ul className="list-unstyled d-flex gap-3 m-0">
                    <li>
                      <a
                        href="https://www.instagram.com/oracleeyehospital/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white fs-5"
                        aria-label="Instagram"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/oracleeyehospital/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white fs-5"
                        aria-label="Facebook"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom py-3 border-top border-white border-opacity-10">
        <div className="container">
          <div className="fb-inner">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 text-center text-lg-start mb-2 mb-lg-0">
                <p className="copyright-text m-0 text-white-50" style={{ fontSize: "13px" }}>
                  © Copyright 2026 By Oracle Eye Hospital. All Right Reserved
                </p>
              </div>
              <div className="col-lg-6 col-md-12 text-center text-lg-end">
                <p className="m-0 text-white-50" style={{ fontSize: "13px" }}>
                  Designed By{" "}
                  <a href="https://sdwebsolutions.in/" target="_blank" rel="noopener noreferrer" className="text-white text-decoration-none">
                    SD Web Solutions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
