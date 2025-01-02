import { SignIn } from './components/auth/signin-button';
import { SignOut } from './components/auth/signout-button';
import Link from 'next/link';
import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();

  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-background'>
      <div className='w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold text-center text-foreground'>Facility Flow</h1>
        <p className='text-center text-gray-600 dark:text-gray-300'>
          Email management for storage facility brokers
        </p>
        <div className='space-y-4'>
          {!session && <SignIn />}
          {session && (
            <>
              <SignOut />
              <Link
                href='/emails'
                className='block w-full text-center py-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
              >
                Create Email Template →
              </Link>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
