import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const allowedDomains = [
  'tajmahalticket.in',
  'jaipurtickets.com',
  'agratickets.com',
  'delhitickets.com',
];

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.toLowerCase() || '';
  // Ensure only your whitelisted domains can access
  if (allowedDomains.includes(host)) {
    // Optionally rewrite the URL to include domain param:
    const url = request.nextUrl.clone();
    url.pathname = `/`; // e.g., /tajmahaltickets.in/listings
    return NextResponse.rewrite(url);
  }
  // fallback for unknown domains
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/listings/:path*', '/listings/:listingId*'],
};

