
import { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for active session on component mount
    const checkSession = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        setUser(data.session?.user || null);
      } catch (error) {
        console.error('Error checking auth session:', error);
      } finally {
        setLoading(false);
      }
    };

    checkSession();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string): Promise<void> => {
    try {
      const { error, data } = await supabase.auth.signInWithPassword({ email, password });
      
      if (error) {
        // Special handling for email not confirmed error
        if (error.message.includes('Email not confirmed')) {
          toast.error('Please check your email inbox and confirm your email before signing in');
          // Optionally, we can resend the confirmation email
          await supabase.auth.resend({
            type: 'signup',
            email: email,
          });
          toast.info('Confirmation email has been resent to your inbox');
        } else {
          toast.error(error.message || 'Error signing in');
        }
        throw error;
      }
      
      toast.success('Signed in successfully');
      // We're not returning data anymore, just handling the side effects
    } catch (error: any) {
      throw error;
    }
  };

  const signUp = async (email: string, password: string): Promise<void> => {
    try {
      // Set redirectTo to current window location to handle redirection after email verification
      const { error, data } = await supabase.auth.signUp({ 
        email, 
        password,
        options: {
          emailRedirectTo: window.location.href,
        }
      });
      
      if (error) throw error;
      
      if (data.user && !data.user.confirmed_at) {
        toast.info('Please check your email to confirm your account');
      } else {
        toast.success('Account created successfully');
      }
      
      // Not returning data anymore, just handling the side effects
    } catch (error: any) {
      toast.error(error.message || 'Error signing up');
      throw error;
    }
  };

  const signOut = async (): Promise<void> => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast.success('Signed out successfully');
    } catch (error: any) {
      toast.error(error.message || 'Error signing out');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
