"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setTheme } from "@/lib/store";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    if (stored) {
      dispatch(setTheme(stored));
    } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      dispatch(setTheme("light"));
    }
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
    document.documentElement.classList.toggle("light", mode === "light");
    localStorage.setItem("theme", mode);
  }, [mode]);

  return <>{children}</>;
}
