import { EmailEditor } from '@/app/components/editor/email-editor';

export default function EmailPage() {
  return (
    <main className='container mx-auto p-4 max-w-4xl'>
      <h1 className='text-2xl font-bold mb-6'>Create Email Template</h1>
      <EmailEditor />
    </main>
  );
}
