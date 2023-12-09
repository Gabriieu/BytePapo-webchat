import React, { createContext, useState } from "react";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { socket } from "../socket";
import { toast } from "react-toastify";
import { Socket } from "socket.io-client";
import axios from "axios";

export interface iMessage {
  id: string;
  user: string;
  text: string;
  isOwner?: boolean;
}

interface iLogin {
  username: string;
  password: string;
}

interface iRegister {
  username: string;
  password: string;
}

interface iMainProviderProps {
  children: React.ReactNode;
}

interface iMainContext {
  socketInstance: Socket<DefaultEventsMap, DefaultEventsMap>;
  token: string | null;
  messages: iMessage[];
  setMessages: React.Dispatch<React.SetStateAction<iMessage[]>>;
  login: (payload: iLogin) => Promise<void>;
  user: string | null;
  sendMessage: (message: string) => void;
  logout: () => void;
  registerUser: (payload: iRegister) => Promise<void>;
}

export const MainContext = createContext({} as iMainContext);

export const MainProvider = ({ children }: iMainProviderProps) => {
  const token = localStorage.getItem("token") || null;
  const navigate = useNavigate();
  const [socketInstance] = useState(socket());
  const [user, setUser] = useState<string | null>(null);
  const [messages, setMessages] = useState<iMessage[]>([]);

  const registerUser = async (payload: iRegister) => {
    try {
      await api.post("/users", payload);
      navigate("/");
      toast.success("Cadastro realizado 😄");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      }
    }
  };

  const login = async (payload: iLogin) => {
    try {
      const token = await api.post("/login", payload);
      localStorage.setItem("token", token.data.token);
      localStorage.setItem("user", payload.username)
      setUser(payload.username);
      navigate("/chat");
    } catch (error) {
      toast.error("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    setMessages([]);
    localStorage.clear();
    navigate("/");
  };

  const sendMessage = (message: string) => {
    if (message.length < 1 ) {
      return;
    }
    const newMessage: iMessage = {
      id: crypto.randomUUID(),
      user: localStorage.getItem("user")! || user!,
      text: message,
    };
    socketInstance.emit("message", newMessage);
    newMessage.isOwner = true;
    setMessages([...messages, newMessage]);
  };

  return (
    <MainContext.Provider
      value={{
        socketInstance,
        messages,
        setMessages,
        login,
        user,
        sendMessage,
        logout,
        registerUser,
        token,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
