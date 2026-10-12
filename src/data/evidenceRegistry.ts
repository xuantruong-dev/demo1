import sk01 from '../assets/images/SK01_doan-sinh-vien-kien-tap.jpg';
import td01 from '../assets/images/TD01_kho-khan-van-hanh.jpg';
import td02 from '../assets/images/TD02_kenh-truyen-thong-khach-hang.jpg';
import td03 from '../assets/images/TD03_khach-hang-muc-tieu-b2b-b2c.jpg';
import td04 from '../assets/images/TD04_vat-nuoi-va-tuong-tac-giao-duc.jpg';
import td05 from '../assets/images/TD05_he-san-pham-dich-vu-detrang.jpg';
import td06 from '../assets/images/TD06_tam-nhin-su-menh-gia-tri.jpg';
import td07 from '../assets/images/TD07_backdrop-kien-tap-19092026.jpg';
import tt01 from '../assets/images/TT01_dan-cuu-khu-chan-tha.jpg';
import tt02 from '../assets/images/TT02_toan-canh-khu-chan-tha.jpg';
import tt03 from '../assets/images/TT03_khu-chan-tha-va-chuong-trai.jpg';
import tt04 from '../assets/images/TT04_xe-noi-bo-khu-trang-trai.jpg';
import tt05 from '../assets/images/TT05_can-canh-vat-nuoi.jpg';
import tt06 from '../assets/images/TT06_khong-gian-canh-quan-trai-nghiem.jpg';
import tt07 from '../assets/images/TT07_phuong-tien-va-khong-gian-farm.jpg';
import tt08 from '../assets/images/TT08_cong-khu-chan-tha.jpg';
import tt09 from '../assets/images/TT09_nhan-dien-ba-vi-detrang.jpg';
import tt10 from '../assets/images/TT10_nha-detrang-farm.jpg';

export type EvidenceType = 'EVENT' | 'SEMINAR' | 'FIELD';

export interface EvidenceItem {
  code: string;
  type: EvidenceType;
  label: string; // e.g. 'TT10 · FIELD EVIDENCE'
  filename: string;
  title: string;
  caption: string;
  date: string;
  location: string;
  description: string;
  academicNotes: string;
}

export const EVIDENCE_IMAGE_MAP: Record<string, string> = {
  SK01: sk01,
  TD01: td01,
  TD02: td02,
  TD03: td03,
  TD04: td04,
  TD05: td05,
  TD06: td06,
  TD07: td07,
  TT01: tt01,
  TT02: tt02,
  TT03: tt03,
  TT04: tt04,
  TT05: tt05,
  TT06: tt06,
  TT07: tt07,
  TT08: tt08,
  TT09: tt09,
  TT10: tt10,
  'SK01_doan-sinh-vien-kien-tap.jpg': sk01,
  'TD01_kho-khan-van-hanh.jpg': td01,
  'TD02_kenh-truyen-thong-khach-hang.jpg': td02,
  'TD03_khach-hang-muc-tieu-b2b-b2c.jpg': td03,
  'TD04_vat-nuoi-va-tuong-tac-giao-duc.jpg': td04,
  'TD05_he-san-pham-dich-vu-detrang.jpg': td05,
  'TD06_tam-nhin-su-menh-gia-tri.jpg': td06,
  'TD07_backdrop-kien-tap-19092026.jpg': td07,
  'TT01_dan-cuu-khu-chan-tha.jpg': tt01,
  'TT02_toan-canh-khu-chan-tha.jpg': tt02,
  'TT03_khu-chan-tha-va-chuong-trai.jpg': tt03,
  'TT04_xe-noi-bo-khu-trang-trai.jpg': tt04,
  'TT05_can-canh-vat-nuoi.jpg': tt05,
  'TT06_khong-gian-canh-quan-trai-nghiem.jpg': tt06,
  'TT07_phuong-tien-va-khong-gian-farm.jpg': tt07,
  'TT08_cong-khu-chan-tha.jpg': tt08,
  'TT09_nhan-dien-ba-vi-detrang.jpg': tt09,
  'TT10_nha-detrang-farm.jpg': tt10,
};

