"use client";
import Link from "next/link";

export default function Page() {
  return (
    <>
      

	
<div className="dz-bnr-inr style-1  dz-bnr-inr-sm" style={{"backgroundImage":"url(/Assets/img/inner-bg.jpg)"}}>
		<div className="container">
			<div className="dz-bnr-inr-entry d-table-cell">
				<h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Contact Us</h1>
			</div>
		</div>
	</div>


	
<section className="content-inner bg-light">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
					<div className="icon-bx-wraper style-5 bg-white box-hover">
						<div className="contact_img">
							<img src="/Assets/img/contact3.jpg" />
						</div>
						<div className="icon-content">
							<h3 className="dz-title fw-semibold">Address</h3>
							<p>
								<a href="https://www.google.com/maps/search/?api=1&query=Oracle+Eye+Hospital+491+Hi+Street+Near+TDI+City+Parampara+MDA+Moradabad+Uttar+Pradesh+244001" target="_blank">
									491, Hi-Street, Near TDI City, Parampara, MDA, Moradabad, Uttar Pradesh-244001, India
								</a>
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
					<div className="icon-bx-wraper style-5 bg-white box-hover">
						<div className="contact_img">
							<img src="/Assets/img/contact1.jpg" />
						</div>
						<div className="icon-content">
							<h3 className="dz-title fw-semibold">Call Us</h3>
							<p>
								<a href="tel:+91 8006803111" className="text-body">+91 8006803111</a><br />
								<a href="tel:+91 7500503111" className="text-body">+91 7500503111</a>
							</p>
						</div>
					</div>
				</div>
				<div className="col-lg-4 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
					<div className="icon-bx-wraper style-5 bg-white box-hover active">
						<div className="contact_img">
							<img src="/Assets/img/contact2.jpg" />
						</div>
						<div className="icon-content">
							<h3 className="dz-title fw-semibold">Send us a Mail</h3>
							<p>
								<a href="mailto:oracleeyehospital@gmail.com" className="text-body">oracleeyehospital@gmail.com</a><br />
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


	
<section className="content-inner content-wrapper style-7 pb-0  bg-white overflow-hidden" style={{"backgroundImage":"url(images/background/bg7.webp)"}}>
		<div className="container">
			<div className="row align-items-end justify-content-between">
				<div className="col-xl-6 col-lg-6 pe-xl-5 wow fadeInUp order-lg-1 order-2" data-wow-delay="0.4s" data-wow-duration="0.8s">
					<div className="content-media">
						<div className="dz-media">
							<img src="/Assets/img/contact.png" />
						</div>
					</div>
				</div>
				<div className="col-xl-5 col-lg-6 m-b30 wow fadeInUp order-lg-2 order-1" data-wow-delay="0.2s" data-wow-duration="0.8s">
					<div className="content-info m-0">
						<div className="form-wrapper style-1 bg-light">
							<div className="form-body">
								<div className="section-head style-1 mb-3">
									<h2 className="title fw-semibold m-b0">Get in Touch</h2>
									<p className="m-b0">You Can Reach Us Anytime</p>
								</div>
								<form id="contactForm" method="POST">
									
									<div className="dzFormMsg"></div>
									<div className="row">
										<div className="col-sm-6 m-b20">
											<div className="floating-underline underline-1 input-icon-left">
												<span className="input-group-text text-primary"><i className="feather icon-user"></i></span>
												<input name="Name" type="text" className="form-control" placeholder="Your Name" required />
											</div>
										</div>
										<div className="col-sm-6 m-b20">
											<div className="floating-underline underline-1 input-icon-left">
												<span className="input-group-text text-primary"><i className="feather icon-mail"></i></span>
												<input name="Email" type="email" className="form-control" placeholder="Your Email" required />
											</div>
										</div>
										<div className="col-sm-6 m-b20">
											<div className="floating-underline underline-1 input-icon-left">
												<span className="input-group-text text-primary"><i className="feather icon-phone"></i></span>
												<input name="PhoneNumber" type="tel" className="form-control dz-number" placeholder="Phone Number" required pattern="[6-9]\d{9}" maxlength="10" oninput="this.value = this.value.replace(/[^0-9]/g, '')" />
											</div>
										</div>
										<div className="col-sm-6 m-b20">
											<div className="floating-underline underline-1 input-icon-left">
												<span className="input-group-text text-primary"><i className="feather icon-home"></i></span>
												<input name="Address" required type="text" className="form-control dz-address" placeholder="Your Address" />
											</div>
										</div>
										<div className="col-sm-12 m-b20">
											<div className="floating-underline underline-1">
												<textarea name="Message" className="form-control" rows="2" placeholder="Write Message" required></textarea>
											</div>
										</div>

										{/*  Invisible reCAPTCHA Div  */}
										<div id="recaptcha-contact" className="g-recaptcha" data-sitekey="6Ld1bhUtAAAAAAd3vu2Kx1Xzlcswkt5v166lNvTT" data-callback="onContactFormSubmit" data-size="invisible"></div>

										<div className="col-sm-12 m-t10">
											<button type="submit" id="btnSubmit" className="btn btn-lg btn-primary w-100">
												Send Message
											</button>
										</div>
									</div>
								<input name="__RequestVerificationToken" type="hidden" value="CfDJ8ACTd51tey9JoDhC-GYBADanBA-n27WmoH276ZTo66cFTT7oe8Ml7aOw1fXjPiPtfiMKY3W0uhB-hZgB6RnFDYbYLVCBmVdJ-1g1SGdwQTcQ6LB2b_CwaKr2DT5DaB-6Sislnf31eNsOYlKizlyjjjM" /></form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


	
<div className="clearfix">
		<div className="map-wrapper style-1">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13975.305150734877!2d78.74642614296583!3d28.87378453253998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390af989bedcdbff%3A0x2a5de317f0ed8e54!2sOracle%20Eye%20Hospital%20-%20Best%20Eye%20Care%20in%20Moradabad%20(Dr%20Girjesh%20Kain%20%2F%20Cataract%20Surgeon%2F%20Free%20Cataract%20Surgery%20in%20Moradabad))!5e0!3m2!1sen!2sin!4v1780402841525!5m2!1sen!2sin" width="100%" height="450" style={{"border":"0"}} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
	</div>



    </>
  );
}
