import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-light">SidCup Family Golf</h3>
            <p className="text-background/80 mb-4">
              Creating memorable golf experiences for families since 2024
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-light" />
                <span>123 Golf ROF Ananda, SidCup, Gurugram Haryan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-primary-light" />
                <span>(+91) 9546995527</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-primary-light" />
                <span>info@aryankum70912@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2 text-background/80">
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary-light" />
                <div>
                  <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
                  <p>Saturday - Sunday: 8:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} SidCup Family Golf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
