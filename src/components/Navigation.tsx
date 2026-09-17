import React, { useState } from 'react';
import { ScreenId } from '../types';
import { YinYangIcon, LotusIcon, WaxSealBadge } from './RitualDecorations';
import { Moon, Menu, X } from 'lucide-react';
import newLogoImage from '../assets/images/regenerated_image_transparent.png';

interface NavigationProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  isAudioActive: boolean;
  onToggleAudio: () => void;
  isMistActive: boolean;
  onToggleMist: () => void;
}

interface NavItem {
  id: ScreenId;
  label: string;
  subLabel: string;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Khởi Linh', subLabel: 'Giao Thoa & Sự Kiện' },
  { id: 'registration', label: 'Mua Vé', subLabel: 'Linh Bài Tham Dự', badge: 'Mở' }
];

export const Navigation: React.FC<NavigationProps> = ({
  currentScreen,
  onNavigate,
  isAudioActive,
  onToggleAudio,
  isMistActive,
  onToggleMist
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full select-none">
      {/* Wooden Beam / Scroll Bar container */}
      <div className="relative bg-[#140d04] border-b-2 border-[#5a403c] shadow-[0_8px_20px_rgba(0,0,0,0.85)]">
        {/* Lacquered wood texture overlay */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #140d04 0%, #261e12 25%, #31291c 50%, #261e12 75%, #140d04 100%)'
          }}
        />

        {/* Golden antique edge stripes */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#e9c349] to-transparent opacity-80" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-2.5 flex items-start justify-between relative z-10">
          {/* Title styled as Imperial seal */}
          <div
            onClick={() => onNavigate('home')}
            className="flex flex-col items-start cursor-pointer group shrink-0"
          >
            {/* DÒNG TIÊU ĐỀ THẲNG HÀNG, KHÔNG XUỐNG DÒNG */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2.5 whitespace-nowrap">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <span className="font-headline text-sm min-[360px]:text-base sm:text-lg lg:text-xl font-bold tracking-tight text-[#F2EBDD] uppercase whitespace-nowrap">
                  Đại Tiệc Âm Dương
                </span>
              </div>
              <span className="hidden sm:inline-block text-[#C9A24A]/60">·</span>
              <p className="text-[9px] min-[360px]:text-[10px] sm:text-[11px] font-body text-[#C9A24A] tracking-normal min-[360px]:tracking-wider uppercase whitespace-nowrap">
                ĐÊM KINH DỊ DÂN GIAN VIỆT NAM
              </p>
            </div>

            {/* 2 LOGO: ĐẠI TIỆC ÂM DƯƠNG (GÓC TRÁI NGOÀI CÙNG) & CAO ĐẲNG DU LỊCH SÀI GÒN */}
            <div className="flex items-center gap-2.5 pt-1.5 self-start">
              <img
                src={newLogoImage}
                alt="Logo Đại Tiệc Âm Dương - Giao Thoa Hai Cõi"
                referrerPolicy="no-referrer"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover border border-[#C9A24A]/60 shadow-[0_0_12px_rgba(201,162,74,0.45)] group-hover:scale-105 transition-transform shrink-0"
              />
              <img
                src="/IU.jpg"
                alt="Logo Trường Cao Đẳng Du Lịch Sài Gòn"
                referrerPolicy="no-referrer"
                className="h-8 sm:h-9 w-auto object-contain rounded bg-white/15 p-1 border border-[#C9A24A]/40 shadow-[0_0_10px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform shrink-0"
              />
            </div>
          </div>

          {/* Desktop Navigation: Hanging Pendant Tabs */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3 pt-0.5">
            {NAV_ITEMS.map((item) => {
              const isActive = currentScreen === item.id;
              return (
                <div key={item.id} className="relative group pt-1">
                  {/* Hanging silk cord representation */}
                  <div className="flex justify-center -mb-1">
                    <div
                      className={`w-[1.5px] h-2 transition-colors duration-200 ${
                        isActive ? 'bg-[#ff907f]' : 'bg-[#5a403c] group-hover:bg-[#e9c349]'
                      }`}
                    />
                  </div>

                  <button
                    onClick={() => onNavigate(item.id)}
                    className={`relative px-3.5 py-1.5 transition-all duration-200 text-left border ${
                      isActive
                        ? 'bg-[#8b0000] text-[#f0e0cc] border-[#e9c349] shadow-[0_4px_12px_rgba(139,0,0,0.7)]'
                        : 'bg-[#221a0e] text-[#f0e0cc] hover:text-[#ffe088] border-[#3c3326] hover:border-[#aa8984]'
                    }`}
                    style={{ borderRadius: 0 }}
                  >
                    {/* Pendant corner accent */}
                    <div className="flex items-center gap-1.5">
                      {isActive && <LotusIcon size={12} />}
                      <span className="font-headline font-bold text-xs tracking-wider uppercase">
                        {item.label}
                      </span>
                      {item.badge && (
                        <span className="text-[9px] font-mono px-1 bg-[#af8d11] text-[#140d04] font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="block text-[10px] font-body text-[#aa8984] leading-tight group-hover:text-[#e3beb8]">
                      {item.subLabel}
                    </span>
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Quick Controls: Ritual CTA */}
          <div className="flex items-center gap-2 sm:gap-3 self-start">
            {/* Quick Action Button: Mua Vé */}
            <button
              onClick={() => onNavigate('registration')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 btn-primary-sharp text-xs font-headline font-bold uppercase tracking-wider shadow-[0_2px_8px_rgba(139,0,0,0.6)] hover:brightness-110 transition-all self-start"
            >
              <Moon size={13} className="text-[#ffe088]" />
              <span>Mua Vé</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center text-[#f0e0cc] border border-[#5a403c] bg-[#221a0e] hover:border-[#e9c349] active:bg-[#31291c] transition-colors self-start"
              style={{ borderRadius: 0 }}
              aria-label="Mở menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1c140a] border-t border-[#5a403c] px-4 py-3.5 space-y-2.5">
            {NAV_ITEMS.map((item) => {
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full min-h-[44px] text-left px-3.5 py-2.5 border flex items-center justify-between ${
                    isActive
                      ? 'bg-[#8b0000] text-[#f0e0cc] border-[#e9c349]'
                      : 'bg-[#221a0e] text-[#f0e0cc] border-[#3c3326] active:bg-[#31291c]'
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  <div>
                    <div className="font-headline font-bold text-sm tracking-wide uppercase">
                      {item.label}
                    </div>
                    <div className="text-[11px] text-[#aa8984]">{item.subLabel}</div>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-[#af8d11] text-[#140d04] font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Quick Action in Mobile Menu */}
            <button
              onClick={() => {
                onNavigate('registration');
                setIsMobileMenuOpen(false);
              }}
              className="w-full min-h-[44px] py-3 px-4 btn-primary-sharp font-headline font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_2px_10px_rgba(139,0,0,0.7)] mt-2"
            >
              <Moon size={14} className="text-[#ffe088] shrink-0" />
              <span className="whitespace-nowrap">ĐẶT VÉ THAM DỰ NGAY</span>
            </button>
          </div>
        )}
      </div>

      {/* Decorative Bottom Trim of the Beam */}
      <div className="h-1 bg-[#261e12] border-b border-[#3c3326] flex items-center justify-center overflow-hidden">
        <div className="w-48 h-[1px] bg-[#e9c349]/50" />
      </div>
    </header>
  );
};
