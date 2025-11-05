# Hướng dẫn Convert World-Map sang React Leaflet

## Tổng quan

Đã hoàn thành việc convert component `world-map` sang React Leaflet theo từng bước nhỏ để dễ đọc và hiểu code.

## Các bước đã thực hiện

### 1. ✅ Cài đặt Dependencies
```bash
pnpm add react-leaflet leaflet @types/leaflet
```

### 2. ✅ Tạo LeafletMap Component
- **File**: `components/ui/leaflet-map.tsx`
- **Chức năng**: Component cơ bản hiển thị bản đồ Việt Nam với Leaflet
- **Features**:
  - Dynamic import để tránh SSR issues
  - Hỗ trợ dark/light theme
  - Tọa độ trung tâm Việt Nam (16.0, 106.0)

### 3. ✅ Thêm Markers
- Custom marker icons với animation ping
- Hỗ trợ click events
- Hiển thị thông tin tỉnh/thành phố

### 4. ✅ Thêm Polylines
- Nối các địa điểm bằng polylines
- Hỗ trợ cả đường thẳng và đường cong (dash array)
- Màu sắc tùy chỉnh

### 5. ✅ Cải thiện Tooltips & Popups
- Tooltips hiển thị khi hover
- Popups chi tiết khi click
- Styling responsive và đẹp mắt

### 6. ✅ Thêm Animations
- Sequential animation cho markers
- Bounce effect khi markers xuất hiện
- Smooth transitions

### 7. ✅ Theme Support
- Automatic tile layer switching (dark/light)
- Custom styling cho popups, tooltips, controls
- Màu sắc phù hợp với theme

### 8. ✅ Integration
- Tạo `VietnamMap` wrapper component
- Toggle giữa Leaflet và SVG map
- Cập nhật tất cả pages sử dụng

## Cấu trúc Files

```
components/ui/
├── leaflet-map.tsx      # Core Leaflet component
├── vietnam-map.tsx      # Wrapper với toggle functionality
└── world-map.tsx        # Original SVG component (giữ lại)

app/
├── test-leaflet/        # Test page để kiểm tra
├── map/page.tsx         # Updated to use VietnamMap
└── map/[id]/page.tsx    # Updated to use VietnamMap
```

## Sử dụng

### Basic Usage
```tsx
import VietnamMap from "@/components/ui/vietnam-map";

<VietnamMap
  provinces={provinces}
  dots={connections}
  lineColor="#0ea5e9"
  showDotCircles={true}
  useStraightLines={false}
  useLeaflet={true}
  onProvinceClick={(name) => console.log(name)}
/>
```

### Props Interface
```tsx
interface VietnamMapProps {
  provinces?: Array<{
    name: string;
    lat: number;
    lng: number;
    students?: number;
    courses?: number;
  }>;
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
  onProvinceClick?: (provinceName: string) => void;
  showDotCircles?: boolean;
  useStraightLines?: boolean;
  useLeaflet?: boolean; // Toggle between Leaflet and SVG
}
```

## Features

### ✨ Leaflet Map Features
- **Interactive**: Pan, zoom, click interactions
- **Responsive**: Tự động resize theo container
- **Theme-aware**: Dark/light mode support
- **Animated**: Sequential marker animations
- **Customizable**: Colors, styles, behaviors

### 🗺️ Pure Leaflet Implementation
- Chỉ sử dụng Leaflet map (đã bỏ SVG map)
- Giao diện đơn giản, không có toggle button
- Performance tốt hơn với interactive map

### 🎨 Styling
- Custom marker icons với ping animation
- Theme-aware popups và tooltips
- Consistent với design system hiện tại

## Test Page

Truy cập `/test-leaflet` để xem demo và test các features:
- 4 tỉnh/thành phố mẫu
- Connections giữa các địa điểm
- Interactive click events
- Toggle giữa Leaflet và SVG

## Lợi ích của Leaflet

1. **Performance**: Tốt hơn với large datasets
2. **Interactivity**: Pan, zoom, better UX
3. **Extensibility**: Nhiều plugins và customization
4. **Mobile-friendly**: Touch gestures support
5. **Real map data**: Actual geographic context

## Migration Complete

- ✅ Đã loại bỏ hoàn toàn SVG `world-map.tsx` toggle
- ✅ `VietnamMap` giờ chỉ sử dụng Leaflet
- ✅ Tất cả existing props đều được support
- ✅ Cải thiện performance và UX

## Cập nhật mới: Hiển thị đầy đủ bản đồ Việt Nam

### ✅ Cải tiến bounds và hiển thị
- **Bounds chính xác**: Giới hạn bản đồ chỉ hiển thị lãnh thổ Việt Nam
- **Bao gồm tất cả các đảo**: Phú Quốc, Côn Đảo, Cát Bà, Lý Sơn, v.v.
- **Trung tâm tối ưu**: Tọa độ trung tâm (14.0583, 108.2772)
- **Zoom constraints**: Min zoom 5, Max zoom 12
- **MaxBounds**: Ngăn người dùng kéo ra ngoài Việt Nam

### 🏝️ Các đảo được bao gồm
- **Phú Quốc**: Đảo lớn nhất, cực Tây Nam
- **Côn Đảo**: Quần đảo lịch sử phía Nam
- **Cát Bà**: Đảo lớn nhất vịnh Hạ Long
- **Lý Sơn**: "Quảng Ngãi trên biển"
- **Và nhiều đảo khác**: Trong bounds được định nghĩa

### 🎯 Tính năng mới
```tsx
// Bounds bao gồm tất cả lãnh thổ Việt Nam
const vietnamBounds: [[number, number], [number, number]] = [
  [8.1790665, 102.14441],   // Southwest (bao gồm Phú Quốc)
  [23.393395, 109.6765537]  // Northeast (Đông Bắc + đảo xa)
];

<MapContainer
  bounds={vietnamBounds}
  maxBounds={vietnamBounds}
  maxBoundsViscosity={1.0}
  minZoom={5}
  maxZoom={12}
/>
```

## Next Steps

1. **Performance optimization**: Lazy loading, clustering
2. **More map layers**: Satellite, terrain options
3. **Advanced interactions**: Draw tools, measurements
4. **Mobile optimization**: Touch gestures, responsive controls
5. **Analytics**: Track user interactions
6. **Island details**: Thêm thông tin chi tiết cho từng đảo

## Troubleshooting

### SSR Issues
- Đã sử dụng dynamic imports
- Component chỉ render sau khi mounted

### Styling Issues
- CSS được inject dynamically theo theme
- Leaflet CSS được import properly

### Performance
- Markers được animate sequentially
- Cleanup timeouts để tránh memory leaks
