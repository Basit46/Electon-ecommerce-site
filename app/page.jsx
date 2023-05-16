import AdditionalSections from "@/components/AdditionalSections";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

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
