
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Hospital } from "@/components/HospitalCard";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import AppointmentFormFields from "./AppointmentFormFields";
import AppointmentAuth from "./AppointmentAuth";
import { AppointmentFormValues, formSchema } from "./types";

interface AppointmentFormProps {
  hospital: Hospital;
  onSuccess: () => void;
  onCancel: () => void;
}

const AppointmentForm = ({ hospital, onSuccess, onCancel }: AppointmentFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
  
  console.log("AppointmentForm rendered, user:", user);
  
  // Initialize form with react-hook-form
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: user?.email || "",
      phone: "",
      notes: "",
    },
  });

  const onSubmit = async (data: AppointmentFormValues) => {
    if (!user) {
      toast.error("Please sign in to book an appointment");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Format the date and time
      const appointmentDateTime = new Date(data.date);
      const timeParts = data.time.match(/(\d+):(\d+)\s*([APap][Mm])/);
      
      if (!timeParts) {
        throw new Error("Invalid time format");
      }
      
      let hours = parseInt(timeParts[1]);
      const minutes = parseInt(timeParts[2]);
      const period = timeParts[3].toUpperCase();
      
      if (period === "PM" && hours !== 12) {
        hours += 12;
      } else if (period === "AM" && hours === 12) {
        hours = 0;
      }
      
      appointmentDateTime.setHours(hours, minutes, 0, 0);
      
      // Save appointment to Supabase
      const { error } = await supabase
        .from('appointments')
        .insert({
          hospital_id: hospital.id,
          user_id: user.id,
          patient_name: data.name,
          email: data.email,
          phone: data.phone,
          department: data.department,
          appointment_date: appointmentDateTime.toISOString(),
          notes: data.notes || null,
          status: 'pending'
        });
        
      if (error) throw error;
      
      toast.success("Appointment booked successfully! The hospital will contact you to confirm.");
      onSuccess();
    } catch (error: any) {
      toast.error(error.message || "Failed to book appointment");
      console.error("Error booking appointment:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // If user is not logged in, show auth form
  if (!user) {
    return <AppointmentAuth hospital={hospital} onComplete={onSuccess} />;
  }

  return (
    <div className="p-6 rounded-xl bg-white">
      <h2 className="text-xl font-semibold mb-4">Book an Appointment</h2>
      <p className="text-muted-foreground mb-6">
        Fill out the form below to book an appointment at {hospital.name}
      </p>
      
      <AppointmentFormFields
        form={form}
        hospital={hospital}
        isSubmitting={isSubmitting}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </div>
  );
};

export default AppointmentForm;
