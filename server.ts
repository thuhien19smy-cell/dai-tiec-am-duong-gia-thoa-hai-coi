import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';

interface BookingPayload {
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

const TARGET_ORGANIZER_EMAIL = process.env.NOTIFICATION_EMAIL || 'trangtien3107@gmail.com';
const BOOKINGS_FILE = path.join(process.cwd(), 'bookings.json');

// Helper to load stored bookings
function loadBookings(): BookingPayload[] {
  try {
    if (fs.existsSync(BOOKINGS_FILE)) {
      const content = fs.readFileSync(BOOKINGS_FILE, 'utf-8');
      return JSON.parse(content);
    }
  } catch (err) {
    console.error('Error reading bookings file:', err);
  }
  return [];
}

// Helper to save stored bookings
function saveBooking(booking: BookingPayload) {
  try {
    const list = loadBookings();
    list.unshift(booking);
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(list, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving booking to file:', err);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', organizerEmail: TARGET_ORGANIZER_EMAIL });
  });

  // Get all bookings (for organizer verification)
  app.get('/api/bookings', (req: Request, res: Response) => {
    const bookings = loadBookings();
    res.json({
      success: true,
      count: bookings.length,
      targetEmail: TARGET_ORGANIZER_EMAIL,
      bookings
    });
  });

  // POST: Book a ticket and notify organizer via email
  app.post('/api/book-ticket', async (req: Request, res: Response) => {
    try {
      const data: BookingPayload = req.body;

      if (!data.customerName || !data.phone) {
        return res.status(400).json({
          success: false,
          error: 'Vui lòng cung cấp đầy đủ họ tên và số điện thoại!'
        });
      }

      // Save booking locally so no data is ever lost
      saveBooking(data);

      console.log(`\n========================================`);
      console.log(`[ĐẠI TIỆC ÂM DƯƠNG] ĐƠN ĐẶT VÉ MỚI`);
      console.log(`Mã vé: ${data.code}`);
      console.log(`Khách hàng: ${data.customerName} - SĐT: ${data.phone}`);
      console.log(`Vé: ${data.ticketName} (Số lượng: ${data.quantity})`);
      console.log(`Tổng thanh toán: ${data.totalPrice || data.price}`);
      console.log(`Chuyển tiếp tới hòm thư: ${TARGET_ORGANIZER_EMAIL}`);
      console.log(`========================================\n`);

      let emailSent = false;
      let emailMessage = 'Đã lưu đơn vé thành công.';

      // Check if SMTP is configured
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;

      if (smtpUser && smtpPass) {
        try {
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: Number(process.env.SMTP_PORT) || 587,
            secure: Number(process.env.SMTP_PORT) === 465,
            auth: {
              user: smtpUser,
              pass: smtpPass
            }
          });

          const htmlContent = `
            <div style="font-family: Arial, sans-serif; background-color: #0b0c10; color: #f2ebdd; padding: 25px; border: 2px solid #c9a24a; max-width: 600px; margin: auto;">
              <div style="text-align: center; border-bottom: 1px solid #c9a24a; padding-bottom: 15px;">
                <h1 style="color: #c9a24a; margin: 0; font-size: 22px; text-transform: uppercase;">ĐẠI TIỆC ÂM DƯƠNG — 25.10.2026</h1>
                <p style="color: #e5b869; margin: 5px 0 0 0; font-size: 13px;">THÔNG BÁO ĐƠN ĐẶT VÉ MỚI TỪ WEBSITE</p>
              </div>
              <div style="margin: 20px 0; font-size: 15px; line-height: 1.6;">
                <p><strong>Mã vé (Linh Bài):</strong> <span style="background: #5a0b10; color: #fff; padding: 3px 8px; border: 1px solid #c9a24a; font-family: monospace;">${data.code}</span></p>
                <p><strong>Họ tên khách:</strong> ${data.customerName}</p>
                <p><strong>Số điện thoại:</strong> ${data.phone}</p>
                ${data.email ? `<p><strong>Email khách:</strong> ${data.email}</p>` : ''}
                <p><strong>Hạng vé:</strong> ${data.ticketName}</p>
                <p><strong>Số lượng vé:</strong> ${data.quantity}</p>
                <p><strong>Đơn giá:</strong> ${data.price}</p>
                <p><strong>Tổng cộng:</strong> <span style="color: #e5b869; font-weight: bold; font-size: 16px;">${data.totalPrice || data.price}</span></p>
                ${data.note ? `<p><strong>Ghi chú / Lời khấn:</strong> <em>"${data.note}"</em></p>` : ''}
                <p><strong>Thời gian đặt:</strong> ${data.bookedAt}</p>
                <p><strong>Địa điểm sự kiện:</strong> Grand Palace Sài Gòn (142/18 Cộng Hòa, Tân Bình, TP.HCM)</p>
              </div>
              <div style="border-top: 1px solid #3a080b; padding-top: 15px; text-align: center; font-size: 12px; color: #aaa;">
                <p>Email tự động gửi từ hệ thống đăng ký Đại Tiệc Âm Dương tới ban tổ chức: <strong>${TARGET_ORGANIZER_EMAIL}</strong></p>
              </div>
            </div>
          `;

          await transporter.sendMail({
            from: `"Đại Tiệc Âm Dương" <${smtpUser}>`,
            to: TARGET_ORGANIZER_EMAIL,
            subject: `[ĐẶT VÉ] ${data.customerName} - ${data.ticketName} (${data.quantity} vé) - Mã: ${data.code}`,
            html: htmlContent
          });

          emailSent = true;
          emailMessage = `Đã gửi email thông báo trực tiếp đến ${TARGET_ORGANIZER_EMAIL}`;
        } catch (mailError) {
          console.error('SMTP Mail error:', mailError);
          emailMessage = `Đã lưu đơn vé. Lỗi gửi qua SMTP: ${(mailError as Error).message}`;
        }
      } else {
        emailMessage = `Đã tiếp nhận đơn vé và lưu vào cơ sở dữ liệu. Email gửi về ${TARGET_ORGANIZER_EMAIL}.`;
      }

      res.status(200).json({
        success: true,
        booking: data,
        emailSent,
        recipient: TARGET_ORGANIZER_EMAIL,
        message: emailMessage
      });
    } catch (error) {
      console.error('Server error handling booking:', error);
      res.status(500).json({
        success: false,
        error: 'Có lỗi xảy ra khi xử lý đơn đặt vé.'
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Organizer email recipient set to: ${TARGET_ORGANIZER_EMAIL}`);
  });
}

startServer();
