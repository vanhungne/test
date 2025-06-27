# Hướng dẫn lập trình Menu Categories Section - SALIENT

## 📖 Tổng quan

### Mô tả Section
Đây là **Hero section** kết hợp với **Product Categories Menu** - một layout 2 cột với:
- **Cột trái**: Hero image với text overlay
- **Cột phải**: Grid menu 6 categories sản phẩm skincare

### Mục tiêu
Tạo một section hướng dẫn users navigate qua các loại sản phẩm skincare với visual impact mạnh và UX trực quan.

## 🎨 Phân tích thiết kế

### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│ Header Navigation (đã có từ section trước)              │
├─────────────────────┬───────────────────────────────────┤
│                     │  ┌─────────┐  ┌─────────┐       │
│   Hero Image        │  │Cleanse  │  │Anti-Acne│       │
│   + Text Overlay    │  └─────────┘  └─────────┘       │
│                     │  ┌─────────┐  ┌─────────┐       │
│                     │  │Moisturize│ │Supplements│      │
│                     │  └─────────┘  └─────────┘       │
│                     │  ┌─────────┐  ┌─────────┐       │
│                     │  │Exfoliators│ │Extracts │      │
│                     │  └─────────┘  └─────────┘       │
└─────────────────────┴───────────────────────────────────┘
```

### Visual Elements

#### Hero Section (Left)
- **Background**: Gradient overlay trên ảnh người
- **Gradient**: Orange/Red (#FF6B3D → #FF4A1C)
- **Typography**: 
  - Main heading: "Don't delay. Take control over your skin."
  - Subheading: "The secret to glowing skin"
- **Text color**: White
- **Image**: Portrait của người phụ nữ blonde

#### Categories Grid (Right)
- **Layout**: 2x3 grid
- **Cards**: Background trắng, subtle shadow
- **Icons**: Minimalist line icons
- **Typography**: 
  - Category name: Bold, dark
  - Description: Light gray, smaller

### Categories Data
```json
{
  "categories": [
    {
      "id": 1,
      "name": "Cleanse",
      "description": "Gently remove all skin impurities",
      "icon": "sun",
      "color": "#FFB800"
    },
    {
      "id": 2,
      "name": "Anti-Acne", 
      "description": "Say goodbye to breakouts",
      "icon": "target",
      "color": "#2563EB"
    },
    {
      "id": 3,
      "name": "Moisturize",
      "description": "Deep hydrating penetration", 
      "icon": "droplets",
      "color": "#06B6D4"
    },
    {
      "id": 4,
      "name": "Supplements",
      "description": "Give your skin the added edge",
      "icon": "flask",
      "color": "#8B5CF6"
    },
    {
      "id": 5,
      "name": "Exfoliators",
      "description": "Nourish your skin for an all-day glow",
      "icon": "sparkles",
      "color": "#F59E0B"
    },
    {
      "id": 6,
      "name": "Extracts",
      "description": "Harness the power of vitamins",
      "icon": "leaf",
      "color": "#10B981"
    }
  ]
}
```

## 🛠️ Implementation Plan

### Phase 1: HTML Structure ⏱️ 30 phút
**Mục tiêu**: Tạo semantic markup cho hero + categories section

**Tasks**:
1. Tạo container section với 2 columns
2. Hero column: image container + text overlay
3. Categories column: grid container + category cards
4. Add proper semantic tags và accessibility

**HTML Structure**:
```html
<section class="hero-categories-section">
  <div class="container">
    <div class="hero-categories-grid">
      <!-- Hero Column -->
      <div class="hero-column">
        <div class="hero-image-container">
          <img src="hero-woman.jpg" alt="Woman with glowing skin">
          <div class="hero-overlay">
            <h1>Don't delay. Take control over your skin.</h1>
            <p>The secret to glowing skin</p>
          </div>
        </div>
      </div>
      
      <!-- Categories Column -->
      <div class="categories-column">
        <div class="categories-grid">
          <div class="category-card">
            <div class="category-icon">
              <!-- Icon here -->
            </div>
            <h3>Cleanse</h3>
            <p>Gently remove all skin impurities</p>
          </div>
          <!-- Repeat for other categories -->
        </div>
      </div>
    </div>
  </div>
