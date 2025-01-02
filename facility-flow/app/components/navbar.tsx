import Link from 'next/link';
import { SignIn } from './auth/signin-button';
import { SignOut } from './auth/signout-button';

export function Navbar() {
  return (
    <nav className='border-b'>
      <div className='flex h-16 items-center px-4 container mx-auto'>
        <Link href='/' className='font-semibold text-lg flex items-center gap-2'>
          <svg
            className='w-6 h-6'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          Facility Flow
        </Link>
        <div className='ml-auto flex items-center gap-2'>
          <SignIn />
          <SignOut />
        </div>
      </div>
    </nav>
  );
}
