'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { FixedMenuBar } from './fixed-menu-bar';

export function EmailEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Start typing your email...',
        emptyEditorClass: 'is-editor-empty',
      }),
    ],
    editorProps: {
      attributes: {
        class:
          'prose prose-sm dark:prose-invert focus:outline-none max-w-none min-h-[200px] w-full cursor-text',
      },
    },
    content: '',
    immediatelyRender: false,
  });

  const focusEditor = () => {
    editor?.chain().focus().run();
  };

  return (
    <div
      className='border rounded-lg overflow-hidden bg-gray-50 dark:border-gray-800 dark:bg-gray-800 shadow-sm'
      onClick={focusEditor}
    >
      <FixedMenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className='p-4 bg-white dark:bg-gray-900 [&_.is-editor-empty]:before:content-[attr(data-placeholder)] [&_.is-editor-empty]:before:text-gray-500 dark:[&_.is-editor-empty]:before:text-gray-400 [&_.is-editor-empty]:before:float-left [&_.is-editor-empty]:before:pointer-events-none [&_.is-editor-empty]:before:h-0'
      />
    </div>
  );
}
