import { MenuItem, RitualEvent, BanquetZone, TabooRule, DivinationHexagram } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'canh-manh-ba',
    name: 'Canh Mạnh Bà Ngũ Vị',
    chineseName: '孟婆五味湯',
    realm: 'am-gioi',
    category: 'canh-thao',
    description: 'Nước cốt hầm từ tuyết liên ngàn năm ngâm giọt sương đêm rằm tháng Bảy, kết hợp quả chấp niệm và ngũ vị đắng cay ngọt bùi chua chát để xua tan muộn phiền tiền kiếp.',
    ingredients: ['Tuyết Liên Sơn', 'Quả Chấp Niệm sấy khô', 'Hoa Cúc Vạn Thọ sương đêm', 'Nước Nguồn U Minh'],
    tabooWarning: 'Uống một hơi cạn sạch, tuyệt đối không ngoảnh đầu nhìn lại bàn bên cạnh.',
    pairing: 'Dùng trước khi bước qua Cầu Nại Hà vào giờ Tý.',
    priceInCoins: '88 Lượng Ngân Phiếu',
    spookyRating: 5,
    sealText: 'Vong Tình'
  },
  {
    id: 'tra-vong-xuyen',
    name: 'Trà Vong Xuyên Hắc Nguyệt',
    chineseName: '忘川黑月茶',
    realm: 'am-gioi',
    category: 'uong-ruou',
    description: 'Chiết xuất hắc trà trăm năm ủ trong chum đất sét dưới lòng sông Vong Xuyên, thoảng hương ngải cứu dại và phấn hoa bỉ ngạn đỏ rực.',
    ingredients: ['Hắc Trà cổ thụ', 'Hoa Bỉ Ngạn chuốt mật', 'Lá Ngải Cứu rừng sâu', 'Sương sớm Hoàng Tuyền'],
    tabooWarning: 'Không soi bóng mình xuống đáy chén khi trăng chưa lên đến đỉnh đầu.',
    pairing: 'Đi kèm bánh Phù Tang Hắc Nguyệt để cân bằng tính hàn.',
    priceInCoins: '66 Tiền Âm Phủ',
    spookyRating: 4,
    sealText: 'Tịch Tịch'
  },
  {
    id: 'goi-bach-quy',
    name: 'Gỏi Bách Quỷ Dạ Hành',
    chineseName: '百鬼夜行素膾',
    realm: 'luong-nghi',
    category: 'khai-vi',
    description: 'Rau tiến vua giòn ngọt ngâm giấm huyết rồng, mộc nhĩ hắc thổ thái sợi tơ, rắc vừng đen rang tro bạc và ớt chỉ thiên rực đỏ tựa ngọn lân tinh.',
    ingredients: ['Rau Tiến Vua ngâm giấm huyết', 'Hắc mộc nhĩ rừng già', 'Hạt vừng than tre', 'Sợi ớt lân tinh'],
    tabooWarning: 'Người vía yếu nên kẹp chung với một nhánh rau mùi tây trấn trạch.',
    pairing: 'Hợp với Rượu Hoàng Tuyền Phong Ấn 49 ngày.',
    priceInCoins: '108 Lượng Vàng Mã',
    spookyRating: 3,
    sealText: 'Dạ Hành'
  },
  {
    id: 'banh-phu-tang',
    name: 'Bánh Phù Tang Hắc Nguyệt',
    chineseName: '扶桑黑月糕',
    realm: 'duong-gian',
    category: 'chinh-yen',
    description: 'Vỏ bánh làm từ nếp nương than hoạt tính nướng giòn rụm, nhân đậu đỏ nhuyễn mịn ướp quế chi ấm áp và lòng đỏ trứng muối ủ rượu hoa tiêu.',
    ingredients: ['Nếp than Tây Bắc', 'Đậu đỏ hạt tiêu', 'Lòng đỏ hoàng kim ướp rượu', 'Mật mía hoa sen'],
    tabooWarning: 'Không bẻ đôi bánh; phải ăn trọn vẹn để giữ nguyên vẹn sinh khí trần gian.',
    pairing: 'Thưởng thức cùng Trà Vong Xuyên hoặc Trà Sen Tuyết.',
    priceInCoins: '77 Lượng Đồng Cổ',
    spookyRating: 2,
    sealText: 'Cố Hương'
  },
  {
    id: 'ruou-hoang-tuyen',
    name: 'Rượu Hoàng Tuyền Phong Ấn',
    chineseName: '黃泉封印酒',
    realm: 'luong-nghi',
    category: 'uong-ruou',
    description: 'Men gạo lứt cổ truyền chưng cất 3 lần cùng trầm hương Quảng Nam, ủ trong hũ đất nung dán giấy bùa chu sa dưới gốc đa thiêng suốt 49 tuần trăng.',
    ingredients: ['Gạo lứt nương cổ', 'Men lá 36 vị thuốc Nam', 'Dăm gỗ Trầm Hương', 'Chu Sa phong niêm'],
    tabooWarning: 'Rót ra 3 chén đầu tiên phải dâng xuống chiếu đất mời Thổ Thần trước.',
    pairing: 'Rót vào chén đồng gõ nhẹ ba tiếng trước khi nhấp môi.',
    priceInCoins: '128 Tiền Âm Giới',
    spookyRating: 4,
    sealText: 'Huyết Lệ'
  },
  {
    id: 'com-lam-huyet-ngoc',
    name: 'Cơm Lam Huyết Ngọc Tro Thần',
    chineseName: '血玉竹筒神飯',
    realm: 'duong-gian',
    category: 'chinh-yen',
    description: 'Gạo nếp nương ngâm nước hạt điều nhuộm sắc đỏ ngọc thạch, dồn vào ống nứa non nướng trên than củi trầm, dậy mùi thơm linh thiêng của đất trời.',
    ingredients: ['Nếp nương Mù Cang Chải', 'Nước cốt màng gấc tươi', 'Ống nứa rừng sâu', 'Muối vừng đen thảo quả'],
    tabooWarning: 'Khi tước vỏ nứa, không vứt vụn nứa ra sau lưng.',
    pairing: 'Dùng nóng cùng thịt nấm hương kho niêu đất.',
    priceInCoins: '92 Lượng Ngân Phiếu',
    spookyRating: 1,
    sealText: 'Sinh Khí'
  },
  {
    id: 'tau-hu-u-minh',
    name: 'Đậu Hũ Khói Ma Sương',
    chineseName: '幽冥冷霧豆腐',
    realm: 'am-gioi',
    category: 'khai-vi',
    description: 'Miếng đậu hũ non mềm như mây tụ, ngâm trong làn khói đá khô thảo dược đẫm hương gừng ấm và nước tương nấm truffle đen đậm đà.',
    ingredients: ['Đậu nành hữu cơ non', 'Nước tương hắc nấm', 'Khói hương thảo dược', 'Gừng già thái sợi'],
    tabooWarning: 'Thìa múc không được gõ vào vành bát quá hai lần.',
    pairing: 'Khai vị hoàn hảo mở lối cho vị giác bước vào cõi linh.',
    priceInCoins: '54 Tiền Âm Phủ',
    spookyRating: 3,
    sealText: 'Lãnh Vụ'
  },
  {
    id: 'che-luc-dao',
    name: 'Chè Lục Đạo Luân Hồi',
    chineseName: '六道輪迴甜品',
    realm: 'luong-nghi',
    category: 'canh-thao',
    description: 'Món tráng miệng huyền bí với 6 loại viên ngọc thảo mộc tượng trưng cho Lục Đạo (Hạt sen, củ ấu, nhãn nhục, nấm tuyết, kỷ tử và thạch quy linh đen).',
    ingredients: ['Quy linh cao đắng nhẹ', 'Hạt sen hồ Tịnh Tâm', 'Nấm tuyết ngâm mật', 'Long nhãn Hưng Yên', 'Kỷ tử Tây Tạng'],
    tabooWarning: 'Hãy chọn ăn viên ngọc quy linh cao cuối cùng để kết thúc vòng luân hồi bình an.',
    pairing: 'Dùng khi buổi tiệc chuyển sang giờ Dần.',
    priceInCoins: '84 Lượng Đồng Cổ',
    spookyRating: 2,
    sealText: 'Luân Hồi'
  }
];

