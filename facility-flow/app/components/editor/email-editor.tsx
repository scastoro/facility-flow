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
      }),
    ],
    editorProps: {
      attributes: {
        class: 'prose prose-sm dark:prose-invert focus:outline-none max-w-none',
      },
    },
    content: '',
    immediatelyRender: false,
  });
  return (
    <div className='border rounded-lg overflow-hidden dark:border-gray-800'>
      <FixedMenuBar editor={editor} />
      <EditorContent editor={editor} className='min-h-[200px] p-4' />
    </div>
  );
}
