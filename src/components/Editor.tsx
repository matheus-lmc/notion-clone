import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
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