export const RITUAL_TIMELINE: RitualEvent[] = [
  {
    timePeriod: 'Giờ Hợi (21:00 - 23:00)',
    title: 'Lễ Khai Môn & Thanh Tẩy Trần Căn',
    subTitle: 'Chuông Bát Nhã Ngân Vang - Dẫn Lối Thập Phương',
    location: 'Cổng Quỷ Môn Quan (Tiền Điện)',
    description: 'Chủ trì đại lễ thắp 108 nén trầm hương, dùng cành đào phong ấn thanh tẩy bụi trần cho thực khách. Tiếng chuông bát nhã vang lên từng nhịp xua tan tà khí, đón chào linh khách hai cõi tề tựu.',
    taboos: ['Không mặc y phục màu đỏ tươi thuần túy', 'Không gọi tên tục của người đi cùng khi bước qua cổng môn'],
    ritualStage: 'Khai Tịch'
  },
  {
    timePeriod: 'Giờ Tý (23:00 - 01:00)',
    title: 'Giao Thoa Hai Cõi - Khai Tiệc Ngự Yến',
    subTitle: 'Âm Dương Lưỡng Hợp - Đèn Lồng Hoa Sen Rực Sáng',
    location: 'Điện Càn Khôn & Cầu Nại Hà',
    description: 'Thời khắc ranh giới giữa Âm và Dương mỏng manh nhất trong năm. Toàn bộ đèn nến trên bàn tiệc được thắp bằng ngọn lửa châm từ đài trầm hương. Món Canh Mạnh Bà và Gỏi Bách Quỷ được ngự dâng đồng loạt.',
    taboos: ['Tuyệt đối không cắm đũa thẳng đứng vào bát cơm', 'Không huýt sáo hoặc chụp ảnh ngược sáng về phía sau lưng'],
    ritualStage: 'Cực Thịnh'
  },
  {
    timePeriod: 'Giờ Sửu (01:00 - 02:30)',
    title: 'Dạ Vũ Trầm Hương & Chiêu Hồn Khúc',
    subTitle: 'Điệu Múa Bóng Khói - Vấn Đáp Tiền Nhân',
    location: 'Đài Tế Vong & Bàn Thập Điện',
    description: 'Nghệ nhân đàn tranh và sáo trúc độc tấu khúc chiêu hồn cổ. Làn khói trầm uốn lượn theo nhịp vũ đạo huyền ảo. Khách tiệc được mời thả hoa đăng giấy có khắc lời nguyện cầu xuống dòng suối cạn nhân tạo.',
    taboos: ['Không nhặt bất kỳ đồng tiền nào rơi dưới sàn tiệc', 'Không chạm tay vào bóng của vũ công in trên vách lụa'],
    ritualStage: 'Thần Giao'
  },
  {
    timePeriod: 'Giờ Dần (02:30 - 04:00)',
    title: 'Hóa Vàng Phù Chú & Khép Môn Quan',
    subTitle: 'Trao Trả Bình An - Hồi Hương Trần Thế',
    location: 'Hồ Sen Hóa Vàng & Hậu Điện',
    description: 'Nghi thức thiêu hóa sớ điệp, trao trả tịnh tâm. Mỗi thực khách nhận một lá Bùa Bình An bọc lụa chu sa đã được trì chú để mang về dương thế, kết thúc mỹ mãn một đêm giao thoa vĩnh cửu.',
    taboos: ['Rời khỏi đại tiệc không được quay đầu ngoảnh nhìn lại', 'Lá bùa bình an phải đặt ở nơi thanh tịnh trong vòng 3 ngày'],
    ritualStage: 'Viên Mãn'
  }
];

