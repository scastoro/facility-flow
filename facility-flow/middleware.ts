import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export default auth(function middleware(req) {
  if (!req.auth) {
    return NextResponse.redirect(new URL('/', req.url));
  }
});

export const config = {
  matcher: ['/emails/:path*'],
};
