import Navbar from "@/client/components/Navbar";
import Footer from "@/client/components/Footer";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-screen relative">
      <Navbar />
      <div className="m-5">{children}</div>
      <Footer />
    </div>
  );
}
