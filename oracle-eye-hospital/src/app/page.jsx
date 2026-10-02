"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const SERVICES_DATA = [
  {
    num: "01",
    title: "Cataract Services",
    slug: "cataract-service",
    short: "Cataract is the clouding of the natural crystalline lens.",
    img: "/Assets/img/services/1.png",
  },
  {
    num: "02",
    title: "Cornea, Refractive Services",
    slug: "cornea-refractive-service",
    short: "The cornea plays a crucial role in focusing light and maintaining clear vision.",
    img: "/Assets/img/services/5.png",
  },
  {
    num: "03",
    title: "Computer Vision Syndrome",
    slug: "computer-vision-syndrome",
    short: "Computer vision syndrome (CVS) is a temporary eye vision problem resulting from digital screens.",
    img: "/Assets/img/services/6.png",
  },
  {
    num: "04",
    title: "Dry Eyes Clinic",
    slug: "dry-eyes-clinic",
    short: "Our dedicated Dry Eyes Clinic offers a comprehensive approach to treatment, moving past temporary fixes.",
    img: "/Assets/img/services/10.png",
  },
  {
    num: "05",
    title: "Contact Lens Service",
    slug: "contact-lens-service",
    short: "Premium contact lenses fitted by experts for your daily comfort and crystal clear vision.",
    img: "/Assets/img/services/7.png",
  },
  {
    num: "06",
    title: "Myopia Clinic",
    slug: "myopia-clinic",
    short: "Myopia (nearsightedness) is becoming increasingly common among children worldwide.",
    img: "/Assets/img/services/9.png",
  },
  {
    num: "07",
    title: "Pediatric Eye Services",
    slug: "pediatric-eye-service",
    short: "A Squint or Strabismus develops when the eye muscles do not work in a balanced way.",
    img: "/Assets/img/services/3.png",
  },
  {
    num: "08",
    title: "Orthoptics Service",
    slug: "orthoptics-service",
    short: "Specialized binocular vision care for better alignment, depth perception, and focus.",
    img: "/Assets/img/services/8.png",
  },
  {
    num: "09",
    title: "Vitreoretinal Services",
    slug: "vitreoretinal-service",
    short: "Advanced management of retinal detachments, diabetic retinopathy, and macular diseases.",
    img: "/Assets/img/services/4.png",
  },
  {
    num: "10",
    title: "Glaucoma Services",
    slug: "glaucoma-service",
    short: "Early diagnosis and progressive management of intraocular pressure to preserve optic nerve.",
    img: "/Assets/img/services/2.png",
  },
];

const DOCTORS_DATA = [
  {
    name: "Dr Girjesh Kain",
    quals: "MS (Ophthalmology), FICO Founder & Managing Director",
    img: "/Assets/img/team/3.png",
    slug: "girjesh-kain",
  },
  {
    name: "Dr Rachana",
    quals: "MBBS, MS",
    img: "/Assets/img/team/8.png",
    slug: "rachana",
  },
  {
    name: "Dr Ramesh Kumar shukla",
    quals: "Glaucoma Surgeon",
    img: "/Assets/img/team/1.png",
    slug: "ramesh-kumar",
  },
  {
    name: "Dr Sujata Tomar",
    quals: "Ophthalmologist",
    img: "/Assets/img/team/6.png",
    slug: "sujata-tomar",
  },
];

const FAQS_DATA = [
  {
    id: 1,
    q: "1. What services does Oracle Eye Hospital provide?",
    a: "We specialize in comprehensive eye care, including general eye check-ups, cataract surgery, LASIK & refractive procedures, glaucoma management, corneal treatments, pediatric ophthalmology, retina care, and advanced diagnostic testing.",
  },
  {
    id: 2,
    q: "2. Do I need an appointment before visiting?",
    a: "Walk-ins are welcome, but we recommend booking an appointment to minimize waiting time and ensure you get personalized care from our specialists.",
  },
  {
    id: 3,
    q: "3. How do I book an appointment?",
    a: "You can book online through our website form, call our hospital helpline at +91 8006803111, or visit our reception desk directly.",
  },
  {
    id: 4,
    q: "4. What should I bring for my first consultation?",
    a: "Please bring a valid ID, your previous medical/eye reports (if any), current prescription glasses or contact lenses, and a list of medications you are taking.",
  },
];