export const BANQUET_ZONES: BanquetZone[] = [
  {
    id: 'mon-quan',
    name: 'Quỷ Môn Quan',
    alias: 'Cổng Nguyệt Tịch',
    significance: 'Nơi tiếp đón, thanh tẩy lộ trình từ Dương Thế bước vào thế giới huyền diệu.',
    atmosphere: 'Khói trầm mịt mờ, 2 hàng cột gỗ mun treo đèn lồng giấy dó đỏ thẫm.',
    rules: ['Xuất trình Linh Bài Tọa Lạc', 'Rửa tay qua chậu nước lá bưởi và ngũ vị'],
    coordinates: { x: 50, y: 88 }
  },
  {
    id: 'cau-nai-ha',
    name: 'Cầu Nại Hà',
    alias: 'Hành Lang Lãnh Vụ',
    significance: 'Chiếc cầu gỗ cong vượt qua dòng suối khói sương, biểu tượng ranh giới chuyển giao tâm thức.',
    atmosphere: 'Làn sương lạnh bao phủ bắp chân, ánh đèn xanh lam ma mị hắt từ mặt nước.',
    rules: ['Đi một mạch về phía trước, cấm dừng lại ngoảnh nhìn', 'Giữ im lặng tôn nghiêm'],
    coordinates: { x: 50, y: 68 }
  },
  {
    id: 'dien-can-khon',
    name: 'Điện Càn Khôn',
    alias: 'Đại Sảnh Ngự Yến',
    significance: 'Trọng tâm của đại tiệc, nơi bố trí bàn tiệc gỗ thấp kiểu cổ truyền trải chiếu dệt chiếu hoa.',
    atmosphere: 'Bàn tiệc sáng rực nến sáp ong, chén đồng chén gốm mộc mạc, hương trầm thoang thoảng.',
    rules: ['Ngồi đúng số thứ tự linh bài', 'Nâng chén chúc tụng theo hiệu lệnh trống lệnh'],
    coordinates: { x: 50, y: 44 }
  },
  {
    id: 'dan-te-vong',
    name: 'Đài Dâng Hương',
    alias: 'Linh Đài Chiêu Phúc',
    significance: 'Nơi khách tiệc thắp hương tưởng nhớ tổ tiên và gửi gắm những lời nguyện ước sâu kín.',
    atmosphere: 'Đỉnh đồng nghìn năm, hoa sen trắng tinh khiết, chuông đồng ngân vang trầm bổng.',
    rules: ['Mỗi người chỉ thắp duy nhất 1 nén tâm hương', 'Thành tâm cúi đầu 3 lần trước khi lùi bước'],
    coordinates: { x: 22, y: 32 }
  },
  {
    id: 'ho-sen-hoa-vang',
    name: 'Hồ Sen Hóa Vàng',
    alias: 'Bể Hóa Trần Duyên',
    significance: 'Khu vực thiêu đốt sớ nguyện và thả hoa đăng ước nguyện xua tan u ám, nghênh đón điềm lành.',
    atmosphere: 'Lửa hồng bập bùng, hàng trăm đóa hoa đăng trôi lững lờ trên mặt nước phẳng lặng.',
    rules: ['Cẩn trọng tàn lửa', 'Thả đèn bằng cả hai tay với tâm niệm buông bỏ'],
    coordinates: { x: 78, y: 32 }
  }
];

