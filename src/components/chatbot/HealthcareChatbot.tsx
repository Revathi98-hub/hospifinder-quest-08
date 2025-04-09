
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ChatMessage, { ChatMessage as ChatMessageType } from "./ChatMessage";
import { symptomsToDiseasesMap, diseasesWithSymptoms } from "./symptomsData";
import { getHealthTipsForConditions } from "./healthTipsData";

const HealthcareChatbot = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>([
    {
      id: "1",
      role: "bot",
      content: "Hi there! I'm your healthcare assistant. Please tell me about your symptoms, and I'll try to help you understand what might be causing them.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [identifiedConditions, setIdentifiedConditions] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    
    // Process user message and generate response
    setTimeout(() => {
      const { botResponse, conditions } = generateResponse(inputValue);
      const botMessage: ChatMessageType = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: botResponse,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
      
      // If conditions were identified and there are health tips available, show them
      if (conditions.length > 0) {
        setIdentifiedConditions((prev) => {
          // Combine previous and new conditions, removing duplicates
          const combinedConditions = [...prev, ...conditions];
          return [...new Set(combinedConditions)];
        });
        
        // After a short delay, send health tips as a separate message
        setTimeout(() => {
          const healthTips = getHealthTipsForConditions(conditions);
          if (healthTips) {
            const tipsMessage: ChatMessageType = {
              id: (Date.now() + 2).toString(),
              role: "bot",
              content: `✨ **Personalized Health Tips**: \n\n${healthTips}`,
              timestamp: new Date(),
            };
            
            setMessages((prev) => [...prev, tipsMessage]);
          }
        }, 1000);
      }
    }, 1000);
  };
  
  const generateResponse = (userInput: string): { botResponse: string; conditions: string[] } => {
    const input = userInput.toLowerCase();
    
    // Check for symptoms in the user's message
    const matchedSymptoms: string[] = [];
    
    Object.keys(symptomsToDiseasesMap).forEach(symptom => {
      if (input.includes(symptom.toLowerCase())) {
        matchedSymptoms.push(symptom);
      }
    });
    
    if (matchedSymptoms.length === 0) {
      return { 
        botResponse: "I couldn't identify any specific symptoms from your message. Could you please provide more details about how you're feeling?", 
        conditions: [] 
      };
    }
    
    // Get possible diseases based on symptoms
    const possibleDiseases = new Set<string>();
    const diseaseMatches: Record<string, number> = {};
    
    matchedSymptoms.forEach(symptom => {
      symptomsToDiseasesMap[symptom].forEach(disease => {
        possibleDiseases.add(disease);
        diseaseMatches[disease] = (diseaseMatches[disease] || 0) + 1;
      });
    });
    
    if (possibleDiseases.size === 0) {
      return { 
        botResponse: "I couldn't determine any specific conditions based on the symptoms you've described. Please consult with a healthcare professional for proper diagnosis.", 
        conditions: [] 
      };
    }
    
    // Sort diseases by number of matching symptoms
    const sortedDiseases = Array.from(possibleDiseases).sort((a, b) => {
      return (diseaseMatches[b] || 0) - (diseaseMatches[a] || 0);
    });
    
    // Get top conditions (limited to 3 for relevance)
    const topConditions = sortedDiseases.slice(0, 3);
    
    // Create response message
    let response = `Based on the symptoms you've mentioned (${matchedSymptoms.join(", ")}), here are some possible conditions:\n\n`;
    
    sortedDiseases.slice(0, 5).forEach(disease => {
      response += `• ${disease} (${diseaseMatches[disease]} matching symptoms)\n`;
    });
    
    response += "\nPlease note that this is not a professional diagnosis. It's important to consult with a healthcare provider for proper evaluation.";
    
    return { botResponse: response, conditions: topConditions };
  };
  
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-lg">Healthcare Assistant</h2>
        <p className="text-sm text-muted-foreground">
          Describe your symptoms for preliminary guidance
        </p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage 
            key={message.id} 
            message={message} 
            isLast={index === messages.length - 1} 
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-4 border-t">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Describe your symptoms..."
            className="flex-1"
          />
          <Button 
            type="submit" 
            size="icon" 
            className="bg-medical-600 hover:bg-medical-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
        <p className="text-xs text-muted-foreground mt-2">
          This is for informational purposes only and not a substitute for professional medical advice.
        </p>
      </div>
    </div>
  );
};

export default HealthcareChatbot;
