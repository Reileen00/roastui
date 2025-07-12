'use client';

import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { GoodVsBadUI } from "@/components/goodVsBadUI";
import { Hero } from "@/components/hero";
import { ImproveUIDesign } from "@/components/ImproveUIDesign";
import { Pricing } from "@/components/pricing";
export default function Home() {
  return (
  <main className="flex flex-col">
    <Hero />
    <div className="flex flex-col items-center w-full gap-y-28">
      <GoodVsBadUI />
      <ImproveUIDesign />
      <Pricing />
      <Faq/>
    </div>
    <Footer/>
  </main>


  );
}
