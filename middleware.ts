import { getToken } from 'next-auth/jwt';
import { NextResponse, type NextRequest } from 'next/server';

export const config = {
  matcher: ['/', '/login'],
};

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname, origin } = req.nextUrl;

  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  if (!token && pathname !== '/login') {
    return NextResponse.redirect(`${origin}/login`);
  }
}
