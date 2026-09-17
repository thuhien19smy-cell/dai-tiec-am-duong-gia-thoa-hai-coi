import React, { useState } from 'react';
import {
  YinYangIcon,
  LotusIcon,
  WaxSealBadge,
  CloudBorderTrim,
  TaperedDivider,
  AntiqueCorner
} from '../components/RitualDecorations';
import { Scroll, Flame, CheckCircle, Copy, Printer, RefreshCw, Moon, Sparkles, Ticket, Mail, ExternalLink } from 'lucide-react';
import { EVENT_INFO, OFFICIAL_TICKETS } from '../data/mockData';
import { submitBooking, generateMailtoLink, ORGANIZER_EMAIL } from '../utils/bookingApi';

export const RegistrationScreen: React.FC = () => {
  const [formData, setFormData] = useState<{
    fullName: string;
    phone: string;
    birthYear: string;
    ticketTier: 'don-coi' | 'am-duong' | 'dai-tiec';
    quantity: number;
    prayer: string;
  }>({
    fullName: '',
    phone: '',
    birthYear: '1998',
    ticketTier: 'am-duong',
    quantity: 1,
    prayer: 'Cầu mong tâm an lạc, vượt qua sợ hãi, hội ngộ bình an trong đêm ranh giới khai mở.'
  });

  const [talismanPass, setTalismanPass] = useState<{
    code: string;
    ticketName: string;
    tierLabel: string;
    price: string;
    fullName: string;
    phone: string;
    quantity: number;
    prayer: string;
    bookedAt: string;
  } | null>(null);

  const [isStamping, setIsStamping] = useState(false);
  const [copied, setCopied] = useState(false);

  const selectedTier = OFFICIAL_TICKETS.find((t) => t.id === formData.ticketTier) || OFFICIAL_TICKETS[1];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) return;

    setIsStamping(true);
    setTimeout(() => {
      const randomCode = `ATAD-2026-${formData.ticketTier.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
      const bookedTime = new Date().toLocaleString('vi-VN');
      const numericPrice = parseInt(selectedTier.price.replace(/[^\d]/g, ''), 10) || 0;
      const totalPrice = (numericPrice * formData.quantity).toLocaleString('vi-VN') + 'đ';

      setTalismanPass({
        code: randomCode,
        ticketName: selectedTier.name,
        tierLabel: selectedTier.tierLabel,
        price: selectedTier.price,
        fullName: formData.fullName,
        phone: formData.phone || '09xx xxx xxx',
        quantity: formData.quantity,
        prayer: formData.prayer,
        bookedAt: bookedTime
      });

      // Gửi thông tin về Gmail ban tổ chức: trangtien3107@gmail.com
      submitBooking({
        code: randomCode,
        customerName: formData.fullName,
        phone: formData.phone,
        ticketTier: selectedTier.tierLabel,
        ticketName: selectedTier.name,
        price: selectedTier.price,
        quantity: formData.quantity,
        totalPrice,
        note: formData.prayer,
        bookedAt: bookedTime
      });

      setIsStamping(false);
    }, 600);
  };

  const copyTalismanCode = () => {
    if (talismanPass) {
      navigator.clipboard.writeText(talismanPass.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-[#F2EBDD]">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 min-[360px]:gap-2 px-2.5 min-[360px]:px-3 py-1 bg-[#090A0D] border border-[#C9A24A]/50 text-[10px] min-[360px]:text-xs font-mono text-[#C9A24A] uppercase tracking-wider min-[360px]:tracking-widest">
          <Ticket size={14} className="shrink-0" />
          <span>ĐẶT VÉ CHÍNH THỨC • SỐ LƯỢNG CÓ HẠN</span>
          <Ticket size={14} className="shrink-0" />
        </div>

        <h1 className="font-headline text-2xl min-[360px]:text-3xl sm:text-5xl font-bold text-[#F2EBDD] uppercase tracking-wide">
          BƯỚC QUA RANH GIỚI ÂM DƯƠNG
        </h1>

        <p className="max-w-2xl mx-auto font-editorial italic text-sm sm:text-lg text-[#F2EBDD]/80 leading-relaxed">
          Đêm Kinh Dị Dân Gian Việt Nam — <span className="whitespace-nowrap">Grand Palace</span>, 25.10.2026. Chọn hạng vé và niêm ấn tên tục để nhận Mã Linh Bài điện tử chính thức.
        </p>

        <CloudBorderTrim className="max-w-md mx-auto opacity-70" />
      </div>

      <div className={`grid grid-cols-1 ${talismanPass ? 'lg:grid-cols-12 max-w-5xl' : 'max-w-3xl'} gap-8 mx-auto`}>
        {/* Left Column: Form */}
        <div className={talismanPass ? 'lg:col-span-7' : 'w-full'}>
          <div
            className="bg-[#090A0D] border border-[#C9A24A]/40 p-4 min-[360px]:p-6 sm:p-8 relative shadow-[0_0_40px_rgba(0,0,0,0.8)]"
            style={{ borderRadius: 0 }}
          >
            <AntiqueCorner position="top-left" size={16} />
            <AntiqueCorner position="top-right" size={16} />
            <AntiqueCorner position="bottom-left" size={16} />
            <AntiqueCorner position="bottom-right" size={16} />

            <div className="flex items-center justify-between border-b border-[#3A080B] pb-3 mb-6 gap-2">
              <h3 className="font-headline font-bold text-sm min-[360px]:text-base sm:text-lg text-[#F2EBDD] uppercase flex items-center gap-2">
                <Scroll size={18} className="text-[#C9A24A] shrink-0" />
                <span>KÊ KHAI DANH TÍNH QUAN KHÁCH</span>
              </h3>
              <span className="text-[10px] font-mono text-[#C9A24A] shrink-0">150 – 200 KHÁCH</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Field 1: Full Name */}
              <div className="space-y-1">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#C9A24A]">
                  Họ và tên khách mời *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Lê Bảo Minh"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full py-2.5 px-0 input-underline text-base font-headline text-[#F2EBDD] placeholder-[#F2EBDD]/30"
                />
              </div>

              {/* Field 2 & 3: Phone and Birth Year */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#C9A24A]">
                    Số điện thoại liên hệ *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="09xx xxx xxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full py-2.5 px-0 input-underline text-base font-mono text-[#F2EBDD]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#C9A24A]">
                    Số lượng vé
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: Number(e.target.value) })}
                    className="w-full py-2.5 px-0 bg-[#090A0D] border-b border-[#C9A24A] text-[#F2EBDD] text-sm outline-none"
                    style={{ borderRadius: 0 }}
                  >
                    <option value={1}>01 Vé</option>
                    <option value={2}>02 Vé (Đi cùng bạn)</option>
                    <option value={3}>03 Vé (Nhóm bạn)</option>
                    <option value={4}>04 Vé (Nhóm bạn)</option>
                  </select>
                </div>
              </div>

              {/* Field 4: 3 Official Ticket Packages */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#C9A24A]">
                  Lựa Chọn Hạng Vé (3 Gói Chính Thức)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {OFFICIAL_TICKETS.map((ticket) => {
                    const isSelected = formData.ticketTier === ticket.id;
                    return (
                      <div
                        key={ticket.id}
                        onClick={() =>
                          setFormData({ ...formData, ticketTier: ticket.id as any })
                        }
                        className={`p-3.5 border cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#C9A24A] bg-[#5A0B10]/40 shadow-[0_0_15px_rgba(201,162,74,0.3)]'
                            : 'border-[#3A080B] bg-[#080808] hover:border-[#C9A24A]/50'
                        }`}
                        style={{ borderRadius: 0 }}
                      >
                        <div className="flex items-center justify-between text-xs font-headline font-bold text-[#F2EBDD] uppercase">
                          <span>{ticket.name}</span>
                          <span>{ticket.icon}</span>
                        </div>
                        <div className="text-[11px] text-[#F2EBDD]/60 mt-1">Hạng: {ticket.tierLabel}</div>
                        <div className="text-xs font-mono text-[#C9A24A] font-bold mt-2">
                          {ticket.price}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Field 5: Prayer / Wish */}
              <div className="space-y-1">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#C9A24A]">
                  Ghi chú hoặc lời nguyện ước gửi đêm dạ tiệc
                </label>
                <textarea
                  rows={2}
                  value={formData.prayer}
                  onChange={(e) => setFormData({ ...formData, prayer: e.target.value })}
                  placeholder="Ghi chú về trang phục hoặc tâm nguyện..."
                  className="w-full py-2 px-0 input-underline text-sm font-body text-[#F2EBDD] placeholder-[#F2EBDD]/30 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isStamping}
                  className="w-full py-4 btn-primary-sharp font-headline font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2"
                >
                  <Flame size={16} className="text-[#C9A24A]" />
                  <span>
                    {isStamping ? 'ĐANG NIÊM ẤN LINH BÀI...' : 'NIÊM ẤN VÉ • NHẬN MÃ ĐIỆN TỬ'}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Generated Talisman Pass */}
        {talismanPass && (
          <div className="lg:col-span-5">
            <div className="space-y-4 animate-in fade-in duration-300">
              <div
                className="relative bg-[#090A0D] border-2 border-[#C9A24A] p-6 shadow-[0_0_35px_rgba(107,17,24,0.5)]"
                style={{ borderRadius: 0 }}
              >
                <AntiqueCorner position="top-left" size={16} />
                <AntiqueCorner position="top-right" size={16} />
                <AntiqueCorner position="bottom-left" size={16} />
                <AntiqueCorner position="bottom-right" size={16} />

                <div className="text-center pb-4 border-b border-[#C9A24A]/40 space-y-1">
                  <span className="text-[10px] font-mono text-[#C9A24A] uppercase tracking-widest">
                    ĐẠI TIỆC ÂM DƯƠNG 2026
                  </span>
                  <h4 className="font-headline font-bold text-xl text-[#F2EBDD] uppercase">
                    LINH BÀI THAM DỰ
                  </h4>
                  <p className="text-[11px] font-mono text-[#F2EBDD]/60">
                    <span className="whitespace-nowrap">Grand Palace</span> · 25.10.2026 · 17:00
                  </p>
                </div>

                <div className="py-4 space-y-3 text-xs font-mono">
                  <div className="flex justify-between border-b border-[#3A080B] pb-2">
                    <span className="text-[#F2EBDD]/60">QUAN KHÁCH:</span>
                    <span className="text-[#F2EBDD] font-bold">{talismanPass.fullName}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#3A080B] pb-2">
                    <span className="text-[#F2EBDD]/60">SỐ ĐIỆN THOẠI:</span>
                    <span className="text-[#F2EBDD]">{talismanPass.phone}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#3A080B] pb-2">
                    <span className="text-[#F2EBDD]/60">HẠNG VÉ:</span>
                    <span className="text-[#C9A24A] font-bold">
                      {talismanPass.ticketName} ({talismanPass.tierLabel})
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-[#3A080B] pb-2">
                    <span className="text-[#F2EBDD]/60">SỐ LƯỢNG:</span>
                    <span className="text-[#C9A24A] font-bold">{talismanPass.quantity} Vé</span>
                  </div>
                  <div className="flex justify-between border-b border-[#3A080B] pb-2">
                    <span className="text-[#F2EBDD]/60">GIÁ VÉ:</span>
                    <span className="text-[#F2EBDD] font-bold">{talismanPass.price}</span>
                  </div>
                </div>

                {/* Talisman Code Box */}
                <div className="p-3 bg-[#080808] border border-[#C9A24A] flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[9px] font-mono text-[#F2EBDD]/60 block uppercase">
                      MÃ LINH BÀI XÁC THỰC
                    </span>
                    <span className="font-mono font-bold text-xs min-[360px]:text-sm text-[#C9A24A] tracking-wider break-all min-[360px]:break-normal">
                      {talismanPass.code}
                    </span>
                  </div>
                  <button
                    onClick={copyTalismanCode}
                    className="p-2 border border-[#C9A24A]/40 text-[#C9A24A] hover:bg-[#C9A24A]/10 transition-colors shrink-0"
                  >
                    <Copy size={16} />
                  </button>
                </div>

                {copied && (
                  <p className="text-[11px] font-mono text-[#C9A24A] text-center pt-2">
                    Đã sao chép mã linh bài vào bộ nhớ tạm!
                  </p>
                )}

                {/* Email Dispatch Info to trangtien3107@gmail.com */}
                <div className="p-3 bg-[#0d0708] border border-[#C9A24A]/40 text-left space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#C9A24A]">
                    <Mail size={13} className="text-[#C9A24A] shrink-0" />
                    <span className="font-bold uppercase tracking-wider">ĐÃ CHUYỂN TIẾP VỀ GMAIL BAN TỔ CHỨC:</span>
                  </div>
                  <div className="text-xs font-mono text-[#F2EBDD] font-bold pl-4 break-all">
                    {ORGANIZER_EMAIL}
                  </div>
                  <p className="text-[10px] text-[#F2EBDD]/70 pl-4 leading-tight">
                    Hệ thống đã lưu trữ và gửi bản kê khai thông tin của quan khách tới hòm thư ban tổ chức.
                  </p>
                  <div className="pt-1 pl-4">
                    <a
                      href={generateMailtoLink({
                        code: talismanPass.code,
                        customerName: talismanPass.fullName,
                        phone: talismanPass.phone,
                        ticketName: talismanPass.ticketName,
                        price: talismanPass.price,
                        quantity: talismanPass.quantity,
                        note: talismanPass.prayer,
                        bookedAt: talismanPass.bookedAt
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#1a080a] border border-[#C9A24A]/50 text-[10px] font-mono text-[#C9A24A] hover:bg-[#C9A24A]/10 transition-colors max-w-full"
                    >
                      <ExternalLink size={11} className="shrink-0" />
                      <span>Mở Gmail gửi thêm bản sao</span>
                    </a>
                  </div>
                </div>

                <div className="pt-4 text-center">
                  <WaxSealBadge text="HỢP THỂ" size="md" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
