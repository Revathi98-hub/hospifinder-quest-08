
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export type MessageRole = "user" | "bot";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: ChatMessage;
  isLast?: boolean;
}

const ChatMessage = ({ message, isLast }: ChatMessageProps) => {
  const isUser = message.role === "user";
  
  return (
    <div
      className={cn(
        "flex w-full items-start gap-4 py-2",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8 bg-medical-100 text-medical-700 flex items-center justify-center">
          <span className="text-xs font-bold">HC</span>
        </Avatar>
      )}
      
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%]",
          isUser 
            ? "bg-medical-600 text-white" 
            : "bg-muted"
        )}
      >
        <p className="text-sm">{message.content}</p>
      </div>
      
      {isUser && (
        <Avatar className="h-8 w-8 bg-medical-600 text-white flex items-center justify-center">
          <span className="text-xs font-bold">You</span>
        </Avatar>
      )}
    </div>
  );
};

export default ChatMessage;
