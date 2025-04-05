
import React from "react";
import { Hospital } from "@/components/HospitalCard";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

interface AppointmentSuccessProps {
  onBackToSignIn: () => void;
}

const AppointmentSuccess = ({ onBackToSignIn }: AppointmentSuccessProps) => {
  return (
    <Alert className="bg-blue-50 border-blue-200 mb-4">
      <InfoIcon className="h-4 w-4 text-blue-600 mr-2" />
      <AlertDescription className="text-blue-800">
        Account created! Please check your email for a confirmation link before signing in.
        <Button 
          variant="link" 
          className="p-0 h-auto text-blue-600 ml-1"
          onClick={onBackToSignIn}
        >
          Go back to sign in
        </Button>
      </AlertDescription>
    </Alert>
  );
};

export default AppointmentSuccess;
