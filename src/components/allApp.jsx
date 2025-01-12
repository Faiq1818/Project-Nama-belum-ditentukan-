import { Navbar } from "./navbar";
import { HeroSection } from "./heroSection";
import { Footer } from "./footer";
export function AllApp() {
  return (
    <div className=" h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />
      <HeroSection />
      {/* <Footer /> */}
    </div>
  );
}
