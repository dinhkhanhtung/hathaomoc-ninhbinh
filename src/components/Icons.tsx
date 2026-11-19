import React from 'react';

export const ZaloIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 20,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="16" cy="16" r="16" fill="#0068FF" />
    <path
      d="M7.5 14.5C7.5 10.634 11.3056 7.5 16 7.5C20.6944 7.5 24.5 10.634 24.5 14.5C24.5 18.366 20.6944 21.5 16 21.5C14.88 21.5 13.81 21.32 12.83 20.99L9.2 22.4C8.82 22.54 8.47 22.17 8.64 21.8L9.82 19.22C8.39 17.99 7.5 16.34 7.5 14.5Z"
      fill="white"
    />
    <text
      x="16"
      y="16.3"
      textAnchor="middle"
      fill="#0068FF"
      fontSize="6.4"
      fontWeight="800"
      fontFamily="Arial, sans-serif"
    >
      Zalo
    </text>
  </svg>
);

export const HerbalLeafIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 28,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

export const BrandLogoComponent: React.FC<{
  brandName: string;
  brandSub: string;
  logoMode: 'custom_brand' | 'original_img';
  logoUrl: string;
}> = ({ brandName, brandSub, logoMode, logoUrl }) => {
  if (logoMode === 'original_img' && logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={brandName}
        referrerPolicy="no-referrer"
        style={{ maxHeight: 60, width: 'auto', display: 'block' }}
      />
    );
  }

  return (
    <div className="flex items-center gap-2.5 select-none">
      <div
        className="flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-700 to-green-900 text-white shadow-md"
        style={{ width: 44, height: 44, flexShrink: 0 }}
      >
        <HerbalLeafIcon size={24} className="text-emerald-100" />
      </div>
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: '"Playfair Display", "Be Vietnam Pro", serif',
            fontWeight: 700,
            fontSize: brandName.length > 12 ? '22px' : '26px',
            color: '#16302a',
            letterSpacing: '-0.015em',
            lineHeight: 1.15,
            whiteSpace: 'nowrap',
          }}
        >
          {brandName}
        </span>
        <span
          style={{
            fontSize: '11px',
            fontWeight: 600,
            color: '#2e7d32',
            letterSpacing: '0.05em',
            marginTop: '3px',
            whiteSpace: 'nowrap',
          }}
        >
          {brandSub}
        </span>
      </div>
    </div>
  );
};
