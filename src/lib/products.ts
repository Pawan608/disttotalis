import {
  Clock,
  Lock,
  Shield,
  ThermometerSnowflake,
  TrendingUp,
  Zap,
  type AstroComponent,
  UsersRound,
  DollarSign,
  Settings,
  Palette,
  Layers,
  Minus,
  Wrench,
  Wind,
  ArrowUp,
} from "@lucide/astro";

//TOT SD Plus Typologies Images
import sdPlus2T2GShutterSliding from "../assets/tot sd plus/2T 2G Shutter Sliding.png";
import sdPlus2T4GShutterSliding from "../assets/tot sd plus/2T 4G Shutter Sliding.png";
import sdPlus3T2GShutterPlusMesh from "../assets/tot sd plus/3T 2G Shutter + 1 Mesh.png";
import sdPlus3T4GShutterPlusMesh from "../assets/tot sd plus/TOT SD Plus 3T 4G Mesh.png";
import sdPlus2T2GShutterPlusFix from "../assets/tot sd plus/2T 2G Sliding Shutter+fix.png";
import sdPlus3T3GSutterSliding from "../assets/tot sd plus/3T 3G Shutter Sliding.png";
import sdPlus3T6GShutterSliding from "../assets/tot sd plus/3T + 6G Shutter Sliding.png";
import sdPlus2T2GSlidingPlusBottomFixed from "../assets/tot sd plus/2T + 2G Sliding Shutter + Bottom Fixed.png";
import sdPlus2T2GSlidingPlusTopFixed from "../assets/tot sd plus/2T+2G Sliding shutter+ top fixed.png";

//TOT SD Lite Typologies Images
import sdPluslite2T2GShutterSliding from "../assets/tot sd lite/2T 2G Shutter Sliding.png";
import sdPluslite2T4GShutterSliding from "../assets/tot sd lite/2T 4G Shutter Sliding.png";
import sdPluslite3T2GShutterPlusMesh from "../assets/tot sd lite/3T 2G Shutter + 1 Mesh.png";
import sdPluslite3T4GShutterPlusMesh from "../assets/tot sd lite/TOT SD Plus 3T 4G Mesh.png";
import sdPluslite2T2GShutterPlusFix from "../assets/tot sd lite/2T 2G Sliding Shutter+fix.png";
import sdPluslite3T3GSutterSliding from "../assets/tot sd lite/3T 3G Shutter Sliding.png";
import sdPluslite3T6GShutterSliding from "../assets/tot sd lite/3T + 6G Shutter Sliding.png";
import sdPluslite2T2GSlidingPlusBottomFixed from "../assets/tot sd lite/2T + 2G Sliding Shutter + Bottom Fixed.png";
import sdPluslite2T2GSlidingPlusTopFixed from "../assets/tot sd lite/2T+2G Sliding shutter+ top fixed.png";

//TOT SD Nexgen Typologies Images
import nexgen25T2GShutterSliding from "../assets/tot sd nexgen/2.5T + 2G Shutter Sliding.png";
import nexgen25T4GShutterSliding from "../assets/tot sd nexgen/2.5T + 4G shutter sliding.png";
import nexgen25T2GPlusMeshShutterSliding from "../assets/tot sd nexgen/2.5T+ 2G Shutter+ 1 mesh shutter sliding.png";
import nexgen25T4GPlusMeshShutterSliding from "../assets/tot sd nexgen/2.5T+4G Shutter+ 2 Mesh Shutter Sliding.png";
import nexgen25T2GShutterPlusFix from "../assets/tot sd nexgen/2.5T+2G Sliding Shutter+ 1 fix shutter.png";
import nexgen35T3GShutterSliding from "../assets/tot sd nexgen/3.5T+3G shutter sliding.png";
import nexgen35T6GShutterSliding from "../assets/tot sd nexgen/3.5T+6G shutter sliding.png";
import nexgen25T2GSlidingPlusBottomFixed from "../assets/tot sd nexgen/2.5T+2G Sliding Shutter + bottom fixed.png";
import nexgen25T2GSlidingPlusTopFixed from "../assets/tot sd nexgen/2.5T+2G Sliding Shutter + top fixed.png";

//TOT CS Typologies Images
import totcsFixwindow from "../assets/tot cs/fix window.png";
import totcsSingleShutterInsideOpen from "../assets/tot cs/single shutter inside open.png";
import totcsSingleShutterOutsideOpen from "../assets/tot cs/single shutter outside open.png";
import totcsSingleShutterInsideOpenPlusSideFix from "../assets/tot cs/single shutter inside open + side fix.png";
import totcsSingleShutterOutsideOpenPlusSideFix from "../assets/tot cs/single shutter outside open + side fix.png";
import totcsSingleShutterInsideOpenTopFix from "../assets/tot cs/single shutter inside open+top fix.png";
import totcsSingleShutterOutsideOpenTopFix from "../assets/tot cs/single shutter outside open + top fix.png";
import totcsDoubleShutterOutsideOpen from "../assets/tot cs/double shutter outside open.png";
import totcsDoubleShutterInsideOpen from "../assets/tot cs/double shutter inside open.png";
import totcsDoorSingleShutterOutsideOpen from "../assets/tot cs/door single shutter outside open.png";
import totcsDoubleDoorSingleShutterOutsideOpen from "../assets/tot cs/double door single shutter outside open.png";
import totcsTopHungOutsideOpen from "../assets/tot cs/top hung outside open window.png";

import sdNexgen1 from "../assets/tot/sd-nexgen-wide.png";
import sdNexgen2 from "../assets/tot/sd-nexgen1.png";
import sdNexgen3 from "../assets/tot/sd-nexgen2.png";

