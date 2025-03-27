
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Drawer, 
  DrawerContent, 
  DrawerPortal 
} from "@/components/ui/drawer";
import HealthcareChatbot from "./chatbot/HealthcareChatbot";
import { useToast } from "@/hooks/use-toast";

const ChatbotDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      toast({
        title: "Healthcare Assistant",
        description: "Describe your symptoms for preliminary guidance",
      });
    }
  };
  
  return (
    <>
      <Button
        onClick={toggleDrawer}
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg bg-medical-600 hover:bg-medical-700 z-50"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
      
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerPortal>
          <DrawerContent className="fixed bottom-0 right-0 w-full h-[80vh] max-w-md rounded-tl-xl border-l border-t m-0">
            <HealthcareChatbot />
          </DrawerContent>
        </DrawerPortal>
      </Drawer>
    </>
  );
};

export default ChatbotDrawer;
