"use client";
import { useState, useEffect } from "react";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    // Auto open WhatsApp chat popup after 3 seconds
    const autoOpen = setTimeout(() => {
      openChat();
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(autoOpen);
    };
  }, []);

  const openChat = () => {
    setChatOpen(true);
    setShowTyping(true);
    setTimeout(() => {
      setShowTyping(false);
      setShowMessage(true);
    }, 1500);
  };

  const closeChat = () => {
    setChatOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Side "Get Appointment" tab */}
      <div className="SideOption">
        <a className="ApplicationWidget_btn" href="/contact-us">
          Get Appointment
        </a>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          className="scroltop"
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{ display: "inline-block" }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}

      {/* WhatsApp Chat Box */}
      {chatOpen && (
        <div className="whatsapp-chat-box shadow-2xl">
          <div className="chat-header d-flex align-items-center justify-content-between p-3" style={{ opacity: 1, transform: "none", position: "relative", width: "100%", top: "auto", right: "auto" }}>
            <div className="d-flex align-items-center">
              <div className="avatar-container position-relative me-2">
                <img
                  src="/Assets/img/clients-5.jpg"
                  alt="Customer Service"
                  style={{ width: "38px", height: "38px", borderRadius: "50%", objectFit: "cover" }}
                />
                <div
                  className="online-dot position-absolute"
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#25d366",
                    borderRadius: "50%",
                    bottom: 0,
                    right: 0,
                    border: "2px solid #075e54",
                  }}
                ></div>
              </div>
              <div className="chat-header-info text-white">
                <h4 className="m-0 text-white" style={{ fontSize: "15px", fontWeight: "600" }}>
                  Customer Service
                </h4>
                <small style={{ color: "#a7f3d0", fontSize: "11px" }}>online</small>
              </div>
            </div>
            <button
              className="close-btn text-white bg-transparent border-0"
              onClick={closeChat}
              aria-label="Close chat"
              style={{ fontSize: "22px", cursor: "pointer", lineHeight: 1 }}
            >
              &times;
            </button>
          </div>

          <div
            className="chat-content p-3"
            style={{
              backgroundColor: "#efeae2",
              minHeight: "120px",
              maxHeight: "220px",
              overflowY: "auto",
              position: "relative",
              width: "100%",
              top: "auto",
              right: "auto",
              opacity: 1,
              transform: "none",
            }}
          >
            {showTyping && (
              <div className="typing-indicator d-inline-flex align-items-center bg-white p-2 rounded-3 shadow-sm mb-2">
                <span className="dot dot-1"></span>
                <span className="dot dot-2"></span>
                <span className="dot dot-3"></span>
              </div>
            )}
            {showMessage && (
              <div
                className="message received bg-white p-3 rounded-3 shadow-sm text-dark animate__animated animate__fadeIn"
                style={{ fontSize: "13px", lineHeight: "1.4", borderTopLeftRadius: "2px", maxWidth: "90%" }}
              >
                Hello, I want to book an eye check-up appointment at Oracle Eye Hospital. Please share the available slots.
                <div className="text-end text-muted mt-1" style={{ fontSize: "10px" }}>
                  Just now
                </div>
              </div>
            )}
          </div>

          <div className="message-input p-3 bg-white" style={{ position: "relative", width: "100%", top: "auto", right: "auto", opacity: 1, transform: "none" }}>
            <button
              className="whatsapp-btn btn w-100 text-white font-weight-bold d-flex align-items-center justify-content-center gap-2"
              onClick={() => {
                window.open(
                  "https://api.whatsapp.com/send/?phone=918006803111&text=Hello,%20I%20want%20to%20book%20an%20eye%20check-up%20appointment%20at%20Oracle%20Eye%20Hospital.%20Please%20share%20the%20available%20slots.&type=phone_number&app_absent=0",
                  "_blank"
                );
              }}
              style={{ backgroundColor: "#25d366", borderRadius: "24px", padding: "10px", fontSize: "14px" }}
            >
              <i className="fa-brands fa-whatsapp fs-5"></i> Chat in WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Launcher Icon */}
      {!chatOpen && (
        <div
          className="chat-icon cursor-pointer shadow-lg animate-bounce"
          onClick={openChat}
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            zIndex: 10001,
            cursor: "pointer",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            backgroundColor: "#25d366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 15px rgba(37, 211, 102, 0.4)",
          }}
          title="Chat with us on WhatsApp"
        >
          <img src="/Assets/img/whatsapp_icon.webp" alt="WhatsApp" style={{ width: "34px", height: "34px" }} />
        </div>
      )}
    </>
  );
}
