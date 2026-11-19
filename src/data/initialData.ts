export interface SiteSettings {
  brandName: string;
  brandSub: string;
  logoMode: 'custom_brand' | 'original_img';
  logoUrl: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDesc: string;
  heroImage: string;
  hotline: string;
  hotlineRaw: string;
  zaloPhone: string;
  address: string;
  openHours: string;
  email: string;
  facebookUrl: string;
  instagramUrl: string;
  topBarCommitments: string[];
  heroTrustBadges: string[];
  footerAbout: string;
  copyrightNote: string;
  imgbbKey: string;
}

export interface FlowerCategory {
  id: string;
  name: string;
  slug: string;
  eyebrow: string;
  sectionHeading: string;
  ctaLabel: string;
  image: string;
  codeWatermark: string;
  order: number;
}

export interface FlowerProduct {
  id: string;
  code: string;
  title: string;
  slug: string;
  categorySlug: string;
  categoryName: string;
  priceText: string;
  priceNumber: number;
  image: string;
  fullImage: string;
  description: string;
  status: 'published' | 'draft';
  featured: boolean;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  status: 'published' | 'draft';
  views: number;
}

export interface CustomerOrder {
  id: string;
  customerName: string;
  phone: string;
  occasion: string;
  message: string;
  productCode?: string;
  productTitle?: string;
  totalPrice?: string;
  status: 'new' | 'processing' | 'completed';
  createdAt: string;
}

export const THAM_TRAN_SETTINGS: SiteSettings = {
  brandName: 'Hà Thảo Mộc',
  brandSub: 'Đặc sản & Đồ ngâm rượu đất rừng Nho Quan – Ninh Bình',
  logoMode: 'custom_brand',
  logoUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80',
  heroEyebrow: 'THẢO DƯỢC TỰ NHIÊN ĐẤT RỪNG NHO QUAN',
  heroTitle: 'Rượu chuẩn vị thuốc quý\nBình đẹp trọn chữ tâm',
  heroDesc: 'Chuyên sỉ lẻ Đồ ngâm rượu chuẩn men nếp, Tam thất bắc rừng già, Trái nhàu lên men mật ong & Dược liệu đất rừng Cúc Phương. Tư vấn công thức & tỷ lệ ngâm chuẩn vị tại gia.',
  heroImage: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=1200&q=80',
  hotline: '0329 169 998',
  hotlineRaw: '0329169998',
  zaloPhone: '0329169998',
  address: 'Thị trấn Nho Quan, huyện Nho Quan, tỉnh Ninh Bình',
  openHours: '06:30 – 21:30 tất cả các ngày trong tuần',
  email: 'truongthuyha758111@gmail.com',
  facebookUrl: 'https://www.facebook.com/hathaomoc.ninhbinh',
  instagramUrl: '',
  topBarCommitments: [
    '100% Thảo mộc tự nhiên đất rừng Cúc Phương',
    'Men nếp ta truyền thống - Không cồn công nghiệp',
    'Giao toàn quốc - Kiểm tra hàng trước khi thanh toán',
    'Tư vấn tỷ lệ vàng & bài thuốc ngâm miễn phí'
  ],
  heroTrustBadges: [
    'Dược liệu chọn lọc',
    'Men nếp truyền thống',
    'Đóng thùng chống vỡ',
    'Tư vấn trọn đời'
  ],
  footerAbout: 'Hà Thảo Mộc tự hào gìn giữ và mang đến những tinh hoa dược thảo quý báu từ vùng rừng núi Nho Quan – Cúc Phương (Ninh Bình). Từng củ tam thất, nhánh ba kích hay trái nhàu đều được chọn lọc kỹ càng, sơ chế thủ công và ngâm với men nếp truyền thống, giữ trọn dược tính bồi bổ sức khỏe cho mọi gia đình.',
  copyrightNote: '© 2026 Hà Thảo Mộc (Ninh Bình). Chuyên Đồ Ngâm Rượu & Thảo Dược Thiên Nhiên.',
  imgbbKey: ''
};