</section>
```

**Checklist Phase 1**:
- [ ] HTML structure semantic và accessible
- [ ] Content hierarchy rõ ràng
- [ ] Grid structure chuẩn bị sẵn cho styling
- [ ] Images có alt text phù hợp

### Phase 2: Layout với Tailwind CSS ⏱️ 45 phút
**Mục tiêu**: Tạo responsive layout 2 columns

**Tasks**:
1. Setup main grid layout (hero + categories)
2. Hero column: relative positioning cho overlay
3. Categories grid: 2x3 responsive grid
4. Basic spacing và alignment

**Tailwind Classes**:
```html
<section class="py-16 lg:py-24">
  <div class="container mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
      <!-- Hero Column -->
      <div class="relative overflow-hidden rounded-2xl">
        <div class="aspect-[4/5] relative">
          <img class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-80"></div>
          <div class="absolute inset-0 flex flex-col justify-center items-start p-8 lg:p-12">
            <h1 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
              Don't delay. Take control over your skin.
            </h1>
            <p class="text-lg lg:text-xl text-white/90">
              The secret to glowing skin
            </p>
          </div>
        </div>
      </div>
      
      <!-- Categories Column -->  
      <div class="grid grid-cols-2 gap-4 lg:gap-6">
        <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <!-- Category content -->
        </div>
      </div>
    </div>
  </div>
</section>
```

**Checklist Phase 2**:
- [ ] 2-column layout responsive
- [ ] Hero image aspect ratio correct
- [ ] Categories grid 2x3 layout
- [ ] Spacing consistent across breakpoints

### Phase 3: Hero Section Styling ⏱️ 45 phút
**Mục tiêu**: Hoàn thiện hero image với gradient overlay

**Tasks**:
1. Image styling và positioning
2. Gradient overlay chính xác
3. Typography hierarchy
4. Text positioning và readability

**Key Styling**:
```html
<!-- Hero Image Container -->
<div class="relative overflow-hidden rounded-2xl lg:rounded-3xl">
  <div class="aspect-[4/5] lg:aspect-[3/4] relative">
    <!-- Background Image -->
    <img 
      src="hero-woman.jpg" 
      alt="Woman with healthy glowing skin"
      class="w-full h-full object-cover object-center"
    />
    
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-orange-500/70 via-orange-600/80 to-red-600/90"></div>
    
    <!-- Text Content -->
    <div class="absolute inset-0 flex flex-col justify-center p-8 lg:p-12">
      <h1 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.1] mb-4 max-w-lg">
        Don't delay. Take control over your skin.
      </h1>
      <p class="text-lg lg:text-xl text-white/90 font-medium">
        The secret to glowing skin
      </p>
    </div>
  </div>
</div>
```

**Checklist Phase 3**:
- [ ] Gradient overlay color match design
- [ ] Text readable với good contrast
- [ ] Typography scales responsive
- [ ] Image positioning optimal

### Phase 4: Categories Grid Styling ⏱️ 60 phút
**Mục tiêu**: Style category cards với icons và hover effects

**Tasks**:
1. Category card design
2. Icon integration (Lucide React icons)
3. Hover states và transitions
4. Typography styling

**Category Card Structure**:
```html
<div class="group bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
  <!-- Icon -->
  <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
    <Sun className="w-6 h-6 lg:w-7 lg:h-7 text-orange-500" />
  </div>
  
  <!-- Content -->
  <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
    Cleanse
  </h3>
  <p class="text-gray-600 leading-relaxed">
    Gently remove all skin impurities
  </p>
</div>
```

**Icon Mapping** (Lucide React):
```javascript
import { 
  Sun,        // Cleanse
  Target,     // Anti-Acne  
  Droplets,   // Moisturize
  FlaskConical, // Supplements
  Sparkles,   // Exfoliators
  Leaf        // Extracts
} from 'lucide-react'
```

**Checklist Phase 4**:
- [ ] Cards có shadow và hover effects
- [ ] Icons centered và sized correctly
- [ ] Typography hierarchy clear
- [ ] Hover animations smooth

### Phase 5: Responsive Optimization ⏱️ 30 phút
**Mục tiêu**: Fine-tune responsive behavior

**Tasks**:
1. Mobile layout optimization
2. Tablet breakpoint adjustments
3. Desktop spacing refinement
4. Cross-device testing

**Responsive Considerations**:
```html
<!-- Mobile: Stack vertically -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

<!-- Categories: Mobile 1 col, Tablet 2 cols -->  
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">

<!-- Typography: Scale by breakpoint -->
<h1 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">

<!-- Padding: Adjust per device -->
<div class="p-6 sm:p-8 lg:p-12">
```

**Checklist Phase 5**:
- [ ] Mobile experience intuitive
- [ ] Tablet layout balanced
- [ ] Desktop spacing generous
- [ ] No horizontal scroll any device

## 🎨 Design Specifications

### Color Palette
```css
:root {
  /* Hero Gradient */
  --hero-orange: #FF6B3D;
  --hero-red: #FF4A1C;
  
  /* Category Colors */
  --cleanse: #FFB800;
  --anti-acne: #2563EB;
  --moisturize: #06B6D4;
  --supplements: #8B5CF6;
  --exfoliators: #F59E0B;
  --extracts: #10B981;
  
  /* Neutrals */
  --white: #FFFFFF;
  --gray-50: #F9FAFB;
  --gray-600: #4B5563;
  --gray-900: #111827;
}
```

### Typography Scale
```css
/* Desktop */
.hero-title { font-size: 3rem; line-height: 1.1; } /* 48px */
.hero-subtitle { font-size: 1.25rem; } /* 20px */
.category-title { font-size: 1.5rem; } /* 24px */
.category-desc { font-size: 1rem; } /* 16px */

