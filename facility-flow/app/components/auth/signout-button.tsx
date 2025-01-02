import { signOut } from '@/auth';
import { Button } from '../ui/button';

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
      <Button variant='secondary' type='submit'>
        Sign Out
      </Button>
    </form>
  );
}
