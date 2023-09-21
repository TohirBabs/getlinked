import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
// import Navbar from "@/components/Navbar";
import Register from "@/components/Register";
import Faqs from "@/sections/Faq";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import Judging from "@/sections/Judging";
import Privacy from "@/sections/Privacy";
import Rewards from "@/sections/Rewards";
import Rules from "@/sections/Rules";
import Partners from "@/sections/partners";

export default function Home() {
  return (
    <main className="bg-primary-purple  min-h-screen w-screen text-white relative overflow-hidden">
      <Navbar />
      <Hero />
      <Contact />
      <Register />
      <Introduction />
      <Rules />
      <Judging />
      <Faqs />
      <Rewards />
      <Partners />
      <Privacy />
      <Footer />
    </main>
  );
}