export const TABOO_RULES: TabooRule[] = [
  {
    id: 1,
    title: 'Cấm Kỵ Đũa Thẳng',
    prohibition: 'Tuyệt đối không cắm đôi đũa thẳng đứng vào bát cơm hay đĩa thức ăn.',
    consequence: 'Hành vi này đồng nghĩa với việc thắp hương mời vong linh lạ ngự vào bát của bạn.',
    sealLabel: 'Kỵ Đũa'
  },
  {
    id: 2,
    title: 'Cấm Kỵ Tên Tục',
    prohibition: 'Không gọi lớn họ tên thật của bạn bè khi đi trong khu vực hành lang mờ tối.',
    consequence: 'Vong hồn phiêu bạt có thể ghi nhớ tên và đi theo bảo hộ sai cách.',
    sealLabel: 'Kỵ Danh'
  },
  {
    id: 3,
    title: 'Cấm Nhặt Tiền Rơi',
    prohibition: 'Thấy tiền lẻ, tiền vàng hay trang sức rơi trên sàn cấm cúi xuống nhặt.',
    consequence: 'Đó là lễ vật mua chuộc đường đi của cô hồn dạ hành trong đêm rằm.',
    sealLabel: 'Kỵ Tài'
  },
  {
    id: 4,
    title: 'Cấm Huýt Sáo Đêm',
    prohibition: 'Không huýt sáo, búng ngón tay hoặc tạo tiếng vang kim loại đứt quãng.',
    consequence: 'Âm thanh tần số này kích thích thính giác của cõi vô hình quy tụ lại gần.',
    sealLabel: 'Kỵ Thanh'
  },
  {
    id: 5,
    title: 'Cấm Quay Đầu Đột Ngột',
    prohibition: 'Nghe tiếng gọi sau lưng hoặc cảm giác có ai chạm vào vai, cấm ngoảnh phắt đầu lại.',
    consequence: 'Ngọn lửa tam muội trên hai vai sẽ bị gió vô hình thổi tắt, làm suy giảm nhân khí.',
    sealLabel: 'Kỵ Hồi'
  },
  {
    id: 6,
    title: 'Cấm Bẻ Đôi Bánh',
    prohibition: 'Bánh Phù Tang và các loại điểm tâm dâng bàn phải ăn trọn vẹn, không xé vụn.',
    consequence: 'Giữ cho duyên phận và vận khí được tròn trịa, không đứt đoạn giữa chừng.',
    sealLabel: 'Kỵ Phá'
  },
  {
    id: 7,
    title: 'Cấm Ngồi Ghế Trống Đầu Bàn',
    prohibition: 'Chiếc ghế gỗ mun phủ lụa đen ở đầu mỗi dãy bàn luôn phải để trống.',
    consequence: 'Đây là vị trí ngự tọa tôn kính dành cho Chư Vị Tiền Chủ trông coi yến tiệc.',
    sealLabel: 'Kỵ Tọa'
  },
  {
    id: 8,
    title: 'Cấm Chụp Ảnh Soi Gương',
    prohibition: 'Không chụp ảnh flash hướng thẳng vào gương đồng cổ trang trí trong sảnh.',
    consequence: 'Hình bóng phản chiếu trong gương có thể lưu giữ năng lượng nhiễu loạn của hai cõi.',
    sealLabel: 'Kỵ Kính'
  }
];

