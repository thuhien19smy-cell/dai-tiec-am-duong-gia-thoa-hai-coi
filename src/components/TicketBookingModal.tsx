import React, { useState } from 'react';
import { TicketPackage, TicketBooking } from '../types';
import { WaxSealBadge, AntiqueCorner } from './RitualDecorations';
import { X, CheckCircle2, ShieldCheck, Ticket, QrCode, Copy, Check, Mail, Send, ExternalLink } from 'lucide-react';
import { submitBooking, generateMailtoLink, ORGANIZER_EMAIL } from '../utils/bookingApi';

interface TicketBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTicket: TicketPackage | null;
  onBookingSuccess: (booking: TicketBooking) => void;
}

export const TicketBookingModal: React.FC<TicketBookingModalProps> = ({
  isOpen,
  onClose,
  selectedTicket,
  onBookingSuccess
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [createdBooking, setCreatedBooking] = useState<TicketBooking | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen || !selectedTicket) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phone) return;

    const numericPrice = parseInt(selectedTicket.price.replace(/[^\d]/g, ''), 10) || 0;
    const totalPrice = (numericPrice * quantity).toLocaleString('vi-VN') + 'đ';

    const code = `ATAD-2026-${selectedTicket.id.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const booking: TicketBooking = {
      id: `booking-${Date.now()}`,
      ticketId: selectedTicket.id,
      ticketName: selectedTicket.name,
      price: selectedTicket.price,
      customerName,
      phone,
      email,
      quantity,
      note,
      code,
      bookedAt: new Date().toLocaleString('vi-VN')
    };

    setCreatedBooking(booking);
    setIsSuccess(true);
    onBookingSuccess(booking);

    // Tự động chuyển thông tin vé về Gmail ban tổ chức: trangtien3107@gmail.com
    submitBooking({
      code,
      customerName,
      phone,
      email,
      ticketTier: selectedTicket.tierLabel,
      ticketName: selectedTicket.name,
      price: selectedTicket.price,
      quantity,
      totalPrice,
      note,
      bookedAt: booking.bookedAt
    });
  };

  const handleCopyCode = () => {
    if (createdBooking) {
      navigator.clipboard.writeText(createdBooking.code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setCreatedBooking(null);
    setCustomerName('');
    setPhone('');
    setEmail('');
    setQuantity(1);
    setNote('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-lg bg-[#090A0D] border-2 border-[#C9A24A] p-4 sm:p-8 text-[#F2EBDD] space-y-6 shadow-[0_0_50px_rgba(107,17,24,0.6)] my-6 sm:my-8"
        style={{ borderRadius: 0 }}
      >
        <AntiqueCorner position="top-left" size={20} />
        <AntiqueCorner position="top-right" size={20} />
        <AntiqueCorner position="bottom-left" size={20} />
        <AntiqueCorner position="bottom-right" size={20} />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 text-[#F2EBDD]/60 hover:text-[#C9A24A] transition-colors p-1"
        >
          <X size={20} />
        </button>

        {!isSuccess ? (
          <>
            {/* Header */}
            <div className="text-center space-y-1 pt-2">
              <span className="text-[10px] font-mono text-[#C9A24A] tracking-[0.2em] uppercase block">
                BƯỚC QUA RANH GIỚI ÂM DƯƠNG
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#F2EBDD] uppercase">
                ĐẶT VÉ THAM DỰ
              </h3>
              <p className="text-xs text-[#F2EBDD]/70 font-editorial italic">
                Số lượng vé có hạn (150 – 200 khách) để đảm bảo không gian trải nghiệm.
              </p>
            </div>

            {/* Selected Ticket Badge */}
            <div className="p-4 bg-[#3A080B]/40 border border-[#C9A24A]/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{selectedTicket.icon}</span>
                <div>
                  <h4 className="font-headline font-bold text-base text-[#C9A24A] uppercase">
                    {selectedTicket.name}
                  </h4>
                  <span className="text-xs text-[#F2EBDD]/80 font-mono">
                    Hạng: {selectedTicket.tierLabel}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="font-headline font-bold text-lg text-[#F2EBDD]">
                  {selectedTicket.price}
                </span>
                <span className="block text-[10px] font-mono text-[#C9A24A]">/ 01 VÉ</span>
              </div>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-mono text-[#C9A24A] uppercase tracking-wider block">
                  Họ và tên khách mời *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Nguyễn Văn An"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full py-2 px-1 input-underline text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#C9A24A] uppercase tracking-wider block">
                    Số điện thoại liên hệ *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="09xx xxx xxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full py-2 px-1 input-underline text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#C9A24A] uppercase tracking-wider block">
                    Số lượng vé
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full py-2 px-1 bg-[#090A0D] border-b border-[#C9A24A] text-[#F2EBDD] text-sm outline-none"
                    style={{ borderRadius: 0 }}
                  >
                    <option value={1}>01 Vé</option>
                    <option value={2}>02 Vé</option>
                    <option value={3}>03 Vé (Nhóm bạn)</option>
                    <option value={4}>04 Vé (Nhóm bạn)</option>
                    <option value={5}>05 Vé</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-[#C9A24A] uppercase tracking-wider block">
                  Email nhận vé điện tử
                </label>
                <input
                  type="email"
                  placeholder="email@vidu.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 px-1 input-underline text-sm"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-[#C9A24A] uppercase tracking-wider block">
                  Ghi chú hoặc lời gửi gắm
                </label>
                <input
                  type="text"
                  placeholder="Ghi chú về trang phục hoặc yêu cầu hỗ trợ..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full py-2 px-1 input-underline text-sm"
                />
              </div>

              {/* Terms Check Note */}
              <div className="p-3 bg-[#080808] border border-[#3A080B] text-[11px] text-[#F2EBDD]/70 space-y-1">
                <div className="flex items-center gap-2 text-[#C9A24A]">
                  <ShieldCheck size={14} />
                  <span className="font-bold">Quy Ước Dạ Tiệc:</span>
                </div>
                <p>
                  Sự kiện diễn ra vào 25.10.2026 từ 17:00 – 21:30 tại <span className="whitespace-nowrap font-medium text-[#C9A24A]">Grand Palace</span> (63 Mạc Đĩnh Chi, Phường Tân Định). Khuyến khích trang phục Áo dài, Áo bà ba hoặc Halloween mang sắc màu Việt Nam.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 btn-primary-sharp font-headline font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2"
              >
                <Ticket size={16} />
                <span>XÁC NHẬN ĐẶT VÉ NGAY</span>
              </button>
            </form>
          </>
        ) : (
          /* Success Screen with E-Ticket */
          <div className="text-center space-y-6 pt-2 animate-in fade-in">
            <div className="w-12 h-12 mx-auto bg-[#3A080B] border border-[#C9A24A] flex items-center justify-center text-[#C9A24A]">
              <CheckCircle2 size={28} />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#C9A24A] tracking-[0.25em] uppercase">
                NIÊM ẤN THÀNH CÔNG
              </span>
              <h3 className="font-headline text-2xl font-bold text-[#F2EBDD] uppercase">
                VÉ ĐIỆN TỬ ĐÃ KHỞI TẠO
              </h3>
              <p className="text-xs text-[#F2EBDD]/80">
                Chúc mừng bạn đã ghi danh vào danh sách quan khách bước qua ranh giới Âm Dương.
              </p>
            </div>

            {/* Ticket Card */}
            <div className="p-5 bg-[#140809] border-2 border-[#C9A24A] text-left space-y-3 relative">
              <div className="flex items-start justify-between border-b border-[#C9A24A]/40 pb-3">
                <div>
                  <span className="text-[10px] font-mono text-[#C9A24A] uppercase">
                    ĐẠI TIỆC ÂM DƯƠNG 2026
                  </span>
                  <h4 className="font-headline font-bold text-lg text-[#F2EBDD] uppercase">
                    {createdBooking?.ticketName}
                  </h4>
                </div>
                <WaxSealBadge text="Hợp Lệ" size="sm" />
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div>
                  <span className="text-[#F2EBDD]/60 block text-[10px]">KHÁCH MỜI:</span>
                  <span className="text-[#F2EBDD] font-bold">{createdBooking?.customerName}</span>
                </div>
                <div>
                  <span className="text-[#F2EBDD]/60 block text-[10px]">SỐ ĐIỆN THOẠI:</span>
                  <span className="text-[#F2EBDD]">{createdBooking?.phone}</span>
                </div>
                <div>
                  <span className="text-[#F2EBDD]/60 block text-[10px]">SỐ LƯỢNG:</span>
                  <span className="text-[#C9A24A] font-bold">{createdBooking?.quantity} Vé</span>
                </div>
                <div>
                  <span className="text-[#F2EBDD]/60 block text-[10px]">TỔNG GIÁ TRỊ:</span>
                  <span className="text-[#C9A24A] font-bold">{createdBooking?.price}</span>
                </div>
              </div>

              {/* Code Box */}
              <div className="p-3 bg-[#080808] border border-[#C9A24A]/50 flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <span className="text-[9px] font-mono text-[#F2EBDD]/60 block uppercase">
                    MÃ LINH BÀI ĐIỆN TỬ
                  </span>
                  <span className="font-mono font-bold text-xs min-[360px]:text-sm text-[#C9A24A] tracking-wider break-all min-[360px]:break-normal">
                    {createdBooking?.code}
                  </span>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="p-2 border border-[#C9A24A]/40 text-[#C9A24A] hover:bg-[#C9A24A]/10 transition-colors shrink-0"
                >
                  {isCopied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>

              <div className="pt-1 text-[11px] text-[#F2EBDD]/70 font-editorial italic text-center">
                Vui lòng lưu giữ mã này để xuất trình tại bàn Check-in lúc 17:00 ngày 25.10.2026 tại <span className="whitespace-nowrap">Grand Palace</span>.
              </div>
            </div>

            {/* Email Dispatch Info to trangtien3107@gmail.com */}
            {createdBooking && (
              <div className="p-3 sm:p-3.5 bg-[#0e0809] border border-[#C9A24A]/50 text-left space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C9A24A]">
                  <Mail size={15} className="text-[#C9A24A] shrink-0" />
                  <span className="font-bold tracking-wide uppercase">ĐÃ GỬI THÔNG TIN VỀ GMAIL BAN TỔ CHỨC:</span>
                </div>
                <div className="text-xs font-mono text-[#F2EBDD] font-bold pl-2 sm:pl-5 flex flex-wrap items-center gap-2">
                  <span className="break-all">{ORGANIZER_EMAIL}</span>
                  <span className="text-[10px] px-1.5 py-0.5 bg-[#3A080B] text-[#C9A24A] border border-[#C9A24A]/40 font-normal">
                    Tự Động Chuyển Thư
                  </span>
                </div>
                <p className="text-[11px] text-[#F2EBDD]/70 pl-2 sm:pl-5 leading-relaxed font-body">
                  Toàn bộ chi tiết đặt vé (Mã Linh Bài, Tên khách, SĐT, Số lượng vé) đã được chuyển tiếp đến hòm thư <strong className="break-all">{ORGANIZER_EMAIL}</strong> để đối chiếu danh sách.
                </p>
                <div className="pt-1 pl-2 sm:pl-5">
                  <a
                    href={generateMailtoLink({
                      code: createdBooking.code,
                      customerName: createdBooking.customerName,
                      phone: createdBooking.phone,
                      email: createdBooking.email,
                      ticketName: createdBooking.ticketName,
                      price: createdBooking.price,
                      quantity: createdBooking.quantity,
                      note: createdBooking.note,
                      bookedAt: createdBooking.bookedAt
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#1a0c0e] border border-[#C9A24A]/60 text-[10px] min-[360px]:text-[11px] font-mono text-[#C9A24A] hover:bg-[#C9A24A]/15 hover:border-[#C9A24A] transition-all max-w-full text-center"
                  >
                    <ExternalLink size={12} className="shrink-0" />
                    <span>Mở Gmail gửi thêm bản sao xác nhận</span>
                  </a>
                </div>
              </div>
            )}

            <button
              onClick={handleReset}
              className="w-full py-3 btn-secondary-sharp text-xs font-headline font-bold uppercase tracking-wider"
            >
              HOÀN TẤT & ĐÓNG
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
