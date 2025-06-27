# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the SALIENT Skincare e-commerce frontend - a responsive landing page showcasing skincare products. The project uses Vite as the build tool and Tailwind CSS v4 for styling.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:5173/)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture and Key Components

### Project Structure
- **Two HTML versions**: 
  - `index.html` - Main version using Vite and local Tailwind setup
  - `index-standalone.html` - Standalone version with Tailwind CDN (no build required)
- **Styling**: Tailwind CSS v4 with custom CSS in `/src/style.css`
- **Images**: Product images stored in `/images/` directory (1.jpg through 7.jpg)

### Main UI Components

1. **Header Navigation**
   - Centered SALIENT logo with light font weight and wide letter spacing
   - Left menu: Skincare, Accessories, New (with star icon) - hidden on mobile except "New"
   - Right menu: Demos (desktop only), Search, User, Cart icons
   - Mobile hamburger menu button (left side)
   - Fixed height: 64px mobile, 80px desktop

2. **Hero Section**
   - "Quality ingredients. Real results." tagline
   - "View All Products" link on the right
   - Reduced padding for closer proximity to products
   - Gradient background from gray-50 to white

3. **Product Carousel**
   - Horizontal scrollable grid showing 7 products
   - Fixed dimensions: 420x640px per card (525px image + 115px content)
   - Container max-width: 1360px to show ~80px of 4th product
   - Gap between cards: 16px (mobile) to 24px (desktop)
   - No rounded corners on product cards
   - Content area has no separate background (inherits from card)

### Interactive Features

1. **Drag-to-Scroll**
   - Click and drag to scroll horizontally (desktop)
   - Touch and swipe support (mobile)
   - Drag effect animations (0.3s transition):
     - Cards scale down to 95%
     - Gap expands to 2rem
   - Smooth return to normal state on release
   - Scroll-snap disabled during drag for smoother experience

2. **Image Hover Effect**
   - Images zoom to 110% on hover
   - 500ms ease-in-out transition
   - Images have `draggable="false"` to prevent ghost dragging

### Styling Conventions
- **Tailwind v4** with configuration in `tailwind.config.js`
- **Font**: Inter (loaded via Google Fonts)
- **Text colors**: 
  - Titles: text-gray-900
  - Descriptions: text-gray-600 (white cards), text-gray-700 (gradient cards)
- **Custom utilities** in `/src/style.css`:
  - `.scrollbar-hide` - Hides scrollbar while maintaining scroll functionality
  - `.products-grid.dragging` - Special styles for drag state
  - Scroll-snap only when not dragging

### Product Card Structure
- Cards with gradient backgrounds: Purple (#2), Orange (#4), Green (#6)
- White background cards: #1, #3, #5, #7
- Each card contains product image (525px height) and description below
- Black text on all cards for consistency
- No separate background for content area

## Development Guidelines

### When modifying the carousel:
- Maintain fixed card dimensions (420x640px)
- Preserve drag-to-scroll functionality in the JavaScript section
- Keep `draggable="false"` on images to prevent ghost dragging
- Container width is set to 1360px to show partial 4th product
- Left padding only (no right padding) for proper peek effect

### When updating styles:
- Run `npm run dev` to see changes with hot module replacement
- Tailwind classes are automatically processed through PostCSS
- For production, always run `npm run build`
- Check both `index.html` and `index-standalone.html` for consistency

### Browser Support
- Primary target: Chrome
- Tested on: Firefox, Safari, Edge
- Mobile-responsive with touch support

## Recent Updates and Important Notes

### Drag Animation Implementation
- Uses CSS transitions (0.3s) for smooth zoom and gap expansion
- JavaScript adds/removes `dragging` class on mousedown/mouseup
- Scroll-snap is disabled during drag to prevent conflicts
- Simplified implementation without momentum scrolling for better animation control

### Known Product Details
1. **Product 1**: Daily anti-acne cream with Tretinoin (white background)
2. **Product 2**: Magic eye kit (purple gradient: from-purple-100 via-purple-50 to-pink-100)
3. **Product 3**: Multi-peptide soothing moisturizer (white background)
4. **Product 4**: Refreshing complete vitamin C Nectar serum (orange gradient: from-orange-100 via-yellow-50 to-amber-100)
5. **Product 5**: Hydrating facial cleanser (white background)
6. **Product 6**: Brightening face mask (green gradient: from-green-100 via-emerald-50 to-teal-100)
7. **Product 7**: Overnight repair serum (white background)

### CSS Architecture Notes
- Custom styles in `/src/style.css` handle special behaviors
- Tailwind utilities handle most styling
- Gradient backgrounds are applied at the card level, not image wrapper
- Focus states use 2px solid outline with 2px offset

## Key Implementation Details

The Vietnamese development guide (`salient_skincare_guide.md`) outlines a 5-phase approach that was followed:
1. Semantic HTML structure
2. Layout with Tailwind CSS
3. Detailed styling
4. Responsive refinement  
5. Polish and optimization

Each phase includes specific checkpoints and quality standards that should be maintained in future updates.