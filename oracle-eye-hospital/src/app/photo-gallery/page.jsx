"use client";
import Link from "next/link";

export default function Page() {
  return (
    <>
      
    
<div className="dz-bnr-inr style-1 dz-bnr-inr-sm" style={{"backgroundImage":"url(/Assets/img/inner-bg.jpg)"}}>
        <div className="container">
            <div className="dz-bnr-inr-entry d-table-cell">
                <h1 className="" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">Photo Gallery</h1>
            </div>
        </div>
    </div>


    
<section className="content-inner-1 bg-light overflow-hidden content-wrapper style-3 ">
        <div className="container">
            <div className="row ">
                    <div className="col-xxl-4 col-lg-4 m-b30">
                        <div className="dz-card style-3">
                            <div className="dz-media">
                                <img src="/uploads/photogallery/16567d17-c657-460d-9dae-98d91660fb1a.jpg" alt="Oracle Eye Hospital" style={{"height":"250px","objectFit":"cover"}} />
                            </div>
                            <div className="dz-info">
                                <h3 className="dz-title" data-aos="fade-up">
                                    <a href="/gallery-details/oracle-eye-hospital">Oracle Eye Hospital</a>
                                </h3>

                                <a className="btn-link icon-link-hover-end" href="/gallery-details/oracle-eye-hospital">
                                    View Gallery <i className="feather icon-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-4 m-b30">
                        <div className="dz-card style-3">
                            <div className="dz-media">
                                <img src="/uploads/photogallery/543ba95a-8e05-4a52-85bb-18a72382f33d.jpg" alt="Hospital Interior" style={{"height":"250px","objectFit":"cover"}} />
                            </div>
                            <div className="dz-info">
                                <h3 className="dz-title" data-aos="fade-up">
                                    <a href="/gallery-details/hospital-interior">Hospital Interior</a>
                                </h3>

                                <a className="btn-link icon-link-hover-end" href="/gallery-details/hospital-interior">
                                    View Gallery <i className="feather icon-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>


    </>
  );
}
