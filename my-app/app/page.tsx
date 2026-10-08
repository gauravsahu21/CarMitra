import Image from "next/image";
import Link from "next/link";
import carMan from "../images/car_man.png";
import HeroQuoteSlider from "./hero-quote-slider";

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <HeroQuoteSlider />
          <Link className="hero-action" href="/#free-pdi">
            Explore Free PDI
          </Link>
        </div>
        <div className="hero-art">
          <Image
            src={carMan}
            alt="Car inspector checking a vehicle"
            priority
            sizes="(max-width: 800px) 100vw, 55vw"
          />
        </div>
      </section>
    </main>
  );
}
