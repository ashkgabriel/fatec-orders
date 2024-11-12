"use client"
import { createContext, useContext, useEffect, useState } from "react";
import Cookies from 'js-cookie';

const AuthContext = createContext({
    bearerToken: "",
    login: (username: string, password: string) => {},
    logout: () => {}
});

interface AuthProviderProps {
    children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [bearerToken, setBearerToken] = useState<string>("Teste");
    const token = Cookies.get("token"); 

    useEffect(() => {
        setBearerToken(token || "")
    }, [token])

    const login = (userName: string, password: string) => {
        // ...
        const token = "bearerToken"
        setBearerToken(token)
        Cookies.set("token", bearerToken)
    }

    const logout = () => {
        Cookies.remove("token")
    }
    
    return <AuthContext.Provider value={{ bearerToken, login, logout }}>
                { children }
            </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);