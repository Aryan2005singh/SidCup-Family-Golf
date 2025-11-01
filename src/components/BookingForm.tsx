import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Calendar, Users, Mail, Phone } from "lucide-react";

const bookingSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().min(10, { message: "Phone number must be at least 10 digits" }).max(20),
  date: z.string().min(1, { message: "Please select a date" }),
  time: z.string().min(1, { message: "Please select a time" }),
  players: z.string().min(1, { message: "Please select number of players" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().trim().max(500).optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      players: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Booking submitted:", data);
    toast.success("Booking request submitted! We'll contact you shortly to confirm.", {
      description: `Booking for ${data.players} players on ${data.date}`,
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="booking" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Book Your Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reserve your tee time or schedule a lesson today
          </p>
        </div>

        <Card className="max-w-3xl mx-auto shadow-elegant border-2 animate-scale-in">
          <CardHeader>
            <CardTitle className="text-2xl">Booking Form</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Ram" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Ram@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone Number
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="(+91) 9546995527" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Preferred Date
                        </FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred Time</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="9am">9:00 AM</SelectItem>
                            <SelectItem value="11am">11:00 AM</SelectItem>
                            <SelectItem value="1pm">1:00 PM</SelectItem>
                            <SelectItem value="3pm">3:00 PM</SelectItem>
                            <SelectItem value="5pm">5:00 PM</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="players"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Number of Players
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select players" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1 Player</SelectItem>
                            <SelectItem value="2">2 Players</SelectItem>
                            <SelectItem value="3">3 Players</SelectItem>
                            <SelectItem value="4">4 Players</SelectItem>
                            <SelectItem value="5+">5+ Players</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Service Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="adventure">Adventure Golf</SelectItem>
                            <SelectItem value="beginner">Beginner Lesson</SelectItem>
                            <SelectItem value="intermediate">Intermediate Lesson</SelectItem>
                            <SelectItem value="group">Group Session</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any special requests or questions?"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-lg py-6"
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingForm;