export const ORIGINAL_DEMO_SETTINGS: SiteSettings = {
  ...THAM_TRAN_SETTINGS,
  brandName: 'Hà Thảo Mộc',
  brandSub: 'Đặc sản Nho Quan - Ninh Bình',
};

export const INITIAL_CATEGORIES: FlowerCategory[] = [
  {
    id: 'cat-1',
    name: 'Đồ Ngâm Rượu Quý',
    slug: 'do-ngam-ruou',
    eyebrow: 'BỔ THẬN TRÁNG DƯƠNG - KHỎE GÂN CỐT',
    sectionHeading: 'Đồ Ngâm Rượu Chuẩn Rừng Tuyển Chọn',
    ctaLabel: 'Xem tất cả đồ ngâm rượu',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
    codeWatermark: 'RƯỢU QUÝ',
    order: 1
  },
  {
    id: 'cat-2',
    name: 'Tam Thất Bắc Rừng Già',
    slug: 'tam-that-bac',
    eyebrow: 'TIÊU VIÊM HÒA HUYẾT - THỨ NHẤT TAM THẤT',
    sectionHeading: 'Tam Thất Bắc Củ Già & Bột Xay Nguyên Chất',
    ctaLabel: 'Xem tất cả tam thất bắc',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80',
    codeWatermark: 'TAM THẤT',
    order: 2
  },
  {
    id: 'cat-3',
    name: 'Trái Nhàu & Mật Ong Rừng',
    slug: 'trai-nhau-mat-ong',
    eyebrow: 'CỨU TINH XƯƠNG KHỚP - GIẤC NGỦ AN LÀNH',
    sectionHeading: 'Trái Nhàu Lên Men & Mật Ong Rừng Tự Nhiên',
    ctaLabel: 'Xem sản phẩm trái nhàu & mật ong',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    codeWatermark: 'TRÁI NHÀU',
    order: 3
  },
  {
    id: 'cat-4',
    name: 'Thảo Dược & Trà Dưỡng Sinh',
    slug: 'thao-duoc-tra',
    eyebrow: 'AN THẦN HẠ ÁP - DƯỠNG SINH MỖI NGÀY',
    sectionHeading: 'Nụ Hoa Tam Thất & Thảo Mộc Bồi Bổ Gia Đình',
    ctaLabel: 'Xem tất cả thảo dược & trà',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    codeWatermark: 'THẢO DƯỢC',
    order: 4
  }
];

