
import { motion } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate, Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { User, CalendarDays, Clock, Shield } from "lucide-react";
import AppointmentList from "@/components/appointment/AppointmentList";

const Profile = () => {
  const { user } = useAuth();

  // If user is not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container-custom py-10"
    >
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Your Profile</h1>
        <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          Last login: {new Date().toLocaleDateString()}
        </div>
      </div>
      
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="mb-6 bg-white/80">
          <TabsTrigger value="profile" className="flex items-center gap-2 data-[state=active]:bg-blue-50">
            <User size={16} />
            <span>Profile</span>
          </TabsTrigger>
          <TabsTrigger value="appointments" className="flex items-center gap-2 data-[state=active]:bg-blue-50">
            <CalendarDays size={16} />
            <span>Appointments</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card className="border-blue-100/50 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle>Account Information</CardTitle>
              <CardDescription>
                View and manage your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="w-24 h-24 text-2xl bg-blue-100 text-blue-600">
                  <span className="font-bold">{user.email?.charAt(0).toUpperCase()}</span>
                </Avatar>
                <div className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs flex items-center mt-2">
                  <Shield className="w-3 h-3 mr-1" />
                  Verified User
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                  <p className="font-medium">{user.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Account Created</h3>
                  <p>{new Date(user.created_at).toLocaleDateString()}</p>
                </div>
                <div className="pt-2">
                  <Link to="/appointments">
                    <motion.div 
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <CalendarDays size={14} />
                      <span className="text-sm">View your upcoming appointments</span>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appointments">
          <Card className="border-blue-100/50 shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle>Your Appointments</CardTitle>
              <CardDescription>
                View and manage your scheduled appointments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AppointmentList />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default Profile;
