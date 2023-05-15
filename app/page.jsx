import AdditionalSections from "@/components/AdditionalSections";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Products />
      <AdditionalSections />
      <Blog />
    </main>
  );
}