import sdLite1 from "../assets/tot/sd-lite-wide.png";
import sdLite2 from "../assets/tot/sd-lite1.png";
import sdLite3 from "../assets/tot/sd-lite2.png";

import sdPlus1 from "../assets/tot/sd-plus-wide.png";
import sdPlus2 from "../assets/tot/sd-plus1.png";
import sdPlus3 from "../assets/tot/sd-plus2.png";

import cs1 from "../assets/tot/cs-wide.png";
import cs2 from "../assets/tot/cs1.png";
import cs3 from "../assets/tot/cs2.png";

import rl80_1 from "../assets/tot/rl80-wide.png";
import rl80_2 from "../assets/tot/rl80-1.png";
import rl80_3 from "../assets/tot/rl80-2.png";

import rl125_1 from "../assets/tot/rl-125-wide.png";
import rl125_2 from "../assets/tot/rl-125-1.png";
import rl125_3 from "../assets/tot/rl-125-2.png";

import airTightness from "../assets/air-tightness.svg";
import glassRange from "../assets/glass-range.svg";
import maxSashWidth from "../assets/max-sash-width.svg";
import maxSashHeight from "../assets/max-sash-height.svg";
import waterTightness from "../assets/water-tightness.svg";
import windLoad from "../assets/wind-load.svg";

import maxHeight from "../assets/wind-load.svg";
import glassThickness from "../assets/wind-load.svg";
import anchorSpecs from "../assets/wind-load.svg";
import anchorSpacing from "../assets/wind-load.svg";

import liveLoad from "../assets/wind-load.svg";
import pointLoad from "../assets/wind-load.svg";
import impactTest from "../assets/wind-load.svg";

import railingGlass from "../assets/wind-load.svg";
import railingBaluster from "../assets/wind-load.svg";
import railingCombined from "../assets/wind-load.svg";

import railingPremiumGlass from "../assets/wind-load.svg";
import railingHighRise from "../assets/wind-load.svg";
import railingCustom from "../assets/wind-load.svg";
import railingCommercial from "../assets/wind-load.svg";

import flushImg from "../assets/building.jpeg";
import leverImg from "../assets/building.jpeg";
import pullImg from "../assets/building.jpeg";
import multiPointImg from "../assets/building.jpeg";
import standardHandleImg from "../assets/building.jpeg";
import roundHandrailImg from "../assets/building.jpeg";
import squareHandrailImg from "../assets/building.jpeg";
import flatTopImg from "../assets/building.jpeg";
import premiumRoundHandrailImg from "../assets/building.jpeg";
import designerSquareHandrailImg from "../assets/building.jpeg";
import customProfileImg from "../assets/building.jpeg";

import type { GroupedProducts, ProductItem } from "../types";

