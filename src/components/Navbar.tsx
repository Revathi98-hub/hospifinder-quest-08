
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPin, Search, Home, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4 mr-2" /> },
    { name: "Find Hospitals", path: "/search", icon: <Search className="w-4 h-4 mr-2" /> },
    { name: "Near Me", path: "/near-me", icon: <MapPin className="w-4 h-4 mr-2" /> },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass neo-shadow py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 font-bold text-xl animate-fade-in"
        >
          <span className="text-medical-600">Hospi</span>
          <span>Finder</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-2 rounded-lg transition-all duration-300 flex items-center",
                  location.pathname === link.path
                    ? "text-medical-600 bg-medical-50 font-medium"
                    : "text-foreground/80 hover:text-medical-600 hover:bg-medical-50/50",
                  "animate-fade-in"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            className="p-2 text-foreground rounded-lg focus-ring"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-0 bg-background/90 backdrop-blur-md z-40 transition-all duration-300 flex flex-col pt-20",
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col space-y-2 p-6">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-4 py-3 rounded-lg transition-all duration-300 flex items-center",
                  location.pathname === link.path
                    ? "text-medical-600 bg-medical-50 font-medium"
                    : "text-foreground/80 hover:text-medical-600 hover:bg-medical-50/50"
                )}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.3s ease, transform 0.3s ease"
                }}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
