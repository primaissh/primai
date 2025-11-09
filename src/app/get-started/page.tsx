import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetStartedForm from "@/components/GetStartedForm";

export default function GetStartedPage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <GetStartedForm />
      <Footer />
    </div>
  );
}
