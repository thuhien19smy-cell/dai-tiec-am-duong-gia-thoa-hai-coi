import React from 'react';

// Yin-Yang Icon with aged gold and deep charcoal/blood-red
export const YinYangIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block shrink-0 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" fill="#140d04" stroke="#e9c349" strokeWidth="1.5" />
    <path
      d="M12 1C5.925 1 1 5.925 1 12C1 18.075 5.925 23 12 23C12 23 12 17.5 12 17.5C12 14.462 9.538 12 6.5 12C9.538 12 12 9.538 12 6.5C12 6.5 12 1 12 1Z"
      fill="#ffb4a8"
    />
    <path
      d="M12 1C12 1 12 6.5 12 6.5C12 9.538 14.462 12 17.5 12C14.462 12 12 14.462 12 17.5C12 17.5 12 23 12 23C18.075 23 23 18.075 23 12C23 5.925 18.075 1 12 1Z"
      fill="#8b0000"
    />
    <circle cx="12" cy="6.5" r="2.2" fill="#140d04" />
    <circle cx="12" cy="17.5" r="2.2" fill="#ffe088" />
  </svg>
);

// Sacred Lotus Icon
export const LotusIcon: React.FC<{ size?: number; className?: string }> = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={`inline-block shrink-0 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3C12 3 9.5 8 9.5 12C9.5 15.5 12 19 12 19C12 19 14.5 15.5 14.5 12C14.5 8 12 3 12 3Z"
      fill="#e9c349"
      stroke="#ffe088"
      strokeWidth="0.8"
    />
    <path
      d="M12 19C10 18 6 15 5 11C4 7 7 6 7 6C7 6 8.5 10 12 13"
      stroke="#e9c349"
      strokeWidth="1.2"
      fill="none"
    />
    <path
      d="M12 19C14 18 18 15 19 11C20 7 17 6 17 6C17 6 15.5 10 12 13"
      stroke="#e9c349"
      strokeWidth="1.2"
      fill="none"
    />
    <path
      d="M2 17C6 19 12 20 12 20C12 20 18 19 22 17"
      stroke="#8b0000"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Antique Corner Brackets in Aged Gold
export const AntiqueCorner: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; size?: number }> = ({
  position,
  size = 24
}) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90'
  }[position];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={`absolute ${rotationClass} pointer-events-none text-[#e9c349]`}
      style={{
        top: position.includes('top') ? 0 : 'auto',
        bottom: position.includes('bottom') ? 0 : 'auto',
        left: position.includes('left') ? 0 : 'auto',
        right: position.includes('right') ? 0 : 'auto'
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 0H16V3H3V16H0V0Z" fill="currentColor" opacity="0.9" />
      <path d="M6 6H12V8H8V12H6V6Z" fill="#ffb4a8" opacity="0.8" />
      <circle cx="3" cy="3" r="1.5" fill="#ffe088" />
    </svg>
  );
};

// Traditional Cloud/Lotus Border Trim in Gold
export const CloudBorderTrim: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`w-full overflow-hidden flex items-center justify-center py-1 opacity-80 ${className}`}>
    <svg width="100%" height="12" viewBox="0 0 360 12" fill="none" preserveAspectRatio="none">
      <path
        d="M0 6 Q15 0 30 6 T60 6 T90 6 T120 6 T150 6 T180 6 T210 6 T240 6 T270 6 T300 6 T330 6 T360 6"
        stroke="#e9c349"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="180" cy="6" r="3" fill="#8b0000" stroke="#e9c349" strokeWidth="1" />
      <circle cx="90" cy="6" r="2" fill="#e9c349" />
      <circle cx="270" cy="6" r="2" fill="#e9c349" />
    </svg>
  </div>
);

// Rough-drawn divider line tapering at both ends
export const TaperedDivider: React.FC<{ variant?: 'gold' | 'red'; className?: string }> = ({
  variant = 'gold',
  className = ''
}) => {
  return (
    <div
      className={`w-full my-4 ${
        variant === 'gold' ? 'divider-rough' : 'divider-red'
      } ${className}`}
    />
  );
};

// Skeuomorphic Wax Seal (Dấu sáp huyết)
export const WaxSealBadge: React.FC<{
  text: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ text, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-[9px]',
    md: 'w-11 h-11 text-[11px]',
    lg: 'w-16 h-16 text-[13px]'
  }[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full font-headline font-bold uppercase tracking-wider text-center select-none shadow-md ${sizeClasses} ${className}`}
      style={{
        background: 'radial-gradient(circle at 35% 35%, #b52619, #690000 60%, #410000)',
        boxShadow:
          'inset 0 1px 2px rgba(255, 230, 200, 0.4), inset 0 -3px 4px rgba(0, 0, 0, 0.7), 0 3px 8px rgba(0, 0, 0, 0.7)',
        border: '1.5px solid #920703',
        color: '#ffe088',
        textShadow: '0 1px 2px rgba(0,0,0,0.8)'
      }}
    >
      <div className="absolute inset-1 rounded-full border border-dashed border-[#e9c349]/40 pointer-events-none" />
      <span className="relative z-10 px-1 leading-none drop-shadow">{text}</span>
    </div>
  );
};

// Talismanic Strip Container with 0px sharp corners and aged scroll flair
export const TalismanCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  sealLabel?: string;
  id?: string;
}> = ({ children, className = '', glow = false, sealLabel, id }) => {
  return (
    <div
      id={id}
      className={`relative bg-[#23190e] border border-[#5a403c] p-5 transition-all duration-300 ${
        glow ? 'shadow-[0_0_20px_rgba(139,0,0,0.4)] border-[#e9c349]/70' : 'hover:border-[#aa8984]'
      } ${className}`}
      style={{
        borderRadius: 0,
        backgroundImage:
          'linear-gradient(180deg, rgba(233,195,73,0.03) 0%, rgba(38,30,18,0.8) 50%, rgba(139,0,0,0.05) 100%)'
      }}
    >
      {/* Top and Bottom Cloud Trims */}
      <AntiqueCorner position="top-left" size={16} />
      <AntiqueCorner position="top-right" size={16} />
      <AntiqueCorner position="bottom-left" size={16} />
      <AntiqueCorner position="bottom-right" size={16} />

      {sealLabel && (
        <div className="absolute -top-3.5 right-4 z-20">
          <WaxSealBadge text={sealLabel} size="sm" />
        </div>
      )}

      {children}
    </div>
  );
};
