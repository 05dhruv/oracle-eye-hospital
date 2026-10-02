import "@fontsource-variable/fraunces";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/content";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Oracle Eye Hospital, Moradabad | Cataract, LASIK, Retina & Glaucoma Care",
    template: "%s | Oracle Eye Hospital, Moradabad",
  },
  description:
    "Oracle Eye Hospital in Moradabad offers cataract surgery, LASIK and refractive care, retina, glaucoma, pediatric eye and dry eye treatment. Book an appointment today.",
  openGraph: { type: "website", siteName: SITE.name, locale: "en_IN" },
};

export const viewport = { themeColor: "#0A2A33" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.helpline,
  email: SITE.email,
  medicalSpecialty: "Ophthalmology",
  address: {
    "@type": "PostalAddress",
    streetAddress: "491, Hi-Street, Near TDI City, Parampara, MDA",
    addressLocality: "Moradabad",
    addressRegion: "Uttar Pradesh",
    postalCode: "244001",
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "10:00",
    closes: "20:00",
  },
  sameAs: [SITE.instagram, SITE.facebook],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-40 flex h-12 items-center gap-2 rounded-full bg-[#1FA855] px-4 text-sm font-semibold text-white shadow-lg hover:bg-[#178f47]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 1-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.3.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.8-.1 1.4Z" />
          </svg>
          WhatsApp
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