const TESTIMONIALS_DATA = [
  {
    name: "Rohit Sharma",
    role: "Patient",
    text: "“I underwent cataract surgery at Oracle Eye Hospital and the experience was excellent. The doctors were very professional and the staff was extremely supportive throughout the process.”",
    avatar: "/Assets/img/testimonial/clients-1.jpg",
  },
  {
    name: "Neha Verma",
    role: "Patient",
    text: "“The consultation process was smooth and well-organized. The doctors explained everything clearly and made me feel comfortable before my LASIK procedure.”",
    avatar: "/Assets/img/testimonial/clients-2.jpg",
  },
  {
    name: "Amit Gupta",
    role: "Patient",
    text: "“Highly recommended hospital for eye care. The facilities are modern and the team is very experienced. My vision has improved significantly after treatment.”",
    avatar: "/Assets/img/testimonial/clients-3.jpg",
  },
];

const GALLERY_IMAGES = [
  "/Assets/img/gallery/1.png",
  "/Assets/img/gallery/2.png",
  "/Assets/img/gallery/3.png",
  "/Assets/img/gallery/4.png",
  "/Assets/img/gallery/5.png",
  "/Assets/img/gallery/6.png",
];

export default function Home() {
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(1);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Appointment Form state
  const [formState, setFormState] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    AppointmentDate: "",
    DoctorName: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleAppointmentSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate booking submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitSuccess(true);
      setFormState({
        Name: "",
        Email: "",
        PhoneNumber: "",
        AppointmentDate: "",
        DoctorName: "",
      });
    }, 1200);
  };

  // Testimonial auto rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ========================================================
          1. HERO BANNER
      ======================================================== */}
      <div className="hero-banner style-1 position-relative overflow-hidden">
        <div className="container-fluid">
          <div className="inner-wrapper">
            <div className="row align-items-center h-100">
              {/* Left Column: Heading & CTAs */}
              <div className="col-lg-5 m-b30">
                <div className="hero-content ps-lg-5">
                  <h1 className="title animate__animated animate__fadeInUp" style={{ fontSize: "52px", lineHeight: "1.15", fontWeight: "700" }}>
                    Clear Vision Awaits
                  </h1>
                  <p className="mt-3 mb-4 text-secondary" style={{ fontSize: "17px", lineHeight: "1.6" }}>
                    LASER Eye Correction Treatment, Retinal Surgery Services, Microincision Cataract Surgery
                  </p>
                  <div className="contant-box style-1 d-flex flex-wrap align-items-center gap-3 animate__animated animate__fadeInUp">
                    <Link className="btn btn-primary btn-hover2 btn-shadow" href="/contact-us">
                      Appointment <i className="feather icon-arrow-right ms-2"></i>
                    </Link>
                    <Link className="video-btn style-2 text-decoration-none fw-semibold" href="/contact-us">
                      Get In Touch!
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Collage & Video Box */}
              <div className="col-lg-7 align-self-end animate__animated animate__fadeInRight">
                <div className="hero-thumbnail">
                  <div className="row g-4 align-items-center">
                    <div className="col-5">
                      <div className="row justify-content-end">
                        {/* Video thumbnail box */}
                        <div className="col-10 m-b30">
                          <div className="dz-media video-bx4 h-auto position-relative rounded-3 overflow-hidden shadow-lg">
                            <img src="/Assets/img/banner2.png" alt="Video Thumbnail" className="thumbnail w-100" />
                            <button
                              onClick={() => setShowVideoModal(true)}
                              className="popup-youtube video-btn sm border-0"
                              aria-label="Play video"
                            >
                              <i className="fa fa-play"></i>
                            </button>
                          </div>
                        </div>
                        {/* Small collage image */}
                        <div className="col-12 m-b30">
                          <img className="thumbnail w-100 rounded-3 shadow" src="/Assets/img/banner3.png" alt="Hospital Care" />
                        </div>
                      </div>
                    </div>
                    {/* Big collage image */}
                    <div className="col-7 m-b30">
                      <img className="thumbnail2 w-100 rounded-4 shadow-lg" src="/Assets/img/banner1.png" alt="Surgeon at work" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Floating Shapes */}
        <div className="banner-shape4"></div>
        <div className="banner-shape5"></div>
        <div className="banner-shape6"></div>

        <div className="item1 position-absolute" style={{ top: "15%", left: "3%" }}>
          <div className="dz-media2">
            <img src="/Assets/images/hero-banner/img2.png" alt="Shape 1" style={{ maxWidth: "55px" }} />
          </div>
        </div>
        <div className="item4 position-absolute" style={{ bottom: "20%", left: "45%" }}>
          <img src="/Assets/images/hero-banner/img4.png" alt="Shape 2" style={{ maxWidth: "45px" }} />
        </div>
        <div className="item5 position-absolute" style={{ top: "10%", right: "12%" }}>
          <img src="/Assets/images/hero-banner/img5.png" alt="Shape 3" style={{ maxWidth: "60px" }} />
        </div>
      </div>

      {/* ========================================================
          2. ABOUT / OPHTHALMOLOGY SECTION
      ======================================================== */}
      <section className="content-inner overlay-opacity-10 overflow-hidden bg-light py-5">
        <div className="container py-lg-4">
          <div className="row content-wrapper style-1 m-b30 justify-content-center align-items-center">
            {/* Left Image Collage with Rotating SVG Badge */}
            <div className="col-xxl-6 col-xl-6 col-lg-6 mb-4 mb-lg-0">
              <div className="content-media position-relative d-inline-block w-100">
                <div className="dz-media position-relative text-center">
                  <img
                    src="/Assets/img/about/2.png"
                    className="side-media position-absolute rounded-3 shadow-sm"
                    alt="Side doctor"
                    style={{ top: "-30px", left: "10px", width: "45%", zIndex: 1 }}
                  />
                  <img
                    src="/Assets/img/about/1.png"
                    className="main-about-img rounded-4 shadow-lg ms-auto"
                    alt="Main doctor"
                    style={{ width: "85%", display: "block" }}
                  />
                </div>

                {/* Rotating Circular Text Badge */}
                <div
                  className="item1 position-absolute"
                  style={{
                    bottom: "20px",
                    right: "10px",
                    width: "130px",
                    height: "130px",
                    zIndex: 3,
                  }}
                >
                  <div
                    className="svg-rotate-wrapper position-relative w-100 h-100 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      background: "#00a297",
                      boxShadow: "0 10px 25px rgba(0, 162, 151, 0.4)",
                    }}
                  >
                    <svg viewBox="0 0 100 100" className="rotating-text-svg">
                      <defs>
                        <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                      </defs>
                      <text fill="#ffffff" fontSize="12" wordSpacing="-2" letterSpacing="3" fontWeight="600">
                        <textPath href="#circlePath">ORACLE &nbsp;&nbsp;&nbsp; EYE &nbsp;&nbsp;&nbsp; HOSPITAL &nbsp;&nbsp;&nbsp;</textPath>
                      </text>
                    </svg>
                    <i className="feather icon-arrow-up-right center-arrow-icon"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text & Counter Statistics */}
            <div className="col-xxl-6 col-xl-6 col-lg-6 ps-lg-5">
              <div className="section-head style-14 m-b30">
                <span className="sub-title text-primary fw-semibold text-uppercase tracking-wider d-block mb-2" style={{ letterSpacing: "1px" }}>
                  Welcome to Ophthalmology
                </span>
                <h2 className="title fw-bold mb-3" style={{ fontSize: "38px", lineHeight: "1.2" }}>
                  We Preserve, Enhance And Protect Your Vision
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Trusted ophthalmic care with world-class expertise, advanced technology, and compassionate treatment for patients of all ages.
                </p>
              </div>

              {/* Stat Counters */}
              <div className="row g-3 m-b30 mb-4">
                <div className="col-4">
                  <div className="content-bx style-1 p-3 rounded-3 bg-white shadow-sm border border-light">
                    <span className="content-text text-primary fw-bold d-block" style={{ fontSize: "28px" }}>
                      25,000+
                    </span>
                    <h3 className="title m-0 text-secondary" style={{ fontSize: "14px" }}>
                      Surgeries Done
                    </h3>
                  </div>
                </div>

                <div className="col-4">
                  <div className="content-bx style-1 p-3 rounded-3 bg-white shadow-sm border border-light">
                    <span className="content-text text-primary fw-bold d-block" style={{ fontSize: "28px" }}>
                      50,000+
                    </span>
                    <h3 className="title m-0 text-secondary" style={{ fontSize: "14px" }}>
                      Happy Patients
                    </h3>
                  </div>
                </div>

                <div className="col-4">
                  <div className="content-bx style-1 p-3 rounded-3 bg-white shadow-sm border border-light">
                    <span className="content-text text-primary fw-bold d-block" style={{ fontSize: "28px" }}>
                      15+
                    </span>
                    <h3 className="title m-0 text-secondary" style={{ fontSize: "14px" }}>
                      Years of Excellence
                    </h3>
                  </div>
                </div>
              </div>

              <Link className="btn btn-primary btn-hover2 btn-shadow" href="/overview">
                Read More <i className="feather icon-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. OUR SERVICES SECTION (Interactive Hover Preview!)
      ======================================================== */}
      <section className="content-inner overflow-hidden py-5">
        <div className="container py-lg-4">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-md-8 section-head style-14">
              <span className="sub-title text-primary fw-semibold text-uppercase tracking-wider d-block mb-2">Our Services</span>
              <h2 className="title fw-bold" style={{ fontSize: "36px" }}>
                We Serve In Different Areas For Our Patients
              </h2>
            </div>
          </div>

          <div className="row align-items-center">
            {/* Left Preview Image Display */}
            <div className="col-lg-4 d-none d-lg-block mb-4 mb-lg-0">
              <div className="service-live-preview position-sticky" style={{ top: "120px" }}>
                <div className="position-relative rounded-4 overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={SERVICES_DATA[activeService].img}
                    alt={SERVICES_DATA[activeService].title}
                    className="w-100 object-cover transition duration-500 ease-in-out"
                    style={{ maxHeight: "380px", objectFit: "cover" }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 end-0 p-3 text-white"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)" }}
                  >
                    <span className="badge bg-primary mb-1">{SERVICES_DATA[activeService].num}</span>
                    <h4 className="m-0 text-white fw-bold">{SERVICES_DATA[activeService].title}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right List of Interactive Service Cards */}
            <div className="col-lg-8">
              <div className="row g-3">
                {SERVICES_DATA.map((srv, idx) => (
                  <div key={srv.slug} className="col-12">
                    <div
                      onMouseEnter={() => setActiveService(idx)}
                      className={`service-preview-card p-3 p-md-4 rounded-3 border bg-white cursor-pointer ${
                        activeService === idx ? "active" : ""
                      }`}
                      style={{ transition: "all 0.3s ease" }}
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                          <span className="fw-bold fs-4 text-primary opacity-75">{srv.num}</span>
                          <div>
                            <h3 className="h5 fw-bold m-0 text-dark">
                              <Link href={`/services/${srv.slug}`} className="text-dark text-decoration-none hover-text-primary">
                                {srv.title}
                              </Link>
                            </h3>
                            <p className="text-muted m-0 mt-1 small">{srv.short}</p>
                          </div>
                        </div>
                        <Link
                          href={`/services/${srv.slug}`}
                          className="btn-link text-secondary fs-4 text-decoration-none ms-3"
                          aria-label={`View ${srv.title}`}
                        >
                          <i className="feather icon-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. APPOINTMENT FORM SECTION
      ======================================================== */}
      <section
        id="appointment-section"
        className="content-wrapper style-2 position-relative overflow-hidden py-5 text-white"
        style={{ backgroundColor: "#0e4d58" }}
      >
        <div className="container py-lg-4 position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-between align-items-center">
            {/* Form Column */}
            <div className="col-lg-7 mb-4 mb-lg-0">
              <div className="content-info">
                <div className="section-head style-3 mb-4">
                  <h2 className="title text-white fw-bold mb-0" style={{ fontSize: "36px" }}>
                    Need a comprehensive eye check-up
                  </h2>
                  <p className="text-white-50 mt-2">
                    Book your slot online to experience state-of-the-art vision care with zero waiting time.
                  </p>
                </div>

                {submitSuccess && (
                  <div className="alert alert-success bg-white text-primary fw-bold rounded-3 shadow p-3 mb-4 animate__animated animate__fadeIn">
                    ✓ Appointment request received! Our clinic team will call you shortly to confirm your time slot.
                  </div>
                )}

                <form onSubmit={handleAppointmentSubmit} className="dzForm">
                  <div className="row g-4 align-items-end">
                    {/* Name */}
                    <div className="col-xl-4 col-sm-6">
                      <div className="floating-underline">
                        <input
                          name="Name"
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                          required
                          value={formState.Name}
                          onChange={handleInputChange}
                        />
                        <span className="input-group-text">
                          <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.9827 17.9043C9.47052 17.9043 5.61719 18.5865 5.61719 21.3187C5.61719 24.051 9.44608 24.7576 13.9827 24.7576C18.495 24.7576 22.3472 24.0743 22.3472 21.3432C22.3472 18.6121 18.5194 17.9043 13.9827 17.9043Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.9794 14.0065C16.9406 14.0065 19.3406 11.6054 19.3406 8.64431C19.3406 5.6832 16.9406 3.2832 13.9794 3.2832C11.0183 3.2832 8.61722 5.6832 8.61722 8.64431C8.60722 11.5954 10.9917 13.9965 13.9417 14.0065H13.9794Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-xl-4 col-sm-6">
                      <div className="floating-underline">
                        <input
                          name="Email"
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          required
                          value={formState.Email}
                          onChange={handleInputChange}
                        />
                        <span className="input-group-text">
                          <svg width="24" height="24" viewBox="0 0 26 24" fill="none">
                            <path
                              d="M19.8888 8.32617L14.705 12.5414C13.7256 13.3184 12.3476 13.3184 11.3682 12.5414L6.14062 8.32617"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.7296 22.5C22.2779 22.5098 24.6693 19.5945 24.6693 16.0114V7.99835C24.6693 4.4153 22.2779 1.5 18.7296 1.5H7.2756C3.72736 1.5 1.33594 4.4153 1.33594 7.99835V16.0114C1.33594 19.5945 3.72736 22.5098 7.2756 22.5H18.7296Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="col-xl-4 col-sm-6">
                      <div className="floating-underline">
                        <input
                          type="tel"
                          name="PhoneNumber"
                          placeholder="Phone No"
                          className="form-control"
                          required
                          pattern="[0-9]{10}"
                          maxLength={10}
                          value={formState.PhoneNumber}
                          onChange={(e) => {
                            const val = e.target.value.replace(/[^0-9]/g, "");
                            setFormState((prev) => ({ ...prev, PhoneNumber: val }));
                          }}
                        />
                        <span className="input-group-text">
                          <svg width="24" height="24" viewBox="0 0 25 24" fill="none">
                            <path
                              d="M15.7422 0.916992C20.06 1.39649 23.4714 4.80316 23.9555 9.12099"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M15.7422 5.0498C17.8084 5.45114 19.423 7.06697 19.8255 9.13314"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.8727 12.5514C16.5265 17.2041 17.5823 11.8215 20.5454 14.7826C23.4021 17.6385 25.0452 18.2107 21.4246 21.8292C20.9712 22.1935 18.0907 26.577 7.96781 16.4566C-2.15637 6.33499 2.22443 3.45151 2.58887 2.99827C6.217 -0.630188 6.78056 1.02127 9.63723 3.87721C12.5991 6.83957 7.21889 7.89881 11.8727 12.5514Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Date */}
                    <div className="col-xl-4 col-sm-6">
                      <div className="floating-underline">
                        <input
                          name="AppointmentDate"
                          type="date"
                          className="form-control"
                          required
                          value={formState.AppointmentDate}
                          onChange={handleInputChange}
                        />
                        <span className="input-group-text">
                          <svg width="24" height="24" viewBox="0 0 28 29" fill="none">
                            <path
                              d="M3.60938 11.9608H24.404"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M18.9446 5.16504H9.06612C5.63999 5.16504 3.5 7.07363 3.5 10.5819V21.1398C3.5 24.7033 5.63999 26.656 9.06612 26.656H18.9338C22.3708 26.656 24.5 24.7364 24.5 21.2281V10.5819C24.5108 7.07363 22.3816 5.16504 18.9446 5.16504Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Doctor Dropdown */}
                    <div className="col-xl-4 col-sm-6">
                      <div className="floating-underline">
                        <select
                          name="DoctorName"
                          className="form-control"
                          required
                          value={formState.DoctorName}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Doctor Name</option>
                          <option value="Dr Girjesh Kain">Dr Girjesh Kain</option>
                          <option value="Dr Rachana">Dr Rachana</option>
                          <option value="Dr Ramesh Kumar">Dr Ramesh Kumar</option>
                          <option value="Dr Sujata Tomar">Dr Sujata Tomar</option>
                        </select>
                        <span className="input-group-text">
                          <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                            <path
                              d="M20.8672 12.713C22.4947 12.4843 23.7477 11.089 23.7512 9.39851C23.7512 7.73251 22.5367 6.35118 20.9442 6.08984"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.8662 17.1074C10.1166 17.1074 6.91406 17.6756 6.91406 19.9448C6.91406 22.2128 10.0967 22.7973 13.8662 22.7973C17.6159 22.7973 20.8172 22.2349 20.8172 19.9646C20.8172 17.6943 17.6357 17.1074 13.8662 17.1074Z"
                              stroke="white"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-xl-4 col-sm-6">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn w-100 btn-white hover-secondary text-primary shadow-sm fw-bold d-flex align-items-center justify-content-center gap-2"
                        style={{ background: "#ffffff", padding: "12px 20px" }}
                      >
                        {submitting ? "Booking..." : "Book Appointment"} <i className="feather icon-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Doctor Image Illustration */}
            <div className="col-lg-4 align-self-end text-center">
              <div className="content-media">
                <img src="/Assets/img/book.png" alt="Doctor Consultation" className="w-100" style={{ maxHeight: "420px", objectFit: "contain" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Wave graphic */}
        <img src="/Assets/img/bg4.png" className="shap position-absolute bottom-0 start-0 w-100 pointer-events-none opacity-40" alt="Wave decoration" />
      </section>

      {/* ========================================================
          5. MEET OUR SPECIALISTS SECTION
      ======================================================== */}
      <section className="content-inner bg-light py-5">
        <div className="container py-lg-4">
          <div className="section-head style-14 text-center mb-5">
            <span className="sub-title text-primary fw-semibold text-uppercase tracking-wider d-block mb-2">Meet Our Specialists</span>
            <h2 className="title fw-bold" style={{ fontSize: "36px" }}>
              Our Team of Eye Doctors
            </h2>
            <p className="text-muted mt-2">
              Our specialists have more than a decade of experience. Patient comfort and well-being is our topmost priority.
            </p>
          </div>

          <div className="row g-4">
            {DOCTORS_DATA.map((doc) => (
              <div key={doc.slug} className="col-xl-3 col-sm-6">
                <div className="dz-team style-1 h-100 d-flex flex-column">
                  <div className="dz-media overflow-hidden position-relative" style={{ height: "300px" }}>
                    <img src={doc.img} alt={doc.name} className="w-100 h-100 object-cover" />
                  </div>
                  <div className="dz-content p-4 flex-grow-1 d-flex flex-column justify-content-between position-relative">
                    <div className="team-social position-absolute" style={{ top: "-20px", right: "20px" }}>
                      <Link className="plus-btn text-decoration-none shadow" href="/doctor-team">
                        <i className="icon feather icon-plus"></i>
                      </Link>
                    </div>
                    <div>
                      <h3 className="dz-name h5 fw-bold m-0 mb-1">
                        <Link href="/doctor-team" className="text-dark text-decoration-none hover-text-primary">
                          {doc.name}
                        </Link>
                      </h3>
                      <span className="dz-position text-muted small">{doc.quals}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. FREQUENTLY ASKED QUESTIONS SECTION
      ======================================================== */}
      <section className="content-inner-3 py-5 overflow-hidden">
        <div className="container py-lg-4">
          <div className="row align-items-center">
            {/* FAQ Accordion */}
            <div className="col-xl-6 mb-4 mb-xl-0">
              <div className="section-head style-14 mb-4">
                <h2 className="title fw-bold" style={{ fontSize: "36px" }}>
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="accordion dz-accordion" id="accordionFaqs">
                {FAQS_DATA.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div key={faq.id} className="card border mb-3 rounded-3 overflow-hidden shadow-sm">
                      <div
                        className={`card-header p-3 cursor-pointer d-flex justify-content-between align-items-center ${
                          isOpen ? "bg-light" : "bg-white"
                        }`}
                        onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                        style={{ cursor: "pointer" }}
                      >
                        <h3 className="h6 fw-bold m-0 text-dark" style={{ fontSize: "15px" }}>
                          {faq.q}
                        </h3>
                        <i className={`fas fa-chevron-down text-primary transition ${isOpen ? "rotate-180" : ""}`}></i>
                      </div>
                      {isOpen && (
                        <div className="card-body p-3 bg-white text-muted animate__animated animate__fadeIn" style={{ fontSize: "14px", lineHeight: "1.7" }}>
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* FAQ Image */}
            <div className="col-xl-6 text-center">
              <div className="content-media">
                <img src="/Assets/img/faq.png" alt="FAQ Doctor" className="w-100 rounded-4 shadow-lg" style={{ maxHeight: "440px", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. CONTACT / HELPLINE HIGHLIGHT SECTION
      ======================================================== */}
      <section
        className="content-wrapper style-4 content-inner py-5 text-white position-relative"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 42, 51, 0.92), rgba(10, 42, 51, 0.92)), url(/Assets/img/bg1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-lg-4">
          <div className="row align-items-center">
            {/* Left Info and Widget */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="section-head style-14 mb-4">
                <h2 className="title text-white fw-bold mb-3" style={{ fontSize: "36px" }}>
                  Don't Hesitate To Contact Us Any Time
                </h2>
                <p className="text-white-50" style={{ fontSize: "17px" }}>
                  If you have any questions, our 24/7 care team is here to help.
                </p>
              </div>

              <div className="row g-3 mb-4">
                {/* 24x7 Helpline */}
                <div className="col-sm-6">
                  <div className="info-widget style-4 d-flex align-items-center p-3 rounded-3" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div className="widget-media me-3 text-info fs-3">
                      <i className="feather icon-clock"></i>
                    </div>
                    <div className="widget-content">
                      <h3 className="title text-white h6 m-0">24 x 7 Helpline</h3>
                      <small className="text-white-50">Always Available</small>
                    </div>
                  </div>
                </div>

                {/* Call Number */}
                <div className="col-sm-6">
                  <div className="info-widget style-4 d-flex align-items-center p-3 rounded-3" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div className="widget-media me-3 text-info fs-3">
                      <i className="feather icon-phone-call"></i>
                    </div>
                    <div className="widget-content">
                      <h3 className="title m-0">
                        <a href="tel:+91 8006803111" className="text-white text-decoration-none h6">
                          +91 8006803111
                        </a>
                      </h3>
                      <small className="text-white-50">Toll Free Consultation</small>
                    </div>
                  </div>
                </div>
              </div>

              <Link className="btn btn-white text-primary fw-bold shadow-sm" href="/contact-us">
                More details <i className="feather icon-arrow-right ms-2"></i>
              </Link>
            </div>

            {/* Right Doctor Graphic */}
            <div className="col-lg-6 text-center">
              <div className="content-media">
                <img src="/Assets/img/img3.png" alt="Medical Team" className="w-100" style={{ maxHeight: "420px", objectFit: "contain" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. CASHLESS TPA LIST SECTION
      ======================================================== */}
      <section className="TPA_section bg-light py-5 overflow-hidden">
        <div className="container py-lg-3">
          <div className="section-head style-14 text-center mb-4">
            <h2 className="title fw-bold" style={{ fontSize: "34px" }}>
              Cashless TPA list
            </h2>
            <p className="text-muted">We partner with leading health insurance providers and TPAs for seamless, hassle-free cashless hospitalization.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="tpa_div text-center">
                <Link href="/cashless-facility" className="d-inline-block">
                  <img
                    src="/Assets/img/about/tpa.png"
                    alt="Cashless TPA Partners"
                    className="img-fluid shadow-sm border rounded-4 bg-white p-3"
                    style={{ maxHeight: "350px", objectFit: "contain" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. TESTIMONIALS SECTION (With Floating Avatars)
      ======================================================== */}
      <section className="content-inner testimonial-wrapper1 position-relative py-5 overflow-hidden">
        <div className="container py-lg-4 position-relative" style={{ zIndex: 2 }}>
          <div className="section-head style-14 text-center mb-5">
            <span className="sub-title text-primary fw-semibold text-uppercase tracking-wider d-block mb-2">Testimonial</span>
            <h2 className="title fw-bold" style={{ fontSize: "36px" }}>
              Patient Success Stories
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="testimonial-card p-4 p-md-5 rounded-4 bg-white shadow-xl text-center border">
                <div className="mb-4">
                  <img
                    src={TESTIMONIALS_DATA[activeTestimonial].avatar}
                    alt={TESTIMONIALS_DATA[activeTestimonial].name}
                    className="rounded-circle mx-auto border-4 border-primary shadow"
                    style={{ width: "85px", height: "85px", objectFit: "cover" }}
                  />
                </div>
                <p className="fs-5 text-secondary fst-italic mb-4" style={{ lineHeight: "1.8" }}>
                  {TESTIMONIALS_DATA[activeTestimonial].text}
                </p>
                <h4 className="fw-bold text-dark m-0">{TESTIMONIALS_DATA[activeTestimonial].name}</h4>
                <span className="text-primary small fw-semibold">{TESTIMONIALS_DATA[activeTestimonial].role}</span>

                {/* Carousel Pagination Dots */}
                <div className="d-flex justify-content-center gap-2 mt-4">
                  {TESTIMONIALS_DATA.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className={`btn p-0 rounded-circle border-0 ${
                        activeTestimonial === i ? "bg-primary" : "bg-secondary opacity-25"
                      }`}
                      style={{ width: "12px", height: "12px", transition: "all 0.3s" }}
                      aria-label={`Slide ${i + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Avatars in background */}
        <div className="avatar1"><img src="/Assets/img/testimonial/clients-1.jpg" alt="Patient 1" className="w-100 h-100 object-cover" /></div>
        <div className="avatar2"><img src="/Assets/img/testimonial/clients-2.jpg" alt="Patient 2" className="w-100 h-100 object-cover" /></div>
        <div className="avatar3"><img src="/Assets/img/testimonial/clients-3.jpg" alt="Patient 3" className="w-100 h-100 object-cover" /></div>
        <div className="avatar4"><img src="/Assets/img/testimonial/clients-5.jpg" alt="Patient 4" className="w-100 h-100 object-cover" /></div>
        <div className="avatar5"><img src="/Assets/img/testimonial/clients-1.jpg" alt="Patient 5" className="w-100 h-100 object-cover" /></div>
        <div className="avatar6"><img src="/Assets/img/testimonial/clients-2.jpg" alt="Patient 6" className="w-100 h-100 object-cover" /></div>

        <div className="bg-shap position-absolute top-50 start-50 translate-middle w-100 h-100 pointer-events-none opacity-20">
          <img src="/Assets/images/background/bg5.webp" alt="Background pattern" className="w-100 h-100 object-cover" />
        </div>
      </section>

      {/* ========================================================
          10. PORTFOLIO / GALLERY MARQUEE SECTION
      ======================================================== */}
      <div className="portfolio_section py-4 bg-light overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-track">
            {/* First sequence */}
            {GALLERY_IMAGES.map((src, i) => (
              <div key={`g1-${i}`} className="marquee-item">
                <img
                  src={src}
                  alt={`Hospital facility ${i + 1}`}
                  className="rounded-3 shadow-sm hover-scale transition duration-300"
                  style={{ width: "300px", height: "200px", objectFit: "cover" }}
                />
              </div>
            ))}
            {/* Repeated for continuous infinite loop */}
            {GALLERY_IMAGES.map((src, i) => (
              <div key={`g2-${i}`} className="marquee-item">
                <img
                  src={src}
                  alt={`Hospital facility duplicate ${i + 1}`}
                  className="rounded-3 shadow-sm hover-scale transition duration-300"
                  style={{ width: "300px", height: "200px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          VIDEO MODAL POPUP
      ======================================================== */}
      {showVideoModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: "rgba(0,0,0,0.85)", zIndex: 100000 }}
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="position-relative bg-dark rounded-4 p-2 shadow-2xl"
            style={{ width: "90%", maxWidth: "800px" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideoModal(false)}
              className="btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3"
              aria-label="Close video"
            ></button>
            <div className="ratio ratio-16x9 rounded-3 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Oracle Eye Hospital Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
