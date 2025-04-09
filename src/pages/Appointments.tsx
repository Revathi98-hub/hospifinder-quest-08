
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import AppointmentList from "@/components/appointment/AppointmentList";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Appointments = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Sign In Required</h2>
          <p className="text-muted-foreground mb-6">
            Please sign in to view your appointments.
          </p>
          <Link to="/">
            <Button>Go to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container-custom py-10"
    >
      <h1 className="text-3xl font-bold mb-8">My Appointments</h1>
      <div className="glass rounded-xl p-6">
        <AppointmentList />
      </div>
    </motion.div>
  );
};

export default Appointments;
