"use client";
import Link from "next/link";

export default function Page() {
  return (
    <>
      

	
<div className="dz-bnr-inr style-1  dz-bnr-inr-sm d-none" style={{"backgroundImage":"url(/Assets/img/inner-bg.jpg)"}}>
		<div className="container">
			<div className="dz-bnr-inr-entry d-table-cell">
				<h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Dr Sujata Tomar</h1>

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
									<img src="/Assets/img/team/6.png" />
								</div>
							</div>
						</div>
						<div className="form-wrapper style-1  wow fadeInUp doctor_form" data-wow-delay="0.4s" data-wow-duration="0.8s">
							<div className="form-body">
								<div className="title-head">
									<h2 className="form-title m-b20">Book Your Appointment</h2>
								</div>
								<form id="bookingForm" className="dzForm">
									<div className="row">
										<div className="col-sm-6 m-b20">
											<div className="floating-underline underline-1 input-white input-icon-left">
												<span className="input-group-text text-primary"><i className="feather icon-user"></i></span>
												<input name="Name" type="text" className="form-control" placeholder="Your Name" required />
											</div>
										</div>
										<div className="col-sm-6 m-b20">
											<div className="floating-underline underline-1 input-white input-icon-left">
												<span className="input-group-text text-primary"><i className="feather icon-mail"></i></span>
												<input name="Email" type="email" className="form-control" placeholder="Your Email" required />
											</div>
										</div>
										<div className="col-sm-6 m-b20">
											<div className="floating-underline underline-1 input-white input-icon-left">
												<span className="input-group-text text-primary"><i className="feather icon-phone"></i></span>
												<input name="PhoneNumber" type="tel" className="form-control" placeholder="Phone Number" required pattern="[6-9]\d{9}" maxlength="10" oninput="this.value = this.value.replace(/[^0-9]/g, '')" />
											</div>
										</div>
										<div className="col-sm-6 m-b20">
											<div className="floating-underline underline-1 input-white input-icon-left">
												<span className="input-group-text text-primary"><i className="feather icon-calendar"></i></span>
												<input name="AppointmentDate" required type="text" className="form-control" id="datePickerOnly" placeholder="Date" />
											</div>
										</div>
										<div className="col-sm-6 m-b20">
											<div className="floating-underline underline-1 input-white input-icon-left">
												<span className="input-group-text text-primary"><i className="feather icon-clock"></i></span>
												<input name="AppointmentTime" required type="text" className="form-control" id="timePickerOnly" placeholder="Time" />
											</div>
										</div>
										<div className="col-sm-6 m-b20">
											<div className="floating-underline underline-1 input-white input-icon-left">
												<span className="input-group-text text-primary"><i className="feather icon-server"></i></span>
												<select name="Service" id="service" className="form-control" required>
													<option value>--Select Service--</option>
													<option value="Cataract Service">Cataract Service</option>
													<option value="Cornea Refractive Service">Cornea, Refractive & Dry eyes Services</option>
													<option value="Vitreoretinal Service">Vitreoretinal Service</option>
													<option value="Pediatric Eye Service">Pediatric Eye Service</option>
													<option value="Glaucoma Service">Glaucoma Service</option>
													<option value="Contact Lens Service">Contact Lens Service</option>
													<option value="Orthoptics Service">Orthoptics Service</option>
													<option value="Myopia Clinic">Myopia Clinic</option>
													<option value="Computer Vision Syndrome">Computer Vision Syndrome</option>
												</select>
											</div>
										</div>

										<div className="col-sm-12 m-b20">
											<div className="floating-underline underline-1 input-white input-icon-left">
												<span className="input-group-text text-primary"><i className="feather flaticon-message"></i></span>
												<textarea name="Message" required rows="3" className="form-control" placeholder="Your Message"></textarea>
											</div>
										</div>
										<div className="col-sm-12 m-t10">
											<button type="submit" id="btnSubmit" className="btn btn-lg w-100 appointmemt_btnn">
												<i className="feather icon-calendar m-r5"></i> Book An appointment
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>

					</aside>
				</div>
				<div className="col-xl-7 m-b10 ps-xl-5">
					<h2 className="title">Dr. Sujata Tomar </h2>
					<div className="section-head style-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
						<div className="sub-title wow fadeInUp mb-3" data-wow-delay="0.2s" data-wow-duration="0.8s">
							MBBS, MS, FRCS
						</div>

						<p className="fw-normal">
							Dr. Sujata Tomar is a highly skilled Consultant Ophthalmologist with expertise in cataract surgery, retinal examination, glaucoma management, uveitis treatment, dry eye management, and diabetic retinopathy care. She has extensive surgical experience, having successfully performed over 5,000 phacoemulsification cataract surgeries, including premium intraocular lens implantation (multifocal and toric IOLs), more than 2,000 Small Incision Cataract Surgeries (SICS), 200 pterygium excisions, and numerous intravitreal injections.
						</p>


						<p>
							Dr.  Sujata completed her MBBS from Government Medical College, Mysore, followed by an MS in Ophthalmology from Dr. Ram Manohar Lohia Hospital, New Delhi. She further earned the prestigious FRCS (Ophthalmology) from the Royal College of Physicians and Surgeons of Glasgow. With her commitment to clinical excellence, surgical precision, and patient-centered care, she strives to deliver the highest standards of eye care and vision restoration.
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
