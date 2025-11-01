import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Users, Trophy } from "lucide-react";
import adventureImage from "@/assets/adventure-golf.jpg";

const AdventureGolf = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Themed Courses",
      description: "Explore our uniquely designed adventure golf courses with creative obstacles and challenges",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Fun",
      description: "Perfect for all ages and skill levels, create lasting memories with your loved ones",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Competitive Play",
      description: "Challenge yourself and compete with friends in our exciting tournament-style layouts",
    },
  ];

  return (
    <section id="adventure" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Adventure Golf</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience golf like never before with our thrilling adventure courses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <img
              src={adventureImage}
              alt="Adventure mini golf course with colorful obstacles"
              className="rounded-2xl shadow-elegant w-full h-auto"
            />
          </div>

          <div className="space-y-6 animate-fade-in">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-card hover:scale-105"
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="text-primary flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdventureGolf;
