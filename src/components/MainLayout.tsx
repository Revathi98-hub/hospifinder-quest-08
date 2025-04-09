import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatbotDrawer from "./ChatbotDrawer";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <div className={cn(
        "absolute inset-0 -z-10",
        "bg-[url('/lovable-uploads/389b4fe5-c2d9-4d69-8e4b-576e5f0d0b86.png')]",
        "opacity-85 bg-fixed bg-no-repeat bg-cover",
        "filter grayscale-[0.1] blur-[10px] brightness-90"
      )} />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <ChatbotDrawer />
    </div>
  );
};

export default MainLayout;