// src/data/portfolio-items.ts

// Internal imports
import { portfolioItem } from "@/data/website-data";
import { PDFSplitter } from "./pdf-splitter";
import { PDFCombiner } from "./pdf-combiner";
import { PDFSplitMerge } from "./pdf-split-merge";

export const portfolioItems: portfolioItem[] = [
  PDFSplitter,
  PDFCombiner,
  PDFSplitMerge,
];
