import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/854398/854398-hd_1280_720_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Welcome to SidCup Family Golf
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in-up opacity-90">
          Experience the thrill of adventure golf and professional lessons in a family-friendly environment
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <Button
            onClick={scrollToBooking}
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
          >
            Book Your Tee Time
          </Button>

          <Button
            onClick={() => {
              const element = document.getElementById("adventure");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            variant="outline"
            size="lg"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
          >
            Explore Courses
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
        