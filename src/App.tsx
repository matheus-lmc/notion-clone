import { useState, useEffect } from "react";
import Editor from "./components/Editor";
import Sidebar from "./components/Sidebar";
import { useTheme } from "./contexts/theme";

function App() {
  const { theme } = useTheme();
  const [content, setContent] = useState<string>(
    `<h1>Notion Clone</h1> <p> Start taking notes with this dynamic editor </p>`
  );

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    const savedContent = localStorage.getItem("@content");
    console.log(savedContent);

    if (savedContent) setContent(savedContent);

    setLoaded(true);
  }, []);

  return (
    <div
      className={`bg-white min-h-screen text-zinc-900 grid grid-cols-[1fr_5fr] dark:bg-slate-900 dark:text-zinc-100 ${
        theme == "dark" && "dark"
      }`}
    >
      <Sidebar />
      <main className="p-4">
        {loaded && (
          <Editor
            content={content}
            update={(c) => {
              setContent(c);
              localStorage.setItem("@content", c);
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;
