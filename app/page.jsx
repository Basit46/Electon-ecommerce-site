import AdditionalSections from "@/components/AdditionalSections";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AdditionalSections />
      <Blog />
    </main>
  );
}
