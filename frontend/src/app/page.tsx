import { Navbar } from "@/common components/Navbar";
import { CarouselSection } from "@/components/home/CarouselSection";
import { FeaturesCardSection } from "@/components/home/FeaturesCardSection";
import styles from "./page.module.css";
import Image from "next/image";
import image1 from "../../public/images/home/browsing image.png";
import { TrendingSection } from "@/components/home/TrendingSection";
import { Newsletter } from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <Navbar />
      <CarouselSection />
      <FeaturesCardSection />
      <TrendingSection />
      <Image src={image1} alt="image 1" className={styles.image} />
      <Newsletter />
    </div>
  );
}
