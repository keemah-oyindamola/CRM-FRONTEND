import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import CompanyLogos from "../components/landing/CompanyLogos";
import Features from "../components/landing/Features";
import DashboardPreview from "../components/landing/DashoardPreview";
import Pricing from "../components/landing/Pricing";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

function LandingLayout() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogos/>
      <Features/>
      <DashboardPreview/>
      <Pricing/>
      <Testimonials/>
      <FAQ/>
      <CTA/>
      <Footer/>
    </>
  );
}

export default LandingLayout;