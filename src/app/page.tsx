import { Features, Navbar, Overview } from "@/components";

export default function Home() {
  return (
    <main className="px-3 lg:px-10">
      <Navbar/>
      <Overview/>
      <Features/>
    </main>
  );
}
