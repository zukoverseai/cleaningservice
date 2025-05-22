import Link from "next/link";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  ArrowRight,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ContactForm";
import LogoIntro from "@/components/LogoIntro";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <img
              src="/just-logo.png"
              alt="Zoftware Development Services logo"
              className="h-6 w-6"
            />
            <span>Zoftware Development</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#services"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Cleaning with care and compassion.
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We bring sparkle to your home with our thorough, reliable, and
                  eco-friendly cleaning services.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#contact">Book a Cleaning</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#services">Our Services</Link>
                  </Button>
                </div>
              </div>
              <LogoIntro />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 bg-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Services
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
              Comprehensive cleaning solutions tailored to your needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
              <div className="space-y-4 max-w-sm">
                <img
                  src="/residential-cleaning.jpg"
                  alt="Residential Cleaning"
                  className="mx-auto h-64 w-full object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold">Residential Cleaning</h3>
                <p className="text-center text-gray-500">
                  Keep your home spotless with our thorough residential cleaning
                  services.
                </p>
              </div>
              <div className="space-y-4 max-w-sm">
                <img
                  src="/move-in-move-out.jpg"
                  alt="Move-In / Move-Out Cleaning"
                  className="mx-auto h-64 w-full object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold">Move-In / Move-Out</h3>
                <p className="text-center text-gray-500">
                  Ensure a fresh start with our move-in and move-out cleaning
                  services, leaving your space pristine for new occupants.
                </p>
              </div>
              <div className="space-y-4 max-w-sm">
                <img
                  src="/post-construction.jpg"
                  alt="Post-Construction Cleaning"
                  className="mx-auto h-64 w-full object-cover rounded-lg"
                />
                <h3 className="text-xl font-semibold">Post-Construction</h3>
                <p className="text-center text-gray-500">
                  Remove construction dust and debris with our specialized
                  post-construction cleaning services.
                </p>
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/services"
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90"
              >
                Explore All Services
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* About Section :) */}
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <img
                src="/Ashley.jpg"
                alt="Our cleaning team"
                className="mx-auto w-full max-w-[600px] h-auto rounded-xl object-cover object-center"
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Why Choose Us
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  With over 10 years of experience, our team of professional
                  cleaners is dedicated to providing the highest quality
                  service.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Experienced & Trusted</h3>
                      <p className="text-sm text-gray-500">
                        Our cleaners are background-checked, insured, and
                        professionally trained.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Eco-Friendly Products</h3>
                      <p className="text-sm text-gray-500">
                        We use environmentally friendly cleaning products that
                        are safe for your family and pets.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-1">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">100% Satisfaction Guarantee</h3>
                      <p className="text-sm text-gray-500">
                        If you're not completely satisfied, we'll re-clean the
                        area at no additional cost.
                      </p>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Zoftware Development, our mission is to deliver
                  exceptional, reliable, and eco-friendly cleaning with
                  meticulous attention to every detail, ensuring your home feels
                  truly refreshed.
                </p>
                <div className="mt-6 flex justify-center gap-4">
                  <Link
                    href="/services"
                    className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90"
                  >
                    Explore All Services
                  </Link>
                  <Link
                    href="#contact"
                    className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What Our Clients Say
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
              {/* Testimonial 1 */}
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
                <div className="space-y-2">
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500">
                    Zoftware Development completely transformed our home before
                    a big family gathering. The team was punctual, professional,
                    and left every corner sparkling. We couldn't be happier!
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Emily Johnson</p>
                  <p className="text-sm text-gray-500">Residential Client</p>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
                <div className="space-y-2">
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500">
                    I booked the deep clean package for my condo, and the
                    results exceeded my expectations. Every surface gleams, and
                    the team was friendly and detail-oriented.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Michael Lee</p>
                  <p className="text-sm text-gray-500">Condo Owner</p>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
                <div className="space-y-2">
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500">
                    The move-out cleaning saved me so much stress during my
                    relocation. They handled everything, from inside cabinets to
                    window sills, and I got my full deposit back!
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Sophia Martinez</p>
                  <p className="text-sm text-gray-500">Tenant</p>
                </div>
              </div>
              {/* Testimonial 4 */}
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6">
                <div className="space-y-2">
                  <div className="flex gap-0.5 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500">
                    Our small office in downtown Ottawa looks brand new after
                    the post-construction package. Quick, efficient service and
                    a dust-free environment!
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Carter Nguyen</p>
                  <p className="text-sm text-gray-500">Commercial Client</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-teal-50"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get in Touch
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to experience the ZD Cleaning difference? Contact
                  us today for a free quote.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-sm text-gray-500">+1 (613) 882-1225</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <a
                        href="mailto:zoftwaredevelopment@yahoo.com"
                        className="text-sm text-gray-500 hover:text-primary hover:underline"
                      >
                        zoftwaredevelopment@yahoo.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Ottawa,+ON,+Canada"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-primary hover:underline"
                      >
                        Toronto, ON (remote work accepted!)
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-bold">Hours</h3>
                      <p className="text-sm text-gray-500">
                        Monday - Sunday: 9am - 6pm
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <a
                      href="https://www.facebook.com/zoftwaredevelopment"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary transition-transform duration-200 ease-in-out hover:scale-110"
                    >
                      <FaFacebookF className="h-6 w-6" />
                    </a>
                    <a
                      href="https://www.instagram.com/zoftwaredevelopment/"
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary transition-transform duration-200 ease-in-out hover:scale-110"
                    >
                      <FaInstagram className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-white p-6">
                <h3 className="text-xl font-bold mb-4">Request a Quote</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2 text-sm">
            <img
              src="/just-logo.png"
              alt="Zoftware Development Services logo"
              className="h-5 w-5"
            />
            <p>© 2025 Zoftware Development Services. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="/terms"
              className="text-xs hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-xs hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            {/* <Link
              href="#"
              className="text-xs hover:underline underline-offset-4"
            >
              Careers
            </Link> */}
          </nav>
        </div>
      </footer>
    </div>
  );
}
