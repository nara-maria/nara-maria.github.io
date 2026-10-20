import "@/App.css";
import { useLenis } from "@/hooks/useLenis";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { WhoFor } from "@/components/site/WhoFor";
import { Approach } from "@/components/site/Approach";
import { Sprint } from "@/components/site/Sprint";
import { Stories } from "@/components/site/Stories";
import { About } from "@/components/site/About";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export default function App() {
  useLenis();
  return (
    <div className="App grain bg-night text-snow">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <WhoFor />
        <Approach />
        <Sprint />
        <Stories />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
