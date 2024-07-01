import { About, Discount, Features, Navbar, Overview, Plans, Practice } from "@/components";

export default function Home() {
  return (
    <main className="px-3 lg:px-10">
      <Navbar/>
      <Overview/>
      <Features/>
      <div className="max-w-6xl m-auto ">
        <About/>
        <Practice/>
        <Plans/>
        <Discount/>
      </div>
    </main>
  );
}
