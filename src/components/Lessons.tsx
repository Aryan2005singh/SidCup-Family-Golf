import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Clock, Star } from "lucide-react";
import lessonsImage from "@/assets/lessons.jpg";

const Lessons = () => {
  const lessonTypes = [
    {
      title: "Beginner Lessons",
      duration: "1 Hour",
      price: "₹2999",
      description: "Learn the fundamentals with our expert instructors",
      features: ["Basic techniques", "Equipment guidance", "Personalized tips"],
    },
    {
      title: "Intermediate Lessons",
      duration: "1.5 Hours",
      price: "₹4999",
      description: "Refine your skills and improve your game",
      features: ["Advanced techniques", "Strategy development", "Performance analysis"],
    },
    {
      title: "Group Sessions",
      duration: "2 Hours",
      price: "₹9999/group",
      description: "Fun and interactive group learning experience",
      features: ["Up to 4 people", "Team building", "Competitive drills"],
    },
  ];

  return (
    <section id="lessons" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Professional Lessons</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Improve your game with our certified golf instructors
          </p>
        </div>

        <div className="mb-16 animate-fade-in">
          <img
            src={lessonsImage}
            alt="Professional golf instructor teaching a lesson"
            className="rounded-2xl shadow-elegant w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {lessonTypes.map((lesson, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-elegant hover:-translate-y-2 animate-fade-in"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <GraduationCap className="w-6 h-6" />
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-medium">{lesson.duration}</span>
                </div>
                <CardTitle className="text-2xl">{lesson.title}</CardTitle>
                <div className="text-3xl font-bold text-primary">{lesson.price}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{lesson.description}</p>
                <ul className="space-y-2">
                  {lesson.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lessons;
