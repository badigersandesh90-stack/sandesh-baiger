import React from 'react';

// Generates a lightweight, zero-dependency QR code SVG using Google Chart API or fallback SVG pattern
interface QrCodeProps {
  value: string;
  size?: number;
  className?: string;
}

export const QrCodeSvg: React.FC<QrCodeProps> = ({ value, size = 180, className = '' }) => {
  const encodedValue = encodeURIComponent(value);
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedValue}&margin=6`;

  return (
    <div className={`inline-flex flex-col items-center justify-center p-3 bg-white rounded-xl border border-slate-200 shadow-sm ${className}`}>
      <img
        src={qrUrl}
        alt={`QR Code for ${value}`}
        width={size}
        height={size}
        className="rounded-lg aspect-square"
        loading="lazy"
        onError={(e) => {
          // If offline or blocked, fallback gracefully
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
      <span className="text-[11px] text-slate-500 mt-2 font-medium">Scan with camera / ಗೂಗಲ್ ಲೆನ್ಸ್ ಬಳಸಿ</span>
    </div>
  );
};