export const DIVINATION_HEXAGRAMS: DivinationHexagram[] = [
  {
    id: 1,
    name: 'Quẻ Số 01: Càn Vi Thiên (Linh Khí Thuần Dương)',
    symbol: '☰☰',
    level: 'Đại Cát',
    poem: [
      'Càn long tại thiên hiển oai thần,',
      'Đại tiệc khai hoa kết phúc nhân.',
      'Âm Dương hòa hợp thông muôn lối,',
      'Vận sáng như trăng rọi cõi trần.'
    ],
    interpretation: 'Vận thế cực thịnh, sinh khí dồi dào. Mọi chấp niệm trong lòng sắp được cởi bỏ. Người mang quẻ này đến yến tiệc sẽ hấp thu được năng lượng an lành nhất.',
    adviceForBanquet: 'Nên ngồi ở hướng Đông Nam của Điện Càn Khôn, uống một ngụm Rượu Hoàng Tuyền để nghênh đón hồng phúc.',
    element: 'Kim'
  },
  {
    id: 2,
    name: 'Quẻ Số 02: Khôn Vi Địa (Đức Dày Nâng Đỡ)',
    symbol: '☷☷',
    level: 'Thượng Cát',
    poem: [
      'Đất chở trời che dạ vững vàng,',
      'Qua cầu Nại Hà bước thênh thang.',
      'Tâm tịnh lòng yên xua u tối,',
      'Tổ tiên phù hộ vạn niềm an.'
    ],
    interpretation: 'Đức hạnh nâng đỡ, điềm tĩnh vượt qua gian nan. Những vướng mắc tiền nhân được giải tỏa êm đẹp, tâm hồn thanh thản.',
    adviceForBanquet: 'Thưởng thức Canh Mạnh Bà với tâm thái biết ơn, dâng 1 nén hương tại Đài Dâng Hương trước giờ Tý.',
    element: 'Thổ'
  },
  {
    id: 3,
    name: 'Quẻ Số 11: Địa Thiên Thái (Thông Suốt Hai Cõi)',
    symbol: '☷☰',
    level: 'Đại Cát',
    poem: [
      'Trời đất giao hoan khí thái hòa,',
      'Bụi trần rũ sạch ngát hương hoa.',
      'Đêm rằm huyền diệu khai duyên mới,',
      'Phúc trạch muôn đời rạng đức gia.'
    ],
    interpretation: 'Thời vận hanh thông bậc nhất. Cõi Âm che chở, cõi Dương trợ duyên. Việc cầu tài lộc hay cầu giải oan tiêu trừ đều đại thành.',
    adviceForBanquet: 'Thả một ngọn hoa đăng sen đỏ tại Hồ Sen Hóa Vàng vào lúc chuông điểm giờ Sửu.',
    element: 'Thổ - Kim'
  },
  {
    id: 4,
    name: 'Quẻ Số 29: Khảm Vi Thủy (Lòng Suối Vong Xuyên)',
    symbol: '☵☵',
    level: 'Hóa Giải',
    poem: [
      'Nước chảy mịt mờ dưới ánh trăng,',
      'Đừng vội sầu bi oán trách rằng.',
      'Giữ lòng son sắt như bàn thạch,',
      'Hắc ám tiêu tan hiển ánh đăng.'
    ],
    interpretation: 'Đang có một vài băn khoăn trắc trở hoặc suy nghĩ miên man chưa dứt. Đại tiệc này chính là dịp để buông bỏ gánh nặng tinh thần.',
    adviceForBanquet: 'Dùng bánh Phù Tang Hắc Nguyệt kèm trà nóng, tránh đến gần mép nước sương mù quá lâu.',
    element: 'Thủy'
  },
  {
    id: 5,
    name: 'Quẻ Số 30: Ly Vi Hỏa (Lửa Thiêng Soi Lối)',
    symbol: '☲☲',
    level: 'Thượng Cát',
    poem: [
      'Ngọn đèn hoa đăng sáng rực trời,',
      'Dẫn đường soi bước khắp muôn nơi.',
      'Tà ma lánh xa người chính trực,',
      'Phú quý an khang trọn một đời.'
    ],
    interpretation: 'Chính khí bừng bừng, ánh sáng nội tâm mạnh mẽ xua tan bóng tối. Quẻ này bảo hộ thân chủ khỏi mọi điều xui rủi.',
    adviceForBanquet: 'Hãy dán lá Bùa Bình An lên ngực áo trái suốt buổi tiệc để hấp thu linh khí quang minh.',
    element: 'Hỏa'
  },
  {
    id: 6,
    name: 'Quẻ Số 64: Hỏa Thủy Vị Tế (Khởi Đầu Vận Mới)',
    symbol: '☲☵',
    level: 'Trung Bình',
    poem: [
      'Một chén canh sương dứt nợ trần,',
      'Sang trang số mệnh đón thanh tân.',
      'Giao thoa hai cõi lòng tĩnh tại,',
      'Hoa nở mùa xuân hẹn cố nhân.'
    ],
    interpretation: 'Vòng quay cũ vừa khép lại, vận hội mới đang chớm nở. Cần cẩn trọng lời ăn tiếng nói, kiên nhẫn tích đức hành thiện.',
    adviceForBanquet: 'Ghi lại tâm nguyện chân thành nhất vào giấy sớ đỏ trước khi gửi vào Bể Hóa Duyên.',
    element: 'Thủy - Hỏa'
  }
];

