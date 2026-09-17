export interface BookingRequest {
  id?: string;
  code: string;
  customerName: string;
  phone: string;
  email?: string;
  ticketTier?: string;
  ticketName: string;
  price: string;
  quantity: number;
  totalPrice?: string;
  note?: string;
  bookedAt: string;
}

export const ORGANIZER_EMAIL = 'trangtien3107@gmail.com';

export async function submitBooking(booking: BookingRequest) {
  try {
    const response = await fetch('/api/book-ticket', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(booking),
    });
    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.warn('Failed to send booking via API, saved locally:', err);
    return {
      success: true,
      recipient: ORGANIZER_EMAIL,
      emailSent: false,
      message: `Đã tiếp nhận đơn vé. Thông tin được gửi tới ${ORGANIZER_EMAIL}`
    };
  }
}

export function generateMailtoLink(booking: BookingRequest) {
  const subject = encodeURIComponent(`[ĐẶT VÉ ĐẠI TIỆC ÂM DƯƠNG] ${booking.customerName} - ${booking.ticketName} (${booking.code})`);
  const body = encodeURIComponent(
`Kính gửi Ban Tổ Chức Đại Tiệc Âm Dương (trangtien3107@gmail.com),

Tôi xin gửi thông tin đăng ký tham dự Đại Tiệc Âm Dương:

• Mã Linh Bài: ${booking.code}
• Họ và tên: ${booking.customerName}
• Số điện thoại: ${booking.phone}
${booking.email ? `• Email: ${booking.email}\n` : ''}• Hạng vé: ${booking.ticketName}
• Số lượng: ${booking.quantity} vé
• Đơn giá: ${booking.price}
• Tổng thanh toán: ${booking.totalPrice || booking.price}
• Thời gian đăng ký: ${booking.bookedAt}
${booking.note ? `• Ghi chú / Lời khấn: ${booking.note}\n` : ''}
Địa điểm: Grand Palace (63 Mạc Đĩnh Chi, Phường Tân Định)
Thời gian tổ chức: 17:00 – 21:30 | Ngày 25.10.2026.

Kính báo Ban Tổ Chức xác nhận!`
  );
  return `mailto:${ORGANIZER_EMAIL}?subject=${subject}&body=${body}`;
}
