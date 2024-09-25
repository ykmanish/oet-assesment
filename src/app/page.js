import Image from "next/image";
import Header from "../Components/Header";
import CourseFeatures from "../Components/Features/CourseFeatures";
import Timeline from "../Components/Timeline";
import Testimonials from "../Components/Testimonials";
import FAQ from "../Components/FAQ";
import Footer from "../Components/Footer";
import Navbar from "@/Components/Navbar";
import CTAOne from "@/Components/CTAOne";
export default function Home() {
  return (
    <>
      <Header />
      <CourseFeatures />
      <Timeline />
      <CTAOne />

      <Testimonials />
      <FAQ />
    </>
  );
}