export const EVENT_INFO = {
  title: 'ĐẠI TIỆC ÂM DƯƠNG',
  subTitle: 'ĐÊM KINH DỊ DÂN GIAN VIỆT NAM',
  tagline: 'VĂN HÓA NGOẠI NHẬP LÀ KHÁCH. BẢN SẮC VIỆT NAM LÀ GIA CHỦ.',
  venue: 'GRAND PALACE',
  address: '63 Mạc Đĩnh Chi, Phường Tân Định',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=63+M%E1%BA%A1c+%C4%90%C4%A9nh+Chi%2C+Ph%C6%B0%E1%BB%9Dng+T%C3%A2n+%C4%90%E1%BB%8Bnh',
  dateTime: '25.10.2026 · 17:00 – 21:30',
  capacity: 'Số lượng: 150 – 200 khách.',
  contacts: [
    { role: 'Trưởng Ban Tổ Chức', name: 'Hoàng Khang', phone: '039 991 7139' },
    { role: 'Trưởng Ban Tài Chính', name: 'Huyền Trang', phone: '036 305 1023' }
  ]
};

export interface TimelineItem {
  time: string;
  stageName: string;
  description: string;
  isHighlight?: boolean;
}

export const OFFICIAL_TIMELINE: TimelineItem[] = [
  {
    time: '17:00',
    stageName: 'ĐIỂM CHẠM',
    description: 'Check-in · Nhận vật phẩm · Khởi động hành trình'
  },
  {
    time: '18:30',
    stageName: 'BƯỚC QUA RANH GIỚI',
    description: 'Chính thức bước vào không gian Âm – Dương.'
  },
  {
    time: '19:00',
    stageName: 'LẠC VÀO CÕI ÂM',
    description: 'Trải nghiệm không gian và các hoạt động tương tác.'
  },
  {
    time: '19:30',
    stageName: 'LINH HỒN CỦA ĐẠI TIỆC',
    description: '🎭 Vở kịch tâm linh bắt đầu',
    isHighlight: true
  },
  {
    time: '20:00',
    stageName: 'HỒI I',
    description: 'MA LON'
  },
  {
    time: '20:30',
    stageName: 'HỒI II',
    description: 'MA DA'
  },
  {
    time: '21:00',
    stageName: 'HỒI III',
    description: 'MA ĐÓI'
  },
  {
    time: '21:30',
    stageName: 'THỨC TỈNH TÂM LINH',
    description: 'Khép lại hành trình.'
  }
];

