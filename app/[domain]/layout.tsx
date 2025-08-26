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
    <html
      lang="en"
      style={{ background: domainConfig?.color || "#333", color: "#fff" }}
    >
      <body>
        <header className="relative top-0 container max-w-4xl mx-auto p-4">
          <span>{domainConfig?.logo}</span> {domainConfig?.headerText}
        </header>
        <main>{children}</main>
        <footer className="container mx-auto max-w-4xl p-4 text-center">© {domainConfig?.headerText} 2025</footer>
      </body>
    </html>
  );
}
