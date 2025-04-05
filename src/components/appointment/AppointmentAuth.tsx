
import React from "react";
import { Hospital } from "@/components/HospitalCard";
import AuthForm from "@/components/AuthForm";

interface AppointmentAuthProps {
  hospital: Hospital;
  onComplete: () => void;
}

const AppointmentAuth = ({ hospital, onComplete }: AppointmentAuthProps) => {
  return (
    <div className="p-6 rounded-xl bg-white">
      <h2 className="text-xl font-semibold mb-4">Sign in to Book an Appointment</h2>
      <p className="text-muted-foreground mb-6">
        Please sign in or create an account to book an appointment at {hospital.name}
      </p>
      <AuthForm onComplete={onComplete} />
    </div>
  );
};

export default AppointmentAuth;
