
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-medical-50/50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-2 font-bold text-xl mb-4">
              <span className="text-medical-600">Hospi</span>
              <span>Finder</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Helping you find the right healthcare facilities for your needs, whenever and wherever you need them.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram"].map(platform => (
                <a 
                  key={platform}
                  href={`#${platform}`}
                  className="w-9 h-9 rounded-full bg-white border flex items-center justify-center hover:bg-medical-100 transition-colors"
                  aria-label={`Visit our ${platform} page`}
                >
                  <span className="w-5 h-5 bg-medical-500 opacity-60 rounded-full"></span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Find Hospitals", path: "/search" },
                { label: "Near Me", path: "/near-me" },
                { label: "About Us", path: "#" },
                { label: "Contact", path: "#" }
              ].map(link => (
                <li key={link.label}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-medical-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                "Find Medical Specialists",
                "Emergency Services",
                "Hospital Ratings",
                "Health Insurance Info",
                "Medical Records"
              ].map(service => (
                <li key={service}>
                  <a 
                    href="#"
                    className="text-muted-foreground hover:text-medical-600 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="w-5 h-5 text-medical-500 mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Healthcare Avenue<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-medical-500 mr-3 flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="text-muted-foreground hover:text-medical-600 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-medical-500 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:info@hospifinder.com" 
                  className="text-muted-foreground hover:text-medical-600 transition-colors"
                >
                  info@hospifinder.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-6 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} HospiFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
