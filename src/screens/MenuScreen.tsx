import React, { useState } from 'react';
import { MenuItem, RealmCategory } from '../types';
import { MENU_ITEMS } from '../data/mockData';
import {
  YinYangIcon,
  LotusIcon,
  WaxSealBadge,
  CloudBorderTrim,
  TaperedDivider,
  AntiqueCorner
} from '../components/RitualDecorations';
import { Flame, AlertTriangle, Utensils, X, Sparkles, Filter } from 'lucide-react';

export const MenuScreen: React.FC = () => {
  const [selectedRealm, setSelectedRealm] = useState<RealmCategory>('all');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  const filteredDishes = MENU_ITEMS.filter((item) => {
    if (selectedRealm === 'all') return true;
    return item.realm === selectedRealm;
  });

  const getRealmName = (realm: MenuItem['realm']) => {
    switch (realm) {
      case 'duong-gian':
        return 'Dương Gian (Cõi Sống)';
      case 'am-gioi':
        return 'Âm Giới (Cõi Vong)';
      case 'luong-nghi':
        return 'Lưỡng Nghi (Giao Thoa)';
    }
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8 space-y-8">
      {/* Header Banner */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#261e12] border border-[#e9c349]/50 text-xs font-mono text-[#ffe088] uppercase tracking-widest">
          <LotusIcon size={14} />
          <span>Ngự Yến Hai Cõi • Mỹ Vị Vong Trần</span>
          <LotusIcon size={14} />
        </div>

        <h1 className="font-headline text-3xl sm:text-5xl font-black text-[#f0e0cc] weathered-text uppercase tracking-wide">
          Thực Đơn Âm Dương Đại Tiệc
        </h1>

        <p className="max-w-2xl mx-auto font-body text-sm sm:text-base text-[#e3beb8] leading-relaxed">
          Mỗi phong vị trong đại tiệc đều được cân đong theo thuật phong thủy cổ và bí truyền thảo mộc nghìn năm. Từng món ăn là một nghi thức khai tâm, tẩy trần và giao thoa với cõi vô hình.
        </p>

        <CloudBorderTrim className="max-w-md mx-auto" />
      </div>

      {/* Realm Filter Tabs styled as parchment tags */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-4 pt-2">
        <button
          onClick={() => setSelectedRealm('all')}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-headline font-bold uppercase tracking-wider border transition-all ${
            selectedRealm === 'all'
              ? 'btn-primary-sharp'
              : 'bg-[#221a0e] text-[#f0e0cc] border-[#5a403c] hover:border-[#aa8984]'
          }`}
          style={{ borderRadius: 0 }}
        >
          Tất Cả Mỹ Vị ({MENU_ITEMS.length})
        </button>

        <button
          onClick={() => setSelectedRealm('duong-gian')}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-headline font-bold uppercase tracking-wider border transition-all flex items-center gap-1.5 ${
            selectedRealm === 'duong-gian'
              ? 'btn-primary-sharp'
              : 'bg-[#221a0e] text-[#f0e0cc] border-[#5a403c] hover:border-[#aa8984]'
          }`}
          style={{ borderRadius: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#e9c349]" />
          <span>Dương Gian (Cõi Sống)</span>
        </button>

        <button
          onClick={() => setSelectedRealm('am-gioi')}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-headline font-bold uppercase tracking-wider border transition-all flex items-center gap-1.5 ${
            selectedRealm === 'am-gioi'
              ? 'btn-primary-sharp'
              : 'bg-[#221a0e] text-[#f0e0cc] border-[#5a403c] hover:border-[#aa8984]'
          }`}
          style={{ borderRadius: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#8b0000]" />
          <span>Âm Giới (Cõi Vong)</span>
        </button>

        <button
          onClick={() => setSelectedRealm('luong-nghi')}
          className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-sm font-headline font-bold uppercase tracking-wider border transition-all flex items-center gap-1.5 ${
            selectedRealm === 'luong-nghi'
              ? 'btn-primary-sharp'
              : 'bg-[#221a0e] text-[#f0e0cc] border-[#5a403c] hover:border-[#aa8984]'
          }`}
          style={{ borderRadius: 0 }}
        >
          <YinYangIcon size={12} />
          <span>Lưỡng Nghi (Giao Thoa)</span>
        </button>
      </div>

      {/* Dish Grid: Vertical Talismanic Strips */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
        {filteredDishes.map((dish) => (
          <div
            key={dish.id}
            onClick={() => setSelectedDish(dish)}
            className="group relative bg-[#23190e] border border-[#5a403c] hover:border-[#e9c349] p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between hover:shadow-[0_8px_24px_rgba(139,0,0,0.45)]"
            style={{
              borderRadius: 0,
              backgroundImage:
                'linear-gradient(180deg, rgba(233,195,73,0.03) 0%, rgba(38,30,18,0.85) 60%, rgba(139,0,0,0.08) 100%)'
            }}
          >
            {/* Antique Corner Accents */}
            <AntiqueCorner position="top-left" size={16} />
            <AntiqueCorner position="top-right" size={16} />
            <AntiqueCorner position="bottom-left" size={16} />
            <AntiqueCorner position="bottom-right" size={16} />

            {/* Wax Seal Chip */}
            <div className="absolute -top-3 right-4 z-10 group-hover:scale-110 transition-transform">
              <WaxSealBadge text={dish.sealText} size="sm" />
            </div>

            {/* Top info */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono pr-8">
                <span
                  className={`px-1.5 py-0.5 border ${
                    dish.realm === 'am-gioi'
                      ? 'border-[#8b0000] text-[#ff907f] bg-[#2d110d]'
                      : dish.realm === 'duong-gian'
                      ? 'border-[#e9c349] text-[#ffe088] bg-[#2d240d]'
                      : 'border-[#aa8984] text-[#f0e0cc] bg-[#261e12]'
                  }`}
                >
                  {getRealmName(dish.realm).split(' ')[0]}
                </span>
                <span className="text-[#aa8984] font-bold">{dish.priceInCoins}</span>
              </div>

              {/* Dish Names */}
              <div>
                <h3 className="font-headline font-bold text-lg text-[#ffe088] group-hover:text-[#ffdad4] transition-colors leading-snug">
                  {dish.name}
                </h3>
                {dish.chineseName && (
                  <span className="text-xs font-mono text-[#aa8984] tracking-wider">
                    {dish.chineseName}
                  </span>
                )}
              </div>

              <p className="font-body text-xs text-[#e3beb8] line-clamp-3 leading-relaxed">
                {dish.description}
              </p>

              <TaperedDivider variant="gold" className="my-2 opacity-60" />

              {/* Ingredients List with Lotus Petal Bullets */}
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase text-[#e9c349] tracking-wider block">
                  Linh Dược Phối Vị:
                </span>
                <ul className="space-y-1">
                  {dish.ingredients.slice(0, 3).map((ingredient, i) => (
                    <li key={i} className="text-xs font-body text-[#f0e0cc] flex items-center gap-1.5">
                      <LotusIcon size={10} className="text-[#e9c349]" />
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Taboo Warning Banner */}
            <div className="mt-4 pt-3 border-t border-[#5a403c]/60">
              <div className="flex items-start gap-1.5 text-[11px] text-[#ffb4a8] font-body">
                <AlertTriangle size={13} className="shrink-0 text-[#ff907f] mt-0.5" />
                <span className="line-clamp-1 italic">{dish.tabooWarning}</span>
              </div>
              <div className="mt-2 text-right">
                <span className="text-[11px] font-mono text-[#e9c349] group-hover:underline">
                  Chi tiết ẩm thực →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Dish Modal / Scroll Reveal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-2.5 sm:p-4 overflow-y-auto">
          <div
            className="relative w-full max-w-xl bg-[#23190e] border-2 border-[#e9c349] p-4 sm:p-8 shadow-[0_0_50px_rgba(139,0,0,0.8)] my-6 sm:my-8 animate-in fade-in zoom-in duration-200"
            style={{ borderRadius: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedDish(null)}
              className="absolute top-4 right-4 p-1.5 border border-[#5a403c] text-[#e3beb8] hover:text-[#ffe088] hover:border-[#e9c349] bg-[#140d04]"
              style={{ borderRadius: 0 }}
            >
              <X size={18} />
            </button>

            {/* Corner rivets */}
            <AntiqueCorner position="top-left" size={20} />
            <AntiqueCorner position="top-right" size={20} />
            <AntiqueCorner position="bottom-left" size={20} />
            <AntiqueCorner position="bottom-right" size={20} />

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <WaxSealBadge text={selectedDish.sealText} size="md" />
                <div>
                  <span className="text-xs font-mono text-[#e9c349] uppercase tracking-wider block">
                    {getRealmName(selectedDish.realm)}
                  </span>
                  <h2 className="font-headline text-xl sm:text-2xl font-bold text-[#ffe088]">
                    {selectedDish.name}
                  </h2>
                  {selectedDish.chineseName && (
                    <span className="text-xs font-mono text-[#aa8984]">
                      {selectedDish.chineseName}
                    </span>
                  )}
                </div>
              </div>

              <TaperedDivider variant="gold" />

              <p className="text-sm font-body text-[#f0e0cc] leading-relaxed">
                {selectedDish.description}
              </p>

              {/* Ingredients & Pairings */}
              <div className="space-y-3 bg-[#191207] p-3 sm:p-4 border border-[#5a403c]">
                <h4 className="font-headline text-xs font-bold uppercase tracking-wider text-[#ffe088] flex items-center gap-1.5">
                  <Utensils size={14} />
                  <span>Ngũ Vị Thảo Mộc Hòa Khí</span>
                </h4>
                <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-2">
                  {selectedDish.ingredients.map((ing, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs text-[#e3beb8]">
                      <LotusIcon size={12} className="text-[#e9c349] shrink-0" />
                      <span>{ing}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Taboo Warning & Protocol */}
              <div className="p-3 sm:p-4 bg-[#2d110d] border border-[#8b0000] space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-headline font-bold text-[#ffdad4] uppercase">
                  <AlertTriangle size={14} className="text-[#ff907f] shrink-0" />
                  <span>Điều Cấm Kỵ Khi Thưởng Tiệc:</span>
                </div>
                <p className="text-xs font-body text-[#ffb4a8] leading-relaxed">
                  {selectedDish.tabooWarning}
                </p>
                <div className="text-[11px] font-mono text-[#e9c349] pt-1">
                  Khuyến nghị: {selectedDish.pairing}
                </div>
              </div>

              {/* Bottom buttons */}
              <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-3 pt-2">
                <div className="font-mono text-sm text-[#ffe088]">
                  Quy đổi: <span className="font-bold">{selectedDish.priceInCoins}</span>
                </div>
                <button
                  onClick={() => setSelectedDish(null)}
                  className="w-full min-[420px]:w-auto px-4 sm:px-6 py-2 btn-primary-sharp font-headline font-bold text-xs uppercase tracking-wider text-center"
                >
                  Xác Nhận Đã Rõ Nghi Thức
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
