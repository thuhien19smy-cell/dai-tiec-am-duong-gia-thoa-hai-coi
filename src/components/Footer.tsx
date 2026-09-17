import React from 'react';
import { ScreenId } from '../types';
import { Moon, Phone, MapPin } from 'lucide-react';
import { EVENT_INFO } from '../data/mockData';
import logoDaiTiec from '../assets/images/regenerated_image_transparent.png';

interface FooterProps {
  onNavigate?: (screen: ScreenId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <footer className="relative bg-[#080808] border-t border-[#C9A24A]/40 text-[#F2EBDD] pt-14 pb-8 overflow-hidden select-none">
      {/* Top golden border trim */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent opacity-80" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#3A080B]">
          {/* Col 1: Identity & Proclamation */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src={logoDaiTiec}
                alt="Đại Tiệc Âm Dương - Giao Thoa Hai Cõi"
                referrerPolicy="no-referrer"
                className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full object-cover border border-[#C9A24A]"
              />
              <img
                src="/IU.jpg"
                alt="Trường Cao Đẳng Du Lịch Sài Gòn"
                referrerPolicy="no-referrer"
                className="h-8 sm:h-10 w-auto object-contain rounded bg-white/10 p-0.5 sm:p-1 shrink-0"
              />
              <div className="min-w-0">
                <span className="font-headline font-bold text-xs min-[340px]:text-sm min-[380px]:text-base sm:text-xl text-[#F2EBDD] uppercase block leading-tight whitespace-nowrap">
                  {EVENT_INFO.title}
                </span>
                <p className="text-[9px] min-[340px]:text-[10px] sm:text-[11px] font-mono text-[#C9A24A] tracking-normal sm:tracking-wider whitespace-nowrap">
                  {EVENT_INFO.subTitle}
                </p>
              </div>
            </div>

            <p className="font-editorial italic text-sm text-[#F2EBDD]/80 leading-relaxed max-w-lg">
              <span className="block">"VĂN HÓA NGOẠI NHẬP LÀ KHÁCH.</span>
              <span className="block">BẢN SẮC VIỆT NAM LÀ GIA CHỦ."</span>
            </p>

            <div className="pt-1 space-y-1.5 text-xs font-mono text-[#F2EBDD]/70">
              <div className="flex items-start gap-2 text-[#C9A24A]">
                <MapPin size={13} className="shrink-0 mt-0.5" />
                <span className="break-words">
                  <span className="whitespace-nowrap">{EVENT_INFO.venue}</span> - <span>{EVENT_INFO.address}</span>
                </span>
              </div>
              <div className="flex items-start gap-2 text-[#F2EBDD]/80">
                <Moon size={13} className="text-[#C9A24A] shrink-0 mt-0.5" />
                <span className="break-words">
                  <span className="whitespace-nowrap">{EVENT_INFO.dateTime}</span> · <span>{EVENT_INFO.capacity}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Contact Info & Hotline */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-[#C9A24A] flex items-center gap-1.5">
              <Phone size={12} className="text-[#C9A24A]" />
              <span>BAN TỔ CHỨC LIÊN HỆ</span>
            </h4>
            <div className="p-4 bg-[#090A0D] border border-[#3A080B] space-y-3" style={{ borderRadius: 0 }}>
              {EVENT_INFO.contacts.map((c, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] font-mono text-[#F2EBDD]/60 block">{c.role}</span>
                    <span className="font-headline font-bold text-[#F2EBDD]">{c.name}</span>
                  </div>
                  <a
                    href={`tel:${c.phone.replace(/\s+/g, '')}`}
                    className="font-mono text-[#C9A24A] hover:underline"
                  >
                    {c.phone}
                  </a>
                </div>
              ))}
              <div className="pt-2 border-t border-[#3A080B]/60 text-[11px] font-editorial italic text-[#F2EBDD]/70">
                "CÓ THỜ CÓ THIÊNG, CÓ KIÊNG CÓ LÀNH."
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] sm:text-[11px] font-mono text-[#F2EBDD]/60 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span>© 2026 ĐẠI TIỆC ÂM DƯƠNG — ĐÊM KINH DỊ DÂN GIAN VIỆT NAM.</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-[#C9A24A] text-center md:text-right flex-wrap justify-center md:justify-end">
            <span className="font-semibold text-[#e9c349]">BÀI THI KẾT THÚC MÔN THUỘC DÒNG LỚP:</span>
            <span className="text-[#F2EBDD]/90 font-mono tracking-wider">CĐLH20N10 - CĐLH20N11 - CĐLH20N12</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
