import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingTelegram from "@/components/FloatingTelegram";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  ServicesJsonLd,
  FAQJsonLd,
  BreadcrumbJsonLd,
} from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <ServicesJsonLd />
      <FAQJsonLd />
      <BreadcrumbJsonLd />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <About />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingTelegram />
    </>
  );
}
