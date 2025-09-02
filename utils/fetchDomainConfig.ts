import configs from "@/public/data/domains.json";

export type Domain = keyof typeof configs;
// export type DomainConfig = (typeof configs)[Domain];
export type DomainConfig = (typeof configs)[Domain] & {
  banners?: string[];
};


export async function fetchDomainConfig(domain: string): Promise<DomainConfig | {}> {
  if (domain in configs) {
    return configs[domain as Domain];
  }
  return {};
}
