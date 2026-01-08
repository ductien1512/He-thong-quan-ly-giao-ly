// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Tạm thời chỉ log, không chặn
  console.log('Middleware:', request.nextUrl.pathname)
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*']
}
