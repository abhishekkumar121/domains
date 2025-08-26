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
//     url.pathname = `/`; // e.g., /tajmahaltickets.in/listings
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

const allowedDomains = [
  'tajmahalticket.in',
  'jaipurtickets.com',
  'agratickets.com',
  'delhitickets.com',
];

export function middleware(request: NextRequest) {
  let host = request.headers.get('host')?.toLowerCase() || '';

  // Strip 'www.' prefix
  if (host.startsWith('www.')) {
    host = host.replace(/^www\./, '');
  }

  // Only handle allowed domains
  if (allowedDomains.includes(host)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${host}${url.pathname}`; // Rewrite to [domain] folder
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'], // Match all paths
};

