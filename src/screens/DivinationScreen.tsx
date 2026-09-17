import React, { useState } from 'react';
import { DIVINATION_HEXAGRAMS } from '../data/mockData';
import { DivinationHexagram } from '../types';
import {
  YinYangIcon,
  LotusIcon,
  WaxSealBadge,
  CloudBorderTrim,
  TaperedDivider,
  AntiqueCorner
} from '../components/RitualDecorations';
import { Sparkles, Flame, RefreshCw, Scroll, ShieldCheck, HeartHandshake } from 'lucide-react';

export const DivinationScreen: React.FC = () => {
  const [selectedHexagram, setSelectedHexagram] = useState<DivinationHexagram | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [drawnCount, setDrawnCount] = useState(0);

  const handleDrawHexagram = () => {
    setIsShaking(true);
    setSelectedHexagram(null);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * DIVINATION_HEXAGRAMS.length);
      setSelectedHexagram(DIVINATION_HEXAGRAMS[randomIndex]);
      setIsShaking(false);
      setDrawnCount((prev) => prev + 1);
    }, 1200);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#261e12] border border-[#e9c349]/50 text-xs font-mono text-[#ffe088] uppercase tracking-widest">
          <Sparkles size={14} />
          <span>Bát Quái Diễn Số • Thẻ Trúc Âm Dương</span>
          <Sparkles size={14} />
        </div>

        <h1 className="font-headline text-3xl sm:text-5xl font-black text-[#f0e0cc] weathered-text uppercase tracking-wide">
          Gieo Quẻ Chiêm Báo
        </h1>

        <p className="max-w-2xl mx-auto font-body text-sm sm:text-base text-[#e3beb8] leading-relaxed">
          Thành tâm tịnh ý, hướng về chư vị tiền nhân nơi cõi vô hình. Lắc ống thẻ trúc để rút một quẻ sâm linh thiêng, nhận lời sấm truyền và chỉ dẫn phong thủy riêng cho bạn trong đêm đại tiệc.
        </p>

        <CloudBorderTrim className="max-w-md mx-auto" />
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Left Column: Divination Cylinder & Draw Trigger */}
        <div className="md:col-span-5 bg-[#23190e] border border-[#5a403c] p-4 sm:p-6 text-center space-y-6 relative" style={{ borderRadius: 0 }}>
          <AntiqueCorner position="top-left" size={16} />
          <AntiqueCorner position="top-right" size={16} />
          <AntiqueCorner position="bottom-left" size={16} />
          <AntiqueCorner position="bottom-right" size={16} />

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#aa8984] uppercase tracking-wider">
              Ống Trúc Cổ Bát Quái
            </span>
            <h3 className="font-headline font-bold text-lg sm:text-xl text-[#ffe088] uppercase">
              Thành Tâm Gieo Quẻ
            </h3>
          </div>

          {/* Divination Bamboo Cylinder Graphic */}
          <div className="relative py-6 flex justify-center items-center">
            <div
              className={`relative w-28 h-44 bg-[#31291c] border-2 border-[#e9c349] p-2 flex flex-col justify-between items-center shadow-[0_8px_20px_rgba(0,0,0,0.8)] transition-transform ${
                isShaking ? 'animate-[bounce_0.2s_infinite]' : ''
              }`}
              style={{ borderRadius: 0 }}
            >
              {/* Bamboo Sticks protruding from top */}
              <div className="absolute -top-10 flex gap-1.5 items-end justify-center w-full px-2">
                <div className={`w-1.5 h-12 bg-[#af8d11] border-t border-[#ffe088] ${isShaking ? 'animate-pulse' : ''}`} />
                <div className={`w-1.5 h-16 bg-[#e9c349] border-t border-[#ffe088] ${isShaking ? 'animate-bounce' : ''}`} />
                <div className={`w-1.5 h-10 bg-[#af8d11] border-t border-[#ffe088]`} />
                <div className={`w-1.5 h-14 bg-[#e9c349] border-t border-[#ffe088]`} />
                <div className={`w-1.5 h-11 bg-[#af8d11] border-t border-[#ffe088]`} />
              </div>

              {/* Cylinder Body Decoration */}
              <div className="w-full h-2 bg-[#140d04] border-y border-[#e9c349]" />

              <div className="text-center space-y-1 my-auto">
                <YinYangIcon size={36} />
                <span className="block text-[11px] font-headline font-bold text-[#ffe088] uppercase tracking-widest">
                  Âm Dương
                </span>
              </div>

              <div className="w-full h-2 bg-[#140d04] border-y border-[#e9c349]" />
            </div>
          </div>

          <p className="text-xs font-body text-[#e3beb8] italic leading-relaxed">
            "Vạn sự tùy duyên, tâm thành tất ứng. Mỗi người một đêm tiệc chỉ nên gieo một quẻ duy nhất."
          </p>

          <button
            onClick={handleDrawHexagram}
            disabled={isShaking}
            className="w-full py-3.5 btn-primary-sharp font-headline font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
          >
            <Flame size={16} className="text-[#ffe088]" />
            <span>{isShaking ? 'ĐANG LẮC ỐNG THẺ...' : 'LẮC ỐNG THẺ ÂM DƯƠNG'}</span>
          </button>

          {drawnCount > 0 && (
            <div className="text-[10px] font-mono text-[#aa8984]">
              Đã gieo quẻ: {drawnCount} lần trong phiên này
            </div>
          )}
        </div>

        {/* Right Column: Revealed Hexagram Oracle */}
        <div className="md:col-span-7">
          {selectedHexagram ? (
            <div
              className="bg-[#23190e] border-2 border-[#e9c349] p-4 sm:p-8 space-y-6 shadow-[0_0_35px_rgba(139,0,0,0.6)] animate-in fade-in zoom-in duration-300 relative"
              style={{
                borderRadius: 0,
                backgroundImage:
                  'linear-gradient(180deg, rgba(233,195,73,0.05) 0%, rgba(38,30,18,0.9) 60%, rgba(139,0,0,0.08) 100%)'
              }}
            >
              <AntiqueCorner position="top-left" size={20} />
              <AntiqueCorner position="top-right" size={20} />
              <AntiqueCorner position="bottom-left" size={20} />
              <AntiqueCorner position="bottom-right" size={20} />

              {/* Hexagram Header */}
              <div className="flex items-start justify-between border-b border-[#5a403c] pb-4 gap-2">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-2xl font-mono text-[#e9c349] tracking-widest">
                      {selectedHexagram.symbol}
                    </span>
                    <span
                      className={`text-xs font-headline font-bold px-2 py-0.5 border ${
                        selectedHexagram.level === 'Đại Cát'
                          ? 'bg-[#8b0000] text-[#ffe088] border-[#e9c349]'
                          : selectedHexagram.level === 'Thượng Cát'
                          ? 'bg-[#2d240d] text-[#ffe088] border-[#e9c349]'
                          : 'bg-[#261e12] text-[#f0e0cc] border-[#5a403c]'
                      }`}
                    >
                      {selectedHexagram.level}
                    </span>
                    <span className="text-xs font-mono text-[#aa8984]">
                      Hành: {selectedHexagram.element}
                    </span>
                  </div>

                  <h3 className="font-headline font-bold text-xl sm:text-2xl text-[#ffe088] uppercase">
                    {selectedHexagram.name}
                  </h3>
                </div>

                <WaxSealBadge text="Ứng Quẻ" size="md" />
              </div>

              {/* 4-Line Vietnamese Oracle Poem */}
              <div className="p-4 bg-[#140d04] border-l-2 border-[#e9c349] space-y-1.5 text-center">
                <span className="text-[10px] font-mono text-[#aa8984] uppercase tracking-wider block mb-2">
                  Thơ Sấm Linh Ứng:
                </span>
                {selectedHexagram.poem.map((line, lIdx) => (
                  <p
                    key={lIdx}
                    className="font-headline text-sm sm:text-base text-[#f0e0cc] italic tracking-wide"
                  >
                    "{line}"
                  </p>
                ))}
              </div>

              {/* Interpretation */}
              <div className="space-y-2">
                <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-[#e9c349] flex items-center gap-1.5">
                  <Scroll size={14} />
                  <span>Lời Bàn Giải Nghĩa Quẻ:</span>
                </h4>
                <p className="font-body text-xs sm:text-sm text-[#e3beb8] leading-relaxed">
                  {selectedHexagram.interpretation}
                </p>
              </div>

              {/* Advice for the Banquet */}
              <div className="p-4 bg-[#2d110d] border border-[#8b0000] space-y-1.5">
                <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-[#ffdad4] flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-[#ff907f]" />
                  <span>Chỉ Dẫn Cho Bạn Khi Dự Đại Tiệc:</span>
                </h4>
                <p className="font-body text-xs text-[#ffb4a8] leading-relaxed">
                  {selectedHexagram.adviceForBanquet}
                </p>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleDrawHexagram}
                  className="px-4 py-2 btn-secondary-sharp text-xs font-headline font-bold uppercase flex items-center gap-1.5"
                >
                  <RefreshCw size={13} />
                  <span>Gieo Quẻ Khác</span>
                </button>
              </div>
            </div>
          ) : (
            <div
              className="h-full min-h-[380px] bg-[#1a1208] border border-dashed border-[#5a403c] p-8 flex flex-col items-center justify-center text-center space-y-3"
              style={{ borderRadius: 0 }}
            >
              <div className="p-4 bg-[#23190e] border border-[#3c3326] text-[#e9c349]">
                <Sparkles size={36} className="text-[#aa8984]" />
              </div>
              <h3 className="font-headline font-bold text-lg text-[#ffe088] uppercase">
                Chưa Rút Thẻ Sâm
              </h3>
              <p className="text-xs text-[#aa8984] max-w-xs font-body leading-relaxed">
                Nhấn vào nút "Lắc Ống Thẻ Âm Dương" ở khung bên trái để rút một quẻ sâm may mắn dẫn lối cho bạn.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
