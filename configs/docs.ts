import React from 'react';
import {
  COMPONENT_KEYS,
  DOCS_CATEGORY_GROUP,
  DOCS_CATEGORY_KEY,
} from '../const/docs';
import {
  DocsCategoryKey,
  DocsFileRef,
  DocsNavigationCategory,
} from '../types/docs';

const humanize = (key: string) =>
  key
    .replace(/[_-]+/g, ' ')
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());

export interface IAllComponents {
  category: DocsCategoryKey;
  componentName: string;
  componentSrc?: React.LazyExoticComponent<React.ComponentType<any>>;
  iframeSrc?: string;
  tags: string[];
  iframe?: boolean;
  center?: boolean;
  href: string;
  slug: string;
  title: string;
  iframelink?: string;
  filesrc?: string;
  filesArray?: DocsFileRef[];
  description: string;
}
export type ComponentMeta = {
  category: string;
  slug: string;
  href: string;
  title: string;
  description: string;
  tags: string[];
};

export const AllComponents: IAllComponents[] = [
  {
    category: DOCS_CATEGORY_KEY['r3f-blob'],
    componentName: COMPONENT_KEYS.R3F_BLOB,
    title: humanize(COMPONENT_KEYS.R3F_BLOB),
    href: '/components/r3f-blob',
    slug: 'r3f-blob',
    description: 'R3F BLOB component using Three.js',
    iframelink: COMPONENT_KEYS.R3F_BLOB,
    tags: ['r3f-blob', 'threejs r3f blob', 'React3 Fiber r3f blob'],
  },

  {
    category: DOCS_CATEGORY_KEY['mesh-gradients'],
    title: humanize(COMPONENT_KEYS.MESH_SHADERGRADIENT),
    href: '/components/mesh-gradients',
    slug: 'mesh-gradients',
    description:
      'MESH SHADERGRADIENT component using Three.js with stunning gradient effects',
    componentName: COMPONENT_KEYS.MESH_SHADERGRADIENT,
    iframelink: COMPONENT_KEYS.MESH_SHADERGRADIENT,
    tags: [
      'mesh-gradient',
      'threejs mesh graddient',
      'React3 Fiber mesh Gradient',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['mesh-gradients'],
    componentName: COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND3,
    title: humanize(COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND3),
    href: '/components/mesh-gradients',
    slug: 'mesh-gradients',
    description:
      'MESH GRADIENT BACKGROUND3 component using Three.js with stunning gradient effects',
    iframelink: COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND3,
    tags: [
      'mesh-gradient',
      'threejs mesh graddient',
      'React3 Fiber mesh Gradient',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['mesh-gradients'],
    componentName: COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND2,
    title: humanize(COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND2),
    href: '/components/mesh-gradients',
    slug: 'mesh-gradients',
    description:
      'MESH GRADIENT BACKGROUND2 component using Three.js with stunning gradient effects',
    iframelink: COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND2,
    tags: [
      'mesh-gradient',
      'threejs mess graddient',
      'React3 Fiber Mess Gradient',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['mesh-gradients'],
    componentName: COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND,
    title: humanize(COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND),
    href: '/components/mesh-gradients',
    slug: 'mesh-gradients',
    description:
      'MESH GRADIENT BACKGROUND component using Three.js with stunning gradient effects',
    iframelink: COMPONENT_KEYS.MESH_GRADIENT_BACKGROUND,
    tags: [
      'mesh-gradient',
      'threejs mess graddient',
      'React3 Fiber Mess Gradient',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['image-ripple-effect'],
    componentName: COMPONENT_KEYS.IMG_RIPPLE_EFFECT,
    title: humanize(COMPONENT_KEYS.IMG_RIPPLE_EFFECT),
    href: '/components/image-ripple-effect',
    slug: 'image-ripple-effect',
    description: 'IMG RIPPLE EFFECT component using Three.js',
    iframelink: 'img-ripple-effect',
    tags: [
      'img-ripple-effect',
      'threejs ripple effect',
      'React three Fiber Ripple Effect',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['image-ripple-effect'],
    componentName: COMPONENT_KEYS.SINGLE_IMG_RIPPLE_EFFECT,
    title: humanize(COMPONENT_KEYS.SINGLE_IMG_RIPPLE_EFFECT),
    href: '/components/image-ripple-effect',
    slug: 'image-ripple-effect',
    description: 'SINGLE IMG RIPPLE EFFECT component using Three.js',
    iframelink: 'img-ripple-effect2',
    tags: [
      'single img-ripple-effect',
      'img-ripple-effect',
      'threejs ripple effect',
      'React three Fiber Ripple Effect',
    ],
  },

  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_GLOBE,
    title: humanize(COMPONENT_KEYS.SPARKLES_GLOBE),
    href: '/components/sparkles',
    slug: 'sparkles',
    description: 'SPARKLES GLOBE component',
    iframelink: 'sparkles-globe',
    tags: ['Sparkles', '3D Globe Sparkles', 'Globe Hero Section'],
  },

  {
    category: DOCS_CATEGORY_KEY['horizontal-scroll'],
    componentName: COMPONENT_KEYS.HORIZONTALSCROLL,
    title: humanize(COMPONENT_KEYS.HORIZONTALSCROLL),
    href: '/components/horizontal-scroll',
    slug: 'horizontal-scroll',
    description: 'HORIZONTALSCROLL - horizontal scroll component',
    iframelink: 'horizontal-scrolling-section',
    tags: ['White 3D Globe', 'White 3D Globe Card'],
  },

  {
    category: DOCS_CATEGORY_KEY['stacking-card'],
    componentName: COMPONENT_KEYS.STACKING_CARD,
    title: humanize(COMPONENT_KEYS.STACKING_CARD),
    href: '/components/stacking-card',
    slug: 'stacking-card',
    description: 'STACKING CARD component',
    iframelink: 'stacking-card',
    tags: ['Card Stack', 'Interactive Cards'],
  },

  {
    category: DOCS_CATEGORY_KEY['stacking-card'],
    componentName: COMPONENT_KEYS.CSS_CARD_STACKING,
    title: humanize(COMPONENT_KEYS.CSS_CARD_STACKING),
    href: '/components/stacking-card',
    slug: 'stacking-card',
    description: 'CSS CARD STACKING component',
    iframelink: 'css-stacking-details-card',
    tags: ['CSS Stacking', 'Details Card'],
  },

  {
    category: DOCS_CATEGORY_KEY['stacking-card'],
    componentName: COMPONENT_KEYS.CSS_IMAGE_STACKING,
    title: humanize(COMPONENT_KEYS.CSS_IMAGE_STACKING),
    href: '/components/stacking-card',
    slug: 'stacking-card',
    description: 'CSS IMAGE STACKING component',
    iframelink: 'css-stacking-card',
    tags: ['CSS Image Stack', 'Stacking Card'],
  },

  {
    category: DOCS_CATEGORY_KEY['smooth-scroll'],
    componentName: COMPONENT_KEYS.SMOOTH_SCROLL,
    href: '/components/smooth-scroll',
    title: humanize(COMPONENT_KEYS.SMOOTH_SCROLL),
    slug: 'smooth-scroll',
    description: 'SMOOTH SCROLL component',
    iframelink: 'smooth-scroll',
    tags: ['Smooth Scrolling', 'Lenis Smooth Scroll', 'Scroll Animation'],
  },

  {
    category: DOCS_CATEGORY_KEY['sticky-scroll'],
    componentName: COMPONENT_KEYS.STICKY_SCROLL_SECTION,
    title: humanize(COMPONENT_KEYS.STICKY_SCROLL_SECTION),
    href: '/components/sticky-scroll',
    slug: 'sticky-scroll',
    description: 'STICKY SCROLL SECTION component',
    iframelink: 'sticky-scroll-section',
    tags: ['Sticky Scroll', 'Section'],
  },

  {
    category: DOCS_CATEGORY_KEY['sticky-scroll'],
    componentName: COMPONENT_KEYS.STICKY_GALLERY,
    title: humanize(COMPONENT_KEYS.STICKY_GALLERY),
    href: '/components/sticky-scroll',
    slug: 'sticky-scroll',
    description: 'STICKY GALLERY component',
    iframelink: 'sticky-gallery',
    tags: ['Sticky Gallery', 'Gallery Scroll'],
  },

  {
    category: DOCS_CATEGORY_KEY['sticky-scroll'],
    componentName: COMPONENT_KEYS.STICKY_HERO_SECTION,
    title: humanize(COMPONENT_KEYS.STICKY_HERO_SECTION),
    href: '/components/sticky-scroll',
    slug: 'sticky-scroll',
    description: 'STICKY HERO SECTION component',
    iframelink: 'sticky-hero-section',
    tags: ['Sticky Hero', 'Hero Section'],
  },
  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_SECTION,
    title: humanize(COMPONENT_KEYS.SPARKLES_SECTION),
    href: '/components/sparkles',
    slug: 'sparkles',
    description: 'SPARKLES SECTION component',
    iframelink: 'sparkles-section',
    tags: ['Sparkles', 'Sparkles Section'],
  },

  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_BRANDING,
    title: humanize(COMPONENT_KEYS.SPARKLES_BRANDING),
    href: '/components/sparkles',
    slug: 'sparkles',
    description: 'SPARKLES BRANDING component',
    iframelink: 'sparkles-branding',
    tags: ['Sparkles', 'Sparkles Branding'],
  },

  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_TITLE,
    title: humanize(COMPONENT_KEYS.SPARKLES_TITLE),
    href: '/components/sparkles',
    slug: 'sparkles',
    description: 'SPARKLES TITLE component',
    iframelink: 'sparkles-title',
    tags: ['Sparkles', 'Sparkles Title'],
  },

  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_TITLE2,
    title: humanize(COMPONENT_KEYS.SPARKLES_TITLE2),
    href: '/components/sparkles',
    slug: 'sparkles',
    description: 'SPARKLES TITLE2 component',
    iframelink: 'sparkles-title2',
    tags: ['Sparkles', 'Sparkles Title'],
  },

  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_TITLE3,
    iframelink: 'sparkles-title3',
    title: humanize(COMPONENT_KEYS.SPARKLES_TITLE3),
    href: '/components/sparkles',
    slug: 'sparkles',
    description: 'SPARKLES TITLE3 component',
    tags: ['Sparkles', 'Sparkles Title'],
  },

  {
    category: DOCS_CATEGORY_KEY['sparkles'],
    componentName: COMPONENT_KEYS.SPARKLES_TITLE4,
    href: '/components/sparkles',
    title: humanize(COMPONENT_KEYS.SPARKLES_TITLE4),
    slug: 'sparkles-title4',
    description: 'SPARKLES TITLE4 component',
    iframelink: 'sparkles-title4',
    tags: ['Sparkles', 'Sparkles Title'],
  },
];

export const ComponentMetaByCategory = AllComponents.reduce((map, m) => {
  const list = map.get(m.category) ?? [];
  list.push(m);
  map.set(m.category, list);
  return map;
}, new Map<string, ComponentMeta[]>());

export const getAllComponentsArray = () => {
  const result: {
    category: string;
    slug: string;
    href: string;
    title: string;
    description: string;
    tags: string[];
  }[] = [];

  for (const [category, components] of ComponentMetaByCategory) {
    for (const component of components) {
      result.push({
        category,
        slug: component.slug,
        href: component.href,
        title: component.title,
        description: component.description,
        tags: component.tags,
      });
    }
  }

  return result;
};
