"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="site-header header style-3">
      {/* Top Header Bar */}
      <div className="bg-header">
        <div className="container header-middle">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xs-12 col-sm-5 d-flex align-items-center">
              <Link href="/">
                <img
                  src="/uploads/logos/232296ca-9c85-445b-b965-033a97fe7008.png"
                  className="img-responsive main-logo"
                  alt="Oracle Eye Hospital"
                  style={{ maxHeight: "80px", width: "auto" }}
                />
              </Link>
            </div>

            {/* Location & Appointment Phone */}
            <div className="col-xs-12 col-sm-5 mobile_div">
              <div className="row">
                <div className="col-md-7 col-12">
                  <div className="header_one location_div">
                    <h4>Location:</h4>
                    <p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Oracle+Eye+Hospital+491+Hi+Street+Near+TDI+City+Parampara+MDA+Moradabad+Uttar+Pradesh+244001"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        491, Hi-Street, Near TDI City, Parampara, MDA, Moradabad, Uttar Pradesh-244001, India
                      </a>
                    </p>
                  </div>
                </div>

                <div className="col-md-5 col-12">
                  <div className="header_one">
                    <h4>Call Us For Appointment:</h4>
                    <p className="appointment_number">
                      <a href="tel:+91 8006803111" className="blink">
                        +91 8006803111
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Logos */}
            <div className="col-xs-12 col-sm-2 d-flex align-items-center justify-content-end logos_prtt">
              <Link href="/" className="me-2">
                <img src="/Assets/img/logo2.png" className="img-responsive logo_div logo2" alt="Cert 1" />
              </Link>
              <Link href="/">
                <img src="/Assets/img/logo3.png" className="img-responsive logo_div logo2" alt="Cert 2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav / Sticky Header */}
      <div className={`sticky-header main-bar-wraper ${isSticky ? "is-fixed" : ""}`}>
        <div className="main-bar clearfix">
          <div className="container-fluid clearfix inner-bar d-flex align-items-center justify-content-between">
            {/* Mobile Nav Toggle */}
            <button
              className={`w3menu-toggler navicon d-lg-none ${mobileMenuOpen ? "open" : ""}`}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Mobile Logo fallback */}
            <div className="logo-header logo-dark d-lg-none">
              <Link href="/">
                <img src="/uploads/logos/232296ca-9c85-445b-b965-033a97fe7008.png" alt="Oracle Eye Hospital" style={{ maxHeight: "45px" }} />
              </Link>
            </div>

            {/* Main Nav Items */}
            <div className={`header-nav w3menu w3menu-start mo-left ${mobileMenuOpen ? "show" : ""}`} id="W3Menu">
              <div className="logo-header logo-dark d-lg-none p-3 border-bottom d-flex justify-content-between align-items-center">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <img src="/uploads/logos/232296ca-9c85-445b-b965-033a97fe7008.png" alt="Logo" style={{ maxHeight: "40px" }} />
                </Link>
                <button className="btn-close" onClick={() => setMobileMenuOpen(false)}></button>
              </div>

              <ul className="nav navbar-nav">
                <li>
                  <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <span>Home</span>
                  </Link>
                </li>

                {/* About Us */}
                <li className={`sub-menu-down ${activeDropdown === "about" ? "open" : ""}`}>
                  <a
                    href="javascript:void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("about");
                    }}
                  >
                    <span>About Us</span> <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <ul className="sub-menu">
                    <li><Link href="/overview" onClick={() => setMobileMenuOpen(false)}>Overview</Link></li>
                    <li><Link href="/chairman-message" onClick={() => setMobileMenuOpen(false)}>Chairman's Message</Link></li>
                    <li><Link href="/board-of-directors" onClick={() => setMobileMenuOpen(false)}>Board of Directors</Link></li>
                    <li><Link href="/testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials &amp; Stories</Link></li>
                  </ul>
                </li>

                {/* Clinic Team */}
                <li className={`sub-menu-down ${activeDropdown === "team" ? "open" : ""}`}>
                  <a
                    href="javascript:void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("team");
                    }}
                  >
                    <span>Clinic Team</span> <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <ul className="sub-menu">
                    <li><Link href="/doctor-team" onClick={() => setMobileMenuOpen(false)}>Doctor’s Team</Link></li>
                    <li><Link href="/optometrist-team" onClick={() => setMobileMenuOpen(false)}>Optometrist Team</Link></li>
                  </ul>
                </li>

                {/* Services */}
                <li className={`sub-menu-down ${activeDropdown === "services" ? "open" : ""}`}>
                  <a
                    href="javascript:void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("services");
                    }}
                  >
                    <span>Services</span> <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <ul className="sub-menu">
                    <li><Link href="/services/cataract-service" onClick={() => setMobileMenuOpen(false)}>Cataract Service</Link></li>
                    <li><Link href="/services/cornea-refractive-service" onClick={() => setMobileMenuOpen(false)}>Cornea And Refractive Services</Link></li>
                    <li><Link href="/services/computer-vision-syndrome" onClick={() => setMobileMenuOpen(false)}>Computer Vision Syndrome</Link></li>
                    <li><Link href="/services/dry-eyes-clinic" onClick={() => setMobileMenuOpen(false)}>Dry Eyes Clinic</Link></li>
                    <li><Link href="/services/contact-lens-service" onClick={() => setMobileMenuOpen(false)}>Contact Lens Service</Link></li>
                    <li><Link href="/services/myopia-clinic" onClick={() => setMobileMenuOpen(false)}>Myopia Clinic</Link></li>
                    <li><Link href="/services/pediatric-eye-service" onClick={() => setMobileMenuOpen(false)}>Pediatric Eye Service</Link></li>
                    <li><Link href="/services/orthoptics-service" onClick={() => setMobileMenuOpen(false)}>Orthoptics Service</Link></li>
                    <li><Link href="/services/vitreoretinal-service" onClick={() => setMobileMenuOpen(false)}>Vitreoretinal Service</Link></li>
                    <li><Link href="/services/glaucoma-service" onClick={() => setMobileMenuOpen(false)}>Glaucoma Service</Link></li>
                  </ul>
                </li>

                {/* Latest Updates */}
                <li className={`sub-menu-down ${activeDropdown === "updates" ? "open" : ""}`}>
                  <a
                    href="javascript:void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("updates");
                    }}
                  >
                    <span>Latest Updates</span> <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="sub-menu-down">
                      <a href="javascript:void(0);">Media Gallery</a>
                      <ul className="sub-menu">
                        <li><Link href="/photo-gallery" onClick={() => setMobileMenuOpen(false)}>Photo Gallery</Link></li>
                        <li><Link href="/video-gallery" onClick={() => setMobileMenuOpen(false)}>Video Gallery</Link></li>
                        <li><Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Blogs</Link></li>
                      </ul>
                    </li>
                    <li><Link href="/news" onClick={() => setMobileMenuOpen(false)}>News and Events</Link></li>
                  </ul>
                </li>

                {/* Academic */}
                <li className={`sub-menu-down ${activeDropdown === "academic" ? "open" : ""}`}>
                  <a
                    href="javascript:void(0);"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("academic");
                    }}
                  >
                    <span>Academic</span> <i className="fas fa-chevron-down tabindex"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="sub-menu-down">
                      <a href="javascript:void(0);">Optometry Training Program</a>
                      <ul className="sub-menu">
                        <li><Link href="/comprehensive-internship-in-optometry" onClick={() => setMobileMenuOpen(false)}>Comprehensive Clinical Optometry Internship</Link></li>
                      </ul>
                    </li>
                    <li><Link href="/awards" onClick={() => setMobileMenuOpen(false)}>Awards</Link></li>
                    <li><Link href="/publications" onClick={() => setMobileMenuOpen(false)}>Publications</Link></li>
                  </ul>
                </li>

                <li>
                  <Link href="/cashless-facility" onClick={() => setMobileMenuOpen(false)}>
                    <span>Cashless Facility</span>
                  </Link>
                </li>

                <li>
                  <Link href="/charitable-wings" onClick={() => setMobileMenuOpen(false)}>
                    <span>Charitable Wings</span>
                  </Link>
                </li>

                <li>
                  <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>

              {/* Social icons */}
              <div className="dz-social-icon d-lg-flex d-none">
                <ul>
                  <li>
                    <a href="https://www.instagram.com/oracleeyehospital/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/oracleeyehospital/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Extra Nav with phone and Appointment button */}
            <div className="extra-nav active d-flex align-items-center">
              <div className="extra-cell">
                <ul className="header-right d-flex align-items-center m-0 list-unstyled">
                  <li className="nav-item item-call d-none d-xl-flex align-items-center me-3">
                    <div className="info-widget style-3 d-flex align-items-center">
                      <div className="widget-media me-2">
                        <i className="feather icon-phone-call dz-ring-effect text-primary" style={{ fontSize: "24px" }}></i>
                      </div>
                      <div className="widget-content">
                        <h3 className="title text-primary m-0" style={{ fontSize: "14px", fontWeight: "600" }}>Contact us</h3>
                        <a href="tel:+91 7500503111" className="text-secondary" style={{ fontSize: "13px" }}>
                          91 7500503111
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item item-btn">
                    <Link className="btn btn-primary btn-hover2" href="/contact-us">
                      Appointment <i className="feather icon-arrow-right ms-1"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
