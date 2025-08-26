// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// const allowedDomains = [
//   'tajmahalticket.in',
//   'jaipurtickets.com',
//   'agratickets.com',
//   'delhitickets.com',
// ];

// export function middleware(request: NextRequest) {
//   const host = request.headers.get('host')?.toLowerCase() || '';
//   // Ensure only your whitelisted domains can access
//   if (allowedDomains.includes(host)) {
//     // Optionally rewrite the URL to include domain param:
//     const url = request.nextUrl.clone();
//     url.pathname = `/${host}${url.pathname}`; // e.g., /tajmahaltickets.in/listings
//     return NextResponse.rewrite(url);
//   }
//   // fallback for unknown domains
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/', '/listings/:path*', '/listings/:listingId*'],
// };

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of allowed base domains (without www)
const allowedDomains = [
  'tajmahalticket.in',
  'jaipurtickets.com',
  'agratickets.com',
  'delhitickets.com',
];

export function middleware(request: NextRequest) {
  let host = request.headers.get('host')?.toLowerCase() || '';

  // Remove 'www.' prefix if exists
  if (host.startsWith('www.')) {
    host = host.slice(4);
  }

  if (allowedDomains.includes(host)) {
    const url = request.nextUrl.clone();

    // Optionally prepend the domain to the path
    // Uncomment the next line if you want URLs like /delhitickets.com/listings
    // url.pathname = `/${host}${url.pathname}`;

    return NextResponse.rewrite(url); // Or use NextResponse.next() if you don't want rewrite
  }

  // fallback for unknown domains
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/listings/:path*', '/listings/:listingId*'],
};

