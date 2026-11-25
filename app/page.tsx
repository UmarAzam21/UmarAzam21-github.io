import { Hero } from "@/components/sections/Hero";
import { Brands } from "@/components/sections/Brands";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Work } from "@/components/sections/Work";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { ChatLauncher } from "@/components/assistant/ChatLauncher";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <div
        aria-hidden
        className="scroll-progress fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-ink"
      />
      <Hero />
      <Brands />
      <Services />
      <TechStack />
      <Work />
      <Experience />
      <Testimonials />
      <Contact />
      <ChatLauncher />
    </main>
  );
}
