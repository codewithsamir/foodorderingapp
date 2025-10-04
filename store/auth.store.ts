import { getCurrentUser } from '@/lib/appwrite';
import { User } from '@/type';
import { create } from 'zustand';



type AuthState = {
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | null;

  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setUser: (user: User | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  
  fetchAuthenticatedUser: () => Promise<void>;
  
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    user: null,
    isLoading: false,
    error: null,

    setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
    setUser: (user) => set({ user }),
    setIsLoading: (isLoading) => set({ isLoading }),
    setError: (error) => set({ error }),

    fetchAuthenticatedUser: async () => {
        set({ isLoading: true });
        try {
            // Fetch user logic
            const user = await getCurrentUser();
            if(user)  set({ user, isAuthenticated: true, error: null });
            else set({ user: null, isAuthenticated: false });
        } catch (error: any) {
            set({ error: error.message, isAuthenticated: false, user: null });
        } finally {
            set({ isLoading: false });
        }
    },
   
}));