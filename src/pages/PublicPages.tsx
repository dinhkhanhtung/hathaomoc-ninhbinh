import React, { useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import {
  Phone,
  ChevronRight,
  CheckCircle2,
  FileText,
  Truck,
  Clock,
  Leaf,
  Check,
  CreditCard,
  Calendar,
  Eye,
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { FlowerProduct } from '../data/initialData';
import { ZaloIcon } from '../components/Icons';
import { ConsultationBanner, OrderStepsSection } from '../components/PublicLayout';

export const ProductCard: React.FC<{ product: FlowerProduct }> = ({ product }) => {
  return (
    <div className="ht-card flex flex-col">
      <Link to={`/san-pham/${product.slug}`} className="block no-underline">
        <div className="ht-card-img-wrap">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </Link>
      <div
        style={{
          padding: '14px 14px 16px',
          textAlign: 'center',
        }}
        className="flex-1 flex flex-col justify-between"
      >
        <Link
          to={`/san-pham/${product.slug}`}
          style={{
            display: 'block',
            fontSize: '14.5px',
            fontWeight: 600,
            lineHeight: 1.45,
            color: '#16302a',
          }}
          className="hover:text-[#2e7d32] transition-colors no-underline"
        >
          {product.title}
        </Link>
        <div
          style={{
            marginTop: '5px',
            fontSize: '15px',
            fontWeight: 700,
            color: '#2e7d32',
          }}
        >
          {product.priceText}
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   1. HOMEPAGE (100% Pixel-Perfect Match to https://hoatuoi.webmau68.com/)
   ========================================================================== */
export const HomePage: React.FC = () => {
  const { settings, categories, products, posts } = useCMS();

  const publishedProducts = products.filter((p) => p.status === 'published');
  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);
  const publishedPosts = posts.filter((p) => p.status === 'published').slice(0, 3);

  const uspItems = [
    {
      icon: Leaf,
      title: 'Thảo dược rừng thật',
      desc: 'Tuyển chọn từ Nho Quan - Cúc Phương',
    },
    {
      icon: Clock,
      title: 'Men nếp truyền thống',
      desc: 'Rượu nếp 42–45 độ êm không váng',
    },
    {
      icon: Truck,
      title: 'Đóng thùng chống vỡ',
      desc: 'Bọc xốp 3 lớp, kiểm hàng trước khi trả',
    },
    {
      icon: FileText,
      title: 'Tư vấn tỷ lệ ngâm',
      desc: 'Hướng dẫn bài thuốc chuẩn theo cơ địa',
    },
  ];

  return (
    <div>
      {/* HERO SECTION (.ht-hero) */}
      <section
        className="ht-hero relative overflow-hidden"
        style={{
          backgroundColor: '#edf3ee',
          backgroundImage: `url("${settings.heroImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          borderBottom: '1px solid var(--ht-line)',
        }}
      >
        {/* Readability gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4f7f4]/95 via-[#f4f7f4]/80 to-[#f4f7f4]/25 md:to-transparent pointer-events-none" />

        <div className="ht-container relative z-10 py-12 md:py-[72px] lg:py-[86px]">
          <div className="max-w-[540px]">
            <div
              style={{
                marginBottom: 14,
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#2e7d32',
              }}
            >
              {settings.heroEyebrow}
            </div>

            <h1
              style={{
                margin: '0 0 18px',
                fontSize: 'clamp(31px, 3.9vw, 52px)',
                fontWeight: 800,
                lineHeight: 1.14,
                letterSpacing: '-0.025em',
                color: '#16302a',
                whiteSpace: 'pre-line',
              }}
            >
              {settings.heroTitle}
            </h1>

            <p
              style={{
                maxWidth: 440,
                marginBottom: 32,
                fontSize: 'clamp(14px, 1.15vw, 16px)',
                lineHeight: 1.95,
                color: '#4b5563',
              }}
            >
              {settings.heroDesc}
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={`tel:${settings.hotlineRaw}`}
                style={{
                  padding: '17px 30px',
                  borderRadius: 99,
                  backgroundColor: '#2e7d32',
                  color: '#ffffff',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
                className="inline-flex items-center justify-center gap-2.5 hover:bg-[#1b5e20] transition-colors no-underline shadow-sm"
              >
                <Phone size={15} strokeWidth={2.2} />
                <span>GỌI ĐẶT HÀNG {settings.hotline}</span>
              </a>

              <Link
                to="/cua-hang"
                style={{
                  padding: '17px 28px',
                  borderRadius: 99,
                  backgroundColor: '#ffffff',
                  border: '1px solid #ececee',
                  color: '#16302a',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
                className="inline-flex items-center justify-center gap-2 hover:border-[#2e7d32] hover:text-[#2e7d32] transition-colors no-underline"
              >
                <span>XEM DƯỢC LIỆU & RƯỢU QUÝ</span>
                <ChevronRight size={15} />
              </Link>
            </div>

            {/* 3 Trust Chips under CTA */}
            <ul className="flex flex-wrap items-center gap-x-7 gap-y-2.5 mt-8 p-0 m-0 list-none">
              {settings.heroTrustBadges.map((badge) => (
                <li
                  key={badge}
                  className="inline-flex items-center gap-2 text-[13.5px] text-[#2f2f31]"
                >
                  <CheckCircle2
                    size={16}
                    strokeWidth={1.8}
                    className="text-[#16302a] flex-shrink-0"
                  />
                  <span>{badge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* USP STRIP (.ht-usp) */}
      <section
        className="ht-usp"
        style={{
          borderBottom: '1px solid var(--ht-line)',
          backgroundColor: '#ffffff',
          padding: '26px 0',
        }}
      >
        <div className="ht-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {uspItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-4">
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      backgroundColor: '#e8f5e9',
                      color: '#2e7d32',
                    }}
                    className="flex items-center justify-center flex-shrink-0"
                  >
                    <Icon size={23} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h5
                      style={{
                        margin: '0 0 3px',
                        fontSize: '15px',
                        fontWeight: 700,
                        lineHeight: 1.3,
                        color: '#16302a',
                      }}
                    >
                      {item.title}
                    </h5>
                    <p
                      style={{
                        margin: 0,
                        fontSize: '13.5px',
                        color: '#5f5f61',
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATEGORY SHOWCASE ("Bộ sưu tập / Chọn thảo dược theo nhu cầu") */}
      <section style={{ padding: '60px 0 30px' }}>
        <div className="ht-container">
          <div className="ht-sec-header">
            <span className="ht-sec-eyebrow">BỘ SƯU TẬP</span>
            <h2 className="ht-sec-title-text">Chọn thảo dược theo nhu cầu</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {sortedCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/danh-muc/${cat.slug}`}
                className="ht-card block no-underline"
              >
                <div className="ht-card-img-wrap">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div
                  style={{
                    padding: '16px 10px 18px',
                    textAlign: 'center',
                  }}
                >
                  <h5
                    style={{
                      margin: 0,
                      fontSize: '16px',
                      fontWeight: 700,
                      lineHeight: 1.35,
                      color: '#16302a',
                    }}
                  >
                    {cat.name}
                  </h5>
                  <span
                    style={{
                      display: 'block',
                      marginTop: 7,
                      fontSize: '12.5px',
                      fontWeight: 600,
                      color: '#2e7d32',
                    }}
                  >
                    Xem chi tiết →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4 PRODUCT SECTIONS WITH MID-PAGE CALLOUT BANNER AFTER SECTION 2 */}
      {sortedCategories.map((cat, idx) => {
        const catProducts = publishedProducts
          .filter((p) => p.categorySlug === cat.slug)
          .slice(0, 8);

        return (
          <React.Fragment key={cat.id}>
            <section style={{ padding: '44px 0 48px' }}>
              <div className="ht-container">
                <div className="ht-sec-header">
                  <span className="ht-sec-eyebrow">{cat.eyebrow}</span>
                  <h2 className="ht-sec-title-text">{cat.sectionHeading}</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
                  {catProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                <div className="text-center mt-9">
                  <Link
                    to={`/danh-muc/${cat.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '11px 26px',
                      borderRadius: 99,
                      backgroundColor: '#2e7d32',
                      color: '#ffffff',
                      fontSize: '13.5px',
                      fontWeight: 700,
                    }}
                    className="hover:bg-[#1b5e20] transition-colors no-underline"
                  >
                    <span>{cat.ctaLabel}</span>
                    <ChevronRight size={15} />
                  </Link>
                </div>
              </div>
            </section>

            {/* Mid-page Consultation Banner right after 2nd category */}
            {idx === 1 && <ConsultationBanner />}
          </React.Fragment>
        );
      })}

      {/* 3-STEP ORDER PROCESS */}
      <OrderStepsSection />

      {/* OPTIONAL BLOG PREVIEW SECTION (Shows articles managed in Admin) */}
      {publishedPosts.length > 0 && (
        <section
          style={{
            padding: '56px 0 64px',
            borderTop: '1px solid var(--ht-line)',
            backgroundColor: '#ffffff',
          }}
        >
          <div className="ht-container">
            <div className="ht-sec-header">
              <span className="ht-sec-eyebrow">GÓC CHIA SẺ</span>
              <h2 className="ht-sec-title-text">Cẩm nang ngâm rượu & Sức khỏe gia đình</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {publishedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/tin-tuc/${post.slug}`}
                  className="ht-card flex flex-col no-underline"
                >
                  <div className="relative w-full pt-[62%] overflow-hidden bg-[#f4f7f4]">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#2e7d32] mb-2">
                        {post.category}
                      </span>
                      <h3 className="text-[16px] font-bold text-[#16302a] leading-snug mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-[13.5px] text-[#5f5f61] leading-relaxed line-clamp-2 m-0">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#f4f4f5] flex items-center justify-between text-xs text-[#8f8f92]">
                      <span>{post.date}</span>
                      <span className="font-semibold text-[#2e7d32]">
                        Đọc bài viết →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

/* ==========================================================================
   2. CATEGORY & SHOP CATALOG PAGE (/danh-muc/:slug & /cua-hang)
   ========================================================================== */
export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [searchParams] = useSearchParams();
  const q = searchParams.get('q') || '';
  const { categories, products } = useCMS();
  const [sortBy, setSortBy] = useState<'default' | 'price-asc' | 'price-desc'>('default');

  const currentCat = slug ? categories.find((c) => c.slug === slug) : undefined;

  let filtered = products.filter((p) => p.status === 'published');
  if (currentCat) {
    filtered = filtered.filter((p) => p.categorySlug === currentCat.slug);
  }
  if (q.trim()) {
    const kw = q.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(kw) ||
        p.code.toLowerCase().includes(kw) ||
        p.categoryName.toLowerCase().includes(kw)
    );
  }

  if (sortBy === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.priceNumber - b.priceNumber);
  } else if (sortBy === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.priceNumber - a.priceNumber);
  }

  return (
    <div>
      {/* Page Header (.ht-phead) */}
      <section
        style={{
          backgroundColor: '#f0fdf4',
          borderBottom: '1px solid #ececee',
          padding: '44px 0',
          textAlign: 'center',
        }}
      >
        <div className="ht-container">
          <div className="ht-sec-eyebrow">
            {currentCat ? currentCat.eyebrow : 'DANH MỤC DƯỢC LIỆU & RƯỢU QUÝ'}
          </div>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(28px, 3.4vw, 44px)',
              fontWeight: 800,
              color: '#16302a',
              letterSpacing: '-0.025em',
            }}
          >
            {currentCat
              ? currentCat.sectionHeading
              : q
              ? `Kết quả tìm kiếm: "${q}"`
              : 'Tất cả sản phẩm thảo dược'}
          </h1>
          <p className="max-w-xl mx-auto mt-3 text-[15px] text-[#5f5f61] mb-0">
            100% thảo dược tự nhiên và bình rượu ngâm men nếp truyền thống từ Nho Quan – Cúc Phương. Đóng thùng xốp chống vỡ, giao toàn quốc, kiểm tra hàng trước khi thanh toán.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="ht-container">
          {/* Category Filter Pills & Sort */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#ececee]">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                to="/cua-hang"
                className={`px-4 py-2 rounded-full text-xs font-bold no-underline transition-colors ${
                  !currentCat
                    ? 'bg-[#2e7d32] text-white'
                    : 'bg-[#f0fdf4] text-[#2f2f31] hover:text-[#2e7d32]'
                }`}
              >
                Tất cả ({products.filter((p) => p.status === 'published').length})
              </Link>
              {categories.map((c) => (
                <Link
                  key={c.id}
                  to={`/danh-muc/${c.slug}`}
                  className={`px-4 py-2 rounded-full text-xs font-bold no-underline transition-colors ${
                    currentCat?.slug === c.slug
                      ? 'bg-[#2e7d32] text-white'
                      : 'bg-[#f0fdf4] text-[#2f2f31] hover:text-[#2e7d32]'
                  }`}
                >
                  {c.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-[#8f8f92] text-xs">Sắp xếp:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="h-9 px-3 rounded-lg border border-[#ececee] bg-white text-xs font-medium text-[#2f2f31] outline-none"
              >
                <option value="default">Mặc định</option>
                <option value="price-asc">Giá: Thấp đến Cao</option>
                <option value="price-desc">Giá: Cao đến Thấp</option>
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-16 text-center text-[#8f8f92]">
              Không tìm thấy sản phẩm nào phù hợp.
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      <ConsultationBanner />
    </div>
  );
};

/* ==========================================================================
   3. SINGLE PRODUCT PAGE (/san-pham/:slug) — Exact match to step_22_shot_1
   ========================================================================== */
export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { settings, products, addToCart } = useCMS();
  const [quantity, setQuantity] = useState(1);
  const [includeCard, setIncludeCard] = useState(false);
  const [cardNote, setCardNote] = useState('');

  const product =
    products.find((p) => p.slug === slug) ||
    products.find((p) => p.code.toLowerCase() === slug?.toLowerCase()) ||
    products[0];

  if (!product) return null;

  const related = products
    .filter(
      (p) =>
        p.status === 'published' &&
        p.categorySlug === product.categorySlug &&
        p.id !== product.id
    )
    .slice(0, 4);

  return (
    <div>
      <section className="py-6 md:py-10">
        <div className="ht-container">
          {/* Breadcrumbs */}
          <nav className="text-[13px] text-[#8f8f92] mb-6 flex items-center gap-2">
            <Link to="/" className="text-[#8f8f92] hover:text-[#2e7d32] no-underline">
              Home
            </Link>
            <span>/</span>
            <Link
              to={`/danh-muc/${product.categorySlug}`}
              className="text-[#8f8f92] hover:text-[#2e7d32] no-underline"
            >
              {product.categoryName}
            </Link>
          </nav>

          {/* Main 2-Column Product Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-11 items-start">
            {/* Left Column: Image */}
            <div className="lg:col-span-6">
              <div className="rounded-[16px] overflow-hidden border border-[#ececee] bg-[#f4f7f4]">
                <img
                  src={product.fullImage || product.image}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== product.image) target.src = product.image;
                  }}
                  alt={product.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto block object-cover"
                />
              </div>
            </div>

            {/* Right Column: Info & Actions */}
            <div className="lg:col-span-6">
              <h1
                style={{
                  margin: '0 0 12px',
                  fontSize: 'clamp(26px, 2.8vw, 34px)',
                  fontWeight: 800,
                  color: '#16302a',
                  letterSpacing: '-0.02em',
                }}
              >
                {product.title}
              </h1>

              {/* Code & Category Pills */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span
                  style={{
                    padding: '5px 13px',
                    borderRadius: 99,
                    border: '1px solid #ececee',
                    backgroundColor: '#fafafa',
                    fontSize: '12.5px',
                    color: '#5f5f61',
                  }}
                >
                  Mã SP <strong className="text-[#16302a]">{product.code}</strong>
                </span>
                <Link
                  to={`/danh-muc/${product.categorySlug}`}
                  style={{
                    padding: '5px 13px',
                    borderRadius: 99,
                    border: '1px solid #c8e6c9',
                    backgroundColor: '#f0fdf4',
                    fontSize: '12.5px',
                    fontWeight: 600,
                    color: '#2e7d32',
                  }}
                  className="no-underline"
                >
                  {product.categoryName}
                </Link>
              </div>

              {/* Price */}
              <div
                style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#2e7d32',
                  marginBottom: '12px',
                }}
              >
                {product.priceText}
              </div>

              {/* Freshness Note */}
              <div className="flex items-center gap-2 text-[13.5px] text-[#5f5f61] mb-5">
                <CheckCircle2 size={16} className="text-[#2e7d32] flex-shrink-0" />
                <span>
                  Sơ chế sạch chuẩn bài · Gửi ảnh/video thực tế qua Zalo để bác duyệt trước khi đóng thùng
                </span>
              </div>

              {/* Dashed Free Instruction Box */}
              <div
                style={{
                  border: '1px dashed #81c784',
                  backgroundColor: '#f0fdf4',
                  borderRadius: 12,
                  padding: '13px 16px',
                  marginBottom: 20,
                }}
              >
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeCard}
                    onChange={(e) => setIncludeCard(e.target.checked)}
                    className="w-4 h-4 accent-[#2e7d32] rounded cursor-pointer"
                  />
                  <CreditCard size={17} className="text-[#2e7d32]" />
                  <span className="text-[14px] font-bold text-[#2f2f31]">
                    Kèm tờ hướng dẫn tỷ lệ ngâm & cách dùng chi tiết
                  </span>
                  <span
                    style={{
                      padding: '2px 9px',
                      borderRadius: 99,
                      backgroundColor: '#c8e6c9',
                      color: '#2e7d32',
                      fontSize: '11.5px',
                      fontWeight: 700,
                    }}
                  >
                    Miễn phí
                  </span>
                </label>

                {includeCard && (
                  <div className="mt-3">
                    <input
                      type="text"
                      value={cardNote}
                      onChange={(e) => setCardNote(e.target.value)}
                      placeholder="Ghi chú yêu cầu riêng (VD: thái lát sẵn, xay bột mịn, đóng gói quà biếu...)"
                      className="w-full h-10 px-3.5 rounded-lg border border-[#81c784] bg-white text-sm outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Quantity Stepper + Add to Cart Button */}
              <div className="flex flex-wrap items-center gap-3.5 mb-5">
                <div
                  style={{
                    height: 48,
                    borderRadius: 99,
                    border: '1px solid #ececee',
                    backgroundColor: '#ffffff',
                  }}
                  className="inline-flex items-center px-2"
                >
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 flex items-center justify-center text-base text-[#5f5f61] hover:text-[#2e7d32] bg-transparent border-0 cursor-pointer"
                  >
                    −
                  </button>
                  <span className="w-10 text-center font-bold text-[15px] text-[#16302a]">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-9 h-9 flex items-center justify-center text-base text-[#5f5f61] hover:text-[#2e7d32] bg-transparent border-0 cursor-pointer"
                  >
                    +
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    addToCart(product, quantity, includeCard, cardNote)
                  }
                  style={{
                    height: 48,
                    padding: '0 32px',
                    borderRadius: 99,
                    backgroundColor: '#2e7d32',
                    color: '#ffffff',
                    fontSize: '14.5px',
                    fontWeight: 700,
                  }}
                  className="hover:bg-[#1b5e20] transition-colors border-0 cursor-pointer shadow-sm"
                >
                  Đặt mua sản phẩm này
                </button>
              </div>

              {/* Product description */}
              <div className="mb-5 p-4 rounded-xl bg-[#f8faf8] border border-[#e2e8f0] text-[14px] leading-relaxed text-[#4b5563]">
                {product.description}
              </div>

              {/* 2 Direct Action Cards (Call & Zalo) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <a
                  href={`tel:${settings.hotlineRaw}`}
                  style={{
                    padding: '13px 16px',
                    borderRadius: 12,
                    border: '1px solid #c8e6c9',
                    backgroundColor: '#ffffff',
                  }}
                  className="flex items-center gap-3 hover:bg-[#f0fdf4] transition-colors no-underline"
                >
                  <Phone size={22} className="text-[#2e7d32] flex-shrink-0" />
                  <span className="flex flex-col min-w-0">
                    <small className="text-[10.5px] font-semibold uppercase tracking-wider text-[#6b7280]">
                      GỌI ĐẶT HÀNG NGAY
                    </small>
                    <strong className="text-[15.5px] font-bold text-[#2e7d32]">
                      {settings.hotline}
                    </strong>
                  </span>
                </a>

                <a
                  href={`https://zalo.me/${settings.zaloPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '13px 16px',
                    borderRadius: 12,
                    border: '1px solid #d6e4fb',
                    backgroundColor: '#ffffff',
                  }}
                  className="flex items-center gap-3 hover:bg-[#f2f7ff] transition-colors no-underline"
                >
                  <ZaloIcon size={26} className="flex-shrink-0" />
                  <span className="flex flex-col min-w-0">
                    <small className="text-[10.5px] font-semibold uppercase tracking-wider text-[#8a9bb3]">
                      NHẮN TIN ZALO
                    </small>
                    <strong className="text-[14.5px] font-bold text-[#0068ff] truncate">
                      zalo.me/{settings.zaloPhone}
                    </strong>
                  </span>
                </a>
              </div>

              {/* CAM KẾT DỊCH VỤ Box */}
              <div
                style={{
                  border: '1px solid #ececee',
                  borderRadius: 14,
                  padding: '18px 20px',
                  backgroundColor: '#ffffff',
                }}
              >
                <div className="text-[11.5px] font-bold uppercase tracking-wider text-[#8f8f92] mb-3.5">
                  CAM KẾT DỊCH VỤ
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { t: 'Thảo dược tự nhiên', s: 'chuẩn đất rừng Nho Quan - Cúc Phương' },
                    { t: 'Giao hàng toàn quốc', s: 'kiểm tra trước khi trả tiền' },
                    { t: 'Đóng thùng chống vỡ', s: 'bọc màng khí 3 lớp an toàn' },
                    { t: 'Tư vấn bài thuốc chuẩn', s: 'mẫu riêng, đúng ngân sách' },
                  ].map((c) => (
                    <div key={c.t} className="flex items-start gap-2.5">
                      <Check
                        size={15}
                        strokeWidth={2.4}
                        className="text-[#2e7d32] mt-0.5 flex-shrink-0"
                      />
                      <div>
                        <div className="text-[13.5px] font-bold text-[#16302a]">
                          {c.t}
                        </div>
                        <div className="text-[12.5px] text-[#5f5f61]">{c.s}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-[#ececee]">
              <div className="ht-sec-header">
                <span className="ht-sec-eyebrow">GỢI Ý CÙNG DANH MỤC</span>
                <h2 className="ht-sec-title-text">Sản phẩm liên quan</h2>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                {related.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ConsultationBanner />
    </div>
  );
};

/* ==========================================================================
   4. GIỚI THIỆU (/gioi-thieu) — Exact match to step_51_shot_1.png
   ========================================================================== */
export const AboutPage: React.FC = () => {
  const { settings } = useCMS();

  const commitments = [
    {
      num: '01',
      title: 'Chuẩn nguồn gốc rừng',
      desc: 'Thảo dược và đồ ngâm rừng thu hái tại vùng núi Nho Quan – Cúc Phương, tuyển chọn từng củ rễ già đủ năm.',
    },
    {
      num: '02',
      title: 'Sơ chế sạch từ tâm',
      desc: 'Ba kích rút sạch 100% lõi gỗ độc, tam thất không tráng chì hay hút chất, trái nhàu rửa ráo lên men tự nhiên.',
    },
    {
      num: '03',
      title: 'Rượu nếp cái hoa vàng',
      desc: 'Dùng hoàn toàn rượu nếp ta ủ men truyền thống 42–45 độ, tuyệt đối không cồn công nghiệp, uống êm không đau đầu.',
    },
    {
      num: '04',
      title: 'Giao hàng bao bể vỡ',
      desc: 'Bình thủy tinh bọc màng khí và thùng xốp 3 lớp gửi toàn quốc. Khách được mở kiểm tra hàng trước khi thanh toán.',
    },
  ];

  return (
    <div>
      {/* Header (.ht-phead) */}
      <section
        style={{
          backgroundColor: '#f0fdf4',
          borderBottom: '1px solid #ececee',
          padding: '54px 0',
          textAlign: 'center',
        }}
      >
        <div className="ht-container">
          <div className="ht-sec-eyebrow">VỀ CHÚNG TÔI</div>
          <h1
            style={{
              margin: '0 auto',
              fontSize: 'clamp(28px, 3.4vw, 46px)',
              fontWeight: 800,
              lineHeight: 1.16,
              letterSpacing: '-0.025em',
              color: '#16302a',
            }}
          >
            Hà Thảo Mộc – Tinh hoa dược liệu đất rừng Nho Quan
          </h1>
          <p
            style={{
              maxWidth: 620,
              margin: '14px auto 0',
              fontSize: '15px',
              lineHeight: 1.9,
              color: '#5f5f61',
            }}
          >
            Gìn giữ và lan tỏa tinh hoa đồ ngâm rượu và thảo dược bồi bổ sức khỏe đất rừng Nho Quan - Cúc Phương (Ninh Bình).
          </p>
        </div>
      </section>

      {/* 2-Column Story */}
      <section className="py-14 md:py-20">
        <div className="ht-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <h2
                style={{
                  fontFamily: 'var(--ht-display)',
                  fontSize: 'clamp(22px, 2.4vw, 28px)',
                  fontWeight: 700,
                  color: '#16302a',
                  margin: '0 0 18px',
                }}
              >
                Từng bình rượu là một tấm lòng
              </h2>
              <p className="text-[15px] leading-[1.9] text-[#5f5f61] mb-4">
                {settings.brandName} của chị Trương Thúy Hà tại thị trấn Nho Quan, Ninh Bình – cửa ngõ rừng quốc gia Cúc Phương – bắt đầu từ niềm tin mộc mạc: đồ uống vào người và thuốc bồi bổ gia đình thì tuyệt đối không được làm ẩu.
              </p>
              <p className="text-[15px] leading-[1.9] text-[#5f5f61] mb-6">
                Từng củ tam thất bắc, cân ba kích tím rút lõi, trái nhàu chín mọng hay bình rượu nếp cái hoa vàng đều do chính tay em Hà tuyển chọn, rửa sạch từng kẽ đất, đóng gói kỹ lưỡng và quay ảnh thực tế gửi bác duyệt qua Zalo trước khi gửi đi toàn quốc.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  '100% thảo dược tự nhiên',
                  'Bao kiểm tra trước khi trả tiền',
                  'Tư vấn công thức ngâm trọn đời',
                ].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0fdf4] border border-[#c8e6c9] text-[13.5px] font-semibold text-[#16302a]"
                  >
                    <CheckCircle2 size={15} className="text-[#2e7d32]" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-[18px] overflow-hidden border border-[#ececee] bg-[#f4f7f4]">
                <img
                  src="/images/products/about-hathaomoc.jpg"
                  onError={(e) => {
                    e.currentTarget.src = '/images/products/hero-hathaomoc.jpg';
                  }}
                  alt="Cơ sở thảo dược Hà Thảo Mộc Nho Quan Ninh Bình"
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[440px] object-cover block"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Commitments */}
      <section
        style={{
          backgroundColor: '#f8faf8',
          borderTop: '1px solid #e2e8f0',
          padding: '60px 0',
        }}
      >
        <div className="ht-container">
          <div className="ht-sec-header">
            <span className="ht-sec-eyebrow">CAM KẾT CHẤT LƯỢNG</span>
            <h2 className="ht-sec-title-text">Bốn điều chúng tôi không thoả hiệp</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((c) => (
              <div
                key={c.num}
                className="bg-white rounded-[16px] p-6 border border-[#e2e8f0]"
              >
                <div className="w-10 h-10 rounded-full bg-[#e8f5e9] text-[#2e7d32] font-bold text-sm flex items-center justify-center mb-4">
                  {c.num}
                </div>
                <h4 className="text-[17px] font-bold text-[#16302a] mb-2">
                  {c.title}
                </h4>
                <p className="text-[14px] leading-relaxed text-[#5f5f61] m-0">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </div>
  );
};

/* ==========================================================================
   5. LIÊN HỆ (/lien-he) — Exact match to step_51_shot_2.png
   ========================================================================== */
export const ContactPage: React.FC = () => {
  const { settings, addOrder } = useCMS();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [occasion, setOccasion] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    addOrder({
      customerName: name.trim(),
      phone: phone.trim(),
      occasion: occasion.trim() || 'Tư vấn đồ ngâm rượu & thảo mộc',
      message: message.trim(),
    });
    setSubmitted(true);
    setName('');
    setPhone('');
    setOccasion('');
    setMessage('');
  };

  return (
    <div>
      {/* Page Header (.ht-phead) */}
      <section
        style={{
          backgroundColor: '#f0fdf4',
          borderBottom: '1px solid #ececee',
          padding: '54px 0',
          textAlign: 'center',
        }}
      >
        <div className="ht-container">
          <div className="ht-sec-eyebrow">LIÊN HỆ</div>
          <h1
            style={{
              margin: '0 auto',
              fontSize: 'clamp(28px, 3.4vw, 46px)',
              fontWeight: 800,
              lineHeight: 1.16,
              letterSpacing: '-0.025em',
              color: '#16302a',
            }}
          >
            Gọi một cuộc, có ngay bình rượu quý
          </h1>
          <p
            style={{
              maxWidth: 620,
              margin: '14px auto 0',
              fontSize: '15px',
              lineHeight: 1.9,
              color: '#5f5f61',
            }}
          >
            Hotline và Zalo trực 7:00 – 21:00 mỗi ngày. Đơn gấp ngoài giờ vui lòng gọi trực tiếp.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="ht-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Store Info */}
            <div className="lg:col-span-5">
              <h2
                style={{
                  fontFamily: 'var(--ht-display)',
                  fontSize: '25px',
                  fontWeight: 700,
                  color: '#16302a',
                  margin: '0 0 24px',
                }}
              >
                Thông tin cửa hàng
              </h2>

              <div className="divide-y divide-[#ececee]">
                <div className="py-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#8f8f92] mb-1">
                    HOTLINE ĐẶT HÀNG
                  </div>
                  <a
                    href={`tel:${settings.hotlineRaw}`}
                    className="text-[17px] font-bold text-[#2e7d32] no-underline"
                  >
                    {settings.hotline}
                  </a>
                </div>

                <div className="py-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#8f8f92] mb-1">
                    ZALO
                  </div>
                  <a
                    href={`https://zalo.me/${settings.zaloPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] font-bold text-[#2e7d32] no-underline"
                  >
                    zalo.me/{settings.zaloPhone}
                  </a>
                </div>

                <div className="py-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#8f8f92] mb-1">
                    ĐỊA CHỈ
                  </div>
                  <div className="text-[15px] text-[#2f2f31]">
                    {settings.address}
                  </div>
                </div>

                <div className="py-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#8f8f92] mb-1">
                    GIỜ MỞ CỬA
                  </div>
                  <div className="text-[15px] text-[#2f2f31]">
                    {settings.openHours}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Consultation Form */}
            <div className="lg:col-span-7">
              <div
                style={{
                  border: '1px solid #ececee',
                  borderRadius: 16,
                  padding: '32px',
                  backgroundColor: '#ffffff',
                }}
              >
                <h2
                  style={{
                    fontFamily: 'var(--ht-display)',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: '#16302a',
                    margin: '0 0 22px',
                  }}
                >
                  Gửi yêu cầu tư vấn
                </h2>

                {submitted ? (
                  <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
                    <CheckCircle2 size={22} className="text-emerald-600 flex-shrink-0" />
                    <div>
                      <div className="font-bold">Đã gửi yêu cầu tư vấn thành công!</div>
                      <div className="mt-0.5">
                        Cảm ơn bạn! Tiệm {settings.brandName} sẽ liên hệ lại qua số điện thoại/Zalo của bạn trong vòng 5 phút.
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Họ và tên"
                        className="w-full h-12 px-4 rounded-xl border border-[#ececee] bg-white text-sm outline-none focus:border-[#2e7d32]"
                      />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Số điện thoại"
                        className="w-full h-12 px-4 rounded-xl border border-[#ececee] bg-white text-sm outline-none focus:border-[#2e7d32]"
                      />
                    </div>

                    <input
                      type="text"
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      placeholder="Nhu cầu (ngâm rượu, đau khớp, bồi bổ...)"
                      className="w-full h-12 px-4 rounded-xl border border-[#ececee] bg-white text-sm outline-none focus:border-[#2e7d32]"
                    />

                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Loại thảo dược bạn cần, số lượng hoặc dung tích bình..."
                      className="w-full p-4 rounded-xl border border-[#ececee] bg-white text-sm outline-none focus:border-[#2e7d32] resize-none"
                    />

                    <button
                      type="submit"
                      style={{
                        padding: '15px 32px',
                        borderRadius: 99,
                        backgroundColor: '#2e7d32',
                        color: '#ffffff',
                        fontSize: '14px',
                        fontWeight: 700,
                      }}
                      className="hover:bg-[#1b5e20] transition-colors border-0 cursor-pointer"
                    >
                      Gửi yêu cầu tư vấn
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </div>
  );
};

/* ==========================================================================
   6. BLOG / TIN TỨC PAGES (/tin-tuc & /tin-tuc/:slug)
   ========================================================================== */
export const BlogListPage: React.FC = () => {
  const { posts } = useCMS();
  const published = posts.filter((p) => p.status === 'published');

  return (
    <div>
      <section
        style={{
          backgroundColor: '#f0fdf4',
          borderBottom: '1px solid #ececee',
          padding: '50px 0',
          textAlign: 'center',
        }}
      >
        <div className="ht-container">
          <div className="ht-sec-eyebrow">GÓC CHIA SẺ & CẨM NANG</div>
          <h1
            style={{
              margin: '0 auto',
              fontSize: 'clamp(28px, 3.4vw, 44px)',
              fontWeight: 800,
              color: '#16302a',
            }}
          >
            Cẩm nang ngâm rượu & Bài thuốc dân gian
          </h1>
          <p className="max-w-xl mx-auto mt-3 text-[15px] text-[#5f5f61] mb-0">
            Bí quyết ngâm ba kích không đen nước, mẹo phân biệt tam thất xịn và bài thuốc trái nhàu lên men mật ong rừng.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="ht-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {published.map((post) => (
              <Link
                key={post.id}
                to={`/tin-tuc/${post.slug}`}
                className="ht-card flex flex-col no-underline"
              >
                <div className="relative w-full pt-[64%] overflow-hidden bg-[#f4f7f4]">
                  <img
                    src={post.image}
                    alt={post.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#2e7d32] mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-[17px] font-bold text-[#16302a] leading-snug mb-2.5">
                      {post.title}
                    </h3>
                    <p className="text-[14px] text-[#5f5f61] leading-relaxed line-clamp-3 m-0">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#f4f4f5] flex items-center justify-between text-xs text-[#8f8f92]">
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={13} />
                      {post.date}
                    </span>
                    <span className="font-semibold text-[#2e7d32]">
                      Xem chi tiết →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </div>
  );
};

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts } = useCMS();
  const post = posts.find((p) => p.slug === slug) || posts[0];

  if (!post) return null;

  return (
    <div>
      <section className="py-10 md:py-14">
        <div className="ht-container max-w-4xl">
          <nav className="text-[13px] text-[#8f8f92] mb-5 flex items-center gap-2">
            <Link to="/" className="text-[#8f8f92] hover:text-[#2e7d32] no-underline">
              Trang chủ
            </Link>
            <span>/</span>
            <Link
              to="/tin-tuc"
              className="text-[#8f8f92] hover:text-[#2e7d32] no-underline"
            >
              Tin tức
            </Link>
          </nav>

          <span className="inline-block px-3 py-1 rounded-full bg-[#f0fdf4] text-[#2e7d32] text-xs font-bold uppercase tracking-wider mb-3">
            {post.category}
          </span>

          <h1 className="text-2xl md:text-4xl font-extrabold text-[#16302a] leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-5 text-xs text-[#8f8f92] mb-7 pb-5 border-b border-[#ececee]">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Eye size={14} /> {post.views} lượt xem
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-[#ececee] mb-8">
            <img
              src={post.image}
              alt={post.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[460px] object-cover block"
            />
          </div>

          <div
            className="prose max-w-none text-[15.5px] leading-[1.9] text-[#2f2f31] space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      <ConsultationBanner />
    </div>
  );
};
