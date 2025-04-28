import { createContext, useContext, useState, useEffect } from "react";
import api from "../api/api";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (err) {
        console.error("Invalid token");
        setUser(null);
      }
    }
  }, [token]);

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          console.error("Session expired, logging out...");
          logout();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(interceptor);
    };
  }, []);

  const register = async (name, email, password, phone) => {
    try {
      const res = await api.post("/api/auth/register", {
        name,
        email,
        password,
        phone,
      });
      const { token, user } = res.data;

      setToken(token);
      setUser(user);
      localStorage.setItem("token", token);
      navigate("/");
    } catch (err) {
      console.error(err.response?.data?.message || "Registration failed");
    }
  };

  const login = async (email, password) => {
    try {
      const res = await api.post("/api/auth/login", { email, password });
      const { token, user } = res.data;

      setToken(token);
      setUser(user);
      localStorage.setItem("token", token);
      navigate("/");
    } catch (err) {
      console.error(err.response?.data?.message || "Login failed");
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};
