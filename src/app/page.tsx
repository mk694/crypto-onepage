import Reviews from "@/components/sections/reviews/Reviews";
import Features from "@/components/sections/features/Features";
import Footer from "@/components/sections/footer/Footer";
import Hero from "@/components/sections/hero/Hero";
import Partners from "@/components/sections/partners/Partners";
import Services from "@/components/sections/services/Services";
import Image from "next/image";
import GetStarted from "@/components/sections/getStarted/GetStarted";
import Blog from "@/components/sections/blogs/blog";
import Navbar from "@/components/sections/navbar/Navbar";

export default function Home() {
  return (
    <div className=" bg-primary_background bg-main text-white_A">
      <Navbar/>
      <Hero />
      <Partners />
      <Services />
      <Features />
      <Reviews />
      <GetStarted />
      <Blog />
      <Footer />
    </div>
  );
}
