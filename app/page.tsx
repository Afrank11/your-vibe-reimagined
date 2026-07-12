import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { Work } from "@/components/sections/Work";
import { Record } from "@/components/sections/Record";
import { Process } from "@/components/sections/Process";
import { Signals } from "@/components/sections/Signals";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Work />
      <Record />
      <Process />
      <Signals />
      <Contact />
    </>
  );
}
