import { createContext, useContext, useState, useEffect, useLayoutEffect } from "react";
import useFetch from "../hooks/useFetch";
import api from "../api/api";

const AuthContext = createContext();

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get("/api/me");
        setToken(res.data.accessToken);
      } catch {
        setToken(null);
      }
    };
    fetchMe();
  }, []);

  useLayoutEffect(()=>{
    const authInterceptor = api.interceptors.request.use((config) => {
        config.headers.Authorization = 
        !config._retry && token 
        ? `Bearer ${token}`
        : config.headers.Authorization
        return config

    })

    return()=>[
        api.interceptors.request.eject(authInterceptor)
    ]
  },[token])


};


