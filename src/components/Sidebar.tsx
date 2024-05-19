import { MdLightMode, MdAddCircleOutline, MdDarkMode } from "react-icons/md";

import devLogo from "../assets/dev-logo.svg";
import { useTheme } from "../contexts/theme";

export default function Sidebar() {
  const { theme, toggle } = useTheme();

  return (
    <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4 flex flex-col dark:bg-slate-800 dark:border-r-slate-700">
      <div className="w-full flex justify-between">
        <a href="https://github.com/matheus-lmc" target="none">
          <img src={devLogo} alt="matheus-lmc" className="w-32 dark:invert" />
        </a>
        <div>
          <button>
            <MdAddCircleOutline className="hover:text-zinc-500 hover:transition-all" />
          </button>
          <button onClick={toggle}>
            {theme == "dark" ? (
              <MdDarkMode className="hover:text-zinc-500 hover:transition-all ml-1" />
            ) : (
              <MdLightMode className="hover:text-zinc-500 hover:transition-all ml-1" />
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
