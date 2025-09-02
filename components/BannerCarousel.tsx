// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";

// interface BannerCarouselProps {
//   banners: string[];
// }

// export default function BannerCarousel({ banners }: BannerCarouselProps) {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % banners.length);
//     }, 4000); // slide every 4 seconds
//     return () => clearInterval(interval);
//   }, [banners.length]);

//   return (
//     <section className="relative w-full h-[80vh] overflow-hidden  shadow-xl">
//       {banners.map((src, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${
//             index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
//           }`}
//         >
//           <Image
//             src={src}
//             alt={`Banner ${index + 1}`}
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Gradient overlay for better text readability */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
//         </div>
//       ))}
//       {/* Centered heading */}
//       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg text-center px-4">
//           Explore Delhi with Ease
//         </h1>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";

interface BannerCarouselProps {
  banners: string[];
}

export default function BannerCarousel({ banners }: BannerCarouselProps) {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Background image filling the section */}
      <Image
        src={banners[1]} // or rotate if carousel
        alt="Delhi Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Centered heading */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Explore Delhi with Ease
        </h1>
      </div>
    </section>
  );
}

