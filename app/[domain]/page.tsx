export default async function Landing({
  params,
}: {
  params: Promise<{ domain: string }>;
}) {
  const { domain } = await params;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="w-full max-w-2xl mx-auto text-center space-y-16">
        {/* Main Heading */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 tracking-tight">
            {domain}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-light">
            by{" "}
            <a
              href="http://staybook.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Staybook
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
