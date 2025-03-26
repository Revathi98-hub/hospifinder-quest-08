
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div 
        className="text-center max-w-md mx-auto glass py-12 px-8 rounded-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-8xl font-bold text-medical-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-primary w-full sm:w-auto flex items-center justify-center">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <Link to="/search" className="btn-secondary w-full sm:w-auto flex items-center justify-center">
            <Search className="w-4 h-4 mr-2" />
            Find Hospitals
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
