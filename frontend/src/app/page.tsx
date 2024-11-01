import { Navbar } from "@/common components/Navbar";
import { CarouselSection } from "@/components/home/CarouselSection";
import { FeaturesCardSection } from "@/components/home/FeaturesCardSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselSection />
      <FeaturesCardSection />
    </div>
  );
}
