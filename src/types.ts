export type ScreenId = 'home' | 'menu' | 'schedule' | 'registration' | 'divination';

export type RealmCategory = 'all' | 'duong-gian' | 'am-gioi' | 'luong-nghi';

export interface TicketPackage {
  id: 'don-coi' | 'am-duong' | 'dai-tiec';
  icon: string;
  name: string;
  price: string;
  tierLabel: string;
  benefits: string[];
  popular?: boolean;
}

export interface TicketBooking {
  id: string;
  ticketId: 'don-coi' | 'am-duong' | 'dai-tiec';
  ticketName: string;
  price: string;
  customerName: string;
  phone: string;
  email: string;
  quantity: number;
  note?: string;
  code: string;
  bookedAt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface MenuItem {
  id: string;
  name: string;
  chineseName?: string;
  realm: 'duong-gian' | 'am-gioi' | 'luong-nghi';
  category: 'khai-vi' | 'chinh-yen' | 'canh-thao' | 'uong-ruou';
  description: string;
  ingredients: string[];
  tabooWarning: string;
  pairing: string;
  priceInCoins: string; // e.g., '99 Lượng Vàng Mã' or '199 Tiền Âm Phủ'
  spookyRating: number; // 1 to 5
  sealText: string;
}

export interface RitualEvent {
  timePeriod: string; // e.g., 'Giờ Hợi (21:00 - 23:00)'
  title: string;
  subTitle: string;
  location: string;
  description: string;
  taboos: string[];
  ritualStage: string;
}

export interface BanquetZone {
  id: string;
  name: string;
  alias: string;
  significance: string;
  atmosphere: string;
  rules: string[];
  coordinates: { x: number; y: number };
}

export interface TabooRule {
  id: number;
  title: string;
  prohibition: string;
  consequence: string;
  sealLabel: string;
}

export interface RegistrationData {
  fullName: string;
  birthYear: string;
  canChi: string;
  destinyElement: 'Kim' | 'Mộc' | 'Thủy' | 'Hỏa' | 'Thổ';
  ticketTier: 'u-minh' | 'hoang-tuyen' | 'thuong-toa';
  prayer: string;
  talismanCode: string;
  registeredAt: string;
}

export interface DivinationHexagram {
  id: number;
  name: string;
  symbol: string;
  level: 'Đại Cát' | 'Thượng Cát' | 'Trung Bình' | 'Tiểu Hung' | 'Hóa Giải';
  poem: string[];
  interpretation: string;
  adviceForBanquet: string;
  element: string;
}
