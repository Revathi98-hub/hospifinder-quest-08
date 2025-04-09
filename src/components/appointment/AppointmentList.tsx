
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Appointment {
  id: string;
  hospital_id: string;
  hospital_name?: string;
  patient_name: string;
  appointment_date: string;
  department: string;
  status: string;
}

const AppointmentList = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [appointmentToDelete, setAppointmentToDelete] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchAppointments();
    }
  }, [user]);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('appointments')
        .select('*')
        .eq('user_id', user?.id || '');

      if (error) throw error;

      // Format the appointments
      const formattedAppointments = await Promise.all(
        data.map(async (appointment) => {
          // Fetch hospital name from your data source
          // This is a placeholder - you would need to adapt this to your actual data structure
          const hospitalName = `Hospital ${appointment.hospital_id.substring(0, 5)}`;
          
          return {
            ...appointment,
            hospital_name: hospitalName
          };
        })
      );

      setAppointments(formattedAppointments);
    } catch (error) {
      console.error('Error fetching appointments:', error);
      toast.error('Failed to load appointments');
    } finally {
      setLoading(false);
    }
  };

  const deleteAppointment = async (id: string) => {
    try {
      const { error } = await supabase
        .from('appointments')
        .delete()
        .eq('id', id)
        .eq('user_id', user?.id || ''); // Ensure only the user's own appointments can be deleted

      if (error) throw error;

      // Update the local state
      setAppointments(appointments.filter(appointment => appointment.id !== id));
      toast.success('Appointment deleted successfully');
    } catch (error) {
      console.error('Error deleting appointment:', error);
      toast.error('Failed to delete appointment');
    } finally {
      setAppointmentToDelete(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  if (loading) {
    return <div className="text-center py-8">Loading appointments...</div>;
  }

  if (appointments.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">You don't have any appointments yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Your Appointments</h2>
      {appointments.map((appointment) => (
        <div 
          key={appointment.id} 
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex justify-between items-center"
        >
          <div>
            <p className="font-medium">{appointment.hospital_name}</p>
            <p className="text-sm text-muted-foreground">{appointment.department}</p>
            <p className="text-sm">{formatDate(appointment.appointment_date)}</p>
            <span className={`text-xs px-2 py-1 rounded-full ${
              appointment.status === 'completed' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {appointment.status}
            </span>
          </div>
          
          <AlertDialog open={appointmentToDelete === appointment.id} onOpenChange={(open) => {
            if (!open) setAppointmentToDelete(null);
          }}>
            <AlertDialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={() => setAppointmentToDelete(appointment.id)}
              >
                <Trash2 className="w-4 h-4 mr-1" />
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Appointment</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete this appointment? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction 
                  className="bg-red-500 hover:bg-red-600"
                  onClick={() => deleteAppointment(appointment.id)}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;
