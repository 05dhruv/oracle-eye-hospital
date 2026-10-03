"use client";
import DoctorBookingForm from "@/components/DoctorBookingForm";
import Link from "next/link";

export default function Page() {
  return (
    <>
      

	
<div className="dz-bnr-inr style-1  dz-bnr-inr-sm d-none" style={{"backgroundImage":"url(/Assets/img/inner-bg.jpg)"}}>
		<div className="container">
			<div className="dz-bnr-inr-entry d-table-cell">
				<h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Rachana</h1>

			</div>
		</div>
	</div>


	
<section className="content-inner ">
		<div className="container">
			<div className="row">
				<div className="col-xl-5 m-b30">
					<aside className="side-bar sticky-top p-0">
						<div className="widget wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
							<div className="dz-team">
								<div className="dz-media rounded">
									<img src="/Assets/img/team/8.png" />
								</div>
							</div>
						</div>
						<div className="form-wrapper style-1  wow fadeInUp doctor_form" data-wow-delay="0.4s" data-wow-duration="0.8s">
							<div className="form-body">
								<div className="title-head">
									<h2 className="form-title m-b20">Book Your Appointment</h2>
								</div>
								<DoctorBookingForm doctorName="Dr. Rachana" />
							</div>
						</div>

					</aside>
				</div>
				<div className="col-xl-7 m-b10 ps-xl-5">
					<h2 className="title">Dr. Rachana</h2>
					<div className="section-head style-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
						<div className="sub-title wow fadeInUp mb-3" data-wow-delay="0.2s" data-wow-duration="0.8s">
							MBBS, MS
						</div>

						<p className="fw-normal">
							Dr. Rachana completed her M.B.B.S and M.S from Sarojini Naidu Medical College,
							Agra. She has served as a Senior Resident at L.L.R.M Medical College, Meerut, and has also worked as an Assistant Professor at G.B.C.M, Dehradun, and V.I.M.S, Gajraula.
						</p>


						<p>
							Currently, she is working at Oracle Eye Hospital as a Comprehensive Ophthalmologist, providing expert eye care and management for a wide range of ocular conditions. With extensive clinical and academic experience,
							she is committed to delivering quality patient care and advancing excellence in ophthalmology.
						</p>


					</div>

					<div className="info-widget style-1 widget-sm  bg-light shadow-none m-b50 m-md-b20 wow fadeInUp doctor_form" data-wow-delay="0.8s" data-wow-duration="0.8s">
						<div className="widget-content">
							<h2 className="title">My Time Schedule</h2>
							<ul>
								<li>Monday <span>10:00AM - 8:00PM</span></li>
								<li>Tuesday <span>10:00AM - 8:00PM</span></li>
								<li>Wednesday <span>10:00AM - 8:00PM</span></li>
								<li>Thursday <span>10:00AM - 8:00PM</span></li>
								<li>Friday <span>10:00AM - 8:00PM</span></li>
								<li>Saturday <span>10:00AM - 8:00PM</span></li>
							</ul>
						</div>
					</div>
					<div className="info-widget style-2 shadow-none bg-light m-b50 m-md-b20 wow fadeInUp doctor_form" data-wow-delay="1.0s" data-wow-duration="0.8s">
						<div className="row g-xl-5 g-4">
							<div className="col-md-6">
								<div className="icon-bx-wraper style-3 align-items-center">
									<div className="icon-bx bg-primary">
										<span className="icon-cell">
											<i className="feather icon-mail"></i>
										</span>
									</div>
									<div className="icon-content">
										<h3 className="dz-title fw-semibold">Send us a Mail</h3>
										<p><a href="mailto:oracleeyehospital@gmail.com" className="text-body"><span className="__cf_email__">oracleeyehospital@gmail.com</span></a></p>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="icon-bx-wraper style-3 align-items-center">
									<div className="icon-bx bg-primary">
										<span className="icon-cell">
											<i className="feather icon-phone"></i>
										</span>
									</div>
									<div className="icon-content">
										<h3 className="dz-title fw-semibold">Call Us:</h3>
										<p><a href="tel:+91 8006803111" className="text-body">+91 8006803111</a></p>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	</section>



    </>
  );
}
