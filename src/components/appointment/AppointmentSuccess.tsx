
import React from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2Icon, Calendar, Star } from "lucide-react";

interface AppointmentSuccessProps {
  onBackToSignIn: () => void;
  appointmentCount?: number;
  reviewCount?: number;
}

const AppointmentSuccess = ({ onBackToSignIn, appointmentCount, reviewCount }: AppointmentSuccessProps) => {
  return (
    <div className="p-6 rounded-xl bg-white">
      <Alert className="bg-green-50 border-green-200 mb-4">
        <CheckCircle2Icon className="h-5 w-5 text-green-600 mr-2" />
        <AlertDescription className="text-green-800 font-medium">
          Your account has been confirmed successfully!
        </AlertDescription>
      </Alert>
      
      <p className="text-muted-foreground mb-4">
        You can now sign in to book appointments and access all features.
      </p>
      
      {(appointmentCount !== undefined || reviewCount !== undefined) && (
        <div className="flex gap-4 mb-6">
          {appointmentCount !== undefined && (
            <div className="bg-blue-50 p-3 rounded-lg flex items-center gap-2 flex-1">
              <Calendar className="text-blue-600 h-5 w-5" />
              <div>
                <p className="text-sm text-blue-800">Appointments</p>
                <p className="text-xl font-semibold text-blue-900">{appointmentCount}</p>
              </div>
            </div>
          )}
          
          {reviewCount !== undefined && (
            <div className="bg-amber-50 p-3 rounded-lg flex items-center gap-2 flex-1">
              <Star className="text-amber-600 h-5 w-5" />
              <div>
                <p className="text-sm text-amber-800">Reviews</p>
                <p className="text-xl font-semibold text-amber-900">{reviewCount}</p>
              </div>
            </div>
          )}
        </div>
      )}
      
      <Button 
        variant="default" 
        className="w-full"
        onClick={onBackToSignIn}
      >
        Sign in now
      </Button>
    </div>
  );
};

export default AppointmentSuccess;