export const INITIAL_PRODUCTS: FlowerProduct[] = [
  // --- Đồ Ngâm Rượu ---
  {
    id: 'prod-nr-01',
    code: 'BK01',
    title: 'Ba Kích Tím Rừng Tươi (Đã Rút Sạch Lõi)',
    slug: 'ba-kich-tim-rung-tuoi-rut-loi',
    categorySlug: 'do-ngam-ruou',
    categoryName: 'Đồ Ngâm Rượu Quý',
    priceText: '280.000 đ / kg',
    priceNumber: 280000,
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1200&q=80',
    description: 'Ba kích tím tự nhiên đào từ rừng già, củ mập nhiều thịt. Tự tay em Hà chẻ đôi và rút 100% lõi gỗ chát độc. Ngâm cùng rượu nếp men ta 42-45 độ sau 3 tháng nước chuyển tím than trong veo, uống êm, bổ thận tráng dương, mạnh gân cốt.',
    status: 'published',
    featured: true,
    createdAt: '2026-11-15'
  },
  {
    id: 'prod-nr-02',
    code: 'CH02',
    title: 'Chuối Hột Rừng Tây Bắc Hạt Nhỏ Sấy Tự Nhiên',
    slug: 'chuoi-hot-rung-tay-bac-hat-nho',
    categorySlug: 'do-ngam-ruou',
    categoryName: 'Đồ Ngâm Rượu Quý',
    priceText: '120.000 đ / kg',
    priceNumber: 120000,
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=80',
    description: 'Chuối rừng hột nhỏ quả chín bẻ tay, sấy khô tự nhiên thơm lừng. Rất tốt cho người sỏi thận, đau lưng mỏi gối, gout và đau nhức khớp. 1kg ngâm 4-5 lít rượu nếp, sau 100 ngày nước rượu màu vàng hổ phách ngọt thơm.',
    status: 'published',
    featured: true,
    createdAt: '2026-11-15'
  },
  {
    id: 'prod-nr-03',
    code: 'SC03',
    title: 'Sâm Cau Đỏ Rừng (Tiên Mao) Chọn Lọc',
    slug: 'sam-cau-do-rung-tien-mao',
    categorySlug: 'do-ngam-ruou',
    categoryName: 'Đồ Ngâm Rượu Quý',
    priceText: '220.000 đ / kg',
    priceNumber: 220000,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    description: 'Sâm cau đỏ đào tự nhiên vỏ đỏ au thớ thịt chắc. Được mệnh danh là "thần dược phái mạnh", giúp tráng dương ôn thận, bổ huyết, kích thích sản sinh sinh lực tự nhiên. Sơ chế ngâm nước gạo khử chát chuẩn bài trước khi giao.',
    status: 'published',
    featured: false,
    createdAt: '2026-11-15'
  },
  {
    id: 'prod-nr-04',
    code: 'NC04',
    title: 'Nấm Ngọc Cẩu Tươi Rừng Già (Tỏa Dương)',
    slug: 'nam-ngoc-cau-tuoi-rung-gia',
    categorySlug: 'do-ngam-ruou',
    categoryName: 'Đồ Ngâm Rượu Quý',
    priceText: '250.000 đ / kg',
    priceNumber: 250000,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    description: 'Nấm ngọc cẩu ruột đỏ tím mọc ký sinh trên rễ cây rừng đại ngàn. Cực kỳ thơm khi ngâm rượu, hỗ trợ phục hồi sức khỏe sau ốm, kích thích tiêu hóa và bổ tinh huyết cho cả nam lẫn nữ.',
    status: 'published',
    featured: false,
    createdAt: '2026-11-15'
  },
  {
    id: 'prod-nr-05',
    code: 'BR05',
    title: 'Bình Rượu Ngâm Sẵn Chuối Hột Rừng 5 Lít (Bình Thủy Tinh)',
    slug: 'binh-ruou-ngam-san-chuoi-hot-rung-5l',
    categorySlug: 'do-ngam-ruou',
    categoryName: 'Đồ Ngâm Rượu Quý',
    priceText: '550.000 đ / bình',
    priceNumber: 550000,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    description: 'Bình thủy tinh cao cấp 5L ngâm sẵn nếp nương chuẩn 42 độ cùng chuối hột rừng tuyển chọn. Nước rượu đã ngấu trên 6 tháng màu cánh gián thơm ngọt, mang về trưng phòng khách hay biếu tặng đều sang trọng.',
    status: 'published',
    featured: true,
    createdAt: '2026-11-15'
  },
  {
    id: 'prod-nr-06',
    code: 'BR06',
    title: 'Bình Rượu Ba Kích Tím Rút Lõi 5 Lít (Chuẩn Men Nếp Ta)',
    slug: 'binh-ruou-ba-kich-tim-5l',
    categorySlug: 'do-ngam-ruou',
    categoryName: 'Đồ Ngâm Rượu Quý',
    priceText: '750.000 đ / bình',
    priceNumber: 750000,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80',
    description: 'Bình ba kích tím rút lõi ngâm rượu nếp cái hoa vàng đã hạ thổ 100 ngày. Nước rượu tím than sóng sánh, vị êm ru không cay gắt, rót chén rượu mời khách vừa thơm vừa quý.',
    status: 'published',
    featured: true,
    createdAt: '2026-11-15'
  },

  // --- Tam Thất Bắc ---
  {
    id: 'prod-tt-01',
    code: 'TT52',
    title: 'Củ Tam Thất Bắc Rừng Già 7 Năm (Loại 52 củ / kg)',
    slug: 'cu-tam-that-bac-rung-gia-52-cu',
    categorySlug: 'tam-that-bac',
    categoryName: 'Tam Thất Bắc Rừng Già',
    priceText: '1.650.000 đ / kg',
    priceNumber: 1650000,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1200&q=80',
    description: 'Củ tam thất bắc củ to đầm tay, nhiều mắt sần sùi chứa hàm lượng Saponin cao vượt trội. Hỗ trợ tiêu u hạch, cầm máu, điều hòa huyết áp, phục hồi thể lực sau ốm hoặc sau sinh. Cam kết 100% không tráng chì, không hóa chất.',
    status: 'published',
    featured: true,
    createdAt: '2026-11-15'
  },
  {
    id: 'prod-tt-02',
    code: 'TT70',
    title: 'Củ Tam Thất Bắc Chọn Lọc (Loại 70 củ / kg)',
    slug: 'cu-tam-that-bac-chon-loc-70-cu',
    categorySlug: 'tam-that-bac',
    categoryName: 'Tam Thất Bắc Rừng Già',
    priceText: '1.350.000 đ / kg',
    priceNumber: 1350000,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80',
    description: 'Size vừa vặn thích hợp thái lát ngâm mật ong hoặc hầm gà bồi bổ sức khỏe hàng tuần. Củ cứng đanh như đá, bẻ đôi ruột xám xanh đặc quánh, vị đắng gắt đầu lưỡi hậu ngọt mát cuống họng.',
    status: 'published',
    featured: false,
    createdAt: '2026-11-15'
  },
  {
    id: 'prod-tt-03',
    code: 'BTT03',
    title: 'Bột Tam Thất Bắc Xay Mịn Nguyên Chất (Hũ 500g)',
    slug: 'bot-tam-that-bac-xay-min-nguyen-chat',
    categorySlug: 'tam-that-bac',
    categoryName: 'Tam Thất Bắc Rừng Già',
    priceText: '750.000 đ / hũ',
    priceNumber: 750000,
    image: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&w=1200&q=80',
    description: 'Được rửa sạch, phơi khô kiệt và nghiền trực tiếp từ củ tam thất loại 1 bằng máy công nghiệp siêu mịn. Tiện lợi pha cùng mật ong rừng uống mỗi sáng, bảo vệ dạ dày, hoạt huyết dưỡng não.',
    status: 'published',
    featured: true,
    createdAt: '2026-11-15'
  },
  {
    id: 'prod-tt-04',
    code: 'NTT04',
    title: 'Nụ Hoa Tam Thất Bao Tử Loại 1 (Gói 500g)',
    slug: 'nu-hoa-tam-that-bao-tu-loai-1',
    categorySlug: 'tam-that-bac',
    categoryName: 'Tam Thất Bắc Rừng Già',
    priceText: '450.000 đ / gói',
    priceNumber: 450000,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    description: 'Nụ hoa tam thất hái lúc chưa nở, hạt tròn đều còn nguyên cuống non màu xanh tươi. Hãm nước sôi uống thay trà hàng ngày giúp hạ huyết áp, ngủ sâu giấc, hạ mỡ máu và thanh nhiệt cơ thể.',
    status: 'published',
    featured: false,
    createdAt: '2026-11-15'
  },

  // --- Trái Nhàu & Mật Ong ---
  {
    id: 'prod-nm-01',
    code: 'TN01',
    title: 'Hũ Trái Nhàu Lên Men Mật Ong Rừng (Hũ Thủy Tinh 1.5 Lít)',
    slug: 'hu-trai-nhau-len-men-mat-ong-1-5l',
    categorySlug: 'trai-nhau-mat-ong',
    categoryName: 'Trái Nhàu & Mật Ong Rừng',
    priceText: '320.000 đ / hũ',
    priceNumber: 320000,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1200&q=80',
    description: 'Sản phẩm tâm đắc của chị Hà: Trái nhàu chín mọng đất Nho Quan kết hợp cùng mật ong hoa rừng Cúc Phương ủ lên men tự nhiên. Nước sánh vàng chua ngọt thanh dịu, chuyên giảm đau nhức khớp gối, tê bì tay chân và hỗ trợ tiêu hóa.',
    status: 'published',
    featured: true,
    createdAt: '2026-11-15'
  },
  {
    id: 'prod-nm-02',
    code: 'TN02',
    title: 'Trái Nhàu Tươi Già Chọn Lọc Đất Nho Quan (Hái Theo Đơn)',
    slug: 'trai-nhau-tuoi-nho-quan',
    categorySlug: 'trai-nhau-mat-ong',
    categoryName: 'Trái Nhàu & Mật Ong Rừng',
    priceText: '60.000 đ / kg',
    priceNumber: 60000,
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=1200&q=80',
    description: 'Trái nhàu hái từ cây lâu năm sau vườn nhà không phun bón hóa chất. Quả già cùi dày, khách đặt mới ra vườn bứt đóng gửi liền trong ngày để đảm bảo độ tươi mọng về tự ngâm đường phèn hoặc ngâm rượu.',
    status: 'published',
    featured: false,
    createdAt: '2026-11-15'
  },
  {
    id: 'prod-nm-03',
    code: 'MO03',
    title: 'Mật Ong Rừng Tự Nhiên Rừng Cúc Phương (Chai Thủy Tinh 1 Lít)',
    slug: 'mat-ong-rung-cuc-phuong-1l',
    categorySlug: 'trai-nhau-mat-ong',
    categoryName: 'Trái Nhàu & Mật Ong Rừng',
    priceText: '350.000 đ / chai',
    priceNumber: 350000,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=1200&q=80',
    description: 'Mật ong nguyên chất gom từ các bọng ong rừng hoa dại Cúc Phương. Mật đặc quánh màu cánh gián, hương thơm nồng nàn tự nhiên, thử bằng giấy ăn giọt nào tròn giọt nấy, không lắng cặn đường.',
    status: 'published',
    featured: true,
    createdAt: '2026-11-15'
  },

  // --- Thảo Dược & Trà ---
  {
    id: 'prod-td-01',
    code: 'DL01',
    title: 'Củ Đinh Lăng Nếp Điêu Khắc Nghệ Thuật (Nguyên Củ Rễ Xòe)',
    slug: 'cu-dinh-lang-nep-dieu-khac',
    categorySlug: 'thao-duoc-tra',
    categoryName: 'Thảo Dược & Trà Dưỡng Sinh',
    priceText: '650.000 đ / củ',
    priceNumber: 650000,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    description: 'Đinh lăng nếp lá nhỏ trồng trên 5 năm tuổi rễ xòe sum suê. Được tạo dáng thế rồng phượng tinh tế đưa vào bình thủy tinh ngâm rượu, vừa bồi bổ khí huyết tăng trí nhớ, vừa làm vật phẩm phong thủy rước tài lộc.',
    status: 'published',
    featured: false,
    createdAt: '2026-11-15'
  },
  {
    id: 'prod-td-02',
    code: 'LC02',
    title: 'Nấm Linh Chi Rừng Tự Nhiên Ninh Bình (Túi 500g)',
    slug: 'nam-linh-chi-rung-tu-nhien',
    categorySlug: 'thao-duoc-tra',
    categoryName: 'Thảo Dược & Trà Dưỡng Sinh',
    priceText: '480.000 đ / túi',
    priceNumber: 480000,
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=1200&q=80',
    description: 'Nấm linh chi tai dày chắc chắn thu hái từ thân cây mục trong rừng sâu. Thái lát mỏng đun nước uống hàng ngày giúp thanh lọc gan, hạ mỡ máu, tăng cường miễn dịch cho người trung niên và người cao tuổi.',
    status: 'published',
    featured: false,
    createdAt: '2026-11-15'
  },
  {
    id: 'prod-td-03',
    code: 'KT03',
    title: 'Kỷ Tử Đỏ Thượng Hạng Quả Mọng Ngọt Hậu (Gói 500g)',
    slug: 'ky-tu-do-thuong-hang',
    categorySlug: 'thao-duoc-tra',
    categoryName: 'Thảo Dược & Trà Dưỡng Sinh',
    priceText: '180.000 đ / gói',
    priceNumber: 180000,
    image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80',
    fullImage: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=80',
    description: 'Kỷ tử đỏ quả mập đều, hạt chắc vị ngọt thanh tự nhiên. Rất hợp để phối ngâm cùng các bình rượu sâm, ba kích hoặc hãm trà táo đỏ dưỡng nhan, sáng mắt, bổ can thận.',
    status: 'published',
    featured: true,
    createdAt: '2026-11-15'
  }
];

