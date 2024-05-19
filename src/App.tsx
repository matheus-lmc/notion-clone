import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import { useTheme } from "./contexts/theme";

function App() {
  const { theme } = useTheme();

  return (
    <div
      className={`bg-white min-h-screen text-zinc-900 grid grid-cols-[1fr_5fr] dark:bg-slate-900 dark:text-zinc-100 ${
        theme == "dark" && "dark"
      }`}
    >
      <Sidebar />
      <main className="p-4">
        <Editor />
      </main>
    </div>
  );
}

export default App;
