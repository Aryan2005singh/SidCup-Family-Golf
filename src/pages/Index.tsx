import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AdventureGolf from "@/components/AdventureGolf";
import Lessons from "@/components/Lessons";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AdventureGolf />
      <Lessons />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
