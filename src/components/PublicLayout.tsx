import React, { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import {
  Truck,
  Clock,
  FileText,
  Search,
  Phone,
  ShoppingBasket,
  MapPin,
  ChevronRight,
  ArrowUp,
  Menu,
  X,
  Trash2,
  CheckCircle2,
  Sparkles,
  CreditCard,
  Camera,
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { ZaloIcon, BrandLogoComponent } from './Icons';

export const ConsultationBanner: React.FC = () => {
  const { settings } = useCMS();
  return (
    <section
      style={{
        backgroundColor: '#16302a',
        padding: '46px 0',
      }}
    >
      <div className="ht-container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-xl">
            <h2
              style={{
                margin: '0 0 8px',
                fontSize: 'clamp(22px, 2.4vw, 31px)',
                fontWeight: 700,
                lineHeight: 1.3,
                letterSpacing: '-0.015em',
                color: '#ffffff',
                fontFamily: 'var(--ht-display)',
              }}
            >
              Cần tư vấn đồ ngâm rượu & bài thuốc thảo mộc?
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: '15px',
                lineHeight: 1.8,
                color: 'rgba(255, 255, 255, 0.78)',
              }}
            >
              Gọi hoặc nhắn Zalo, em Hà tư vấn tỷ lệ ngâm chuẩn vị và báo giá trong 5 phút. Đóng thùng xốp bọc khí giao toàn quốc.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5 lg:min-w-[450px]">
            <a
              href={`tel:${settings.hotlineRaw}`}
              className="flex items-center flex-1 min-w-[210px] bg-white rounded-[14px] px-5 py-3.5 transition-transform hover:-translate-y-0.5 no-underline"
            >
              <Phone
                size={25}
                strokeWidth={1.8}
                className="mr-3.5 flex-shrink-0"
                style={{ color: '#2e7d32' }}
              />
              <span className="flex flex-col min-w-0">
                <small
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#8f8f92',
                    marginBottom: '2px',
                  }}
                >
                  GỌI ĐẶT HÀNG NGAY
                </small>
                <strong
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: '#2e7d32',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {settings.hotline}
                </strong>
              </span>
            </a>

            <a
              href={`https://zalo.me/${settings.zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center flex-1 min-w-[210px] bg-white rounded-[14px] px-5 py-3.5 transition-transform hover:-translate-y-0.5 no-underline"
            >
              <ZaloIcon size={28} className="mr-3.5 flex-shrink-0" />
              <span className="flex flex-col min-w-0">
                <small
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#8f8f92',
                    marginBottom: '2px',
                  }}
                >
                  NHẮN TIN ZALO
                </small>
                <strong
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    color: '#0068ff',
                    whiteSpace: 'nowrap',
                  }}
                >
                  zalo.me/{settings.zaloPhone}
                </strong>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const OrderStepsSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Chọn vị thảo dược / bình rượu',
      desc: 'Xem ảnh thật từng loại dược liệu hoặc nhắn loại bạn cần ngâm qua Zalo.',
      icon: Sparkles,
    },
    {
      num: '02',
      title: 'Tư vấn công thức & chốt đơn',
      desc: 'Em Hà tư vấn độ rượu, liều lượng ngâm và xác nhận đơn. Thanh toán khi nhận hàng.',
      icon: CreditCard,
    },
    {
      num: '03',
      title: 'Đóng thùng xốp & giao tận nhà',
      desc: 'Bọc màng khí 3 lớp chống vỡ, giao toàn quốc. Mở hàng kiểm tra thoải mái trước khi thanh toán.',
      icon: Camera,
    },
  ];

  return (
    <section
      style={{
        backgroundColor: '#f8faf8',
        borderTop: '1px solid #e2e8f0',
        padding: '64px 0',
      }}
    >
      <div className="ht-container">
        <div className="ht-sec-header">
          <span className="ht-sec-eyebrow">ĐẶT HÀNG TIỆN LỢI & AN TÂM</span>
          <h2 className="ht-sec-title-text">Ba bước là thảo dược tới tay quý khách</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '18px',
                  padding: '26px 24px',
                }}
                className="flex items-start gap-4 transition-transform hover:-translate-y-1"
              >
                <div className="relative flex-shrink-0">
                  <div
                    style={{
                      width: 76,
                      height: 76,
                      borderRadius: '50%',
                      backgroundColor: '#e8f5e9',
                      color: '#2e7d32',
                    }}
                    className="flex items-center justify-center"
                  >
                    <Icon size={28} strokeWidth={1.6} />
                  </div>
                  <span
                    style={{
                      position: 'absolute',
                      top: -4,
                      right: -4,
                      backgroundColor: '#2e7d32',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: 700,
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      border: '2px solid #fff',
                    }}
                    className="flex items-center justify-center"
                  >
                    {s.num}
                  </span>
                </div>
                <div className="flex-1 min-w-0 pt-1">
                  <h5
                    style={{
                      margin: '0 0 6px',
                      fontSize: '16.5px',
                      fontWeight: 700,
                      color: '#16302a',
                    }}
                  >
                    {s.title}
                  </h5>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '13.8px',
                      lineHeight: 1.75,
                      color: '#5f5f61',
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const PublicLayout: React.FC = () => {
  const {
    settings,
    products,
    cart,
    cartOpen,
    setCartOpen,
    removeFromCart,
    updateCartQty,
    clearCart,
    addOrder,
  } = useCMS();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerNote, setCustomerNote] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setMobileMenuOpen(false);
    setShowSearchDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 360);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const searchResults = searchQuery.trim()
    ? products
        .filter(
          (p) =>
            p.status === 'published' &&
            (p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
              p.categoryName.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .slice(0, 6)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setShowSearchDropdown(false);
    navigate(`/cua-hang?q=${encodeURIComponent(searchQuery.trim())}`);
  };

  const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cart.reduce(
    (acc, item) => acc + item.product.priceNumber * item.quantity,
    0
  );

  const handleQuickOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim() || !customerPhone.trim()) return;
    const itemsSummary = cart
      .map(
        (i) =>
          `${i.product.title} (x${i.quantity})${
            i.includeFreeCard ? ` [Thiệp: ${i.cardNote || 'Có'}]` : ''
          }`
      )
      .join(', ');
    addOrder({
      customerName: customerName.trim(),
      phone: customerPhone.trim(),
      occasion: 'Đặt hàng từ Giỏ hàng',
      message: `${itemsSummary}. Ghi chú: ${customerNote}`,
      productCode: cart.map((i) => i.product.code).join(', '),
      productTitle: itemsSummary,
      totalPrice: `${totalCartPrice.toLocaleString('vi-VN')} ₫`,
    });
    setCheckoutSuccess(true);
    setTimeout(() => {
      clearCart();
      setCheckoutSuccess(false);
      setCustomerName('');
      setCustomerPhone('');
      setCustomerNote('');
      setCartOpen(false);
    }, 2200);
  };

  const navLinks = [
    { label: 'TRANG CHỦ', to: '/' },
    { label: 'ĐỒ NGÂM RƯỢU', to: '/danh-muc/do-ngam-ruou' },
    { label: 'TAM THẤT BẮC', to: '/danh-muc/tam-that-bac' },
    { label: 'TRÁI NHÀU & MẬT ONG', to: '/danh-muc/trai-nhau-mat-ong' },
    { label: 'THẢO DƯỢC & TRÀ', to: '/danh-muc/thao-duoc-tra' },
    { label: 'CẨM NANG', to: '/tin-tuc' },
    { label: 'GIỚI THIỆU', to: '/gioi-thieu' },
    { label: 'LIÊN HỆ', to: '/lien-he' },
  ];

  const isNavActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. TOP BAR (#top-bar) */}
      <div
        id="top-bar"
        className="hidden md:block"
        style={{
          borderBottom: '1px solid var(--ht-line)',
          backgroundColor: '#ffffff',
          minHeight: 36,
        }}
      >
        <div className="ht-container flex items-center justify-between h-9 text-[12.5px] text-[#5f5f61]">
          <div className="flex items-center gap-8">
            <span className="inline-flex items-center gap-2">
              <Truck size={15} className="text-[#8f8f92]" strokeWidth={1.7} />
              {settings.topBarCommitments[0] || 'Miễn phí giao nội thành'}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={15} className="text-[#8f8f92]" strokeWidth={1.7} />
              {settings.topBarCommitments[1] || 'Giao gấp trong 90 phút'}
            </span>
            <span className="inline-flex items-center gap-2">
              <FileText size={15} className="text-[#8f8f92]" strokeWidth={1.7} />
              {settings.topBarCommitments[2] || 'Xuất hoá đơn VAT trong 30 phút'}
            </span>
          </div>

          <div className="flex items-center gap-7">
            <a
              href={`https://zalo.me/${settings.zaloPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#5f5f61] hover:text-[#2e7d32] transition-colors no-underline"
            >
              <ZaloIcon size={17} />
              <span>Chat Zalo</span>
            </a>
            <span className="inline-flex items-center gap-2">
              <Clock size={15} className="text-[#8f8f92]" strokeWidth={1.7} />
              <span>{settings.openHours}</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (.header-main) */}
      <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_0_#ececee]">
        <div
          className="header-main"
          style={{
            borderBottom: '1px solid var(--ht-line)',
            backgroundColor: '#ffffff',
          }}
        >
          <div className="ht-container flex items-center justify-between h-[76px] md:h-[88px] gap-4 md:gap-7">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 text-[#2f2f31] hover:text-[#2e7d32]"
              aria-label="Mở menu"
            >
              <Menu size={24} />
            </button>

            {/* Logo */}
            <Link to="/" className="no-underline flex-shrink-0">
              <BrandLogoComponent
                brandName={settings.brandName}
                brandSub={settings.brandSub}
                logoMode={settings.logoMode}
                logoUrl={settings.logoUrl}
              />
            </Link>

            {/* Live Search Box */}
            <div
              ref={searchRef}
              className="hidden md:block flex-1 max-w-[540px] relative"
            >
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onFocus={() => setShowSearchDropdown(true)}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearchDropdown(true);
                  }}
                  placeholder="Tìm kiếm ba kích, tam thất, trái nhàu, chuối hột..."
                  style={{
                    width: '100%',
                    height: 44,
                    padding: '0 50px 0 20px',
                    borderRadius: 99,
                    border: '1px solid #ececee',
                    backgroundColor: '#fafafa',
                    fontSize: '14px',
                    color: '#2f2f31',
                    outline: 'none',
                  }}
                  className="focus:border-[#81c784] focus:bg-white transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Tìm kiếm"
                  style={{
                    position: 'absolute',
                    right: 4,
                    top: 4,
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    backgroundColor: '#2e7d32',
                    color: '#ffffff',
                  }}
                  className="flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer border-0"
                >
                  <Search size={16} strokeWidth={2.2} />
                </button>
              </form>

              {/* Live Search Dropdown */}
              {showSearchDropdown && searchQuery.trim() && (
                <div className="absolute left-0 right-0 top-[50px] bg-white rounded-[14px] border border-[#ececee] shadow-xl overflow-hidden z-50">
                  {searchResults.length === 0 ? (
                    <div className="p-4 text-center text-sm text-[#8f8f92]">
                      Không tìm thấy sản phẩm phù hợp với "{searchQuery}"
                    </div>
                  ) : (
                    <div>
                      {searchResults.map((item) => (
                        <Link
                          key={item.id}
                          to={`/san-pham/${item.slug}`}
                          onClick={() => setShowSearchDropdown(false)}
                          className="flex items-center gap-3.5 px-4 py-2.5 hover:bg-[#f0fdf4] border-b border-[#f4f4f5] last:border-b-0 no-underline"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            referrerPolicy="no-referrer"
                            className="w-11 h-14 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="text-[14px] font-semibold text-[#16302a] truncate">
                              {item.title}
                            </div>
                            <div className="text-xs text-[#8f8f92]">
                              Mã: {item.code} · {item.categoryName}
                            </div>
                          </div>
                          <div className="text-[14px] font-bold text-[#2e7d32] whitespace-nowrap">
                            {item.priceText}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Action Pills + Cart */}
            <div className="flex items-center gap-2.5 md:gap-3">
              <a
                href={`https://zalo.me/${settings.zaloPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  height: 40,
                  padding: '0 16px',
                  borderRadius: 99,
                  border: '1px solid #e3ecf8',
                  backgroundColor: '#ffffff',
                  color: '#0068ff',
                  fontSize: '13.5px',
                  fontWeight: 600,
                }}
                className="hidden sm:inline-flex items-center gap-2 hover:bg-[#f5f9ff] transition-colors no-underline"
              >
                <ZaloIcon size={20} />
                <span>Chat Zalo</span>
              </a>

              <a
                href={`tel:${settings.hotlineRaw}`}
                style={{
                  height: 40,
                  padding: '0 18px',
                  borderRadius: 99,
                  border: '1px solid #c8e6c9',
                  backgroundColor: '#ffffff',
                  color: '#2e7d32',
                  fontSize: '14px',
                  fontWeight: 700,
                }}
                className="hidden lg:inline-flex items-center gap-2 hover:bg-[#f0fdf4] transition-colors no-underline"
              >
                <Phone size={15} className="text-[#2f2f31]" strokeWidth={2} />
                <span>{settings.hotline}</span>
              </a>

              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-[#2f2f31] hover:text-[#2e7d32] transition-colors cursor-pointer bg-transparent border-0"
                aria-label="Giỏ hàng"
              >
                <ShoppingBasket size={23} strokeWidth={1.8} />
                <span
                  style={{
                    position: 'absolute',
                    top: 2,
                    right: 0,
                    minWidth: 18,
                    height: 18,
                    borderRadius: 99,
                    backgroundColor: '#2e7d32',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '0 4px',
                  }}
                  className="flex items-center justify-center"
                >
                  {totalCartItems}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM NAVIGATION BAR (.header-bottom) */}
        <div
          className="header-bottom hidden lg:block"
          style={{
            backgroundColor: '#f0fdf4',
            minHeight: 50,
            borderBottom: '1px solid #ececee',
          }}
        >
          <div className="ht-container flex items-center justify-between h-[50px]">
            <nav className="flex items-center h-full">
              {navLinks.map((item, idx) => {
                const active = isNavActive(item.to);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    style={{
                      paddingLeft: idx === 0 ? 0 : 16,
                      paddingRight: 16,
                      marginRight: idx === 0 ? 8 : 0,
                      fontSize: '13.5px',
                      fontWeight: 600,
                      letterSpacing: '0.03em',
                      color: active ? '#2e7d32' : '#2f2f31',
                      height: '100%',
                      position: 'relative',
                    }}
                    className="inline-flex items-center hover:text-[#2e7d32] transition-colors no-underline whitespace-nowrap"
                  >
                    {item.label}
                    {active && (
                      <span
                        style={{
                          position: 'absolute',
                          left: idx === 0 ? 0 : 16,
                          right: 16,
                          bottom: 0,
                          height: 2,
                          backgroundColor: '#2e7d32',
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <Link
              to="/admin"
              className="text-[12px] font-medium text-[#8f8f92] hover:text-[#2e7d32] transition-colors no-underline"
            >
              Quản trị Web →
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-[300px] max-w-[85vw] bg-white h-full z-10 flex flex-col shadow-2xl">
            <div className="p-4 border-b border-[#ececee] flex items-center justify-between">
              <BrandLogoComponent
                brandName={settings.brandName}
                brandSub={settings.brandSub}
                logoMode={settings.logoMode}
                logoUrl={settings.logoUrl}
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#5f5f61] bg-transparent border-0"
              >
                <X size={22} />
              </button>
            </div>

            <div className="p-3.5 border-b border-[#ececee]">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm ba kích, tam thất, trái nhàu..."
                  className="w-full h-10 pl-4 pr-10 rounded-full border border-[#ececee] bg-[#fafafa] text-sm outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 w-8 h-8 rounded-full bg-[#2e7d32] text-white flex items-center justify-center border-0"
                >
                  <Search size={14} />
                </button>
              </form>
            </div>

            <nav className="flex-1 overflow-y-auto py-2">
              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block px-5 py-3 text-sm font-semibold border-b border-[#f4f4f5] no-underline ${
                    isNavActive(item.to)
                      ? 'text-[#2e7d32] bg-[#f0fdf4]'
                      : 'text-[#2f2f31]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/admin"
                className="block px-5 py-3 text-sm font-semibold text-[#16302a] bg-[#fafafa] no-underline"
              >
                ⚙️ Bảng điều khiển Admin
              </Link>
            </nav>

            <div className="p-4 border-t border-[#ececee] bg-[#f0fdf4] space-y-2.5">
              <a
                href={`tel:${settings.hotlineRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#2e7d32] text-white font-bold text-sm no-underline"
              >
                <Phone size={15} />
                Gọi {settings.hotline}
              </a>
              <a
                href={`https://zalo.me/${settings.zaloPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-white border border-[#d6e4fb] text-[#0068ff] font-bold text-sm no-underline"
              >
                <ZaloIcon size={18} />
                Chat Zalo ngay
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MAIN PAGE CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* 4. FOOTER (.footer-widgets.footer-1) */}
      <footer className="mt-auto">
        <div className="ht-footer-widgets">
          <div className="ht-container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-9">
              {/* Col 1: Brand & About (4 cols) */}
              <div className="lg:col-span-4">
                <div className="mb-5">
                  <BrandLogoComponent
                    brandName={settings.brandName}
                    brandSub={settings.brandSub}
                    logoMode={settings.logoMode}
                    logoUrl={settings.logoUrl}
                  />
                </div>
                <p
                  style={{
                    fontSize: '14.5px',
                    lineHeight: 1.9,
                    color: '#6b6673',
                    margin: '0 0 22px',
                  }}
                >
                  {settings.footerAbout}
                </p>
                <div className="flex items-center gap-2.5">
                  <a
                    href={settings.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#c8e6c9] text-[#3a3844] hover:bg-[#2e7d32] hover:text-white flex items-center justify-center transition-colors font-bold text-sm no-underline"
                    aria-label="Facebook"
                  >
                    f
                  </a>
                  <a
                    href={settings.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-[#c8e6c9] text-[#3a3844] hover:bg-[#2e7d32] hover:text-white flex items-center justify-center transition-colors text-xs font-bold no-underline"
                    aria-label="Instagram"
                  >
                    IG
                  </a>
                  <a
                    href={`https://zalo.me/${settings.zaloPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-90 transition-opacity no-underline"
                    aria-label="Zalo"
                  >
                    <ZaloIcon size={36} />
                  </a>
                </div>
              </div>

              {/* Col 2: Danh mục hoa (2.5 cols) */}
              <div className="lg:col-span-2">
                <h4
                  style={{
                    margin: 0,
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#3a3844',
                  }}
                >
                  DANH MỤC HOA
                </h4>
                <div className="ht-footer-divider" />
                <ul className="space-y-3 list-none p-0 m-0">
                  {[
                    { name: 'Hoa Bó', to: '/danh-muc/bo-hoa' },
                    { name: 'Giỏ Hoa', to: '/danh-muc/gio-hoa' },
                    { name: 'Hoa Khai Trương', to: '/danh-muc/hoa-khai-truong' },
                    { name: 'Hoa Viếng', to: '/danh-muc/hoa-vieng' },
                  ].map((c) => (
                    <li key={c.to}>
                      <Link
                        to={c.to}
                        className="inline-flex items-center gap-1.5 text-[14.5px] text-[#6b6673] hover:text-[#2e7d32] transition-colors no-underline"
                      >
                        <ChevronRight size={14} className="text-[#2e7d32]" />
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Hỗ trợ khách hàng (2.5 cols) */}
              <div className="lg:col-span-3">
                <h4
                  style={{
                    margin: 0,
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#3a3844',
                  }}
                >
                  HỖ TRỢ KHÁCH HÀNG
                </h4>
                <div className="ht-footer-divider" />
                <ul className="space-y-3 list-none p-0 m-0">
                  {[
                    { name: 'Hướng dẫn đặt hoa', to: '/gioi-thieu' },
                    { name: 'Chính sách giao hoa', to: '/gioi-thieu' },
                    { name: 'Chính sách đổi trả', to: '/gioi-thieu' },
                    { name: 'Chính sách bảo mật', to: '/lien-he' },
                    { name: 'Tin tức & Cẩm nang hoa', to: '/tin-tuc' },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.to}
                        className="inline-flex items-center gap-1.5 text-[14.5px] text-[#6b6673] hover:text-[#2e7d32] transition-colors no-underline"
                      >
                        <ChevronRight size={14} className="text-[#2e7d32]" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 4: Liên hệ đặt hoa (3 cols) */}
              <div className="lg:col-span-3">
                <h4
                  style={{
                    margin: 0,
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#3a3844',
                  }}
                >
                  LIÊN HỆ ĐẶT HOA
                </h4>
                <div className="ht-footer-divider" />
                <ul className="space-y-3.5 list-none p-0 m-0 text-[14px] text-[#6b6673]">
                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#c8e6c9] text-[#2e7d32] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone size={15} />
                    </span>
                    <div>
                      <div className="text-xs text-[#8f8f92]">Hotline đặt hoa</div>
                      <a
                        href={`tel:${settings.hotlineRaw}`}
                        className="font-bold text-[15px] text-[#3a3844] hover:text-[#2e7d32] no-underline"
                      >
                        {settings.hotline}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">
                      <ZaloIcon size={32} />
                    </span>
                    <div>
                      <div className="text-xs text-[#8f8f92]">Zalo</div>
                      <a
                        href={`https://zalo.me/${settings.zaloPhone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[14.5px] text-[#3a3844] hover:text-[#0068ff] no-underline"
                      >
                        zalo.me/{settings.zaloPhone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#c8e6c9] text-[#2e7d32] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={15} />
                    </span>
                    <div className="leading-relaxed">{settings.address}</div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#c8e6c9] text-[#2e7d32] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock size={15} />
                    </span>
                    <div className="pt-1">{settings.openHours}</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div
          style={{
            backgroundColor: '#fdf5f8',
            borderTop: '1px solid #e2e8f0',
            padding: '18px 0',
          }}
        >
          <div className="ht-container text-center text-[13px] text-[#6b6673]">
            <div>
              © 2026 {settings.brandName} – {settings.brandSub} – Hotline{' '}
              <a
                href={`tel:${settings.hotlineRaw}`}
                className="font-bold text-[#2e7d32] no-underline"
              >
                {settings.hotline}
              </a>
            </div>
            {settings.copyrightNote && (
              <div className="text-[11.5px] text-[#8f8f92] mt-1">
                {settings.copyrightNote}
              </div>
            )}
          </div>
        </div>
      </footer>

      {/* Floating Back-to-top button (Exact match to bottom-right circle in screenshot) */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            right: 22,
            bottom: 22,
            width: 42,
            height: 42,
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: '1px solid #d4d4d8',
            color: '#5f5f61',
            zIndex: 40,
          }}
          className="flex items-center justify-center shadow-md hover:border-[#2e7d32] hover:text-[#2e7d32] transition-colors cursor-pointer"
          aria-label="Lên đầu trang"
        >
          <ArrowUp size={18} />
        </button>
      )}

      {/* Shopping Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setCartOpen(false)}
          />
          <div className="relative w-full max-w-[400px] bg-white h-full z-10 flex flex-col shadow-2xl">
            <div className="px-5 py-4 border-b border-[#ececee] flex items-center justify-between">
              <h3 className="text-lg font-bold text-[#16302a] m-0">
                Giỏ hoa của bạn ({totalCartItems})
              </h3>
              <button
                onClick={() => setCartOpen(false)}
                className="p-1.5 text-[#5f5f61] hover:text-[#2e7d32] bg-transparent border-0 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                <ShoppingBasket size={48} className="text-[#81c784] mb-3" />
                <p className="text-[15px] text-[#5f5f61] mb-4">
                  Chưa có mẫu hoa nào trong giỏ hàng.
                </p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#2e7d32] text-white font-bold text-sm border-0 cursor-pointer"
                >
                  Tiếp tục chọn hoa
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-3.5 pb-4 border-b border-[#f4f4f5]"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        referrerPolicy="no-referrer"
                        className="w-16 h-20 object-cover rounded-lg flex-shrink-0 border border-[#ececee]"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-[14.5px] text-[#16302a]">
                          {item.product.title}
                        </div>
                        <div className="text-xs text-[#8f8f92] mt-0.5">
                          Mã: {item.product.code}
                        </div>
                        {item.includeFreeCard && (
                          <div className="text-xs text-[#2e7d32] mt-1">
                            ✓ Kèm thiệp viết tay miễn phí
                            {item.cardNote ? `: "${item.cardNote}"` : ''}
                          </div>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <div className="inline-flex items-center border border-[#ececee] rounded-full">
                            <button
                              onClick={() =>
                                updateCartQty(item.product.id, item.quantity - 1)
                              }
                              className="w-7 h-7 flex items-center justify-center text-sm bg-transparent border-0 cursor-pointer"
                            >
                              -
                            </button>
                            <span className="px-2 text-xs font-bold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateCartQty(item.product.id, item.quantity + 1)
                              }
                              className="w-7 h-7 flex items-center justify-center text-sm bg-transparent border-0 cursor-pointer"
                            >
                              +
                            </button>
                          </div>
                          <span className="font-bold text-sm text-[#2e7d32]">
                            {(
                              item.product.priceNumber * item.quantity
                            ).toLocaleString('vi-VN')}{' '}
                            ₫
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-[#8f8f92] hover:text-red-500 self-start p-1 bg-transparent border-0 cursor-pointer"
                        title="Xóa"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}

                  {/* Quick Order Form */}
                  {checkoutSuccess ? (
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-2.5">
                      <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0" />
                      <span>
                        Đã gửi đơn đặt hoa thành công! Nhân viên {settings.brandName} sẽ gọi xác nhận ngay.
                      </span>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleQuickOrderSubmit}
                      className="bg-[#f0fdf4] p-4 rounded-2xl border border-[#c8e6c9] space-y-3"
                    >
                      <div className="text-xs font-bold uppercase tracking-wider text-[#2e7d32]">
                        Thông tin người đặt hoa nhanh
                      </div>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Họ và tên của bạn *"
                        className="w-full h-10 px-3.5 rounded-xl border border-[#ececee] bg-white text-sm outline-none"
                      />
                      <input
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="Số điện thoại / Zalo *"
                        className="w-full h-10 px-3.5 rounded-xl border border-[#ececee] bg-white text-sm outline-none"
                      />
                      <textarea
                        rows={2}
                        value={customerNote}
                        onChange={(e) => setCustomerNote(e.target.value)}
                        placeholder="Địa chỉ nhận hoa, khung giờ giao, nội dung thiệp..."
                        className="w-full p-3 rounded-xl border border-[#ececee] bg-white text-sm outline-none resize-none"
                      />
                      <button
                        type="submit"
                        className="w-full py-3 rounded-full bg-[#2e7d32] hover:bg-[#c93a5c] text-white font-bold text-sm border-0 cursor-pointer transition-colors"
                      >
                        Hoàn tất đặt hoa ({totalCartPrice.toLocaleString('vi-VN')} ₫)
                      </button>
                    </form>
                  )}
                </div>

                <div className="p-4 border-t border-[#ececee] bg-[#fafafa] flex gap-2.5">
                  <a
                    href={`tel:${settings.hotlineRaw}`}
                    className="flex-1 py-2.5 rounded-full border border-[#c8e6c9] bg-white text-[#2e7d32] font-bold text-xs flex items-center justify-center gap-1.5 no-underline"
                  >
                    <Phone size={14} />
                    Gọi {settings.hotline}
                  </a>
                  <a
                    href={`https://zalo.me/${settings.zaloPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-full border border-[#d6e4fb] bg-white text-[#0068ff] font-bold text-xs flex items-center justify-center gap-1.5 no-underline"
                  >
                    <ZaloIcon size={16} />
                    Chốt đơn qua Zalo
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
