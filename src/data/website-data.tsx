import { Metadata } from "next";
import { ReactNode } from "react";

export const headerCompanyName: string = "FrameworkTeam";
export const companyName: string = "FrameworkTeam Softwares";
export const email: string = "support@frameworkteam.com";
export const copyrightYear: string = new Date().getFullYear().toString();

export enum HeaderNavItems {
  Home = "home",
  Contact = "contact",
}
export const headerNavItems: string[] = [
  HeaderNavItems.Home,
  HeaderNavItems.Contact,
];
export const websiteURL: string = "https://www.pdf-split-merge.com";
export const indexMetadata: Metadata = {
  title: "PDF Splitter, Combiner & Split-Merge Tool (Online & Desktop App)",
  description:
    "Easily manage your PDF files with our powerful tools: split large PDFs, combine multiple PDFs, or split & merge as needed. Available online or as secure offline desktop apps.",
  keywords: [
    "pdf splitter online",
    "pdf combiner online",
    "pdf split and merge online",
    "combine pdf files desktop app",
    "split pdf files desktop app",
    "merge pdf files desktop app",
    "pdf file tools",
    "pdf management software",
    "pdf editor",
    "secure pdf converter",
    "free pdf utility",
  ],
  alternates: {
    canonical: `${websiteURL}/`,
  },
  openGraph: {
    title: "PDF Splitter, Combiner & Split-Merge Tool (Online & Desktop App)",
    description:
      "Split, combine, or split & merge PDF files instantly. Use our online PDF tools or desktop apps for complete privacy, speed, and efficiency.",
    url: `${websiteURL}/`,
    siteName: "PDF File Tools",
    images: [
      {
        url: "https://res.cloudinary.com/dgq2mp4fs/image/upload/v1721890438/frameworkteam/hero-img.png",
        width: 539,
        height: 438,
        alt: "PDF Splitter, Combiner & Split-Merge Tools Online & Desktop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export const productImages = {
  PDFSplitter: {
    title: "PDF Splitter",
    imgName: `/${headerCompanyName.toLowerCase()}/${"pdf-splitter".toLowerCase()}`,
    width: 739,
    height: 469,
  },
  PDFCombiner: {
    title: "PDF Combiner",
    imgName: `/${headerCompanyName.toLowerCase()}/${"pdf-combiner".toLowerCase()}`,
    width: 739,
    height: 469,
  },
  PDFSplitMerge: {
    title: "PDF Split Merge",
    imgName: `/${headerCompanyName.toLowerCase()}/${"pdf-split-merge".toLowerCase()}`,
    width: 739,
    height: 469,
  },
};
export enum Categories {
  All = "All",
  WebApp = "Web App",
  DesktopApp = "Desktop App",
  Converter = "Converter",
  Splitter = "Splitter",
  Merger = "Merger",
}
export const categoryList: string[] = [
  Categories.All,
  Categories.WebApp,
  Categories.DesktopApp,
  Categories.Converter,
  Categories.Splitter,
  Categories.Merger,
];

export enum ProductIDs {
  PDFSplitter = "pdf-splitter",
  PDFCombiner = "pdf-combiner",
  PDFSplitMerge = "pdf-split-merge",
}
export const productTitles = {
  PDFSplitter: "PDF Splitter",
  PDFCombiner: "PDF Combiner",
  PDFSplitMerge: "PDF Split Merge",
} as const;
export type ProductTitles = (typeof productTitles)[keyof typeof productTitles];

export const productSubTitles = {
  PDFSplitter: "Secure Windows Desktop Application to split PDF files",
  PDFCombiner: "Secure Windows Desktop Application to combine PDF files",
  PDFSplitMerge:
    "Secure Windows Desktop Application to split and merge PDF files",
} as const;
export type ProductSubTitles =
  (typeof productSubTitles)[keyof typeof productSubTitles];

export const productWebsites = {
  PDFSplitter: "https://www.pdf-tiff-tools.com/pdf-splitter",
  PDFCombiner: "https://www.pdf-tiff-tools.com/pdf-combiner",
  PDFSplitMerge: "https://www.pdf-tiff-tools.com/pdf-split-merge",
} as const;
export type ProductWebsite =
  (typeof productWebsites)[keyof typeof productWebsites];

export const productDownloadLinks = {
  PDFSplitter:
    "https://www.pdf-split-merge.com/downloads/pdf-splitter-setup.exe",
  PDFCombiner:
    "https://www.pdf-split-merge.com/downloads/pdf-combiner-setup.exe",
  PDFSplitMerge:
    "https://www.pdf-split-merge.com/downloads/pdf-split-merge-setup.exe",
} as const;
export type ProductDownloadLinks =
  (typeof productDownloadLinks)[keyof typeof productDownloadLinks];
export interface LicenseOption {
  licenseType: string;
  price: string;
  paymentLink: string;
}
export interface portfolioItem {
  id: ProductIDs;
  title: ProductTitles;
  subtitle: ProductSubTitles;
  src: string;
  width: number;
  height: number;
  categories: Categories[];
  pageLink: string;
  productWebsite: ProductWebsite;
  downloadLink?: ProductDownloadLinks;
  features: string[];
  description?: ReactNode;
  metaData: Metadata;
  licenseOptions: LicenseOption[];
}