export const INITIAL_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    title: 'Bí quyết ngâm Ba Kích tím không bị đen nước, êm say không đau đầu',
    slug: 'cach-ngam-ba-kich-tim-khong-bi-den-nuoc',
    excerpt: 'Nhiều người ngâm ba kích cả năm mà rượu đục ngầu, uống vào đau đầu. Cùng Hà Thảo Mộc tìm hiểu 2 lỗi sai chí mạng khi rút lõi và chọn độ rượu.',
    content: `
      <p>Nhiều bác khoe với em bình ba kích ngâm cả năm mà rót ra màu cứ đen đục, uống vào vừa chát vừa nhức đầu. Đó là do các bác mắc phải 2 lỗi cơ bản này:</p>
      <h3>1. Quên rút lõi hoặc rút không kỹ</h3>
      <p>Lõi ba kích có tính độc nhẹ và vị rất chát, gây kích ứng tim mạch và làm đục nước rượu. Khi làm, bắt buộc phải chẻ đôi và rút sạch 100% phần lõi gỗ bên trong, chỉ lấy phần thịt củ mọng nước.</p>
      <h3>2. Chọn rượu quá nhẹ độ</h3>
      <p>Ba kích là củ tươi chứa nhiều nước. Nếu ngâm rượu dưới 40 độ, nước trong củ tiết ra sẽ làm loãng rượu, gây chua và lên váng thối. Chuẩn nhất phải là rượu nếp nương hoặc nếp cái hoa vàng từ 42 - 45 độ men chuẩn.</p>
      <h3>Tỷ lệ vàng khi ngâm</h3>
      <p>1kg ba kích tím tươi rút lõi ngâm với 4 - 5 lít rượu. Muốn nước thơm ngọt đượm vị, thả thêm 2 quả la hán hoặc nửa bát mật ong rừng. Sau 3 tháng, nước rượu sẽ chuyển màu tím than trong veo như rượu vang, uống êm ru, bổ thận tráng dương, khỏe gân cốt!</p>
    `,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    category: 'Cẩm nang ngâm rượu',
    date: '2026-11-18',
    status: 'published',
    views: 342
  },
  {
    id: 'post-2',
    title: 'Cảnh báo củ Tam Thất Bắc bị tráng chì và hút hết tinh chất',
    slug: 'phan-biet-tam-that-bac-that-va-hang-trang-chi',
    excerpt: 'Người xưa có câu "Thứ nhất tam thất, thứ nhì nhân sâm". Nhưng làm sao để không mua phải rác dược liệu trên thị trường?',
    content: `
      <p>Củ tam thất bắc quý là thế, nhưng trên thị trường hiện nay có tới 40% là hàng dạt, hàng đã bị chiết xuất hết hoạt chất Saponin rồi mới mang phơi khô bán lại.</p>
      <h3>3 Điểm nhận biết tam thất xịn:</h3>
      <ul>
        <li><strong>Màu sắc:</strong> Tam thất thật vỏ màu nâu xám sần sùi. Hàng tráng chì đen bóng bất thường là cực kỳ độc hại.</li>
        <li><strong>Độ cứng & vết bẻ:</strong> Tam thất xịn cứng đanh như đá, bẻ ra ruột xám chì đặc thớ. Hàng hút chất thì bở, xốp rỗng.</li>
        <li><strong>Vị giác:</strong> Nếm mẩu nhỏ thấy đắng gắt trước, 5 giây sau vị ngọt mát lan tỏa cuống họng.</li>
      </ul>
      <p>Tại Hà Thảo Mộc, chúng em cam kết 100% củ tam thất bắc tuyển chọn nguồn gốc rõ ràng, hỗ trợ xay bột trực tiếp tại chỗ theo yêu cầu.</p>
    `,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80',
    category: 'Kiến thức dược liệu',
    date: '2026-11-17',
    status: 'published',
    views: 289
  },
  {
    id: 'post-3',
    title: 'Quả nhàu lên men mật ong rừng: Cứu tinh cho người đau nhức xương khớp',
    slug: 'cong-dung-trai-nhau-ngam-mat-ong-giam-dau-khop',
    excerpt: 'Cây nhàu bờ rào mà bà con Nho Quan ai cũng giữ làm thuốc. Bí quyết lên men quả nhàu cùng mật ong rừng uống êm ru, ngủ sâu giấc.',
    content: `
      <p>Ở quê em Nho Quan, hầu như nhà nào có người già đau nhức khớp gối, tê bì chân tay cũng đều thủ sẵn một hũ TRÁI NHÀU NGÂM MẬT ONG RỪNG.</p>
      <p>Nhiều người sợ quả nhàu vì mùi nó nồng hắc khi chín. Nhưng khi kết hợp với mật ong rừng nguyên chất và ủ lên men tự nhiên từ 2–3 tháng, vị nó lại chua ngọt thanh dịu như nước quả lên men, cực kỳ dễ uống:</p>
      <ul>
        <li>Giảm viêm sưng, nhức mỏi xương khớp khi trở trời.</li>
        <li>Ổn định huyết áp, hỗ trợ tuần hoàn máu.</li>
        <li>Nhuận tràng êm bụng, tối ngủ một mạch tới sáng.</li>
      </ul>
    `,
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80',
    category: 'Mẹo khỏe gia đình',
    date: '2026-11-16',
    status: 'published',
    views: 512
  }
];

export const INITIAL_ORDERS: CustomerOrder[] = [
  {
    id: 'ord-01',
    customerName: 'Anh Vũ Tuấn (Hà Nội)',
    phone: '0988 234 xxx',
    occasion: 'Bình rượu ngâm phòng khách Tết',
    message: 'Gửi cho anh 1 bình ba kích tím 5L chuẩn men nếp nhé, bọc xốp cẩn thận về Cầu Giấy.',
    productCode: 'BR06',
    productTitle: 'Bình Rượu Ba Kích Tím Rút Lõi 5 Lít',
    totalPrice: '750.000 đ',
    status: 'completed',
    createdAt: '2026-11-16'
  },
  {
    id: 'ord-02',
    customerName: 'Cô Nguyễn Mai (Ninh Bình)',
    phone: '0366 512 xxx',
    occasion: 'Uống trị đau khớp',
    message: 'Giao cho cô 2 hũ trái nhàu lên men mật ong tới thành phố Ninh Bình chiều nay.',
    productCode: 'TN01',
    productTitle: 'Hũ Trái Nhàu Lên Men Mật Ong Rừng',
    totalPrice: '640.000 đ',
    status: 'processing',
    createdAt: '2026-11-18'
  }
];
