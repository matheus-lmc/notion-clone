import {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";

type Theme = "dark" | "light";

interface IThemeProvider {
  toggle(): void;
  theme: Theme;
}

const ThemeContext = createContext<IThemeProvider | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  function toggle() {
    const newTheme = theme == "dark" ? "light" : "dark";
    setTheme(newTheme);

    localStorage.setItem("@theme", newTheme);
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem("@theme");

    storedTheme && setTheme(storedTheme as Theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): IThemeProvider => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("Context not initialized");

  return context;
};
