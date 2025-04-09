
import { Hospital } from "@/components/HospitalCard";
import AppointmentForm from "@/components/appointment/AppointmentForm";
import { Dialog, DialogContent, DialogOverlay, DialogPortal, DialogTitle } from "@/components/ui/dialog";

interface AppointmentDialogProps {
  hospital: Hospital;
  showAppointmentForm: boolean;
  setShowAppointmentForm: (show: boolean) => void;
  onSuccess: () => void;
  onCancel: () => void;
  navigateToHospital: () => void;
}

const AppointmentDialog = ({ 
  hospital, 
  showAppointmentForm, 
  setShowAppointmentForm,
  onSuccess,
  onCancel,
  navigateToHospital
}: AppointmentDialogProps) => {
  return (
    <Dialog open={showAppointmentForm} onOpenChange={(isOpen) => {
      setShowAppointmentForm(isOpen);
      // Remove the booking parameter from the URL when dialog is closed
      if (!isOpen) {
        navigateToHospital();
      }
    }}>
      <DialogPortal>
        <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
        <DialogContent className="sm:max-w-[600px] p-0 overflow-auto max-h-[90vh]">
          <DialogTitle className="sr-only">Book Appointment</DialogTitle>
          {hospital && (
            <AppointmentForm 
              hospital={hospital} 
              onSuccess={onSuccess}
              onCancel={onCancel}
            />
          )}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default AppointmentDialog;
