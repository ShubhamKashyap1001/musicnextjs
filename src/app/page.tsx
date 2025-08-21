import FeatureCourses from "@/components/FeatureCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import MusicSchoolTestimonials from "@/components/MusicSchoolTestimonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-center text-3xl text-green-400 mt-3">Chai aur Nextjs</h1> */}
      <HeroSection />
      <FeatureCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructor />
      <Footer />
    </main>
  );
}
