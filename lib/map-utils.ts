// Utility functions cho việc xử lý bản đồ

// Database tọa độ các tỉnh/thành phố Việt Nam
const VIETNAM_COORDINATES: Record<string, { lat: number; lng: number }> = {
  // Miền Bắc
  "Hà Nội": { lat: 21.0285, lng: 105.8542 },
  "Hải Phòng": { lat: 20.8449, lng: 106.6881 },
  "Cao Bằng": { lat: 22.6667, lng: 106.2667 },
  "Lạng Sơn": { lat: 21.8537, lng: 106.7614 },
  "Quảng Ninh": { lat: 21.0064, lng: 107.2925 },
  "Bắc Kạn": { lat: 22.1455, lng: 105.8336 },
  "Thái Nguyên": { lat: 21.5944, lng: 105.8480 },
  "Tuyên Quang": { lat: 21.8237, lng: 105.2280 },
  "Hòa Bình": { lat: 20.8181, lng: 105.3376 },
  "Sơn La": { lat: 21.3256, lng: 103.9188 },
  "Lai Châu": { lat: 22.3964, lng: 103.4705 },
  "Điện Biên": { lat: 21.385, lng: 103.015 },
  "Yên Bái": { lat: 21.7229, lng: 104.9113 },
  "Lào Cai": { lat: 22.4856, lng: 103.9707 },
  
  // Miền Trung
  "Thanh Hóa": { lat: 19.8067, lng: 105.7851 },
  "Nghệ An": { lat: 18.6742, lng: 105.6922 },
  "Hà Tĩnh": { lat: 18.3559, lng: 105.9069 },
  "Quảng Bình": { lat: 17.4615, lng: 106.3731 },
  "Quảng Trị": { lat: 16.8, lng: 106.95 },
  "Thừa Thiên Huế": { lat: 16.4637, lng: 107.5909 },
  "Đà Nẵng": { lat: 16.0544, lng: 108.2022 },
  "Quảng Nam": { lat: 15.5394, lng: 108.0191 },
  "Quảng Ngãi": { lat: 15.1214, lng: 108.8044 },
  "Bình Định": { lat: 13.7765, lng: 109.2216 },
  "Phú Yên": { lat: 13.0955, lng: 109.2957 },
  "Khánh Hòa": { lat: 12.2585, lng: 109.0526 },
  "Ninh Thuận": { lat: 11.5753, lng: 108.9860 },
  "Bình Thuận": { lat: 10.9312, lng: 108.1004 },
  
  // Tây Nguyên
  "Kon Tum": { lat: 14.3497, lng: 108.0005 },
  "Gia Lai": { lat: 13.9833, lng: 108.65 },
  "Đắk Lắk": { lat: 12.71, lng: 108.2378 },
  "Đắk Nông": { lat: 12.2646, lng: 107.6098 },
  "Lâm Đồng": { lat: 11.9404, lng: 108.4583 },
  
  // Miền Nam
  "TP. Hồ Chí Minh": { lat: 10.7769, lng: 106.7009 },
  "Bà Rịa - Vũng Tàu": { lat: 10.6, lng: 107.2333 },
  "Đồng Nai": { lat: 10.8, lng: 107.3833 },
  "Bình Dương": { lat: 11.3254, lng: 106.4770 },
  "Bình Phước": { lat: 11.5667, lng: 106.6667 },
  "Tây Ninh": { lat: 11.3100, lng: 106.0983 },
  "Long An": { lat: 10.75, lng: 105.95 },
  "Tiền Giang": { lat: 10.4167, lng: 106.1667 },
  "Bến Tre": { lat: 10.2417, lng: 106.375 },
  "Trà Vinh": { lat: 9.9477, lng: 106.3420 },
  "Vĩnh Long": { lat: 10.2397, lng: 105.9571 },
  "Đồng Tháp": { lat: 10.4938, lng: 105.6881 },
  "An Giang": { lat: 10.3889, lng: 105.1258 },
  "Kiên Giang": { lat: 10.0125, lng: 105.0808 },
  "Cần Thơ": { lat: 10.0452, lng: 105.7469 },
  "Hậu Giang": { lat: 9.7571, lng: 105.6412 },
  "Sóc Trăng": { lat: 9.6003, lng: 105.9800 },
  "Bạc Liêu": { lat: 9.2515, lng: 105.7244 },
  "Cà Mau": { lat: 9.1767, lng: 105.1524 },
};