export const products: ProductItem[] = [
  // SLIDING PRODUCTS
  {
    name: "TOT SD NEXGEN",
    slug: "tot-sd-nexgen",
    shortDescription: "Central locking. Weather-resistant. Sturdy performance.",
    category: "sliding",
    description:
      "Strong, stylish, and built to last — the TOT SD NEXGEN aluminium sliding doors and windows are designed for modern homes that demand both beauty and durability. Tested for performance, they bring you peace of mind along with long-lasting elegance.",
    images: [sdNexgen1, sdNexgen2, sdNexgen3], // Replace with actual image imports
    productRangeImage: sdNexgen1,
    features: [
      {
        icon: Lock,
        title: "Central Multi-Point Locking",
        text: "Ensures maximum safety",
      },
      {
        icon: Shield,
        title: "Reinforced Handles",
        text: "Provide superior sturdiness",
      },
      {
        icon: ThermometerSnowflake,
        title: "BIS Tested",
        text: "Proven performance against all weather conditions",
      },
    ],
    stats: [
      { label: "Projects Completed", value: "100+", icon: TrendingUp },
      { label: "Happy Customers", value: "80+", icon: UsersRound },
      { label: "Years of Experience", value: "5+", icon: Clock },
      { label: "Quick Installation", value: "1–2 Days", icon: Zap },
    ],
    specs: [
      {
        img: maxSashHeight.src,
        alt: "Max Sash Height",
        label: "Max Sash Height",
        value: "2400 mm",
      },
      {
        img: maxSashWidth.src,
        alt: "Max Sash Width",
        label: "Max Sash Width",
        value: "1050 mm",
      },
      {
        img: glassRange.src,
        alt: "Glass Range",
        label: "Glass Range",
        value: "5mm - 8mm",
      },
    ],
    performance: [
      {
        img: windLoad.src,
        alt: "Wind Load",
        label: "Wind load",
        value: "1.6 kpa",
        caption: "As per class 4A (BS EN12210 : 2000)",
      },
      {
        img: airTightness.src,
        alt: "Air Tightness",
        label: "Air tightness",
        value: "450 Pa",
        caption: "as per W250BB IS 18648",
      },
      {
        img: waterTightness.src,
        alt: "Water Tightness",
        label: "Water tightness",
        value: "250 Pa",
        caption: "as per Class A3 IS 18648",
      },
    ],
    joining: [
      {
        label: "WIDTH ON JAMB",
        value: ["Frame 2T- 39mm", "Frame 3T- 75mm"],
      },
      {
        label: "FRAME CORNER JOINT",
        value: "45°",
      },
      {
        label: "SHUTTER CORNER JOINT",
        value: "90°",
      },
      {
        label: "SIGHT LINE",
        value: "30mm",
      },
    ],
    configurations: [
      {
        img: nexgen25T2GShutterSliding,
        title: "2.5 Track 2 Glass Shutter Sliding Window",
      },
      {
        img: nexgen25T4GShutterSliding,
        title: "2.5 Track 4 Glass Shutter Sliding Window",
      },
      {
        img: nexgen25T2GPlusMeshShutterSliding,
        title: "2.5 Track 2 Glass Shutter + 1 Mesh Shutter Sliding Window",
      },
      {
        img: nexgen25T4GPlusMeshShutterSliding,
        title: "2.5 Track 4 Glass Shutter + 2 Mesh Shutter Sliding Window",
      },
      {
        img: nexgen25T2GShutterPlusFix,
        title: "2.5 Track 2 Glass Sliding Shutter + 1 Fix Shutter Window",
      },
      {
        img: nexgen35T3GShutterSliding,
        title: "3.5 Track 3 Glass Shutter Sliding Window",
      },
      {
        img: nexgen35T6GShutterSliding,
        title: "3.5 Track 6 Glass Shutter Sliding Window",
      },
      {
        img: nexgen25T2GSlidingPlusBottomFixed,
        title: "2.5 Track 2 Glass Sliding Shutter + Bottom Fixed Window",
      },
      {
        img: nexgen25T2GSlidingPlusTopFixed,
        title: "2.5 Track 2 Glass Sliding Shutter + Top Fixed Window",
      },
    ],
    handleOptions: [
      { title: "Flush Lock", image: flushImg, alt: "Flush Lock Handle" },
      { title: "Lever Handle", image: leverImg, alt: "Lever Handle" },
      { title: "Pull Handle", image: pullImg, alt: "Pull Handle" },
    ],
    faqs: [
      {
        question: "Are these windows suitable for high-rise buildings?",
        answer:
          "Yes, TOT SD NEXGEN windows are engineered for high wind loads and structural safety, making them suitable for high-rise buildings.",
      },
      {
        question: "What glass options are available?",
        answer:
          "We offer a variety of glass types, including clear, tinted, frosted, and laminated options depending on your privacy and insulation needs.",
      },
      {
        question: "Can I customize the window dimensions?",
        answer:
          "Yes, we support fully customized dimensions to suit your architectural requirements.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Routine cleaning of tracks is sufficient. We don’t suggest lubrication. No intensive maintenance needed.",
      },
      {
        question: "Are the windows energy efficient?",
        answer:
          "Yes, with multiple glass options and precision sealing, they significantly reduce energy loss.",
      },
      {
        question: "What colors and finishes are available?",
        answer:
          "A range of powder-coated and anodized finishes are available in various neutral and custom colors.",
      },
    ],
  },
  {
    name: "TOT SD LITE",
    slug: "tot-sd-lite",
    shortDescription: "Lightweight design. Cost-efficient. Smooth operation.",
    category: "sliding",
    description:
      "Smart, sleek, and efficient — the TOT SD LITE aluminium sliding windows are designed for everyday modern living. With smooth operation, lasting durability, and cost efficiency, they bring comfort and style within everyone's reach.",
    productRangeImage: sdLite1,
    images: [sdLite1, sdLite2, sdLite3], // Replace with actual image imports
    features: [
      {
        icon: Zap,
        title: "Effortless Sliding",
        text: "Lightweight design for smooth, easy operation",
      },
      {
        icon: Shield,
        title: "Strong & Sturdy",
        text: "Built to perform in all weather conditions",
      },
      {
        icon: DollarSign,
        title: "Cost-Efficient",
        text: "Stylish sliding windows that fit your budget",
      },
    ],
    stats: [
      { label: "Projects Completed", value: "100+", icon: TrendingUp },
      { label: "Happy Customers", value: "80+", icon: UsersRound },
      { label: "Years of Experience", value: "5+", icon: Clock },
      { label: "Quick Installation", value: "1–2 Days", icon: Zap },
    ],
    specs: [
      {
        img: maxSashHeight.src,
        alt: "Max Sash Height",
        label: "Max Sash Height",
        value: "1500 mm",
      },
      {
        img: maxSashWidth.src,
        alt: "Max Sash Width",
        label: "Max Sash Width",
        value: "800 mm",
      },
      {
        img: glassRange.src,
        alt: "Glass Range",
        label: "Glass Range",
        value: "5mm - 6mm",
      },
    ],
    performance: [
      {
        img: windLoad.src,
        alt: "Wind Load",
        label: "Wind load",
        value: "1.6 kpa",
        caption: "As per class 4A (BS EN12210 : 2000)",
      },
      {
        img: airTightness.src,
        alt: "Air Tightness",
        label: "Air tightness",
        value: "150 Pa",
        caption: "As per class 2 (BS EN12207 : 2000)",
      },
      {
        img: waterTightness.src,
        alt: "Water Tightness",
        label: "Water tightness",
        value: "150 Pa",
        caption: "As per class 4A (BS EN12207 : 2000)",
      },
    ],
    joining: [
      {
        label: "WIDTH ON JAMB",
        value: ["Frame 2T- 61mm", "Frame 3T- 92mm"],
      },
      {
        label: "FRAME CORNER JOINT",
        value: "45°",
      },
      {
        label: "SHUTTER CORNER JOINT",
        value: "45°",
      },
      {
        label: "SIGHT LINE",
        value: "48mm",
      },
    ],
    configurations: [
      {
        img: sdPluslite2T2GShutterSliding,
        title: "2 Track 2 Glass Shutter Sliding Window",
      },
      {
        img: sdPluslite2T4GShutterSliding,
        title: "2 Track 4 Glass Shutter Sliding Window",
      },
      {
        img: sdPluslite3T2GShutterPlusMesh,
        title: "3 Track 2 Glass Shutter + 1 Mesh Shutter Sliding Window",
      },
      {
        img: sdPluslite3T4GShutterPlusMesh,
        title: "3 Track 4 Glass Shutter + 2 Mesh Shutter Sliding Window",
      },
      {
        img: sdPluslite2T2GShutterPlusFix,
        title: "2 Track 2 Glass Sliding Shutter + 1 Fix Shutter Window",
      },
      {
        img: sdPluslite3T3GSutterSliding,
        title: "3 Track 3 Glass Shutter Sliding Window",
      },
      {
        img: sdPluslite3T6GShutterSliding,
        title: "3 Track 6 Glass Shutter Sliding Window",
      },
      {
        img: sdPluslite2T2GSlidingPlusBottomFixed,
        title: "2 Track 2 Glass Sliding Shutter + Bottom Fixed Window",
      },
      {
        img: sdPluslite2T2GSlidingPlusTopFixed,
        title: "2 Track 2 Glass Sliding Shutter + Top Fixed Window",
      },
    ],
    handleOptions: [
      { title: "Flush Lock", image: flushImg, alt: "Flush Lock Handle" },
      { title: "Lever Handle", image: leverImg, alt: "Lever Handle" },
    ],
    faqs: [
      {
        question: "What makes TOT SD LITE cost-efficient?",
        answer:
          "TOT SD LITE is designed with optimized materials and manufacturing processes to provide excellent quality at an affordable price point without compromising on durability.",
      },
      {
        question: "Is this suitable for smaller spaces?",
        answer:
          "Yes, TOT SD LITE is specifically designed for everyday modern living and is perfect for smaller residential spaces.",
      },
      {
        question: "What is the maximum size available?",
        answer:
          "The maximum sash height is 1500mm and maximum width is 800mm, making it ideal for standard residential window openings.",
      },
    ],
  },

  {
    name: "TOT SD PLUS",
    slug: "tot-sd-plus",
    shortDescription:
      "Customizable tracks. Enhanced security. Energy-efficient options.",
    category: "sliding",
    description:
      "Versatile, secure, and efficient — the TOT SD PLUS aluminium sliding windows are designed to adapt to every home. Offering advanced safety features and customizable options, they combine strength with style for modern living.",
    productRangeImage: sdPlus1,
    images: [sdPlus1, sdPlus2, sdPlus3], // Replace with actual image imports
    features: [
      {
        icon: Settings,
        title: "Customizable Track Options",
        text: "Multiple tracks to suit your space and requirements",
      },
      {
        icon: Lock,
        title: "Enhanced Safety & Security",
        text: "Single and multipoint locking systems for extra protection",
      },
      {
        icon: Zap,
        title: "Energy-Efficient Glass Options",
        text: "Choose from multiple glass types for better insulation and comfort",
      },
    ],
    stats: [
      { label: "Projects Completed", value: "100+", icon: TrendingUp },
      { label: "Happy Customers", value: "80+", icon: UsersRound },
      { label: "Years of Experience", value: "5+", icon: Clock },
      { label: "Quick Installation", value: "1–2 Days", icon: Zap },
    ],
    specs: [
      {
        img: maxSashHeight.src,
        alt: "Max Sash Height",
        label: "Max Sash Height",
        value: "2400 mm",
      },
      {
        img: maxSashWidth.src,
        alt: "Max Sash Width",
        label: "Max Sash Width",
        value: "1200 mm",
      },
      {
        img: glassRange.src,
        alt: "Glass Range",
        label: "Glass Thickness Range",
        value: "5mm - 20mm",
      },
    ],
    performance: [
      {
        img: windLoad.src,
        alt: "Wind Load",
        label: "Wind load",
        value: "2 kpa",
        caption: "As per class C5 (BS EN12210 : 2000)",
      },
      {
        img: airTightness.src,
        alt: "Air Tightness",
        label: "Air tightness",
        value: "300 Pa",
        caption: "As per class 2 (BS EN12207 : 2000)",
      },
      {
        img: waterTightness.src,
        alt: "Water Tightness",
        label: "Water tightness",
        value: "150 Pa",
        caption: "As per class 4A (BS EN12207 : 2000)",
      },
    ],
    joining: [
      {
        label: "WIDTH ON JAMB",
        value: ["Frame 2T- 70mm", "Frame 3T- 106mm"],
      },
      {
        label: "FRAME CORNER JOINT",
        value: "45°",
      },
      {
        label: "SHUTTER CORNER JOINT",
        value: "45°",
      },
      {
        label: "SIGHT LINE",
        value: "60mm",
      },
    ],
    configurations: [
      {
        img: sdPlus2T2GShutterSliding,
        title: "2 Track 2 Glass Shutter Sliding Window",
      },
      {
        img: sdPlus2T4GShutterSliding,
        title: "2 Track 4 Glass Shutter Sliding Window",
      },
      {
        img: sdPlus3T2GShutterPlusMesh,
        title: "3 Track 2 Glass Shutter + 1 Mesh Shutter Sliding Window",
      },
      {
        img: sdPlus3T4GShutterPlusMesh,
        title: "3 Track 4 Glass Shutter + 2 Mesh Shutter Sliding Window",
      },
      {
        img: sdPlus2T2GShutterPlusFix,
        title: "2 Track 2 Glass Sliding Shutter + 1 Fix Shutter Window",
      },
      {
        img: sdPlus3T3GSutterSliding,
        title: "3 Track 3 Glass Shutter Sliding Window",
      },
      {
        img: sdPlus3T6GShutterSliding,
        title: "3 Track 6 Glass Shutter Sliding Window",
      },
      {
        img: sdPlus2T2GSlidingPlusBottomFixed,
        title: "2 Track 2 Glass Sliding Shutter + Bottom Fixed Window",
      },
      {
        img: sdPlus2T2GSlidingPlusTopFixed,
        title: "2 Track 2 Glass Sliding Shutter + Top Fixed Window",
      },
    ],
    handleOptions: [
      { title: "Flush Lock", image: flushImg, alt: "Flush Lock Handle" },
      { title: "Lever Handle", image: leverImg, alt: "Lever Handle" },
      { title: "Pull Handle", image: pullImg, alt: "Pull Handle" },
      {
        title: "Multi-Point Lock",
        image: multiPointImg,
        alt: "Multi-Point Lock Handle",
      },
    ],
    faqs: [
      {
        question: "What track options are available?",
        answer:
          "TOT SD PLUS offers 2-track, and 3-track configurations to suit different space requirements and usage patterns.",
      },
      {
        question: "What glass thickness options do you offer?",
        answer:
          "We support glass thickness ranging from 5mm to 20mm, including single glazed, double glazed, and laminated options.",
      },
      {
        question: "How does the multi-point locking work?",
        answer:
          "The multi-point locking system secures the window at multiple points along the frame, providing enhanced security and weather sealing.",
      },
    ],
  },

  // CASEMENT PRODUCTS
  {
    name: "TOT CS",
    slug: "tot-cs",
    shortDescription:
      "Hassle-free installation. Multiple color options. Better ventilation.",
    category: "casement",
    description:
      "Reliable and stylish, the TOT CS aluminium casement windows are built for lasting performance, with multiple color and style options to suit your home.",
    productRangeImage: cs1,
    images: [cs1, cs2, cs3], // Replace with actual image imports
    features: [
      {
        icon: Wrench,
        title: "Hassle-Free Installation",
        text: "No beading required for openable windows, ensuring easy installation and lower inventory stocking",
      },
      {
        icon: Palette,
        title: "Aesthetic Flexibility",
        text: "Multiple color and handle options to match your interiors",
      },
      {
        icon: Wind,
        title: "Better Ventilation",
        text: "Suitable for all types of ventilator spaces",
      },
    ],
    stats: [
      { label: "Projects Completed", value: "100+", icon: TrendingUp },
      { label: "Happy Customers", value: "80+", icon: UsersRound },
      { label: "Years of Experience", value: "5+", icon: Clock },
      { label: "Quick Installation", value: "1–2 Days", icon: Zap },
    ],
    specs: [
      {
        img: maxSashHeight.src,
        alt: "Max Sash Height",
        content: [
          ["Door", "2400 mm"],
          ["Window", "1500 mm"],
        ],
        label: "Max Sash Height",
        // value: '2400 mm',
      },
      {
        img: maxSashWidth.src,
        alt: "Max Sash Width",
        label: "Max Sash Width",
        content: [
          ["Door", "900 mm"],
          ["Window", "750 mm"],
        ],
      },
      {
        img: glassRange.src,
        alt: "Glass Range",
        label: "Glass Thickness Range",
        value: "5mm - 20mm",
      },
    ],
    performance: [
      {
        img: windLoad.src,
        alt: "Wind Load",
        label: "Wind load",
        value: "1.6 kpa",
        caption: "As per class 4C (BS EN12210 : 2000)",
      },
      {
        img: airTightness.src,
        alt: "Air Tightness",
        label: "Air tightness",
        value: "150 Pa",
        caption: "As per class 2 (BS EN12207 : 2000)",
      },
      {
        img: waterTightness.src,
        alt: "Water Tightness",
        label: "Water tightness",
        value: "150 Pa",
        caption: "As per class 4A (BS EN12207 : 2000)",
      },
    ],
    joining: [
      {
        label: "WIDTH ON JAMB",
        value: "Sides - 39 mm",
      },
      {
        label: "FRAME CORNER JOINT",
        value: "45°",
      },
      {
        label: "SHUTTER CORNER JOINT",
        value: "45°",
      },
      {
        label: "DOOR SIGHT LINE",
        value: "Frame- 39mm, Door Sash- 100mm",
      },
      {
        label: "WINDOW SIGHT LINE",
        value: "Frame- 39mm, Window Sash- 67mm",
      },
    ],
    configurations: [
      {
        img: totcsFixwindow,
        title: "Fixed Window",
      },
      {
        img: totcsSingleShutterInsideOpen,
        title: "Single Shutter Inside Open",
      },
      {
        img: totcsSingleShutterOutsideOpen,
        title: "Single Shutter Outside Open",
      },
      {
        img: totcsSingleShutterInsideOpenPlusSideFix,
        title: "Single Shutter Inside Open + Side Fix",
      },

      {
        img: totcsSingleShutterOutsideOpenPlusSideFix,
        title: "Single Shutter Outside Open + Side Fix",
      },
      {
        img: totcsSingleShutterInsideOpenTopFix,
        title: "Single Shutter Inside Open+ Top Fix",
      },
      {
        img: totcsSingleShutterOutsideOpenTopFix,
        title: "Single Shutter Outside Open + Top Fix",
      },
      {
        img: totcsDoubleShutterOutsideOpen,
        title: "Double Shutter Outside Open",
      },
      {
        img: totcsDoubleShutterInsideOpen,
        title: "Double Shutter Inside Open",
      },
      {
        img: totcsDoorSingleShutterOutsideOpen,
        title: "Door Single Shutter Outside Open",
      },
      {
        img: totcsDoubleDoorSingleShutterOutsideOpen,
        title: "Double Door Single Shutter Outside Open",
      },
      {
        img: totcsTopHungOutsideOpen,
        title: "Top Hung Outside Open Window",
      },
    ],
    handleOptions: [
      {
        title: "Standard Handle",
        image: standardHandleImg,
        alt: "Standard Casement Handle",
      },
      { title: "Lever Handle", image: leverImg, alt: "Lever Handle" },
      {
        title: "Multi-Point Handle",
        image: multiPointImg,
        alt: "Multi-Point Handle",
      },
    ],
    faqs: [
      {
        question: "Can TOT CS be used for both doors and windows?",
        answer:
          "Yes, TOT CS is designed for both door and window applications with different maximum dimensions for each.",
      },
      {
        question: "What ventilation options are available?",
        answer:
          "TOT CS casement windows provide excellent ventilation control and are suitable for various ventilator configurations.",
      },
    ],
  },

  // {
  //   name: 'TOT CS PLUS',
  //   slug: 'tot-cs-plus',
  //   shortDescription:
  //     'Multi-point locking. Premium aesthetics. Multiple glass options.',
  //   category: 'casement',
  //   description:
  //     'Crafted for strength and style, the TOT CS PLUS aluminium casement windows are built to the highest standards. They combine durability, design flexibility, and reliable performance — making them the perfect choice for modern homes.',
  //   productRangeImage: csPlus1,
  //   images: [csPlus1, csPlus2, csPlus3], // Replace with actual image imports
  //   features: [
  //     {
  //       icon: Lock,
  //       title: 'Multi-Point Locking',
  //       text: 'Enhanced safety and security for your home',
  //     },
  //     {
  //       icon: Palette,
  //       title: 'Aesthetic Choice',
  //       text: 'Multiple color and handle options to complement your interiors',
  //     },
  //     {
  //       icon: Layers,
  //       title: 'Glass Options',
  //       text: 'Choose from a range of glass types for design and performance needs',
  //     },
  //   ],
  //   stats: [
  //     { label: 'Projects Completed', value: '100+', icon: TrendingUp },
  //     { label: 'Happy Customers', value: '80+', icon: UsersRound },
  //     { label: 'Years of Experience', value: '5+', icon: Clock },
  //     { label: 'Quick Installation', value: '1–2 Days', icon: Zap },
  //   ],
  //   specs: [
  //     {
  //       img: maxSashHeight.src,
  //       alt: 'Max Sash Height',
  //       label: 'Max Sash Height',
  //       content: [
  //         ['Door', '2700 mm'],
  //         ['Window', '2000 mm'],
  //       ],
  //       // value: '2700 mm',
  //     },
  //     {
  //       img: maxSashWidth.src,
  //       alt: 'Max Sash Width',
  //       label: 'Max Sash Width',
  //       content: [
  //         ['Door', '900 mm'],
  //         ['Window', '900 mm'],
  //       ],
  //       // value: '900 mm',
  //     },
  //     // {
  //     //   img: maxSashHeight.src,
  //     //   alt: 'Window Max Sash Height',
  //     //   label: 'Window Max Sash Height',
  //     //   value: '2000 mm',
  //     // },
  //     // {
  //     //   img: maxSashWidth.src,
  //     //   alt: 'Window Max Sash Width',
  //     //   label: 'Window Max Sash Width',
  //     //   value: '900 mm',
  //     // },
  //     {
  //       img: glassRange.src,
  //       alt: 'Glass Range',
  //       label: 'Glass Range',
  //       value: '6mm - 24mm',
  //     },
  //   ],
  //   performance: [
  //     {
  //       img: windLoad.src,
  //       alt: 'Wind Load',
  //       label: 'Wind load',
  //       value: '2.0 kpa',
  //       caption: 'As per class C5 (BS EN12210 : 2000)',
  //     },
  //     {
  //       img: airTightness.src,
  //       alt: 'Air Tightness',
  //       label: 'Air tightness',
  //       value: '300 Pa',
  //       caption: 'As per class 2 (BS EN12207 : 2000)',
  //     },
  //     {
  //       img: waterTightness.src,
  //       alt: 'Water Tightness',
  //       label: 'Water tightness',
  //       value: '300 Pa',
  //       caption: 'As per class 7A (BS EN12207 : 2000)',
  //     },
  //   ],
  //   joining: [
  //     {
  //       label: 'WIDTH ON JAMB',
  //       value: 'Sides - 41 mm',
  //     },
  //     {
  //       label: 'FRAME CORNER JOINT',
  //       value: '45°',
  //     },
  //     {
  //       label: 'SHUTTER CORNER JOINT',
  //       value: '45°',
  //     },
  //     {
  //       label: 'DOOR SIGHT LINE',
  //       value: 'Frame- 55mm, Door Sash- 89mm',
  //     },
  //     {
  //       label: 'WINDOW SIGHT LINE',
  //       value: 'Frame- 49mm, Window Sash- 74mm',
  //     },
  //   ],
  //   configurations: [
  //     {
  //       img: casementSingleDoor,
  //       title: 'Single Door',
  //     },
  //     {
  //       img: casementDoubleDoor,
  //       title: 'Double Door',
  //     },
  //     {
  //       img: casementWindow,
  //       title: 'Casement Window',
  //     },
  //     {
  //       img: casementFrench,
  //       title: 'French Door',
  //     },
  //   ],
  //   handleOptions: [
  //     {
  //       title: 'Premium Handle',
  //       image: premiumHandleImg,
  //       alt: 'Premium Casement Handle',
  //     },
  //     {
  //       title: 'Multi-Point Lock',
  //       image: multiPointImg,
  //       alt: 'Multi-Point Lock Handle',
  //     },
  //     { title: 'Lever Handle', image: leverImg, alt: 'Lever Handle' },
  //   ],
  //   faqs: [
  //     {
  //       question: 'What are the benefits of multi-point locking?',
  //       answer:
  //         'Multi-point locking provides enhanced security by locking at multiple points along the frame, better weather sealing, and improved structural integrity.',
  //     },
  //     {
  //       question: 'What glass thickness options are available?',
  //       answer:
  //         'TOT CS PLUS supports glass thickness from 6mm to 24mm, including double glazed and laminated glass options for enhanced insulation and security.',
  //     },
  //     {
  //       question: 'Is this suitable for large openings?',
  //       answer:
  //         'Yes, with door heights up to 2700mm and window heights up to 2000mm, TOT CS PLUS is ideal for large openings and premium applications.',
  //     },
  //   ],
  // },

  // RAILING PRODUCTS
  {
    name: "TOT RL 80",
    slug: "tot-rl-80",
    shortDescription:
      "High strength tested. Continuous design. Multiple handrail options.",
    category: "railing",
    description:
      "Strong, sleek, and dependable — the TOT RL 80 aluminium railing system combines safety with style, making it ideal for residential, commercial, and industrial applications.",
    productRangeImage: rl80_1,
    images: [rl80_1, rl80_2, rl80_3], // Replace with actual image imports
    features: [
      {
        icon: Shield,
        title: "High Strength",
        text: "Tested to withstand up to 75 KG per meter of force for maximum safety",
      },
      {
        icon: Palette,
        title: "Functional & Classy Design",
        text: "Elegant, durable, and available with multiple top handrail options to suit your style",
      },
      {
        icon: Minus,
        title: "Continuous Railing",
        text: "Seamless look for modern spaces",
      },
    ],
    stats: [
      { label: "Projects Completed", value: "100+", icon: TrendingUp },
      { label: "Happy Customers", value: "80+", icon: UsersRound },
      { label: "Years of Experience", value: "5+", icon: Clock },
      { label: "Quick Installation", value: "1–2 Days", icon: Zap },
    ],
    specs: [
      {
        img: maxHeight.src,
        alt: "Max Height",
        label: "Max Height",
        value: "1000 mm",
      },
      {
        img: glassThickness.src,
        alt: "Glass Thickness",
        label: "Glass Thickness",
        value: "11.52, 12.52, 13.52 mm",
      },
      {
        img: anchorSpecs.src,
        alt: "Anchor Specifications",
        label: "Anchor Specifications",
        value: "HUSA – CR M10 x 105 (Counter Sunk Head)",
      },
      {
        img: anchorSpacing.src,
        alt: "Anchor Spacing",
        label: "Anchor Spacing",
        value: "300 mm",
      },
    ],
    performance: [
      {
        img: windLoad.src,
        alt: "Wind Load",
        label: "Wind load",
        value: "1.5 KPA",
        caption: "Tested for structural stability",
      },
      {
        img: liveLoad.src,
        alt: "Live Load",
        label: "Live load",
        value: "0.75 KN/m",
        caption: "Maximum load capacity",
      },
      {
        img: pointLoad.src,
        alt: "Point Load",
        label: "Point load",
        value: "0.50 KN/m",
        caption: "Localized load resistance",
      },
      {
        img: impactTest.src,
        alt: "Impact Test",
        label: "Shot bag impact Test",
        value: "45.4 Kg at 1525 mm height",
        caption: "Safety impact resistance",
      },
    ],
    joining: [
      {
        label: "INSTALLATION TYPE",
        value: "Floor mounted with anchor bolts",
      },
      {
        label: "GLASS SUPPORT",
        value: "Continuous structural glazing",
      },
      {
        label: "HANDRAIL OPTIONS",
        value: ["Round handrail", "Square handrail", "Flat top"],
      },
    ],
    configurations: [
      {
        img: railingGlass,
        title: "Glass Railing",
      },
      {
        img: railingBaluster,
        title: "Baluster Railing",
      },
      {
        img: railingCombined,
        title: "Combined Design",
      },
    ],
    handleOptions: [
      {
        title: "Round Handrail",
        image: roundHandrailImg,
        alt: "Round Handrail",
      },
      {
        title: "Square Handrail",
        image: squareHandrailImg,
        alt: "Square Handrail",
      },
      { title: "Flat Top", image: flatTopImg, alt: "Flat Top Handrail" },
    ],
    faqs: [
      {
        question: "What glass types can be used?",
        answer:
          "The system supports laminated glass in thicknesses of 11.52mm, 12.52mm, and 13.52mm for safety and durability.",
      },
      {
        question: "Is this suitable for outdoor applications?",
        answer:
          "Yes, TOT RL 80 is designed with weather-resistant materials and finishes, making it ideal for outdoor balconies, terraces, and commercial spaces.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Minimal maintenance is required - periodic cleaning and inspection of anchor points and glass panels is sufficient.",
      },
      {
        question: "Can the height be customized?",
        answer:
          "The standard maximum height is 1000mm, but custom heights can be accommodated based on specific project requirements.",
      },
    ],
  },

  {
    name: "TOT RL 125",
    slug: "tot-rl-125",
    shortDescription:
      "Impact engineered. Greater height capacity. Wide glass customizations.",
    category: "railing",
    description:
      "Engineered for impact and elegance, the TOT RL 125 aluminium railing system offers safety with design flexibility — perfect for premium spaces.",
    productRangeImage: rl125_1,
    images: [rl125_1, rl125_2, rl125_3], // Replace with actual image imports
    features: [
      {
        icon: Palette,
        title: "Functional & Classy Design",
        text: "Enhances the beauty of your interiors or exteriors",
      },
      {
        icon: ArrowUp,
        title: "Greater Height",
        text: "Can be customized up to 4 ft for added safety and style",
      },
      {
        icon: Layers,
        title: "Glass Options",
        text: "Wide range of glass customizations for the perfect finish",
      },
    ],
    stats: [
      { label: "Projects Completed", value: "100+", icon: TrendingUp },
      { label: "Happy Customers", value: "80+", icon: UsersRound },
      { label: "Years of Experience", value: "5+", icon: Clock },
      { label: "Quick Installation", value: "1–2 Days", icon: Zap },
    ],
    specs: [
      {
        img: maxHeight.src,
        alt: "Max Height",
        label: "Max Height",
        value: "1200 mm",
      },
      {
        img: glassThickness.src,
        alt: "Glass Thickness",
        label: "Glass Thickness",
        value: "13.52, 15.52, 17.52 mm",
      },
      {
        img: anchorSpecs.src,
        alt: "Anchor Specifications",
        label: "Anchor Specifications",
        value: "HUSA – HR M10 x 105 (Hexagonal Head)",
      },
      {
        img: anchorSpacing.src,
        alt: "Anchor Spacing",
        label: "Anchor Spacing",
        value: "220 mm",
      },
    ],
    performance: [
      {
        img: windLoad.src,
        alt: "Wind Load",
        label: "Wind load",
        value: "2.0 KPA",
        caption: "Enhanced wind resistance",
      },
      {
        img: liveLoad.src,
        alt: "Live Load",
        label: "Live load",
        value: "0.75 KN/m",
        caption: "Maximum load capacity",
      },
      {
        img: pointLoad.src,
        alt: "Point Load",
        label: "Point load",
        value: "0.50 KN/m",
        caption: "Localized load resistance",
      },
      {
        img: impactTest.src,
        alt: "Impact Test",
        label: "Shot bag impact Test",
        value: "45.4 Kg at 1525 mm height",
        caption: "Superior impact resistance",
      },
    ],
    joining: [
      {
        label: "INSTALLATION TYPE",
        value: "Floor mounted with heavy-duty anchor bolts",
      },
      {
        label: "GLASS SUPPORT",
        value: "Enhanced structural glazing system",
      },
      {
        label: "HANDRAIL OPTIONS",
        value: [
          "Premium round handrail",
          "Designer square handrail",
          "Custom profiles",
        ],
      },
      {
        label: "HEIGHT CUSTOMIZATION",
        value: "Up to 4 feet (1200mm)",
      },
    ],
    configurations: [
      {
        img: railingPremiumGlass,
        title: "Premium Glass Railing",
      },
      {
        img: railingHighRise,
        title: "High-Rise Application",
      },
      {
        img: railingCustom,
        title: "Custom Design",
      },
      {
        img: railingCommercial,
        title: "Commercial Grade",
      },
    ],
    handleOptions: [
      {
        title: "Premium Round Handrail",
        image: premiumRoundHandrailImg,
        alt: "Premium Round Handrail",
      },
      {
        title: "Designer Square Handrail",
        image: designerSquareHandrailImg,
        alt: "Designer Square Handrail",
      },
      {
        title: "Custom Profile",
        image: customProfileImg,
        alt: "Custom Profile Handrail",
      },
    ],
    faqs: [
      {
        question: "What makes TOT RL 125 different from RL 80?",
        answer:
          "TOT RL 125 offers greater height capacity (up to 1200mm), enhanced wind load resistance (2.0 KPA), thicker glass options (up to 17.52mm), and closer anchor spacing (220mm) for premium applications.",
      },
      {
        question: "Is this suitable for high-rise buildings?",
        answer:
          "Yes, TOT RL 125 is specifically engineered for high-rise and premium applications with enhanced wind load resistance and impact testing.",
      },
      {
        question: "What glass customization options are available?",
        answer:
          "Wide range of glass options including clear, tinted, frosted, laminated, and decorative glass in thicknesses from 13.52mm to 17.52mm.",
      },
      {
        question:
          "Can this be used for both interior and exterior applications?",
        answer:
          "Yes, TOT RL 125 is designed for both interior and exterior use with appropriate finishes and weather-resistant materials.",
      },
      {
        question: "What is the installation process?",
        answer:
          "Installation involves precise floor mounting with heavy-duty anchor bolts at 220mm to 300mm spacing, followed by glass panel installation and handrail attachment. Professional installation is recommended.",
      },
      {
        question: "Are there any design limitations?",
        answer:
          "TOT RL 125 offers maximum design flexibility with customizable heights up to 4 feet, various glass options, and multiple handrail profiles to suit any architectural requirement.",
      },
    ],
  },
];

export const productsByCategory = products.reduce<GroupedProducts>(
  (acc, item) => {
    const { category, ...rest } = item;
    if (!acc[category]) acc[category] = [];
    acc[category]!.push(rest); // Use non-null assertion since you just initialized it
    return acc;
  },
  {} as GroupedProducts
);

export const productCategories = [
  { id: "sliding", name: "Sliding" },
  { id: "casement", name: "Casement" },
  { id: "railing", name: "Railing" },
];

export const productCategoryToCategoryTitle: Record<string, string> = {
  sliding: "Sliding",
  casement: "Casement",
  railing: "Railing",
};
