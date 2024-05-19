import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight } from "lowlight";

import {
  MdFormatBold,
  MdCode,
  MdFormatStrikethrough,
  MdFormatItalic,
} from "react-icons/md";

import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

import "highlight.js/styles/a11y-dark.min.css";

import { initialContent } from "./initialContent";
import BubbleButton from "./BubbleButton";

const lowlight = createLowlight();

lowlight.register("html", html);
lowlight.register("css", css);
lowlight.register("js", js);
lowlight.register("ts", ts);

const extensions = [
  StarterKit,
  CodeBlockLowlight.configure({
    lowlight,
  }),
];
export default function Editor() {
  const editor = useEditor({
    extensions,
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent
        className="max-w-[90%] mx-auto p-16 prose prose-teal dark:prose-invert"
        editor={editor}
      />
      {editor && (
        <FloatingMenu
          editor={editor}
          shouldShow={({ state }) => {
            const { $from } = state.selection;

            const currentLineText = $from.nodeBefore?.textContent;

            return currentLineText === "/";
          }}
          className="py-2 px-1 shadow-xl border border-zinc-100 shadow-black/20 rounded-lg bg-zinc-50 dark:bg-slate-800 overflow-hidden flex flex-col dark:border-slate-700"
        >
          <button className="flex items-center gap-2 p-1 rounded min-w-72 transition-all hover:bg-zinc-100 dark:hover:bg-slate-700">
            <img
              src="https://www.notion.so/images/blocks/text/en-US.png"
              alt="Text"
              className="w-12 border border-zinc-300 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-medium">Text</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                Just start writing with plain text
              </span>
            </div>
          </button>
          <button
            onClick={editor.chain().focus().toggleHeading({ level: 1 }).run}
            className="flex items-center gap-2 p-1 rounded min-w-72 transition-all hover:bg-zinc-100 dark:hover:bg-slate-700"
          >
            <img
              src="https://www.notion.so/images/blocks/header.57a7576a.png"
              alt="Heading 1"
              className="w-12 border border-zinc-300 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-medium">Heading 1</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                Big section header
              </span>
            </div>
          </button>
          <button
            className="flex items-center gap-2 p-1 rounded min-w-72 transition-all hover:bg-zinc-100 dark:hover:bg-slate-700"
            onClick={editor.chain().focus().toggleHeading({ level: 2 }).run}
          >
            <img
              src="https://www.notion.so/images/blocks/subheader.9aab4769.png"
              alt="Heading 2"
              className="w-12 border border-zinc-300 rounded"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm font-medium">Heading 2</span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                Medium section header
              </span>
            </div>
          </button>
        </FloatingMenu>
      )}
      {editor && (
        <BubbleMenu
          className="shadow-xl border border-zinc-100 shadow-black/20 rounded-lg overflow-hidden flex divide-x dark:border-slate-700 dark:divide-slate-700"
          editor={editor}
        >
          <BubbleButton
            onClick={editor.chain().toggleBold().run}
            data-active={editor.isActive("bold")}
          >
            <MdFormatBold />
          </BubbleButton>
          <BubbleButton
            onClick={editor.chain().toggleItalic().run}
            data-active={editor.isActive("italic")}
          >
            <MdFormatItalic />
          </BubbleButton>
          <BubbleButton
            onClick={editor.chain().toggleCode().run}
            data-active={editor.isActive("code")}
          >
            <MdCode />
          </BubbleButton>
          <BubbleButton
            onClick={editor.chain().toggleStrike().run}
            data-active={editor.isActive("strike")}
          >
            <MdFormatStrikethrough />
          </BubbleButton>
        </BubbleMenu>
      )}
    </>
  );
}
