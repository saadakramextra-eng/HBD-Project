import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface AuthCtx {
  isAuthed: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const Ctx = createContext<AuthCtx | null>(null);
const KEY = "princess-auth";
const PASSWORD = "050603";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(KEY) === "1") {
      setIsAuthed(true);
    }
  }, []);

  const login = (password: string) => {
    if (password.trim() === PASSWORD) {
      localStorage.setItem(KEY, "1");
      setIsAuthed(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(KEY);
    setIsAuthed(false);
  };

  return <Ctx.Provider value={{ isAuthed, login, logout }}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
