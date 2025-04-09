
import { motion } from "framer-motion";
import AuthForm from "@/components/AuthForm";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { user } = useAuth();

  // If user is already logged in, redirect to profile
  if (user) {
    return <Navigate to="/profile" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container-custom py-16"
    >
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to access your appointments and medical profile</p>
        </div>
        <div className="glass rounded-xl shadow-lg border border-blue-100/50">
          <AuthForm />
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