export const OFFICIAL_MESSAGES = {
  mainMessage: 'TÂM LINH TỒN TẠI HAY KHÔNG DỰA VÀO NIỀM TIN CỦA MỖI NGƯỜI',
  mainMessageLines: [
    'TÂM LINH TỒN TẠI HAY KHÔNG',
    'DỰA VÀO NIỀM TIN CỦA MỖI NGƯỜI'
  ],
  humanitarianMeaning: [
    'CÓ THỜ CÓ THIÊNG, CÓ KIÊNG CÓ LÀNH.',
    'DÙ CÒN SỐNG HAY ĐÃ CHẾT NGƯỜI VIỆT NAM VẪN LỰA CHỌN SỰ TỬ TẾ VỚI NHAU ĐẾN CUỐI CÙNG'
  ]
};

export const OFFICIAL_TICKETS = [
  {
    id: 'don-coi' as const,
    icon: '👻',
    name: 'ĐƠN CÕI',
    price: '119.000 VNĐ',
    tierLabel: 'Vé thường',
    benefits: [
      '01 vé tham dự: Vé thường',
      'Check-in sự kiện',
      'Trải nghiệm không gian Âm – Dương',
      'Tham gia các hoạt động trong chương trình'
    ],
    popular: false
  },
  {
    id: 'am-duong' as const,
    icon: '🏮',
    name: 'ÂM DƯƠNG',
    price: '129.000 VNĐ',
    tierLabel: 'Vip',
    benefits: [
      '01 vé tham dự: Vip',
      'Check-in',
      'Trải nghiệm không gian Âm – Dương',
      'Tham gia các hoạt động trong chương trình'
    ],
    popular: true
  },
  {
    id: 'dai-tiec' as const,
    icon: '👑',
    name: 'ĐẠI TIỆC ÂM DƯƠNG',
    price: '139.000 VNĐ',
    tierLabel: 'Supper Vip',
    benefits: [
      '01 vé tham dự: Supper Vip',
      'Check-in',
      'Trải nghiệm không gian Âm – Dương',
      'Tham gia các hoạt động trong chương trình'
    ],
    popular: false
  }
];