// Aliases cho các tên tỉnh có thể viết khác nhau
const PROVINCE_ALIASES: Record<string, string> = {
  "Sài Gòn": "TP. Hồ Chí Minh",
  "Huế": "Thừa Thiên Huế",
  "Hải Dương": "Hải Phòng", // Fallback
  "Việt Bắc": "Bắc Kạn", // Khu vực Việt Bắc
  "Tây Bắc": "Sơn La", // Khu vực Tây Bắc
  "Biên giới": "Cao Bằng", // Khu vực biên giới
  "Thượng Lào": "Điện Biên", // Gần biên giới Lào
  "Khe Sanh": "Quảng Trị",
  "Xuân Lộc": "Đồng Nai",
  "Buôn Ma Thuột": "Đắk Lắk",
  "Mộc Hóa": "Long An",
  "La Ngà": "Đồng Nai",
  "Bình Giã": "Bà Rịa - Vũng Tàu",
  "Ba Gia": "Quảng Ngãi",
  "Ấp Bắc": "Tiền Giang",
  "Đồng Xoài": "Bình Phước",
  "Phước Long": "Bình Phước",
  "Đắk Pơ": "Gia Lai",
};

/**
 * Parse tên địa điểm từ tên chiến dịch và trả về danh sách các tỉnh
 */
export function parseLocationFromName(name: string): string[] {
  const locations: string[] = [];
  
  // Các pattern phổ biến
  const patterns = [
    // "Chiến dịch Tây Bắc" -> ["Sơn La", "Yên Bái"]
    /Chiến dịch\s+(.+)/i,
    // "Trận Ấp Bắc" -> ["Ấp Bắc"]
    /Trận\s+(.+)/i,
    // "Biên giới thu đông" -> ["Biên giới"]
    /(.+)\s+thu\s+đông/i,
    // Tên trực tiếp
    /^(.+)$/
  ];

  for (const pattern of patterns) {
    const match = name.match(pattern);
    if (match) {
      const locationPart = match[1].trim();
      
      // Xử lý các trường hợp đặc biệt
      if (locationPart.includes("Biên giới")) {
        locations.push("Cao Bằng", "Lạng Sơn");
      } else if (locationPart.includes("Tây Bắc")) {
        locations.push("Sơn La", "Yên Bái", "Lai Châu");
      } else if (locationPart.includes("Việt Bắc")) {
        locations.push("Bắc Kạn", "Tuyên Quang", "Thái Nguyên");
      } else if (locationPart.includes("Thượng Lào")) {
        locations.push("Điện Biên");
      } else if (locationPart.includes("Hòa Bình")) {
        locations.push("Hòa Bình");
      } else if (locationPart.includes("Trị") && locationPart.includes("Thiên")) {
        locations.push("Quảng Trị", "Thừa Thiên Huế");
      } else if (locationPart.includes("Hà Nội") && locationPart.includes("Hải Phòng")) {
        locations.push("Hà Nội", "Hải Phòng");
      } else if (locationPart.includes("Quảng Nam") && locationPart.includes("Đà Nẵng")) {
        locations.push("Quảng Nam", "Đà Nẵng");
      } else if (locationPart.includes("Bình Long") && locationPart.includes("Phước Long")) {
        locations.push("Bình Phước"); // Cả hai đều thuộc Bình Phước ngày nay
      } else {
        // Tách theo dấu gạch ngang, phẩy
        const parts = locationPart.split(/[-,–]/).map(p => p.trim());
        locations.push(...parts);
      }
      break;
    }
  }

  return locations.length > 0 ? locations : [name];
}

/**
 * Lấy tọa độ của một tỉnh/thành phố
 */
export function getProvinceCoordinates(provinceName: string): { lat: number; lng: number } | null {
  // Thử tìm trực tiếp
  if (VIETNAM_COORDINATES[provinceName]) {
    return VIETNAM_COORDINATES[provinceName];
  }
  
  // Thử tìm qua aliases
  const aliasName = PROVINCE_ALIASES[provinceName];
  if (aliasName && VIETNAM_COORDINATES[aliasName]) {
    return VIETNAM_COORDINATES[aliasName];
  }
  
  // Thử tìm partial match
  for (const [key, coords] of Object.entries(VIETNAM_COORDINATES)) {
    if (key.toLowerCase().includes(provinceName.toLowerCase()) || 
        provinceName.toLowerCase().includes(key.toLowerCase())) {
      return coords;
    }
  }
  
  return null;
}

/**
 * Tạo danh sách markers từ một address có thể có nhiều địa điểm
 */
export function createMarkersFromAddress(address: {
  id: string;
  name: string;
  content: string;
  lat: number;
  lng: number;
}): Array<{
  name: string;
  lat: number;
  lng: number;
  content: string;
  originalName: string;
}> {
  const markers: Array<{
    name: string;
    lat: number;
    lng: number;
    content: string;
    originalName: string;
  }> = [];

  // Luôn thêm marker gốc
  markers.push({
    name: address.name,
    lat: address.lat,
    lng: address.lng,
    content: address.content,
    originalName: address.name,
  });

  // Parse các địa điểm khác từ tên
  const locations = parseLocationFromName(address.name);
  
  for (const location of locations) {
    if (location === address.name) continue; // Skip marker gốc
    
    const coords = getProvinceCoordinates(location);
    if (coords) {
      markers.push({
        name: location,
        lat: coords.lat,
        lng: coords.lng,
        content: address.content,
        originalName: address.name,
      });
    }
  }

  return markers;
}