export const EVIDENCE_REGISTRY: Record<string, EvidenceItem> = {
  // 1. EVENT EVIDENCE (SK)
  SK01: {
    code: 'SK01',
    type: 'EVENT',
    label: 'SK01 · EVENT EVIDENCE',
    filename: 'SK01_doan-sinh-vien-kien-tap.jpg',
    title: 'Đoàn sinh viên Khoa Kinh tế Chính trị tại Detrang Farm',
    caption: 'SK01 — Đoàn sinh viên Khoa Kinh tế Chính trị tại Detrang Farm, 19/09/2026.',
    date: '19.09.2026',
    location: 'Detrang Farm – Ba Vì, Hà Nội',
    description: 'Bối cảnh đoàn sinh viên và giảng viên Khoa Kinh tế Chính trị – Trường Đại học Kinh tế (UEB – VNU) tham gia đợt kiến tập nghiên cứu thực địa.',
    academicNotes: 'Bằng chứng xác thực về chủ thể nghiên cứu và phương pháp tiếp cận thực nghiệm sơ cấp.'
  },

  // 2. SEMINAR EVIDENCE (TD01 - TD07)
  TD01: {
    code: 'TD01',
    type: 'SEMINAR',
    label: 'TD01 · SEMINAR EVIDENCE',
    filename: 'TD01_kho-khan-van-hanh.jpg',
    title: 'Khó khăn & Thách thức vận hành trang trại',
    caption: 'TD01 — Slide tọa đàm: Khó khăn và thách thức vận hành trang trại.',
    date: '19.09.2026',
    location: 'Hội trường Tọa đàm Sinh thái – Detrang Farm',
    description: 'Tư liệu từ Ban Giám đốc chỉ rõ 3 nhóm rào cản vận hành: rủi ro hệ thống sinh học/vật nuôi cây trồng, chi phí diện tích lớn, và tính biến động mùa vụ/lượng khách.',
    academicNotes: 'Căn cứ thực tiễn để sinh viên kiến nghị quy hoạch luồng di chuyển và tối ưu hóa công suất vận hành.'
  },
  TD02: {
    code: 'TD02',
    type: 'SEMINAR',
    label: 'TD02 · SEMINAR EVIDENCE',
    filename: 'TD02_kenh-truyen-thong-khach-hang.jpg',
    title: 'Kênh truyền thông & Tiếp cận khách hàng',
    caption: 'TD02 — Slide tọa đàm: Kênh truyền thông và tiếp cận khách hàng.',
    date: '19.09.2026',
    location: 'Hội trường Tọa đàm Sinh thái – Detrang Farm',
    description: 'Sơ đồ phân tầng kênh truyền thông: B2B tiếp cận qua gặp mặt trực tiếp, giới thiệu truyền miệng và farmtrip; B2C tiếp cận qua kênh online và truyền miệng.',
    academicNotes: 'Minh chứng cho cơ chế xây dựng niềm tin trong thị trường dịch vụ giáo dục trải nghiệm.'
  },
  TD03: {
    code: 'TD03',
    type: 'SEMINAR',
    label: 'TD03 · SEMINAR EVIDENCE',
    filename: 'TD03_khach-hang-muc-tieu-b2b-b2c.jpg',
    title: 'Phân khúc khách hàng mục tiêu B2B & B2C',
    caption: 'TD03 — Slide tọa đàm: Phân khúc khách hàng mục tiêu B2B & B2C.',
    date: '19.09.2026',
    location: 'Hội trường Tọa đàm Sinh thái – Detrang Farm',
    description: 'Phân định thị trường thành 2 nhóm lớn: B2B (Trường học/trung tâm giáo dục, Doanh nghiệp/đoàn thể, Trại hè/ban phụ huynh) và B2C (Gia đình, Nhóm bạn trẻ/sinh viên, Khách nghỉ dưỡng Farmstay).',
    academicNotes: 'Cơ sở phân tích chiến lược định giá và thiết kế sản phẩm dịch vụ phân tầng.'
  },
  TD04: {
    code: 'TD04',
    type: 'SEMINAR',
    label: 'TD04 · SEMINAR EVIDENCE',
    filename: 'TD04_vat-nuoi-va-tuong-tac-giao-duc.jpg',
    title: 'Vật nuôi & Định hướng giáo dục trải nghiệm',
    caption: 'TD04 — Slide tọa đàm: Vật nuôi và định hướng giáo dục trải nghiệm.',
    date: '19.09.2026',
    location: 'Hội trường Tọa đàm Sinh thái – Detrang Farm',
    description: 'Trình bày định hướng chuyển hóa tài nguyên vật nuôi thành nội dung giáo dục tương tác, biến hoạt động quan sát chăn nuôi thành trải nghiệm nhận thức khoa học.',
    academicNotes: 'Bằng chứng then chốt của Tam giác N–G–T và trường hợp phân tích Một nguồn lực – Ba tầng giá trị.'
  },
  TD05: {
    code: 'TD05',
    type: 'SEMINAR',
    label: 'TD05 · SEMINAR EVIDENCE',
    filename: 'TD05_he-san-pham-dich-vu-detrang.jpg',
    title: 'Hệ sản phẩm & Dịch vụ tích hợp tại Detrang Farm',
    caption: 'TD05 — Slide tọa đàm: Hệ sản phẩm & dịch vụ tích hợp tại Detrang Farm.',
    date: '19.09.2026',
    location: 'Hội trường Tọa đàm Sinh thái – Detrang Farm',
    description: 'Bản đồ hệ thống 4 nhóm sản phẩm – dịch vụ cốt lõi: Tham quan / trải nghiệm, Farmstay nghỉ dưỡng, Ẩm thực / nông sản sạch, và Cây trồng / vật nuôi sinh thái.',
    academicNotes: 'Tư liệu xác thực mô hình kinh doanh đa dạng hóa dòng tiền của nông trại đa chức năng.'
  },
  TD06: {
    code: 'TD06',
    type: 'SEMINAR',
    label: 'TD06 · SEMINAR EVIDENCE',
    filename: 'TD06_tam-nhin-su-menh-gia-tri.jpg',
    title: 'Tầm nhìn, Sứ mệnh & Giá trị cốt lõi',
    caption: 'TD06 — Slide tọa đàm: Tầm nhìn, sứ mệnh và giá trị cốt lõi.',
    date: '19.09.2026',
    location: 'Hội trường Tọa đàm Sinh thái – Detrang Farm',
    description: 'Tuyên bố triết lý doanh nghiệp: Tầm nhìn tiên phong nông nghiệp sinh thái, Sứ mệnh giáo dục tự nhiên thực chất, Giá trị cốt lõi vì sức khỏe cộng đồng.',
    academicNotes: 'Khung định vị chiến lược thể hiện định hướng dài hạn của tổ hợp kinh tế nông nghiệp tuần hoàn.'
  },
  TD07: {
    code: 'TD07',
    type: 'SEMINAR',
    label: 'TD07 · SEMINAR EVIDENCE',
    filename: 'TD07_backdrop-kien-tap-19092026.jpg',
    title: 'Backdrop chương trình kiến tập thực tế tại Ba Vì ngày 19/09/2026',
    caption: 'TD07 — Backdrop chương trình kiến tập thực tế tại Ba Vì ngày 19/09/2026.',
    date: '19.09.2026',
    location: 'Khu vực đón tiếp & Hội trường – Detrang Farm',
    description: 'Hình ảnh ghi nhận backdrop chính thức của chương trình kiến tập thực tế do Khoa Kinh tế Chính trị – UEB – VNU tổ chức tại Detrang Farm.',
    academicNotes: 'Chứng minh chủ đề, pháp nhân phối hợp và bối cảnh thực tế của toàn bộ chuyến khảo sát học thuật.'
  },

  // 3. FIELD EVIDENCE (TT01 - TT10)
  TT01: {
    code: 'TT01',
    type: 'FIELD',
    label: 'TT01 · FIELD EVIDENCE',
    filename: 'TT01_dan-cuu-khu-chan-tha.jpg',
    title: 'Đàn cừu tại khu chăn thả tự nhiên Detrang Farm',
    caption: 'TT01 — Đàn cừu tại khu chăn thả tự nhiên Detrang Farm, 19/09/2026.',
    date: '19.09.2026',
    location: 'Khu chăn thả tự nhiên Ba Vì',
    description: 'Hình ảnh đàn cừu gặm cỏ trong không gian sinh thái mở, thể hiện phương thức chăn thả bán tự nhiên kết hợp cảnh quan tham quan.',
    academicNotes: 'Tư liệu thực chứng cho yếu tố Nông nghiệp và Không gian cảnh quan sinh thái.'
  },
  TT02: {
    code: 'TT02',
    type: 'FIELD',
    label: 'TT02 · FIELD EVIDENCE',
    filename: 'TT02_toan-canh-khu-chan-tha.jpg',
    title: 'Toàn cảnh khu chăn thả và không gian sinh thái Ba Vì',
    caption: 'TT02 — Toàn cảnh khu chăn thả và không gian sinh thái Ba Vì, 19/09/2026.',
    date: '19.09.2026',
    location: 'Toàn cảnh Detrang Farm',
    description: 'Bao quát cảnh quan đồi gò Ba Vì, quy hoạch thảm cỏ xanh và phân vùng không gian phục vụ tour tham quan trải nghiệm.',
    academicNotes: 'Minh chứng cho diện tích mặt bằng rộng lớn và điều kiện tự nhiên phục vụ đa chức năng nông nghiệp.'
  },
  TT03: {
    code: 'TT03',
    type: 'FIELD',
    label: 'TT03 · FIELD EVIDENCE',
    filename: 'TT03_khu-chan-tha-va-chuong-trai.jpg',
    title: 'Khu chăn thả & Quy hoạch chuồng trại an toàn sinh học',
    caption: 'TT03 — Khu chăn thả và quy hoạch chuồng trại an toàn sinh học, 19/09/2026.',
    date: '19.09.2026',
    location: 'Phân khu chăn nuôi trung tâm',
    description: 'Quy hoạch chuồng trại thông thoáng, thiết kế ngăn cách an toàn sinh học giữa khu vực nuôi nhốt và đường đi của khách tham quan.',
    academicNotes: 'Cơ sở hạ tầng kỹ thuật đảm bảo song song hai mục tiêu: an toàn thú y và trải nghiệm du khách.'
  },
  TT04: {
    code: 'TT04',
    type: 'FIELD',
    label: 'TT04 · FIELD EVIDENCE',
    filename: 'TT04_xe-noi-bo-khu-trang-trai.jpg',
    title: 'Phương tiện nội bộ phục vụ di chuyển và vận hành trang trại',
    caption: 'TT04 — Phương tiện nội bộ phục vụ di chuyển và vận hành trang trại, 19/09/2026.',
    date: '19.09.2026',
    location: 'Trục đường nội bộ trang trại',
    description: 'Phương tiện chuyên dụng phục vụ luân chuyển nông cụ, thức ăn chăn nuôi và hỗ trợ phân luồng khách trong khuôn viên trang trại.',
    academicNotes: 'Tư liệu chứng minh năng lực tổ chức logistics nội bộ trên mặt bằng quy mô lớn.'
  },
  TT05: {
    code: 'TT05',
    type: 'FIELD',
    label: 'TT05 · FIELD EVIDENCE',
    filename: 'TT05_can-canh-vat-nuoi.jpg',
    title: 'Cận cảnh đàn vật nuôi tại Detrang Farm',
    caption: 'TT05 — Khu vực vật nuôi tại Detrang Farm, 19/09/2026.',
    date: '19.09.2026',
    location: 'Khu vực chuồng trại & trạm tương tác',
    description: 'Cận cảnh vật nuôi thân thiện, khỏe mạnh, là chủ thể trung tâm của Tam giác N–G–T và case study Một nguồn lực – Ba tầng giá trị.',
    academicNotes: 'Bằng chứng thực chứng xác nhận sự chuyển hóa từ vật chất sinh học thành đối tượng giáo dục và xúc cảm trải nghiệm.'
  },
  TT06: {
    code: 'TT06',
    type: 'FIELD',
    label: 'TT06 · FIELD EVIDENCE',
    filename: 'TT06_khong-gian-canh-quan-trai-nghiem.jpg',
    title: 'Không gian cảnh quan & Khu trải nghiệm sinh thái',
    caption: 'TT06 — Không gian cảnh quan và khu trải nghiệm sinh thái, 19/09/2026.',
    date: '19.09.2026',
    location: 'Vườn sinh thái & Không gian mở',
    description: 'Cảnh quan xanh mướt, rợp bóng mát, khu vực tổ chức hoạt động nông vụ và trò chơi dân gian cho các đoàn học sinh, sinh viên.',
    academicNotes: 'Ngoại ứng tích cực về môi trường sinh thái trở thành sản phẩm dịch vụ giải trí có khả năng thương mại hóa.'
  },
  TT07: {
    code: 'TT07',
    type: 'FIELD',
    label: 'TT07 · FIELD EVIDENCE',
    filename: 'TT07_phuong-tien-va-khong-gian-farm.jpg',
    title: 'Phương tiện & Không gian thực địa trang trại',
    caption: 'TT07 — Không gian nông trại và phương tiện dịch vụ thực địa, 19/09/2026.',
    date: '19.09.2026',
    location: 'Khu đệm sinh thái Detrang Farm',
    description: 'Sự gắn kết hài hòa giữa phương tiện kỹ thuật và không gian tự nhiên Ba Vì, tạo cảm giác gần gũi và an toàn cho người học.',
    academicNotes: 'Đồng bộ hóa phương tiện phục vụ trải nghiệm học tập thực địa.'
  },
  TT08: {
    code: 'TT08',
    type: 'FIELD',
    label: 'TT08 · FIELD EVIDENCE',
    filename: 'TT08_cong-khu-chan-tha.jpg',
    title: 'Cổng vào khu chăn thả sinh thái Detrang Farm',
    caption: 'TT08 — Cổng vào khu chăn thả và không gian sinh thái trải nghiệm, 19/09/2026.',
    date: '19.09.2026',
    location: 'Lối vào khu chăn thả Ba Vì',
    description: 'Cổng mộc mạc phân định không gian đón tiếp và khu chăn thả sinh thái mở, là điểm chạm quan trọng trong hành trình tham quan.',
    academicNotes: 'Điểm chuyển tiếp không gian (Touchpoint) trong trải nghiệm khách hàng.'
  },
  TT09: {
    code: 'TT09',
    type: 'FIELD',
    label: 'TT09 · FIELD EVIDENCE',
    filename: 'TT09_nhan-dien-ba-vi-detrang.jpg',
    title: 'Biển hiệu nhận diện Detrang Farm Ba Vì',
    caption: 'TT09 — Biển hiệu nhận diện và chỉ dẫn không gian Detrang Farm Ba Vì, 19/09/2026.',
    date: '19.09.2026',
    location: 'Cổng chính & Trục đường nhận diện Detrang Farm',
    description: 'Biển hiệu nhận diện thương hiệu Detrang Farm tại Ba Vì, khẳng định vị thế nông trại giáo dục thực nghiệm.',
    academicNotes: 'Minh chứng cho nhận diện thương hiệu và bảo chứng chất lượng địa phương Ba Vì.'
  },
  TT10: {
    code: 'TT10',
    type: 'FIELD',
    label: 'TT10 · FIELD EVIDENCE',
    filename: 'TT10_nha-detrang-farm.jpg',
    title: 'Nhà Detrang Farm & Khu đón tiếp trung tâm',
    caption: 'TT10 — Nhà Detrang Farm và khu đón tiếp trung tâm, 19/09/2026.',
    date: '19.09.2026',
    location: 'Nhà trung tâm điều hành Detrang Farm – Ba Vì',
    description: 'Công trình kiến trúc nhận diện đặc trưng của Detrang Farm, nơi đón tiếp các đoàn khảo sát và tổ chức không gian học thuật.',
    academicNotes: 'Hình ảnh nhận diện vật chất thực tế của trang trại, dùng làm visual nhận diện trung tâm của báo cáo.'
  }
};

export const ALL_EVIDENCE_ITEMS: EvidenceItem[] = Object.values(EVIDENCE_REGISTRY);

export function getEvidenceItem(code: string): EvidenceItem | undefined {
  return EVIDENCE_REGISTRY[code];
}

export function getEvidenceUrl(codeOrFilename: string): string {
  if (EVIDENCE_IMAGE_MAP[codeOrFilename]) {
    return EVIDENCE_IMAGE_MAP[codeOrFilename];
  }
  const item = EVIDENCE_REGISTRY[codeOrFilename];
  if (item && EVIDENCE_IMAGE_MAP[item.code]) {
    return EVIDENCE_IMAGE_MAP[item.code];
  }
  if (item && EVIDENCE_IMAGE_MAP[item.filename]) {
    return EVIDENCE_IMAGE_MAP[item.filename];
  }
  const filename = item ? item.filename : codeOrFilename;
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  return `${cleanBase}images/${filename}`;
}
