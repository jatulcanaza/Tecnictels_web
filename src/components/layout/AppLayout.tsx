import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "../shared/WhatsAppFloat";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}