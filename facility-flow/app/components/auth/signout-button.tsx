import { signOut } from '@/auth';

export function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({
          redirectTo: '/',
        });
      }}
    >
      <button className='button' type='submit' formAction={undefined}>
        Sign Out
      </button>
    </form>
  );
}
