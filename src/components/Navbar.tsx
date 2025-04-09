
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Home, Search, MapPin, UserCircle, Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Logged out successfully",
        description: "See you again soon!",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Logout failed",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="sticky top-0 z-50 backdrop-blur-sm border-b border-white/10">
      <div className="container-custom py-3 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl relative group">
          <span className="text-blue-600 transition-all duration-300">Hospi</span>
          <span className="transition-all duration-300"> Finder</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex gap-1">
            <NavigationMenuItem>
              <Link to="/" className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-blue-50/30 transition-colors">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/search" className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-blue-50/30 transition-colors">
                <Search className="w-4 h-4" />
                <span>Find Hospitals</span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/near-me" className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-blue-50/30 transition-colors">
                <MapPin className="w-4 h-4" />
                <span>Near Me</span>
              </Link>
            </NavigationMenuItem>
            {user ? (
              <>
                <NavigationMenuItem>
                  <Link to="/profile" className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-blue-50/30 transition-colors">
                    <UserCircle className="w-4 h-4" />
                    <span>My Profile</span>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    size="sm"
                    className="ml-2 bg-transparent hover:bg-blue-50/30 border-none shadow-none"
                  >
                    Logout
                  </Button>
                </NavigationMenuItem>
              </>
            ) : (
              <>
                <NavigationMenuItem>
                  <Link to="/login">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="ml-2 border border-blue-200 hover:bg-blue-50/30 bg-transparent"
                    >
                      Login
                    </Button>
                  </Link>
                </NavigationMenuItem>
              </>
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile navigation menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg md:hidden">
            <div className="flex flex-col p-4 space-y-2">
              <Link 
                to="/" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>
              <Link 
                to="/search" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Search className="w-5 h-5" />
                <span>Find Hospitals</span>
              </Link>
              <Link 
                to="/near-me" 
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <MapPin className="w-5 h-5" />
                <span>Near Me</span>
              </Link>
              {user ? (
                <>
                  <Link 
                    to="/profile" 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <UserCircle className="w-5 h-5" />
                    <span>My Profile</span>
                  </Link>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="justify-start font-normal"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Link 
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button 
                    className="w-full justify-start"
                    variant="outline"
                  >
                    Login
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
