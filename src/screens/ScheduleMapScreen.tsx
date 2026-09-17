import React, { useState } from 'react';
import { RITUAL_TIMELINE, BANQUET_ZONES, TABOO_RULES } from '../data/mockData';
import { BanquetZone } from '../types';
import {
  YinYangIcon,
  LotusIcon,
  WaxSealBadge,
  CloudBorderTrim,
  TaperedDivider,
  AntiqueCorner
} from '../components/RitualDecorations';
import { Clock, MapPin, AlertOctagon, Compass, Flame, ShieldAlert, Sparkles } from 'lucide-react';

export const ScheduleMapScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'map' | 'taboos'>('timeline');
  const [selectedZone, setSelectedZone] = useState<BanquetZone>(BANQUET_ZONES[2]); // default to Điện Càn Khôn

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#261e12] border border-[#e9c349]/50 text-xs font-mono text-[#ffe088] uppercase tracking-widest">
          <Compass size={14} />
          <span>Cương Lĩnh Tiệc & Trận Đồ Bát Quái</span>
          <Compass size={14} />
        </div>

        <h1 className="font-headline text-3xl sm:text-5xl font-black text-[#f0e0cc] weathered-text uppercase tracking-wide">
          Lịch Trình & Cấm Kỵ Tiệc
        </h1>

        <p className="max-w-2xl mx-auto font-body text-sm sm:text-base text-[#e3beb8] leading-relaxed">
          Nắm rõ từng thời khắc vận chuyển của khí âm dương, trận đồ các cung điện thiêng liêng, và 10 giới luật cấm kỵ để bảo toàn sinh khí suốt đêm dạ tiệc.
        </p>

        <CloudBorderTrim className="max-w-md mx-auto" />
      </div>

      {/* Segmented Control / Tabs */}
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 min-[420px]:grid-cols-3 sm:flex border border-[#5a403c] bg-[#140d04] p-1 w-full sm:w-auto max-w-full">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-2.5 sm:px-6 py-2 text-[11px] sm:text-sm font-headline font-bold uppercase tracking-normal sm:tracking-wider transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
              activeTab === 'timeline'
                ? 'bg-[#8b0000] text-[#f0e0cc] border border-[#e9c349]'
                : 'text-[#aa8984] hover:text-[#f0e0cc]'
            }`}
            style={{ borderRadius: 0 }}
          >
            <Clock size={14} className="shrink-0" />
            <span className="whitespace-nowrap">Thời Khắc</span>
          </button>

          <button
            onClick={() => setActiveTab('map')}
            className={`px-2.5 sm:px-6 py-2 text-[11px] sm:text-sm font-headline font-bold uppercase tracking-normal sm:tracking-wider transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
              activeTab === 'map'
                ? 'bg-[#8b0000] text-[#f0e0cc] border border-[#e9c349]'
                : 'text-[#aa8984] hover:text-[#f0e0cc]'
            }`}
            style={{ borderRadius: 0 }}
          >
            <MapPin size={14} className="shrink-0" />
            <span className="whitespace-nowrap">Trận Đồ Cung Điện</span>
          </button>

          <button
            onClick={() => setActiveTab('taboos')}
            className={`px-2.5 sm:px-6 py-2 text-[11px] sm:text-sm font-headline font-bold uppercase tracking-normal sm:tracking-wider transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
              activeTab === 'taboos'
                ? 'bg-[#8b0000] text-[#f0e0cc] border border-[#e9c349]'
                : 'text-[#aa8984] hover:text-[#f0e0cc]'
            }`}
            style={{ borderRadius: 0 }}
          >
            <ShieldAlert size={14} className="shrink-0" />
            <span className="whitespace-nowrap">Thập Đại Cấm Kỵ</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Chronological Timeline */}
      {activeTab === 'timeline' && (
        <div className="max-w-4xl mx-auto space-y-6">
          {RITUAL_TIMELINE.map((event, idx) => (
            <div
              key={idx}
              className="relative bg-[#23190e] border border-[#5a403c] p-4 sm:p-6 transition-all hover:border-[#e9c349] group"
              style={{
                borderRadius: 0,
                backgroundImage:
                  'linear-gradient(180deg, rgba(233,195,73,0.03) 0%, rgba(38,30,18,0.85) 60%, rgba(139,0,0,0.06) 100%)'
              }}
            >
              <AntiqueCorner position="top-left" size={16} />
              <AntiqueCorner position="top-right" size={16} />
              <AntiqueCorner position="bottom-left" size={16} />
              <AntiqueCorner position="bottom-right" size={16} />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#5a403c]/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs px-2 py-0.5 bg-[#8b0000] text-[#ffe088] border border-[#e9c349] font-bold">
                    {event.timePeriod}
                  </span>
                  <span className="font-mono text-xs text-[#aa8984]">
                    Giai Đoạn: <strong className="text-[#ffe088]">{event.ritualStage}</strong>
                  </span>
                </div>
                <div className="text-xs font-mono text-[#e9c349] flex items-center gap-1">
                  <MapPin size={12} />
                  <span>{event.location}</span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-headline font-bold text-xl text-[#ffe088] group-hover:text-[#ffdad4] transition-colors">
                  {event.title}
                </h3>
                <p className="font-headline text-xs text-[#aa8984] tracking-wide uppercase">
                  {event.subTitle}
                </p>
                <p className="font-body text-sm text-[#f0e0cc] leading-relaxed pt-2">
                  {event.description}
                </p>
              </div>

              {/* Hourly Taboos with Yin-Yang bullets */}
              <div className="mt-4 pt-4 border-t border-[#5a403c]/60 bg-[#191207] p-3">
                <span className="text-[10px] font-mono uppercase text-[#ff907f] font-bold tracking-wider block mb-2">
                  Điều Cần Kiêng Kỵ Trong Canh Giờ Này:
                </span>
                <ul className="space-y-1.5">
                  {event.taboos.map((taboo, tIdx) => (
                    <li key={tIdx} className="text-xs text-[#e3beb8] flex items-start gap-2">
                      <YinYangIcon size={12} className="mt-0.5 shrink-0" />
                      <span>{taboo}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Interactive Banquet Hall Map (Trận Đồ Cung Điện) */}
      {activeTab === 'map' && (
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Visual Map Canvas / Blueprint */}
            <div className="lg:col-span-2 relative bg-[#140d04] border-2 border-[#5a403c] p-6 flex flex-col justify-between min-h-[440px]" style={{ borderRadius: 0 }}>
              <AntiqueCorner position="top-left" size={20} />
              <AntiqueCorner position="top-right" size={20} />
              <AntiqueCorner position="bottom-left" size={20} />
              <AntiqueCorner position="bottom-right" size={20} />

              <div className="flex items-center justify-between border-b border-[#5a403c] pb-2 text-xs font-mono text-[#e9c349]">
                <span>SƠ ĐỒ TỌA LẠC BÁT QUÁI TRẬN</span>
                <span>TỈ LỆ 1:100 • PHONG THỦY ĐỊA LINH</span>
              </div>

              {/* Map Layout Area with Interactive Zone Nodes */}
              <div className="relative my-8 h-80 w-full bg-[#1e150a] border border-[#3c3326] p-4 flex items-center justify-center">
                {/* Ancient grid background */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage:
                      'linear-gradient(#e9c349 1px, transparent 1px), linear-gradient(90deg, #e9c349 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                  }}
                />

                {/* Central Yin-Yang Watermark */}
                <div className="absolute opacity-10 pointer-events-none">
                  <YinYangIcon size={200} />
                </div>

                {/* Interactive Zone Pins */}
                {BANQUET_ZONES.map((zone) => {
                  const isSelected = selectedZone.id === zone.id;
                  return (
                    <button
                      key={zone.id}
                      onClick={() => setSelectedZone(zone)}
                      style={{
                        left: `${zone.coordinates.x}%`,
                        top: `${zone.coordinates.y}%`,
                        transform: 'translate(-50%, -50%)',
                        borderRadius: 0
                      }}
                      className={`absolute z-20 px-3 py-2 border transition-all text-left shadow-lg ${
                        isSelected
                          ? 'bg-[#8b0000] border-[#ffe088] scale-110 shadow-[0_0_15px_rgba(233,195,73,0.6)]'
                          : 'bg-[#221a0e] border-[#5a403c] hover:border-[#e9c349] hover:bg-[#2d2112]'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <MapPin
                          size={12}
                          className={isSelected ? 'text-[#ffe088]' : 'text-[#aa8984]'}
                        />
                        <span className="font-headline font-bold text-xs text-[#f0e0cc] uppercase whitespace-nowrap">
                          {zone.name}
                        </span>
                      </div>
                      <span className="block text-[9px] font-mono text-[#aa8984] truncate max-w-[110px]">
                        {zone.alias}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-[11px] font-body text-[#aa8984] pt-2 border-t border-[#5a403c]">
                <span>Chạm vào các vị trí trên sơ đồ để xem thông số phong thủy</span>
                <span className="font-mono text-[#ffe088]">LỰA CHỌN: {selectedZone.name}</span>
              </div>
            </div>

            {/* Selected Zone Detail Panel */}
            <div className="bg-[#23190e] border border-[#e9c349] p-6 space-y-4 flex flex-col justify-between" style={{ borderRadius: 0 }}>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#8b0000] text-[#ffe088] border border-[#e9c349] uppercase">
                    Khu Vực Trọng Điểm
                  </span>
                  <WaxSealBadge text="Ấn Định" size="sm" />
                </div>

                <div>
                  <h3 className="font-headline font-bold text-2xl text-[#ffe088]">
                    {selectedZone.name}
                  </h3>
                  <p className="text-xs font-mono text-[#aa8984]">{selectedZone.alias}</p>
                </div>

                <TaperedDivider variant="gold" className="my-2" />

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase text-[#e9c349] block">
                    Ý Nghĩa Tâm Linh:
                  </span>
                  <p className="text-xs font-body text-[#f0e0cc] leading-relaxed">
                    {selectedZone.significance}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase text-[#e9c349] block">
                    Khí Sắc & Không Gian:
                  </span>
                  <p className="text-xs font-body text-[#e3beb8] leading-relaxed">
                    {selectedZone.atmosphere}
                  </p>
                </div>

                <div className="p-3 bg-[#191207] border border-[#5a403c] space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-[#ff907f] font-bold block">
                    Quy Tắc Tại Khu Vực:
                  </span>
                  <ul className="space-y-1">
                    {selectedZone.rules.map((rule, rIdx) => (
                      <li key={rIdx} className="text-xs text-[#f0e0cc] flex items-center gap-1.5">
                        <LotusIcon size={11} className="text-[#e9c349]" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] font-mono text-[#aa8984]">
                  Tọa độ bát trạch: {selectedZone.coordinates.x}° Đông - {selectedZone.coordinates.y}° Nam
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Thập Đại Giới Luật (10 Taboos) */}
      {activeTab === 'taboos' && (
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-[#2d110d] border border-[#8b0000] p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-sm font-headline font-bold text-[#ffdad4] uppercase">
              <AlertOctagon size={16} className="text-[#ff907f]" />
              <span>Thiết Luật Sinh Tử Của Đại Tiệc</span>
              <AlertOctagon size={16} className="text-[#ff907f]" />
            </div>
            <p className="text-xs font-body text-[#ffb4a8] mt-1">
              Người phàm bước vào cõi giao thoa phải tuân thủ nghiêm ngặt 8 điều cấm kỵ dưới đây để bảo hộ tam hồn thất phách.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TABOO_RULES.map((rule) => (
              <div
                key={rule.id}
                className="relative bg-[#23190e] border border-[#5a403c] p-6 hover:border-[#8b0000] transition-all group"
                style={{ borderRadius: 0 }}
              >
                <AntiqueCorner position="top-left" size={14} />
                <AntiqueCorner position="top-right" size={14} />
                <AntiqueCorner position="bottom-left" size={14} />
                <AntiqueCorner position="bottom-right" size={14} />

                {/* Wax Seal with Taboo label */}
                <div className="absolute -top-3.5 right-4 z-10">
                  <WaxSealBadge text={rule.sealLabel} size="sm" />
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-mono text-[#ffb4a8]">
                    GIỚI LUẬT THỨ 0{rule.id}
                  </div>

                  <h3 className="font-headline font-bold text-lg text-[#ffe088] group-hover:text-[#ffdad4] transition-colors">
                    {rule.title}
                  </h3>

                  <TaperedDivider variant="red" className="my-2" />

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#aa8984] uppercase block">
                      Hành vi nghiêm cấm:
                    </span>
                    <p className="text-xs font-body text-[#f0e0cc] font-semibold">
                      {rule.prohibition}
                    </p>
                  </div>

                  <div className="p-3 bg-[#191207] border-l-2 border-[#8b0000] text-xs font-body text-[#e3beb8]">
                    <span className="text-[#ff907f] font-bold">Hậu quả tâm linh: </span>
                    {rule.consequence}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
