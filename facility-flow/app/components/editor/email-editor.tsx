'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export function EmailEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
    content: '<p>Start writing your email...</p>',
  });

  return (
    <div className='border rounded-lg p-4 bg-white dark:bg-gray-800'>
      <EditorContent editor={editor} />
    </div>
  );
}
