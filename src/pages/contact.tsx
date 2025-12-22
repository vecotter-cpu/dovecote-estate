import Navigation from "@/components/navigation";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-smoke-white">
      <Navigation />
      <main className="pt-24">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
