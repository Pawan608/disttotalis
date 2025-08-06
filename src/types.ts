import type { AstroComponent } from '@lucide/astro';

export type ProductCategory = 'sliding' | 'railing' | 'casement';

export type GroupedProducts = {
  [key in ProductCategory]?: Omit<ProductItem, 'category'>[];
};

export interface ProductItem {
  name: string;
  slug: string;
  shortDescription: string;
  category: ProductCategory;
  description: string;
  images: ImageMetadata[];
  productRangeImage: ImageMetadata;
  features: { icon: AstroComponent; title: string; text: string }[];
  stats: { label: string; value: string; icon: AstroComponent }[];
  specs: { img: string; alt: string; label: string; value: string }[];
  performance: {
    img: string;
    alt: string;
    label: string;
    value: string;
    caption: string;
  }[];
  joining: { label: string; value: string | string[] }[];
  configurations: { img: ImageMetadata; title: string }[];
  handleOptions: { title: string; image: ImageMetadata; alt: string }[];
  faqs: AccordionItem[];
}

export interface AccordionItem {
  question: string;
  answer: string;
}

export type PostalPincodeResponse = {
  PostOffice: Array<{
    District: string;
    State: string;
  }>;
  Status: 'Error' | 'Success';
};
