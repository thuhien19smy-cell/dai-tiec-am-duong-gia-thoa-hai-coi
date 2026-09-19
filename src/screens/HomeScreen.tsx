import React, { useState } from 'react';
import { ScreenId, TicketPackage } from '../types';
import logoDaiTiec from '../assets/images/regenerated_image_transparent.png';
import {
  EVENT_INFO,
  OFFICIAL_TIMELINE,
  OFFICIAL_MESSAGES,
  OFFICIAL_TICKETS,
  OFFICIAL_FAQS
} from '../data/mockData';
import { CulturalFusionSection } from '../components/CulturalFusionSection';
import { TicketBookingModal } from '../components/TicketBookingModal';
import {
  YinYangIcon,
  LotusIcon,
  WaxSealBadge,
  AntiqueCorner,
  CloudBorderTrim,
  TaperedDivider
} from '../components/RitualDecorations';
import {
  Flame,
  Sparkles,
  Ticket,
  Clock,
  MapPin,
  Phone,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ShieldCheck,
  Calendar,
  Users,
  Compass,
  Scroll
} from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  const [selectedTicket, setSelectedTicket] = useState<TicketPackage | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const logoSrc = logoDaiTiec;

  const handleOpenBooking = (ticket?: TicketPackage) => {
    if (ticket) {
      setSelectedTicket(ticket);
    } else {
      setSelectedTicket(OFFICIAL_TICKETS[1]); // Default to popular 'ÂM DƯƠNG'
    }
    setIsBookingModalOpen(true);
  };

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-0 text-[#F2EBDD]">
      {/* =========================================================================
          HERO SECTION:
          Chiếm gần toàn bộ màn hình đầu tiên (min-h-[92vh]).
          Logo ở chính giữa.
          Text: ĐẠI TIỆC ÂM DƯƠNG / ĐÊM KINH DỊ DÂN GIAN VIỆT NAM”
          Background: Không gian Việt Nam cổ xưa pha trộn bóng tối, sương mù, đỏ sẫm và xanh navy.
          Storytelling: Một đêm. Một lời nguyền. Một câu chuyện chưa bao giờ được kể hết...
          ========================================================================= */}
      <div
        id="hero-section"
        className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden film-grain select-none border-b border-[#C9A24A]/30"
      >
        {/* Background Atmosphere Layers */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 35%, rgba(107, 17, 24, 0.28) 0%, rgba(7, 20, 38, 0.55) 50%, rgba(8, 8, 8, 0.98) 85%)'
          }}
        />

        {/* Slow moving fog layer */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30 animate-fog-slow"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(201, 162, 74, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(90, 11, 16, 0.15) 0%, transparent 60%)',
            filter: 'blur(40px)'
          }}
        />

        {/* Outer Frame Lines with Antique Brass Corners */}
        <div className="absolute inset-2 min-[360px]:inset-4 sm:inset-8 border border-[#C9A24A]/25 pointer-events-none" />
        <AntiqueCorner position="top-left" size={24} />
        <AntiqueCorner position="top-right" size={24} />
        <AntiqueCorner position="bottom-left" size={24} />
        <AntiqueCorner position="bottom-right" size={24} />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 py-4 sm:py-6">
          {/* LOGO CHÍNH TÂM HERO - NGUYÊN BẢN GỐC KHÔNG CROP KHÔNG MÉO */}
          <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-4">
            <div
              className="relative flex items-center justify-center rounded-full shrink-0"
              style={{
                boxShadow:
                  '0 0 16px 2px rgba(201, 162, 74, 0.45), 0 0 32px 5px rgba(201, 162, 74, 0.22), 0 0 48px 10px rgba(201, 162, 74, 0.10)'
              }}
            >
              {/* Lớp ánh sáng vàng kim huyền ảo lan tỏa từ phía sau logo */}
              <div
                className="absolute -inset-2 sm:-inset-4 rounded-full pointer-events-none -z-10 opacity-70"
                style={{
                  background:
                    'radial-gradient(circle, rgba(201, 162, 74, 0.28) 0%, rgba(201, 162, 74, 0.12) 65%, rgba(90, 11, 16, 0.08) 85%, transparent 100%)',
                  filter: 'blur(12px)'
                }}
              />

              <img
                id="hero-logo-image"
                src={logoSrc}
                alt="Đại Tiệc Âm Dương - Giao Thoa Hai Cõi"
                referrerPolicy="no-referrer"
                className="relative z-10 w-48 h-48 min-[400px]:w-52 min-[400px]:h-52 sm:w-60 sm:h-60 md:w-68 md:h-68 lg:w-76 lg:h-76 max-w-full aspect-square object-contain mx-auto drop-shadow-[0_0_18px_rgba(201,162,74,0.32)] drop-shadow-[0_15px_35px_rgba(0,0,0,0.85)] select-none transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-1.5 bg-[#090A0D] border border-[#C9A24A]/40 text-[10px] min-[360px]:text-xs sm:text-sm font-mono text-[#C9A24A] uppercase tracking-wider sm:tracking-[0.2em] shadow-[0_0_15px_rgba(201,162,74,0.1)] whitespace-nowrap max-w-full">
              <Sparkles size={12} className="text-[#C9A24A] shrink-0" />
              <span id="hero-event-subtitle" className="font-semibold whitespace-nowrap shrink-0">
                ĐÊM KINH DỊ DÂN GIAN VIỆT NAM
              </span>
              <Sparkles size={12} className="text-[#C9A24A] shrink-0" />
            </div>
          </div>

          {/* MAIN TITLES */}
          <div className="space-y-3 sm:space-y-4">
            <h1
              id="dai-tiec-am-duong-title"
              className="font-headline text-[clamp(1.35rem,6.4vw,5.5rem)] font-black tracking-[0.05em] sm:tracking-[0.12em] text-[#F2EBDD] uppercase leading-none py-1 drop-shadow-[0_4px_35px_rgba(90,11,16,0.75)] drop-shadow-[0_0_25px_rgba(201,162,74,0.2)] whitespace-nowrap max-w-full flex items-center justify-center"
            >
              ĐẠI TIỆC ÂM DƯƠNG
            </h1>

            <div className="flex items-center justify-center gap-2 sm:gap-3 pt-1 whitespace-nowrap">
              <div className="h-[1px] w-4 min-[360px]:w-8 sm:w-24 bg-gradient-to-r from-transparent via-[#C9A24A] to-transparent" />
              <p className="font-headline text-base sm:text-xl lg:text-2xl text-[#C9A24A] font-semibold tracking-[0.14em] sm:tracking-[0.26em] uppercase whitespace-nowrap">
                GIAO THOA HAI CÕI
              </p>
              <div className="h-[1px] w-4 min-[360px]:w-8 sm:w-24 bg-gradient-to-l from-transparent via-[#C9A24A] to-transparent" />
            </div>

            <div className="pt-1">
              <span className="inline-flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 bg-[#090A0D]/90 border border-[#C9A24A]/40 text-[10px] min-[360px]:text-xs sm:text-sm font-mono text-[#F2EBDD]/80 tracking-normal sm:tracking-widest uppercase text-center max-w-full">
                <span className="hidden sm:inline text-[#C9A24A] shrink-0">✦</span>
                <span className="whitespace-nowrap">25.10.2026 · 17:00 – 21:30</span>
                <span className="hidden sm:inline text-[#C9A24A]/60">·</span>
                <span className="whitespace-nowrap text-[#C9A24A] sm:text-[#F2EBDD]/80 font-bold sm:font-normal">GRAND PALACE SÀI GÒN</span>
                <span className="hidden sm:inline text-[#C9A24A] shrink-0">✦</span>
              </span>
            </div>
          </div>

          <CloudBorderTrim className="max-w-xs mx-auto opacity-75" />

          {/* STORYTELLING PASSAGE:
              Một đêm. Một lời nguyền. Một câu chuyện chưa bao giờ được kể hết... */}
          <div className="p-4 min-[360px]:p-6 sm:p-8 bg-[#090A0D]/85 border border-[#3A080B] text-center space-y-4 max-w-2xl mx-auto shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
            <p className="font-headline text-sm sm:text-lg text-[#C9A24A] italic tracking-wide">
              <span className="inline-block">"Một đêm. Một lời nguyền.</span>{' '}
              <span className="inline-block">Một câu chuyện chưa bao giờ được kể hết."</span>
            </p>

            <div className="font-editorial text-[#F2EBDD]/90 space-y-2 leading-relaxed">
              <p className="text-[clamp(0.75rem,3.2vw,1.125rem)]">
                <span className="inline-block">Có những câu chuyện</span>{' '}
                <span className="inline-block">người ta kể để giải trí.</span>
              </p>
              <p className="text-[#F2EBDD] font-bold text-[clamp(0.72rem,3.1vw,1.125rem)]">
                <span className="inline-block">Có những câu chuyện...</span>{' '}
                <span className="inline-block">chỉ nên nghe khi trời đã tối.</span>
              </p>
              <p className="text-xs min-[360px]:text-sm sm:text-base text-[#F2EBDD]/80 pt-2 font-body [text-wrap:pretty]">
                Đêm nay, những truyền thuyết dân gian Việt Nam sẽ không còn nằm trong những trang sách cũ. Chúng sẽ bước ra khỏi bóng tối, xuất hiện ngay trước mắt bạn và đưa bạn vào một đêm Halloween mà bạn sẽ không dễ dàng quên.
              </p>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto">
            <button
              onClick={() => handleOpenBooking()}
              className="w-full sm:w-auto min-h-[44px] px-8 py-4 btn-primary-sharp font-headline font-bold text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] flex items-center justify-center gap-2.5 whitespace-nowrap shadow-[0_4px_20px_rgba(139,0,0,0.5)]"
            >
              <Ticket size={16} className="shrink-0" />
              <span className="whitespace-nowrap">MUA VÉ NGAY</span>
            </button>

            <a
              href="#timeline"
              className="w-full sm:w-auto min-h-[44px] px-6 py-4 btn-secondary-sharp font-headline font-bold text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Clock size={16} className="text-[#C9A24A] shrink-0" />
              <span className="whitespace-nowrap">HÀNH TRÌNH ĐẠI TIỆC</span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          GIAO THOA VĂN HÓA: VỊ KHÁCH × GIA CHỦ
          - 50/50 Split screen (Vị Khách vs Gia Chủ)
          - Animated transition & open door
          - Iconic Cinematic Statement
          ========================================================================= */}
      <div id="giao-thoa">
        <CulturalFusionSection />
      </div>

      {/* =========================================================================
          TIMELINE: HÀNH TRÌNH CỦA ĐẠI TIỆC
          18:00 — ĐIỂM CHẠM
          18:30 — BƯỚC QUA RANH GIỚI
          19:00 — LẠC VÀO CÕI ÂM
          19:30 — LINH HỒN CỦA ĐẠI TIỆC (Vở kịch tâm linh)
          20:00 — HỒI I: MA LON
          20:30 — HỒI II: MA DA
          21:00 — HỒI III: MA ĐÓI
          21:30 — THỨC TỈNH TÂM LINH
          ========================================================================= */}
      <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080808] relative border-b border-[#C9A24A]/25">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#090A0D] border border-[#C9A24A]/40 text-xs font-mono text-[#C9A24A] uppercase tracking-[0.25em]">
              <Clock size={12} />
              <span>TIMELINE</span>
              <Clock size={12} />
            </div>

            <h2 className="font-headline text-[clamp(1.25rem,4.5vw,3rem)] sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2EBDD] uppercase whitespace-nowrap">
              HÀNH TRÌNH ĐẠI TIỆC
            </h2>

            <p className="font-editorial italic text-[clamp(0.88rem,1.2vw,1.125rem)] text-[#F2EBDD]/70 max-w-2xl mx-auto leading-relaxed">
              <span className="block">Từng canh giờ dẫn lối quan khách đi sâu vào cõi mộng ảo,</span>
              <span className="block">đối diện với những truyền thuyết cổ xưa&nbsp;nhất.</span>
            </p>

            <CloudBorderTrim className="max-w-xs mx-auto opacity-70" />
          </div>

          {/* Timeline Sequence */}
          <div className="relative border-l-2 border-[#C9A24A]/50 ml-2 min-[360px]:ml-4 sm:ml-32 space-y-8 sm:space-y-10 pl-4 min-[360px]:pl-6 sm:pl-10">
            {OFFICIAL_TIMELINE.map((item, index) => (
              <div key={index} className="relative group">
                {/* Time Badge on Left */}
                <div className="sm:absolute sm:-left-36 sm:top-0 mb-2 sm:mb-0">
                  <span className="inline-block font-mono font-bold text-sm sm:text-base text-[#C9A24A] bg-[#090A0D] border border-[#C9A24A]/50 px-2.5 py-1">
                    {item.time}
                  </span>
                </div>

                {/* Golden Node on Vertical Line */}
                <div
                  className={`absolute -left-[23px] min-[360px]:-left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 border border-[#C9A24A] transition-all ${
                    item.isHighlight
                      ? 'bg-[#C9A24A] shadow-[0_0_12px_#C9A24A]'
                      : 'bg-[#5A0B10] group-hover:bg-[#C9A24A]'
                  }`}
                  style={{ borderRadius: 0 }}
                />

                {/* Content Box */}
                <div
                  className={`p-3.5 min-[360px]:p-4 sm:p-6 border transition-all ${
                    item.isHighlight
                      ? 'bg-[#3A080B]/50 border-[#C9A24A] shadow-[0_0_25px_rgba(201,162,74,0.2)]'
                      : 'bg-[#090A0D] border-[#3A080B] hover:border-[#C9A24A]/60'
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                    <h3 className="font-headline font-bold text-sm sm:text-base lg:text-xl text-[#F2EBDD] uppercase tracking-wide">
                      {item.stageName}
                    </h3>
                    {item.isHighlight && (
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-[#C9A24A] text-[#080808] font-bold whitespace-nowrap shrink-0">
                        ĐIỂM NHẤN
                      </span>
                    )}
                  </div>
                  <p className="font-body text-xs sm:text-sm text-[#F2EBDD]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          THÔNG ĐIỆP & Ý NGHĨA NHÂN VĂN
          THÔNG ĐIỆP: TÂM LINH TỒN TẠI HAY KHÔNG DỰA VÀO NIỀM TIN CỦA MỖI NGƯỜI
          Ý NGHĨA NHÂN VĂN: CÓ THỜ CÓ THIÊNG, CÓ KIÊNG CÓ LÀNH.
                           DÙ CÒN SỐNG HAY ĐÃ CHẾT NGƯỜI VIỆT NAM VẪN LỰA CHỌN SỰ TỬ TẾ VỚI NHAU ĐẾN CUỐI CÙNG
          ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090A0D] relative border-b border-[#C9A24A]/25 film-grain select-none">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#C9A24A] uppercase tracking-[0.3em] block">
              TÂM NIỆM KHỞI SINH
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl font-bold text-[#F2EBDD] uppercase tracking-tight">
              THÔNG ĐIỆP ĐẠI TIỆC
            </h2>
            <div className="px-3 py-4 sm:p-6 bg-[#080808] border border-[#C9A24A]/60 shadow-[0_0_30px_rgba(201,162,74,0.15)] max-w-full overflow-hidden">
              <p className="font-headline text-[clamp(0.72rem,3.4vw,1.4rem)] sm:text-xl md:text-2xl text-[#C9A24A] font-bold tracking-normal sm:tracking-wide uppercase leading-relaxed text-center">
                <span className="block whitespace-nowrap">"{OFFICIAL_MESSAGES.mainMessageLines[0]}</span>
                <span className="block whitespace-nowrap">{OFFICIAL_MESSAGES.mainMessageLines[1]}"</span>
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#3A080B]">
            <span className="text-xs font-mono text-[#F2EBDD]/60 uppercase tracking-[0.3em] block">
              Ý NGHĨA NHÂN VĂN
            </span>
            <div className="space-y-3 font-editorial text-lg sm:text-2xl text-[#F2EBDD] italic max-w-2xl mx-auto leading-relaxed">
              <p className="text-[#F2EBDD] font-semibold text-[clamp(0.75rem,3.6vw,1.5rem)] sm:text-xl md:text-2xl whitespace-nowrap">
                "{OFFICIAL_MESSAGES.humanitarianMeaning[0]}"
              </p>
              <p className="text-[#C9A24A] font-bold text-[clamp(0.85rem,3.6vw,1.4rem)] sm:text-xl md:text-2xl [text-wrap:balance]">
                "{OFFICIAL_MESSAGES.humanitarianMeaning[1]}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MUA VÉ / CHỌN VÉ — BƯỚC QUA RANH GIỚI ÂM DƯƠNG
          SỐ LƯỢNG VÉ CÓ HẠN
          - 👻 ĐƠN CÕI: 119.000 VNĐ
          - 🏮 ÂM DƯƠNG: 129.000 VNĐ
          - 👑 ĐẠI TIỆC ÂM DƯƠNG: 139.000 VNĐ
          ========================================================================= */}
      <section id="mua-ve" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#080808] relative border-b border-[#C9A24A]/25">
        <div className="max-w-[1240px] mx-auto space-y-16">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#5A0B10] border border-[#C9A24A] text-xs font-mono text-[#F2EBDD] uppercase tracking-[0.25em]">
              <Flame size={12} className="text-[#C9A24A]" />
              <span>SỐ LƯỢNG VÉ CÓ HẠN</span>
              <Flame size={12} className="text-[#C9A24A]" />
            </div>

            <h2 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-[#F2EBDD] uppercase text-center leading-tight">
              <span className="block">CHỌN VÉ</span>
              <span className="block text-[#C9A24A] text-[clamp(0.95rem,4.4vw,2.25rem)] mt-1.5 sm:mt-2 font-semibold tracking-wide whitespace-nowrap">
                BƯỚC QUA RANH GIỚI ÂM DƯƠNG
              </span>
            </h2>

            <p className="font-editorial italic text-[clamp(0.72rem,2.7vw,1.125rem)] text-[#F2EBDD]/75 max-w-xl mx-auto leading-relaxed text-center">
              <span className="block whitespace-nowrap">Chỉ từ 150 – 200 tấm linh bài được ấn chỉ để đảm bảo</span>
              <span className="block whitespace-nowrap">sự riêng tư và trải nghiệm nhập vai trọn vẹn nhất.</span>
            </p>

            <CloudBorderTrim className="max-w-xs mx-auto opacity-70" />
          </div>

          {/* 3 Ticket Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {OFFICIAL_TICKETS.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative border-2 border-[#C9A24A] bg-gradient-to-b from-[#1E090D] via-[#090A0D] to-[#090A0D] shadow-[0_0_35px_rgba(90,11,16,0.45),0_0_20px_rgba(201,162,74,0.25)] p-6 sm:p-7 lg:p-8 flex flex-col justify-between space-y-6 transition-all hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(107,17,24,0.65),0_0_25px_rgba(201,162,74,0.35)] ${
                  pkg.popular ? 'ring-1 ring-[#C9A24A]/50' : ''
                }`}
                style={{ borderRadius: 0 }}
              >
                <AntiqueCorner position="top-left" size={16} />
                <AntiqueCorner position="top-right" size={16} />
                <AntiqueCorner position="bottom-left" size={16} />
                <AntiqueCorner position="bottom-right" size={16} />

                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-[#C9A24A] text-[#080808] font-mono font-bold text-[10px] tracking-widest uppercase whitespace-nowrap shadow-[0_0_12px_#C9A24A]">
                    ĐƯỢC CHỌN NHIỀU NHẤT
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#3A080B] pb-4">
                    <span className="text-3xl">{pkg.icon}</span>
                    <span className="text-xs font-mono text-[#C9A24A] uppercase tracking-wider">
                      {pkg.tierLabel}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-headline font-bold text-lg sm:text-xl xl:text-2xl text-[#F2EBDD] uppercase whitespace-nowrap tracking-wide">
                      {pkg.name}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="font-headline font-black text-3xl text-[#C9A24A]">
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 text-xs font-body text-[#F2EBDD]/80 pt-2">
                    {pkg.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-[#C9A24A] mt-0.5">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#3A080B]">
                  <button
                    onClick={() => handleOpenBooking(pkg)}
                    className="w-full min-h-[44px] py-3.5 font-headline font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 whitespace-nowrap btn-primary-sharp"
                  >
                    <Ticket size={14} className="shrink-0" />
                    <span className="whitespace-nowrap">ĐẶT VÉ</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ❓ CÂU HỎI THƯỜNG GẶP (FAQ)
          8 câu hỏi - đáp chuẩn xác theo yêu cầu
          ========================================================================= */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#090A0D] relative border-b border-[#C9A24A]/25">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#080808] border border-[#C9A24A]/40 text-xs font-mono text-[#C9A24A] uppercase tracking-[0.25em]">
              <span>❓ THẮC MẮC QUAN KHÁCH</span>
            </div>

            <h2 className="font-headline text-[clamp(1.25rem,5vw,2.25rem)] font-bold tracking-tight text-[#F2EBDD] uppercase whitespace-nowrap text-center">
              CÂU HỎI THƯỜNG GẶP
            </h2>

            <CloudBorderTrim className="max-w-xs mx-auto opacity-70" />
          </div>

          <div className="space-y-3">
            {OFFICIAL_FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#080808] border border-[#3A080B] transition-all"
                  style={{ borderRadius: 0 }}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:text-[#C9A24A] transition-colors"
                  >
                    <span className="font-headline font-bold text-sm sm:text-base text-[#F2EBDD]">
                      {faq.question}
                    </span>
                    <span className="text-[#C9A24A] shrink-0">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm font-body text-[#F2EBDD]/80 leading-relaxed border-t border-[#3A080B]/60">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ĐỊA ĐIỂM & LIÊN HỆ (VENUE & CONTACT)
          GRAND PALACE: 142/18 Cộng Hòa, Phường Tân Sơn Nhất, TP. Hồ Chí Minh
          25.10.2026 · 18:00 – 21:30
          [ XEM CHỈ ĐƯỜNG ]
          Số lượng: 150 – 200 khách.
          CONTACT:
          0352 937 803 – Trưởng Ban Tài Chính – Huyền Trang
          0352 937 803 – Trưởng Ban Tổ Chức – Hoàng Khang
          ========================================================================= */}
      <section id="location-contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#080808] relative">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* VENUE CARD */}
          <div
            className="p-4 min-[380px]:p-6 sm:p-10 bg-[#090A0D] border-2 border-[#C9A24A] space-y-6 relative shadow-[0_0_40px_rgba(0,0,0,0.9)]"
            style={{ borderRadius: 0 }}
          >
            <AntiqueCorner position="top-left" size={20} />
            <AntiqueCorner position="top-right" size={20} />
            <AntiqueCorner position="bottom-left" size={20} />
            <AntiqueCorner position="bottom-right" size={20} />

            <div className="text-center space-y-2">
              <span className="text-[10px] font-mono text-[#C9A24A] tracking-[0.25em] uppercase block">
                ĐẠI TIỆC ÂM DƯƠNG
              </span>
              <h3 className="font-headline font-bold text-2xl min-[360px]:text-3xl sm:text-4xl text-[#F2EBDD] uppercase whitespace-nowrap">
                {EVENT_INFO.venue}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center py-4 border-y border-[#3A080B]">
              <div className="space-y-1">
                <MapPin size={18} className="mx-auto text-[#C9A24A]" />
                <span className="text-[10px] font-mono text-[#F2EBDD]/60 uppercase block">ĐỊA CHỈ</span>
                <p className="font-body text-xs text-[#F2EBDD] font-medium">{EVENT_INFO.address}</p>
              </div>

              <div className="space-y-1">
                <Calendar size={18} className="mx-auto text-[#C9A24A]" />
                <span className="text-[10px] font-mono text-[#F2EBDD]/60 uppercase block">THỜI GIAN</span>
                <p className="font-body text-xs text-[#F2EBDD] font-medium">{EVENT_INFO.dateTime}</p>
              </div>

              <div className="space-y-1">
                <Users size={18} className="mx-auto text-[#C9A24A]" />
                <span className="text-[10px] font-mono text-[#F2EBDD]/60 uppercase block">QUY MÔ</span>
                <p className="font-body text-xs text-[#F2EBDD] font-medium">{EVENT_INFO.capacity}</p>
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <a
                href={EVENT_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 btn-secondary-sharp text-xs font-headline font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] flex items-center justify-center gap-2 hover:border-[#C9A24A] hover:shadow-[0_0_20px_rgba(201,162,74,0.3)] transition-all whitespace-nowrap"
              >
                <MapPin size={14} className="text-[#C9A24A] shrink-0" />
                <span className="whitespace-nowrap">[ XEM CHỈ ĐƯỜNG ]</span>
                <ExternalLink size={12} className="shrink-0" />
              </a>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="p-4 min-[360px]:p-6 sm:p-8 bg-[#090A0D] border border-[#3A080B] text-center space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#C9A24A] uppercase tracking-[0.25em]">
                CONTACT
              </span>
              <h3 className="font-headline font-bold text-base sm:text-xl md:text-2xl text-[#F2EBDD] uppercase">
                Hãy liên hệ với chúng tôi
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
              {EVENT_INFO.contacts.map((contact, cIdx) => (
                <div
                  key={cIdx}
                  className="p-3 sm:p-4 bg-[#080808] border border-[#C9A24A]/40 flex flex-col min-[380px]:flex-row min-[380px]:items-center justify-between gap-2.5"
                >
                  <div className="text-left space-y-0.5">
                    <span className="text-[10px] font-mono text-[#C9A24A] uppercase block">
                      {contact.role}
                    </span>
                    <h4 className="font-headline font-bold text-sm text-[#F2EBDD]">
                      {contact.name}
                    </h4>
                  </div>
                  <a
                    href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                    className="min-h-[40px] flex items-center justify-center gap-1.5 px-3 py-2 bg-[#3A080B] border border-[#C9A24A] text-xs font-mono text-[#F2EBDD] hover:text-[#C9A24A] active:bg-[#5A0B10] shrink-0 transition-colors"
                  >
                    <Phone size={12} className="shrink-0" />
                    <span className="whitespace-nowrap">{contact.phone}</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-center">
              <button
                onClick={() => handleOpenBooking()}
                className="w-full sm:w-auto min-h-[44px] px-8 py-3.5 btn-primary-sharp font-headline font-bold text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] flex items-center justify-center gap-2 whitespace-nowrap shadow-[0_4px_20px_rgba(139,0,0,0.5)]"
              >
                <Ticket size={14} className="shrink-0" />
                <span className="whitespace-nowrap">[ MUA VÉ NGAY ]</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ticket Booking Modal Component */}
      <TicketBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedTicket={selectedTicket}
        onBookingSuccess={() => {}}
      />
    </div>
  );
};
