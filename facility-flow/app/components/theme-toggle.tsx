'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className='p-2 rounded-md hover:bg-accent-100 dark:hover:bg-accent-700'>
          {resolvedTheme === 'dark' ? (
            <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              />
            </svg>
          ) : (
            <svg className='w-5 h-5' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
              />
            </svg>
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className='min-w-[8rem] rounded-md p-1 bg-white dark:bg-gray-800 shadow-md border dark:border-gray-700 radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down'
          align='end'
        >
          <DropdownMenu.Item
            className={`flex items-center px-2 py-1.5 rounded-sm text-sm outline-none cursor-default hover:bg-accent-100 dark:hover:bg-accent-700 focus:bg-accent-100 dark:focus:bg-accent-700 ${
              resolvedTheme === 'light' ? 'text-accent-600 dark:text-accent-400' : ''
            }`}
            onSelect={() => setTheme('light')}
          >
            Light
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={`flex items-center px-2 py-1.5 rounded-sm text-sm outline-none cursor-default hover:bg-accent-100 dark:hover:bg-accent-700 focus:bg-accent-100 dark:focus:bg-accent-700 ${
              resolvedTheme === 'dark' ? 'text-accent-600 dark:text-accent-400' : ''
            }`}
            onSelect={() => setTheme('dark')}
          >
            Dark
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className={`flex items-center px-2 py-1.5 rounded-sm text-sm outline-none cursor-default hover:bg-accent-100 dark:hover:bg-accent-700 focus:bg-accent-100 dark:focus:bg-accent-700 ${
              resolvedTheme === 'system' ? 'text-accent-600 dark:text-accent-400' : ''
            }`}
            onSelect={() => setTheme('system')}
          >
            System
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