export const OFFICIAL_FAQS = [
  {
    id: 'faq-1',
    question: 'Sự kiện Đại Tiệc Âm Dương diễn ra khi nào?',
    answer: 'Sự kiện diễn ra vào 25/10/2026, từ 17:00 – 21:30 tại Grand Palace.'
  },
  {
    id: 'faq-2',
    question: 'Chủ đề của sự kiện là gì?',
    answer: 'Đêm Kinh Dị Dân Gian Việt Nam – nơi Halloween gặp gỡ văn hóa và tín ngưỡng dân gian Việt Nam qua sân khấu, không gian và trải nghiệm tương tác.'
  },
  {
    id: 'faq-3',
    question: 'Có bắt buộc phải hóa trang không?',
    answer: 'Không bắt buộc. Tuy nhiên, BTC khuyến khích khách tham dự mặc Áo dài, Áo bà ba, trang phục dân gian hoặc Halloween Costume mang màu sắc Việt Nam.'
  },
  {
    id: 'faq-4',
    question: 'Sự kiện có đáng sợ không?',
    answer: 'Sự kiện có các yếu tố kinh dị, tâm linh, âm thanh, ánh sáng và không gian ma mị. Đây là trải nghiệm giải trí kết hợp văn hóa Việt Nam.'
  },
  {
    id: 'faq-5',
    question: 'Tôi có thể đi một mình không?',
    answer: 'Có. Bạn có thể lựa chọn vé Đơn Cõi hoặc rủ bạn bè cùng trải nghiệm các combo nhóm.'
  },
  {
    id: 'faq-6',
    question: 'Tôi sẽ được trải nghiệm những gì?',
    answer: 'Bạn sẽ được check-in, khám phá không gian Âm – Dương, trải nghiệm tương tác và thưởng thức vở kịch tâm linh.'
  },
  {
    id: 'faq-7',
    question: 'Tôi cần chuẩn bị gì khi tham dự?',
    answer: 'Chỉ cần vé tham dự và trang phục phù hợp. Hãy sẵn sàng cho một đêm bước qua ranh giới giữa Cõi Dương và Cõi Âm.'
  },
  {
    id: 'faq-8',
    question: 'Mua vé ở đâu?',
    answer: 'Nhấn nút “ĐẶT VÉ NGAY” trên website để chọn hạng vé và nhận mã linh bài điện tử chính thức.'
  }
];

