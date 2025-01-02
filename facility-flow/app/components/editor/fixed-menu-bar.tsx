import { Editor } from '@tiptap/react';

type FixedMenuBarProps = {
  editor: Editor | null;
};

export function FixedMenuBar({ editor }: FixedMenuBarProps) {
  if (!editor) {
    return null;
  }

  return (
    <div className='border-b p-2 flex gap-2 flex-wrap bg-white dark:bg-gray-800'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('bold') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <b>B</b>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('italic') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <i>I</i>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('strike') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        <s>S</s>
      </button>
      <div className='w-px bg-gray-300 dark:bg-gray-200' />
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('heading', { level: 2 }) ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('heading', { level: 3 }) ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        H3
      </button>
      <div className='w-px bg-gray-300 dark:bg-gray-200' />
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('bulletList') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        •
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
          editor.isActive('orderedList') ? 'bg-gray-100 dark:bg-gray-700' : ''
        }`}
      >
        1.
      </button>
      <div className='w-px bg-gray-300 dark:bg-gray-200' />
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className='p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700'
      >
        ―
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className='p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700'
      >
        ↵
      </button>
      <div className='w-px bg-gray-300 dark:bg-gray-200' />
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className='p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700'
      >
        ↺
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className='p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700'
      >
        ↻
      </button>
    </div>
  );
}
