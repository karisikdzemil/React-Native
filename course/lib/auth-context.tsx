import { createContext } from "react";
import { Models } from "react-native-appwrite";

type AuthContextType = {
  user: Models.User<Models.Preferences> | null;
  signUp: (email: string, password: string) => Promise<string | null>;
  signIn: (email: string, password: string) => Promise<sgring | null>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {

    const signUp = async (email: string, password: string) => {
        try{
            await account.create(ID.unique(), email, password);
            await signIn(email, password);
            return null;
        }catch(error){
            if(error instanceof Error){
                return error.message;
            }
            return "An error occured during signup"
        }
    }
     const signIn = async (email: string, password: string) => {
        try{
            await account.create(ID.unique(), email, password)
            return null;
        }catch(error){
            if(error instanceof Error){
                return error.message;
            }
            return "An error occured during signup"
        }
    }
  return (
    <AuthContext.Provider value={{ user, signUp, sign }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {}
 