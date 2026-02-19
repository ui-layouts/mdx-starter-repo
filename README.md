<img alt="UI-Layout - Design That Really Makes Sense" src="ui-layouts.jpg" width="100%">

UI-LAYOUTs is an open-source component library that makes easier for developers and designers to build websites. It's focused on creative designs. I love to create comopnent that really matter or need your site and I belive in future I'll bring more as i kept bringing more just support me

<!-- <h3 align="center">UI-Layout</h3>
<p align="center">
    Design That Really Makes Sense
</p> -->


# Folder Structure

```
├── .turbo/
│   └── turbo-build.log
├── app/
│   ├── (docs-page)/
│   │   ├── components/
│   │   │   ├── [...slug]/
│   │   │   │   ├── not-found.tsx
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── get-started/
│   │   │   └── page.mdx
│   │   └── layout.tsx
│   ├── example/
│   │   └── page.tsx
│   ├── live-components/
│   │   └── [componentName]/
│   │       ├── error.tsx
│   │       ├── loading.tsx
│   │       └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── token.css
├── assets/
│   ├── icons/
│   │   ├── circle.png
│   │   ├── component.svg
│   │   ├── doc_icon2.png
│   │   ├── doc_icon3.png
│   │   ├── doc_icon4.png
│   │   ├── doc_icon5.png
│   │   ├── doc_star.png
│   │   ├── home.svg
│   │   ├── Icons.tsx
│   │   ├── Rectangle.png
│   │   └── triangle.png
│   ├── img/
│   │   ├── astronate1.jpg
│   │   ├── astronate2.jpg
│   │   ├── astronate3.jpg
│   │   ├── astronate4.jpg
│   │   └── bg.jpg
│   ├── preview/
│   │   ├── blob.png
│   │   ├── buttons.svg
│   │   ├── card.svg
│   │   ├── carousel.svg
│   │   ├── clip-path.svg
│   │   ├── coffee.svg
│   │   ├── drag-items.svg
│   │   ├── faqs.svg
│   │   ├── gallery.svg
│   │   ├── gallerynew.svg
│   │   ├── globe.svg
│   │   ├── grid.svg
│   │   ├── Group 5 (1).png
│   │   ├── hero-section.svg
│   │   ├── horizontal-scrolling.svg
│   │   ├── image_masking.svg
│   │   ├── image_mousetrail.svg
│   │   ├── image-reveal.svg
│   │   ├── mesh-gradient.png
│   │   ├── modal.svg
│   │   ├── motion-number.svg
│   │   ├── mousetrail.svg
│   │   ├── password.svg
│   │   ├── Preview.tsx
│   │   ├── responsive.svg
│   │   ├── ripple.png
│   │   ├── sparkles.svg
│   │   ├── stacking card.svg
│   │   ├── sticky.svg
│   │   ├── tabs.svg
│   │   ├── timeline.svg
│   │   └── youtube-tags.svg
│   ├── index.ts
│   └── preview_bg.png
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── scroll-area.tsx
│   │   ├── tabs.tsx
│   │   └── tree.tsx
│   ├── uilayouts/
│   │   ├── directional-drawer.tsx
│   │   ├── liquid-gradient.tsx
│   │   └── responsive-modal.tsx
│   └── website/
│       ├── code-components/
│       │   ├── box-preview.tsx
│       │   ├── client-pre-code.tsx
│       │   ├── code-block.tsx
│       │   ├── code-snippets.tsx
│       │   ├── code-tabs.tsx
│       │   ├── component-code-preview.tsx
│       │   ├── component-preview.tsx
│       │   ├── copy-button.tsx
│       │   ├── copy-npm-button.tsx
│       │   ├── iframe-component-preview.tsx
│       │   ├── inlineCodeRenderer.tsx
│       │   ├── inlinePreCodeRenderer.tsx
│       │   ├── pagination.tsx
│       │   ├── pre-code.tsx
│       │   └── tree-view-code.tsx
│       ├── icons/
│       │   ├── github.tsx
│       │   ├── index.tsx
│       │   └── x.tsx
│       ├── banner.tsx
│       ├── buy-me-coffee.tsx
│       ├── constant.tsx
│       ├── container.tsx
│       ├── copy-page.tsx
│       ├── footer.tsx
│       ├── gap-pattern.tsx
│       ├── github-repo-btn.tsx
│       ├── header.tsx
│       ├── mobile-header.tsx
│       ├── new-items-loading.tsx
│       ├── searchbar.tsx
│       ├── sidebar.tsx
│       ├── table-of-compoents.tsx
│       ├── theme-provider.tsx
│       └── theme-switch.tsx
├── configs/
│   └── docs.ts
├── const/
│   └── docs.ts
├── content/
│   └── components/
│       ├── accordion.mdx
│       ├── animated-beam.mdx
│       ├── blocks.mdx
│       ├── blur-vignette.mdx
│       └── buttons.mdx
├── hooks/
│   ├── use-media-query.tsx
│   ├── useClickOutside.tsx
│   ├── useClipBoarard.tsx
│   ├── useMouted.tsx
│   ├── useNewsLetter.tsx
│   ├── useOptimizedIframe.ts
│   └── useZustStore.tsx
├── lib/
│   ├── code.ts
│   ├── component-projections.tsx
│   ├── docs.tsx
│   ├── get-component-code.ts
│   ├── grouped-docs.ts
│   ├── progressbar.tsx
│   ├── shiki-highlighter.ts
│   ├── toc.ts
│   ├── transform-code-files.ts
│   ├── tree-structure.tsx
│   └── utils.ts
├── public/
│   ├── 50off.png
│   ├── apple-touch-icon.png
│   ├── blob.png
│   ├── blocks-og.jpg
│   ├── favicon-16x16.png
│   ├── favicon.ico
│   ├── nalaka.png
│   ├── naymur.png
│   ├── naymursprite.png
├── registry/
│   └── components/
│       └── accordion/
│           ├── faq.tsx
│           ├── image-hover.tsx
│           └── tailwind-image-accordion.tsx
├── types/
│   ├── docs.ts
│   ├── nav.ts
│   └── svg.d.ts
├── .eslintrc.json
├── .gitignore
├── bun.lock
├── components.json
├── mdx-components.tsx
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── prettier.config.js
├── README.md
├── registry.json
└── tsconfig.json
```

