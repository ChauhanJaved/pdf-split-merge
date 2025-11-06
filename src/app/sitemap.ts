import { ProductIDs, websiteURL } from "@/data/website-data";
import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${websiteURL}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${websiteURL}/${ProductIDs.PDFSplitter}`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/${ProductIDs.PDFCombiner}`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${websiteURL}/${ProductIDs.PDFSplitMerge}`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
