import BannerCarousel from "@/components/BannerCarousel";
import Navbar from "@/components/Navbar";
import { DomainConfig, fetchDomainConfig } from "@/utils/fetchDomainConfig";

export default async function DomainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ domain: string }>;
}) {
  const { domain } = await params;
  const domainConfig = (await fetchDomainConfig(domain)) as DomainConfig;

  return (
     <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar domainConfig={domainConfig} />
       {domain === "delhitickets.com" && domainConfig.banners && (
  <BannerCarousel banners={domainConfig.banners as string[]} />
)}
        <main>{children}</main>
        <footer className="container mx-auto max-w-4xl p-4 text-center">
          © {domainConfig?.headerText} 2025
        </footer>
      </body>
    </html>
  );
}
