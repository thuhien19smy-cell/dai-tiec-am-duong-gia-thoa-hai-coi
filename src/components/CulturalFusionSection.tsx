import React, { useState, useEffect } from 'react';
import { Sparkles, Moon, Flame, ArrowRight, Eye, DoorOpen } from 'lucide-react';
import { YinYangIcon, LotusIcon, AntiqueCorner, CloudBorderTrim } from './RitualDecorations';

export const CulturalFusionSection: React.FC = () => {
  // Fusion stage: 0 = Split (Ban đầu: VỊ KHÁCH ← → GIA CHỦ)
  //               1 = Converging (Sau đó: VỊ KHÁCH ← × → GIA CHỦ)
  //               2 = Merged / Meeting (Cuối cùng: Hòa vào cùng một background)
  const [fusionLevel, setFusionLevel] = useState<number>(0);
  const [hoveredSide, setHoveredSide] = useState<'guest' | 'host' | null>(null);
  const [activeStoryStep, setActiveStoryStep] = useState<number>(3);
  const [doorOpened, setDoorOpened] = useState<boolean>(false);

  // Auto progression or manual interactive control
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStoryStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#080808] text-[#F2EBDD] overflow-hidden film-grain select-none">
      {/* Ambient background fog & spotlight layers */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(circle at 50% 20%, rgba(201, 162, 74, 0.08) 0%, rgba(90, 11, 16, 0.12) 40%, rgba(8, 8, 8, 0.95) 80%)'
        }}
      />

      {/* Film grain noise and golden dust particles */}
      <div className="absolute inset-0 pointer-events-none opacity-25 animate-fog-slow"
        style={{
          background: 'radial-gradient(circle at 30% 60%, rgba(107, 17, 24, 0.15) 0%, transparent 60%), radial-gradient(circle at 70% 60%, rgba(201, 162, 74, 0.12) 0%, transparent 60%)',
          filter: 'blur(30px)'
        }}
      />

      <div className="max-w-[1280px] mx-auto relative z-10 space-y-20">
        {/* Section Header: GIAO THOA VĂN HÓA */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-[#090A0D] border border-[#C9A24A]/40 text-xs font-mono text-[#C9A24A] uppercase tracking-[0.25em]">
            <Sparkles size={13} className="text-[#C9A24A]" />
            <span>GIAO THOA VĂN HÓA</span>
            <Sparkles size={13} className="text-[#C9A24A]" />
          </div>

          <h2 className="font-headline text-[clamp(1.15rem,5.2vw,3.75rem)] font-bold tracking-tight text-[#F2EBDD] uppercase whitespace-nowrap flex items-center justify-center w-full max-w-full overflow-hidden leading-tight py-1">
            <span className="shrink-0">VỊ KHÁCH</span>
            <span className="inline-block text-[#C9A24A] animate-pulse-gold mx-1.5 sm:mx-3 font-light shrink-0">
              ×
            </span>
            <span className="shrink-0">GIA CHỦ</span>
          </h2>

          <p className="font-editorial italic text-xs min-[360px]:text-sm sm:text-base text-[#F2EBDD]/85 max-w-2xl mx-auto leading-relaxed text-center [text-wrap:balance]">
            "Khi văn hóa phương Tây bước vào một không gian đậm hồn Việt, đó không phải sự đối đầu hay thay thế — mà là cuộc tao ngộ đầy nghệ thuật giữa hai bờ cõi."
          </p>

          <CloudBorderTrim className="max-w-xs mx-auto opacity-70" />

          {/* Interactive Fusion Control Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="text-xs font-mono text-[#C9A24A]/70 uppercase tracking-wider">
              Trạng Thái Giao Thoa:
            </span>
            <div className="flex flex-wrap sm:inline-flex justify-center bg-[#090A0D] border border-[#C9A24A]/40 p-1 max-w-full gap-1">
              <button
                onClick={() => { setFusionLevel(0); setDoorOpened(false); }}
                className={`min-h-[36px] px-2 min-[360px]:px-2.5 sm:px-3 py-1.5 text-[10px] min-[360px]:text-[11px] sm:text-xs font-mono transition-all whitespace-nowrap ${
                  fusionLevel === 0
                    ? 'bg-[#5A0B10] text-[#F2EBDD] font-bold border border-[#C9A24A]'
                    : 'text-[#F2EBDD]/60 hover:text-[#F2EBDD]'
                }`}
              >
                VỊ KHÁCH ← → GIA CHỦ
              </button>
              <button
                onClick={() => { setFusionLevel(1); setDoorOpened(false); }}
                className={`min-h-[36px] px-2 min-[360px]:px-2.5 sm:px-3 py-1.5 text-[10px] min-[360px]:text-[11px] sm:text-xs font-mono transition-all whitespace-nowrap ${
                  fusionLevel === 1
                    ? 'bg-[#3A080B] text-[#C9A24A] font-bold border border-[#C9A24A]'
                    : 'text-[#F2EBDD]/60 hover:text-[#F2EBDD]'
                }`}
              >
                VỊ KHÁCH ← × → GIA CHỦ
              </button>
              <button
                onClick={() => { setFusionLevel(2); setDoorOpened(true); }}
                className={`min-h-[36px] px-2 min-[360px]:px-2.5 sm:px-3 py-1.5 text-[10px] min-[360px]:text-[11px] sm:text-xs font-mono transition-all whitespace-nowrap ${
                  fusionLevel === 2
                    ? 'bg-[#C9A24A] text-[#080808] font-bold'
                    : 'text-[#F2EBDD]/60 hover:text-[#F2EBDD]'
                }`}
              >
                HÒA HỢP HAI CÕI
              </button>
            </div>
          </div>
        </div>

        {/* KHUNG TOÀN CẢNH GIAO THOA VĂN HÓA: KÉO DÀI XUỐNG TẬN KHUNG THỨ 2 */}
        <div
          className={`border border-[#C9A24A]/40 bg-[#090A0D] relative transition-all duration-700 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.95)] ${
            fusionLevel === 1
              ? 'lg:max-w-4xl lg:mx-auto shadow-[0_0_50px_rgba(201,162,74,0.2)]'
              : fusionLevel === 2
              ? 'lg:max-w-3xl lg:mx-auto border-[#C9A24A] shadow-[0_0_70px_rgba(107,17,24,0.4)]'
              : 'w-full'
          }`}
        >
          {/* 4 Góc Hoa Văn Cổ Cho Toàn Bộ Khung */}
          <AntiqueCorner position="top-left" size={24} />
          <AntiqueCorner position="top-right" size={24} />
          <AntiqueCorner position="bottom-left" size={24} />
          <AntiqueCorner position="bottom-right" size={24} />

          {/* Golden ray accents ở đỉnh và đáy của toàn bộ khung */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent shadow-[0_0_15px_#C9A24A] z-20" />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent shadow-[0_0_15px_#C9A24A] z-20" />

          {/* 50/50 SPLIT SCREEN: BÊN TRÁI (VỊ KHÁCH) & BÊN PHẢI (GIA CHỦ) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative border-b border-[#C9A24A]/30">
          {/* Central Gold Boundary Ray with Pulsing Cross */}
          <div
            className={`hidden lg:flex absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-30 flex-col items-center justify-between py-8 transition-all duration-700 pointer-events-none ${
              fusionLevel === 2 ? 'opacity-20' : 'opacity-100'
            }`}
          >
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#C9A24A] to-transparent shadow-[0_0_12px_#C9A24A]" />
            <div className="absolute top-1/2 -translate-y-1/2 p-2 bg-[#080808] border border-[#C9A24A] text-[#C9A24A] rounded-none">
              <span className="font-headline font-bold text-lg animate-pulse-gold">×</span>
            </div>
          </div>

          {/* LEFT PANEL: 👻 VỊ KHÁCH — HALLOWEEN PHƯƠNG TÂY */}
          <div
            onMouseEnter={() => setHoveredSide('guest')}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative p-6 sm:p-8 lg:p-10 space-y-8 transition-all duration-700 bg-gradient-to-b from-[#090A0D] via-[#3A080B]/40 to-[#071426] border-b lg:border-b-0 lg:border-r border-[#C9A24A]/20 ${
              hoveredSide === 'guest' ? 'bg-[#5A0B10]/20 blood-glow-box' : ''
            }`}
          >

            {/* Subdued Dark Crimson & Deep Midnight Blue Background Glow */}
            <div
              className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                hoveredSide === 'guest' ? 'opacity-40' : 'opacity-20'
              }`}
              style={{
                background:
                  'radial-gradient(circle at 20% 30%, rgba(107, 17, 24, 0.4) 0%, rgba(7, 20, 38, 0.6) 60%, transparent 100%)'
              }}
            />

            {/* Silhouette & Mystery Cinematic Layer */}
            <div className="relative z-10 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F2EBDD]/70 tracking-widest uppercase">
                  <span>👻 VỊ KHÁCH</span>
                  <span>•</span>
                  <span className="text-[#C9A24A]">PHƯƠNG TÂY</span>
                </div>
                <h3 className="font-headline text-lg sm:text-2xl lg:text-[1.5rem] xl:text-3xl font-bold tracking-tight text-[#F2EBDD] uppercase whitespace-nowrap">
                  HALLOWEEN PHƯƠNG TÂY
                </h3>
              </div>

              {/* Sequential Storytelling Text Lines */}
              <div className="space-y-3 py-2 border-l border-[#C9A24A]/30 pl-4 font-headline text-sm sm:text-base lg:text-[15px] xl:text-lg text-[#F2EBDD]">
                <div
                  className={`transition-all duration-700 whitespace-nowrap ${
                    activeStoryStep >= 1 ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-2'
                  }`}
                >
                  <span className="text-[#C9A24A] mr-2">―</span> Hóa trang.
                </div>
                <div
                  className={`transition-all duration-700 whitespace-nowrap ${
                    activeStoryStep >= 2 ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-2'
                  }`}
                >
                  <span className="text-[#C9A24A] mr-2">―</span> Giải trí.
                </div>
                <div
                  className={`transition-all duration-700 whitespace-nowrap ${
                    activeStoryStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-2'
                  }`}
                >
                  <span className="text-[#C9A24A] mr-2">―</span> Những sinh vật kỳ bí.
                </div>
                <div
                  className={`transition-all duration-700 whitespace-nowrap ${
                    activeStoryStep >= 4 ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-2'
                  }`}
                >
                  <span className="text-[#C9A24A] mr-2">―</span> Những câu chuyện siêu nhiên.
                </div>
              </div>

              <p className="font-editorial italic text-[clamp(0.85rem,1.1vw,1.125rem)] text-[#F2EBDD]/85 leading-relaxed">
                <span className="block">"Halloween mang đến tinh thần tự do</span>
                <span className="block">
                  <span className="whitespace-nowrap">khám phá</span> thế giới của những điều kỳ lạ và bí&nbsp;ẩn."
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT PANEL: 🏮 GIA CHỦ — VĂN HÓA VIỆT NAM */}
          <div
            onMouseEnter={() => setHoveredSide('host')}
            onMouseLeave={() => setHoveredSide(null)}
            className={`relative p-6 sm:p-8 lg:p-10 space-y-8 transition-all duration-700 bg-gradient-to-b from-[#090A0D] via-[#221206]/60 to-[#080808] ${
              hoveredSide === 'host' ? 'bg-[#C9A24A]/10 gold-glow-box' : ''
            }`}
          >

            {/* Subdued Antique Gold & Candlelight Glow */}
            <div
              className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
                hoveredSide === 'host' ? 'opacity-35' : 'opacity-15'
              }`}
              style={{
                background:
                  'radial-gradient(circle at 80% 30%, rgba(201, 162, 74, 0.3) 0%, rgba(90, 11, 16, 0.4) 50%, transparent 100%)'
              }}
            />

            {/* Heritage & Spiritual Cinematic Layer */}
            <div className="relative z-10 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C9A24A] tracking-widest uppercase">
                  <span>🏮 GIA CHỦ</span>
                  <span>•</span>
                  <span>BẢN SẮC BẢN ĐỊA</span>
                </div>
                <h3 className="font-headline text-lg sm:text-2xl lg:text-[1.5rem] xl:text-3xl font-bold tracking-tight text-[#C9A24A] uppercase whitespace-nowrap">
                  VĂN HÓA VIỆT NAM
                </h3>
              </div>

              {/* Sequential Storytelling Text Lines */}
              <div className="space-y-3 py-2 border-l border-[#C9A24A] pl-4 font-headline text-sm sm:text-base lg:text-[15px] xl:text-lg text-[#F2EBDD]">
                <div
                  className={`transition-all duration-700 whitespace-nowrap ${
                    activeStoryStep >= 1 ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-2'
                  }`}
                >
                  <span className="text-[#C9A24A] mr-2">―</span> Tín ngưỡng dân gian.
                </div>
                <div
                  className={`transition-all duration-700 whitespace-nowrap ${
                    activeStoryStep >= 2 ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-2'
                  }`}
                >
                  <span className="text-[#C9A24A] mr-2">―</span> Những câu chuyện tâm linh.
                </div>
                <div
                  className={`transition-all duration-700 whitespace-nowrap ${
                    activeStoryStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-2'
                  }`}
                >
                  <span className="text-[#C9A24A] mr-2">―</span> Lòng kính trọng người đã khuất.
                </div>
                <div
                  className={`transition-all duration-700 whitespace-nowrap ${
                    activeStoryStep >= 4 ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-2'
                  }`}
                >
                  <span className="text-[#C9A24A] mr-2">―</span> Tình thân và những giá trị truyền thống.
                </div>
              </div>

              <p className="font-editorial italic text-[clamp(0.85rem,1.1vw,1.125rem)] text-[#F2EBDD]/85 leading-relaxed">
                <span className="block">
                  "Đó là cách người Việt nhìn nhận <span className="whitespace-nowrap">mối liên hệ</span> giữa
                </span>
                <span className="block">
                  con người — gia đình — cộng đồng — người đã&nbsp;khuất."
                </span>
              </p>
            </div>
          </div>
          </div>

          {/* TRANSITION CINEMATIC & CLIMAX: KHI VỊ KHÁCH GẶP GIA CHỦ (KHUNG THỨ 2 KẾ THỪA LIỀN MẠCH) */}
          <div className="relative p-4 min-[360px]:p-6 sm:p-14 lg:p-20 bg-[#090A0D]/95 text-center space-y-10 sm:space-y-12 overflow-hidden">
            {/* Đường phân định ánh kim rực rỡ giữa hai tầng khung */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A24A]/70 to-transparent shadow-[0_0_15px_#C9A24A]" />

          {/* Behind-the-door mystery lighting effect */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
              doorOpened ? 'opacity-40' : 'opacity-15'
            }`}
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(201, 162, 74, 0.25) 0%, rgba(90, 11, 16, 0.35) 40%, rgba(8, 8, 8, 0.95) 80%)'
            }}
          />

          {/* Ancient wooden door silhouette interactive trigger */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080808] border border-[#C9A24A] text-[11px] font-mono text-[#C9A24A] uppercase tracking-[0.2em]">
              <DoorOpen size={13} />
              <span>RANH GIỚI KHAI MÔN</span>
            </div>

            <h3 className="font-headline text-[clamp(1.05rem,4.5vw,3.75rem)] font-bold tracking-tight text-[#F2EBDD] uppercase whitespace-nowrap">
              KHI VỊ KHÁCH GẶP GIA CHỦ
            </h3>

            {/* Narrative Passage */}
            <div className="space-y-2 sm:space-y-3 font-editorial text-xs min-[360px]:text-sm sm:text-lg lg:text-2xl text-[#F2EBDD]/90 max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
              <p>Halloween bước vào một không gian văn hóa Việt Nam.</p>
              <p>Những yếu tố phương Tây không thay thế văn hóa bản địa.</p>
              <p className="text-[#F2EBDD] font-bold">Chúng trở thành Vị khách.</p>
              <p className="text-[#C9A24A] font-bold">Còn văn hóa Việt Nam chính là Gia chủ.</p>
            </div>

            {/* Button to open ancient door transition */}
            <div className="pt-2">
              <button
                onClick={() => setDoorOpened(!doorOpened)}
                className="min-h-[44px] px-3 min-[360px]:px-4 sm:px-6 py-2 min-[360px]:py-2.5 sm:py-3 btn-secondary-sharp text-[9px] min-[360px]:text-[10px] sm:text-xs font-headline font-bold uppercase tracking-normal min-[360px]:tracking-wider sm:tracking-widest flex items-center justify-center gap-1.5 sm:gap-2 mx-auto whitespace-nowrap max-w-full"
              >
                <Eye size={14} className="text-[#C9A24A] shrink-0" />
                <span className="whitespace-nowrap">{doorOpened ? 'ĐANG MỞ CÁNH CỬA CỔ DIỆN MẠO' : 'MỞ CÁNH CỬA GIAO THOA HAI THẾ GIỚI'}</span>
              </button>
            </div>
          </div>

          {/* THE MOST ICONIC CINEMATIC STATEMENT */}
          <div className="relative z-10 pt-6 sm:pt-8 space-y-3 sm:space-y-4 text-center">
            {/* Statement 1: VĂN HÓA NGOẠI NHẬP LÀ KHÁCH */}
            <div className="flex items-center justify-center w-full">
              <p className="font-headline text-[clamp(0.85rem,3.2vw,2rem)] text-[#F2EBDD] font-medium tracking-wide whitespace-nowrap text-center">
                VĂN HÓA NGOẠI NHẬP LÀ KHÁCH.
              </p>
            </div>

            {/* Statement 2: BẢN SẮC VIỆT NAM LÀ GIA CHỦ (Larger, Antique Gold, Glow) */}
            <div className="flex items-center justify-center w-full">
              <h4 className="font-headline text-[clamp(0.95rem,4.4vw,3rem)] font-black text-[#C9A24A] gold-glow uppercase tracking-wider whitespace-nowrap text-center leading-tight">
                BẢN SẮC VIỆT NAM LÀ GIA CHỦ.
              </h4>
            </div>
          </div>
        </div>
        {/* Kết thúc Khung toàn cảnh Giao Thoa */}
      </div>
    </div>
  </section>
  );
};
