import { createContext, useContext, useState, type PropsWithChildren } from "react";

export type AppColors = {
  background: string;
  surface: string;
  mutedSurface: string;
  text: string;
  secondaryText: string;
  border: string;
  icon: string;
  placeholder: string;
  photoPlaceholder: string;
  tabBar: string;
};

const lightColors: AppColors = {
  background: "#ffffff",
  surface: "#ffffff",
  mutedSurface: "#f1f1f1",
  text: "#111111",
  secondaryText: "#777777",
  border: "#e5e5e5",
  icon: "#111111",
  placeholder: "#777777",
  photoPlaceholder: "#e1e1e1",
  tabBar: "#ffffff",
};

const darkColors: AppColors = {
  background: "#111111",
  surface: "#1d1d1f",
  mutedSurface: "#292a2d",
  text: "#f5f5f5",
  secondaryText: "#a7a7ad",
  border: "#393a3e",
  icon: "#f5f5f5",
  placeholder: "#a7a7ad",
  photoPlaceholder: "#292a2d",
  tabBar: "#080808",
};

type ThemeContextValue = {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
  colors: AppColors;
};

const ThemeContext = createContext<ThemeContextValue>({
  isDark: false,
  setIsDark: () => {},
  colors: lightColors,
});

export function ThemeProvider({ children }: PropsWithChildren) {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider
      value={{ isDark, setIsDark, colors: isDark ? darkColors : lightColors }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  return useContext(ThemeContext);
}