## Installation

You must install `tailwindcss`. As most of our components use `framer-motion` install it too.

```bash
npm install motion clsx tailwind-merge
```

Must Add it in the `utils.ts`:

```tsx title="utils.tsx"
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

use this hooks for mediaQueries:

```tsx title="use-media-query.tsx"
import { useEffect, useState } from 'react'

export function useMediaQuery(query: string) {
  const [value, setValue] = useState(false)

  useEffect(() => {
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches)
    }

    const result = matchMedia(query)
    result.addEventListener('change', onChange)
    setValue(result.matches)

    return () => result.removeEventListener('change', onChange)
  }, [query])

  return value
}
```



## Most Used Components

- [R3F Blob Effect](https://ui-layouts.com/components/r3f-blob)
- [Image Ripple Effect](https://ui-layouts.com/components/image-ripple-effect)
- [Buy Me Coffee](https://ui-layouts.com/components/buy-me-coffee)
- [Youtube Tags](https://ui-layouts.com/components/tags-input)
- [File Upload](https://ui-layouts.com/components/file-upload)
- [Password](https://ui-layouts.com/components/password)
- [Range Slider](https://ui-layouts.com/components/range-slider)
- [Motion Number](https://ui-layouts.com/components/motion-number)
- [Embla Carousel](https://ui-layouts.com/components/embla-carousel)
- [Sparkles](https://ui-layouts.com/components/sparkles)
- [Drag Items](https://ui-layouts.com/components/drag-items)
- [Timeline Animation](https://ui-layouts.com/components/timeline-animation)
- [Clip Path Image](https://ui-layouts.com/components/clip-path-image)
- [Buttons](https://ui-layouts.com/components/buttons)
- [Image Mousetrail](https://ui-layouts.com/components/image-mousetrail)
- [Image Reveal](https://ui-layouts.com/components/image-reveal)

Visit all the [components](https://www.ui-layouts.com/components).

## Labs

Visit [Labs](https://www.ui-layouts.com/labs) to explore more experiments and ideas.

## 👤 Author (Naymur)

- X: [@naymur_dev](https://x.com/naymur_dev)
- LinkedIn: [in/naymur-rahman](https://www.linkedin.com/in/naymur-rahman/)

## Be A Sponsor

<a href="https://buymeacoffee.com/naymurdev"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="naymur-uilayout" /></a>
<br/>