// Tambahkan import ini di bagian paling atas home.tsx
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Activities } from "../components/activities";
import { Contact } from "../components/contact";

export function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Activities />
      <Contact />
    </main>
  );
}