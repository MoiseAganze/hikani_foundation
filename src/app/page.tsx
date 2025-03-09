import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Boss from "@/components/Boss/Index";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hikani foundation",
  description:
    "Une organisation chrétienne de bienfaisance dédiée à l’amélioration des conditions de vie des plus vulnérables.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <AboutSectionOne /> */}
      <AboutSectionTwo />
      <Boss />

      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