/* Mobile */
.hero-title { font-size: 2rem; } /* 32px */
.hero-subtitle { font-size: 1.125rem; } /* 18px */
.category-title { font-size: 1.25rem; } /* 20px */
.category-desc { font-size: 0.875rem; } /* 14px */
```

### Spacing System
```css
/* Container Padding */
.section-padding: 4rem 1rem; /* 64px 16px */
.section-padding-lg: 6rem 1rem; /* 96px 16px */

/* Card Padding */
.card-padding: 1.5rem; /* 24px */
.card-padding-lg: 2rem; /* 32px */

/* Grid Gaps */
.grid-gap: 1rem; /* 16px */
.grid-gap-lg: 1.5rem; /* 24px */
```

## 🧩 Component Structure

### Hero Component
```javascript
const HeroSection = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl">
      <div className="aspect-[4/5] lg:aspect-[3/4] relative">
        <img 
          src="/images/hero-woman.jpg"
          alt="Woman with healthy glowing skin"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/70 to-red-600/90" />
        <div className="absolute inset-0 flex flex-col justify-center p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
            Don't delay. Take control over your skin.
          </h1>
          <p className="text-lg lg:text-xl text-white/90">
            The secret to glowing skin
          </p>
        </div>
      </div>
    </div>
  )
}
```

### Categories Component
```javascript
const CategoriesGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  )
}

const CategoryCard = ({ category }) => {
  const IconComponent = iconMap[category.icon]
  
  return (
    <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mb-4">
        <IconComponent className="w-6 h-6 text-orange-500" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {category.name}
      </h3>
      <p className="text-gray-600">
        {category.description}
      </p>
    </div>
  )
}
```

## 🧪 Testing Strategy

### Visual Testing
- [ ] Hero gradient matches design exactly
- [ ] Category cards aligned và sized correctly  
- [ ] Icons centered và colored properly
- [ ] Typography hierarchy clear
- [ ] Hover effects smooth

### Responsive Testing
- [ ] Mobile: Hero + categories stack vertically
- [ ] Tablet: Categories remain 2-column grid
- [ ] Desktop: Full 2-column layout optimal
- [ ] Text readable at all sizes
- [ ] Images scale appropriately

### Interaction Testing
- [ ] Category cards clickable/hoverable
- [ ] Hover effects provide good feedback
- [ ] Touch interactions work on mobile
- [ ] Keyboard navigation accessible
- [ ] Screen reader compatibility

## 🎯 Performance Considerations

### Image Optimization
```html
<!-- Hero Image with optimization -->
<img 
  src="/images/hero-woman.webp"
  srcSet="/images/hero-woman-mobile.webp 480w, 
          /images/hero-woman-tablet.webp 768w,
          /images/hero-woman-desktop.webp 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Woman with healthy glowing skin"
  loading="eager"
  className="w-full h-full object-cover"
/>
```

### CSS Optimization
- Sử dụng Tailwind utilities để minimize CSS
- Avoid custom CSS khi có thể
- Use `will-change: transform` cho hover animations
- Optimize gradient để smooth rendering

## 📱 Mobile-First Approach

### Mobile Layout (< 768px)
```html
<section className="py-12">
  <div className="container mx-auto px-4">
    <!-- Hero trên, Categories dưới -->
    <div className="space-y-8">
      <div className="hero-mobile">
        <!-- Hero content -->
      </div>
      <div className="grid grid-cols-1 gap-4">
        <!-- Categories 1 column trên mobile -->
      </div>
    </div>
  </div>
</section>
```

### Tablet Layout (768px - 1024px)
```html
<!-- Có thể giữ stack vertically hoặc side-by-side -->
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <!-- Hero + Categories 2 columns trên tablet lớn -->
</div>
```

### Desktop Layout (> 1024px)
```html
<!-- Full 2-column layout với generous spacing -->
<div className="grid lg:grid-cols-2 gap-16 items-center">
  <!-- Optimal desktop experience -->
</div>
```

## 🎨 Animation Opportunities (Future Phase)

Sau khi hoàn thành static version, có thể thêm:

### Entrance Animations
- Hero image fade-in với scale effect
- Categories cards stagger animation
- Text elements typewriter effect

### Micro-interactions  
- Icon bounce on card hover
- Gradient shift on hero hover
- Smooth category filtering
- Loading states

### Scroll Animations
- Parallax cho hero image
- Cards animate in on scroll
- Progressive disclosure

---

File này cung cấp roadmap đầy đủ để Claude-Code implement hero section với categories menu một cách professional và systematic!