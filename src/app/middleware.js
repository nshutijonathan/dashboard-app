import { NextResponse } from 'next/server'
//middlware to check if the user exists
export function middleware(request) {
  const user = request.cookies.get('user')
  const isAuthPage = request.nextUrl.pathname === '/'

  if (!user && !isAuthPage) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if (user && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/dashboard', '/customers', '/websites'],
}