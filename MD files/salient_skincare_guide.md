# Hướng dẫn lập trình giao diện SALIENT Skincare

## Tổng quan dự án

### Mục tiêu
Tạo ra giao diện section sản phẩm skincare với thiết kế clean, modern và responsive sử dụng HTML + Tailwind CSS v4.

### Thông tin kỹ thuật
- **Framework**: Tailwind CSS v4
- **Responsive**: Mobile, Tablet, Desktop
- **Browser**: Chrome (primary)
- **Loại**: Landing page/E-commerce section

## Phân tích thiết kế

### Cấu trúc chính
1. **Header Navigation**
   - Logo SALIENT ở giữa
   - Navigation menu bên trái: Skincare, Accessories, New (với icon star)
   - Utility menu bên phải: Demos, Search, User, Cart
   
2. **Hero Section** 
   - Tagline: "Quality ingredients. Real results."
   - Link "View All Products" ở góc phải

3. **Product Grid**
   - Layout dạng grid responsive
   - Mỗi product card có: hình ảnh, tên sản phẩm, mô tả
   - Background đa dạng: ảnh người, màu gradient, ảnh sản phẩm

### Màu sắc và Typography
- **Màu chủ đạo**: Trắng, đen, các tone pastel
- **Font**: Sans-serif, clean, modern
- **Spacing**: Rộng rãi, thoáng đãng

### Responsive Breakpoints
- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1024px (2-3 columns)  
- **Desktop**: > 1024px (4-5 columns)

## Kế hoạch thực hiện

### Phase 1: Cấu trúc HTML cơ bản ⏱️ 30-45 phút
**Mục tiêu**: Tạo semantic HTML structure
**Deliverables**:
- File HTML với cấu trúc đầy đủ
- Semantic tags đúng chuẩn
- Accessibility attributes cơ bản

**Tasks**:
1. Setup HTML5 boilerplate
2. Tạo header navigation structure
3. Tạo hero section markup  
4. Tạo product grid container và cards
5. Add semantic tags và ARIA labels

**Checklist kiểm tra**:
- [ ] HTML validate không lỗi
- [ ] Semantic structure rõ ràng
- [ ] Accessibility attributes đầy đủ
- [ ] Content hiển thị đúng thứ tự khi không có CSS

### Phase 2: Layout cơ bản với Tailwind ⏱️ 45-60 phút  
**Mục tiêu**: Tạo layout chính và positioning
**Deliverables**:
- Header navigation layout hoàn chỉnh
- Grid system cho products
- Basic spacing và positioning

**Tasks**:
1. Setup Tailwind CSS v4
2. Tạo header layout với flexbox
3. Implement responsive grid cho products
4. Set up basic spacing và containers
5. Tạo card layout structure

**Checklist kiểm tra**:
- [ ] Header alignment đúng design
- [ ] Grid responsive hoạt động tốt
- [ ] Spacing nhất quán
- [ ] Layout không bị vỡ ở các breakpoint

### Phase 3: Styling chi tiết ⏱️ 60-90 phút
**Mục tiêu**: Hoàn thiện visual design
**Deliverables**:
- Typography matching design
- Color scheme chính xác  
- Card styling hoàn chỉnh
- Visual hierarchy rõ ràng

**Tasks**:
1. Implement typography scale
2. Add background colors/gradients cho cards
3. Style navigation items và states
4. Add hover effects cơ bản
5. Implement image styling và aspect ratios

**Checklist kiểm tra**:
- [ ] Font sizes và weights đúng design
- [ ] Colors match chính xác
- [ ] Card styling nhất quán
- [ ] Navigation states rõ ràng
- [ ] Images hiển thị đúng tỉ lệ

### Phase 4: Responsive refinement ⏱️ 30-45 phút
**Mục tiêu**: Tối ưu responsive design
**Deliverables**:
- Mobile layout hoàn hảo
- Tablet adaptation smooth  
- Desktop experience tối ưu

**Tasks**:
1. Fine-tune mobile layout
2. Adjust tablet grid và spacing
3. Optimize desktop experience
4. Test across different screen sizes
5. Adjust typography scales cho từng breakpoint

**Checklist kiểm tra**:
- [ ] Mobile UX smooth và intuitive
- [ ] Tablet layout cân đối
- [ ] Desktop experience premium
- [ ] Không có horizontal scroll
- [ ] Content readable ở mọi size

### Phase 5: Polish và optimization ⏱️ 30 phút
**Mục tiêu**: Hoàn thiện và tối ưu
**Deliverables**:
- Code clean và organized
- Performance tối ưu
- Cross-browser compatibility

