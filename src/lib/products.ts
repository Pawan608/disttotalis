import {
  Clock,
  Lock,
  Shield,
  ThermometerSnowflake,
  TrendingUp,
  Zap,
  type AstroComponent,
  UsersRound,
} from '@lucide/astro';
import mainImage1 from '../assets/product-demo.jpg';
import thumb1 from '../assets/building.jpeg';
import thumb2 from '../assets/product-demo.jpg';

import px1 from '../assets/px1.jpg';
import px2 from '../assets/px2.jpg';
import px3 from '../assets/px3.jpg';

import type { ImageMetadata } from 'astro';

export interface Product {
  name: string;
  slug: string;
  description: string;
  price: number;
  mainImage: ImageMetadata;
  thumbnails: ImageMetadata[];
  features: { icon: AstroComponent; title: string; text: string }[];
  stats: { label: string; value: string; icon: AstroComponent }[];
}

export const products: Product[] = [
  {
    name: 'TOT SD NEXGEN',
    slug: 'nexgen',
    description:
      'Tested windows built for enhanced sturdiness—an ideal choice for every home.',
    price: 17999,
    mainImage: px1,
    thumbnails: [px2, px3],
    features: [
      {
        icon: Lock,
        title: 'Central Multi-Point Locking',
        text: 'Ensures maximum safety',
      },
      {
        icon: Shield,
        title: 'Reinforced Handles',
        text: 'Provides maximum sturdiness',
      },
      {
        icon: ThermometerSnowflake,
        title: 'BIS Tested',
        text: 'Against all weather conditions',
      },
    ],
    stats: [
      { label: 'Projects Completed', value: '100+', icon: TrendingUp },
      { label: 'Happy Customers', value: '80+', icon: UsersRound },
      { label: 'Years of Experience', value: '5+', icon: Clock },
      { label: 'Quick Installation', value: '1–2 Days', icon: Zap },
    ],
  },
  // Add more products similarly
];
