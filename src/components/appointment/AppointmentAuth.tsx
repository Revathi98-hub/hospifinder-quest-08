
import React, { useState, useEffect } from "react";
import { Hospital } from "@/components/HospitalCard";
import AuthForm from "@/components/AuthForm";
import AppointmentSuccess from "./AppointmentSuccess";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface AppointmentAuthProps {
  hospital: Hospital;
  onComplete: () => void;
}

const AppointmentAuth = ({ hospital, onComplete }: AppointmentAuthProps) => {
  const [email, setEmail] = useState("");
  const [isSignupComplete, setIsSignupComplete] = useState(false);
  const [appointmentCount, setAppointmentCount] = useState<number | undefined>(undefined);
  const [reviewCount, setReviewCount] = useState<number | undefined>(undefined);

  // Fetch stats when signup is complete
  useEffect(() => {
    if (isSignupComplete && hospital.id) {
      // Get appointment and review counts for this hospital
      const fetchStats = async () => {
        // Get appointment count
        const { count: appCount, error: appError } = await supabase
          .from('appointments')
          .select('*', { count: 'exact', head: true })
          .eq('hospital_id', hospital.id);
          
        if (!appError && appCount !== null) {
          setAppointmentCount(appCount);
        }
        
        // Get review count
        const { count: revCount, error: revError } = await supabase
          .from('reviews')
          .select('*', { count: 'exact', head: true })
          .eq('hospital_id', hospital.id);
          
        if (!revError && revCount !== null) {
          setReviewCount(revCount);
        }
      };
      
      fetchStats();
    }
  }, [isSignupComplete, hospital.id]);

  const handleSignupComplete = (userEmail: string) => {
    setEmail(userEmail);
    setIsSignupComplete(true);
  };

  const handleResendConfirmation = async () => {
    if (!email) return;
    
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
      });
      
      if (error) throw error;
      
      alert("Confirmation email has been resent. Please check your inbox.");
    } catch (error: any) {
      console.error("Error resending confirmation email:", error);
      alert(error.message || "Failed to resend confirmation email");
    }
  };

  const handleBackToSignIn = () => {
    setIsSignupComplete(false);
  };

  return (
    <div className="p-6 rounded-xl bg-white">
      <h2 className="text-xl font-semibold mb-4">Sign in to Book an Appointment</h2>
      <p className="text-muted-foreground mb-6">
        Please sign in or create an account to book an appointment at {hospital.name}
      </p>

      {isSignupComplete ? (
        <div className="space-y-4">
          <Alert className="bg-blue-50 border-blue-200 mb-4">
            <InfoIcon className="h-4 w-4 text-blue-600 mr-2" />
            <AlertDescription className="text-blue-800">
              Account created! Please check your email for a confirmation link. 
              Make sure to copy and paste the confirmation link if clicking doesn't work.
            </AlertDescription>
          </Alert>
          
          <div className="flex flex-col space-y-3">
            <Button 
              variant="outline" 
              onClick={handleResendConfirmation}
              className="w-full"
            >
              Resend confirmation email
            </Button>
            
            <Button 
              variant="link" 
              onClick={handleBackToSignIn}
              className="text-blue-600"
            >
              Back to sign in
            </Button>
          </div>
        </div>
      ) : (
        <AuthForm onComplete={onComplete} onSignupComplete={handleSignupComplete} />
      )}
    </div>
  );
};

export default AppointmentAuth;