**Tasks**:
1. Clean up CSS classes
2. Optimize images và assets
3. Test browser compatibility  
4. Validate HTML/CSS
5. Code review và refactor

**Checklist kiểm tra**:
- [ ] Code dễ đọc và maintain
- [ ] Performance score tốt
- [ ] Hoạt động tốt trên Chrome
- [ ] HTML/CSS validate pass
- [ ] Không có unused CSS

## Tài nguyên cần thiết

### Assets cần chuẩn bị
1. **Images**: 
   - Logo SALIENT (SVG preferred)
   - Product images (tối thiểu 5 sản phẩm)
   - Background images cho cards
   
2. **Icons**:
   - Star icon cho "New" tag
   - Search, User, Cart icons
   - Social media icons (nếu cần)

3. **Fonts**:
   - Primary font family (Google Fonts recommended)
   - Font weights: 400, 500, 600, 700

### Content data
```json
{
  "products": [
    {
      "id": 1,
      "name": "Daily anti-acne cream with Tretinoin",
      "description": "A multi-purpose cream that fights breakouts while keeping skin youthful.",
      "image": "/images/product-1.jpg",
      "background": "image"
    },
    {
      "id": 2, 
      "name": "Magic eye kit",
      "description": "Super charged active retinol cream that fights off stubborn eye bags 24/7.",
      "image": "/images/product-2.jpg", 
      "background": "gradient-purple"
    },
    {
      "id": 3,
      "name": "Multi-peptide soothing moisturizer", 
      "description": "An excellent source of antioxidants to sooth your skin. Made from waterlily extracts.",
      "image": "/images/product-3.jpg",
      "background": "image"
    },
    {
      "id": 4,
      "name": "Refreshing complete vitamin C Nectar serum",
      "description": "Protect and rejuvenate your skin with our most potent vitamin C serum yet.", 
      "image": "/images/product-4.jpg",
      "background": "gradient-orange"
    }
  ]
}
```

## Code structure

### File organization
```
project/
├── index.html
├── styles/
│   ├── input.css
│   └── output.css
├── images/
│   ├── logo.svg
│   ├── product-1.jpg
│   ├── product-2.jpg
│   └── ...
├── js/
│   └── main.js (for future enhancements)
└── tailwind.config.js
```

### CSS Architecture
- Sử dụng Tailwind utility classes
- Custom components cho repeated patterns
- Responsive-first approach
- Mobile-first CSS methodology

## Testing checklist

### Visual Testing
- [ ] Layout đúng design trên desktop
- [ ] Mobile layout user-friendly
- [ ] Typography clear và readable
- [ ] Images load và display correctly
- [ ] Colors match design specification

### Functional Testing  
- [ ] Navigation links hoạt động
- [ ] Responsive breakpoints smooth
- [ ] No layout breaks at any width
- [ ] Accessibility features functional
- [ ] Page load performance acceptable

### Cross-browser Testing
- [ ] Chrome (primary)
- [ ] Firefox
- [ ] Safari  
- [ ] Edge

## Delivery milestones

### Milestone 1: HTML Structure ✅
- Semantic HTML hoàn chỉnh
- Content structure rõ ràng
- Accessibility markup cơ bản

### Milestone 2: Layout Foundation ✅  
- Header navigation functional
- Product grid responsive
- Basic layout working

### Milestone 3: Visual Design ✅
- Styling match design
- Typography implemented
- Color scheme accurate

### Milestone 4: Responsive Polish ✅
- Mobile experience excellent
- All breakpoints optimized
- Cross-device testing complete

### Milestone 5: Final Delivery ✅
- Code clean và documented
- Performance optimized
- Ready for production

## Notes for Claude-Code

### Development approach
1. **Phân tích trước khi code**: Đọc kỹ từng phase và hiểu rõ requirements
2. **Incremental development**: Hoàn thành từng phase trước khi chuyển sang phase tiếp theo
3. **Validation mỗi bước**: Đảm bảo mỗi phase đạt được checklist goals
4. **Communication**: Báo cáo progress và ask for review sau mỗi phase

### Key principles
- **Semantic HTML first**: Structure before styling
- **Mobile-first responsive**: Start từ mobile breakpoint
- **Accessibility-conscious**: Luôn cân nhắc a11y
- **Performance-aware**: Optimize from the start
- **Maintainable code**: Clean, readable, và scalable

### Quality standards
- HTML validates without errors
- CSS classes semantic và organized
- Responsive design smooth across devices
- Performance score > 90 (Lighthouse)
- Code readable và well-commented