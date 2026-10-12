import {
  TimelineItem,
  NgtNodeData,
  ValueLayerItem,
  BusinessPillar,
  CustomerSegment,
  JourneyStep,
  SurveyKpi,
  SurveyChartData,
  TriangulationCase,
  ChallengeItem,
  RecommendationCard,
  GalleryItem,
  QuizQuestion,
} from '../types';

import { getEvidenceUrl, ALL_EVIDENCE_ITEMS } from './evidenceRegistry';

// Real asset paths based on SK / TD / TT mapping system
export const heroImg = getEvidenceUrl('TT10_nha-detrang-farm.jpg');
export const goatsImg = getEvidenceUrl('TT05_can-canh-vat-nuoi.jpg');
export const seminarImg = getEvidenceUrl('TD04_vat-nuoi-va-tuong-tac-giao-duc.jpg');
export const activityImg = getEvidenceUrl('TT06_khong-gian-canh-quan-trai-nghiem.jpg');

// SECTION 02: THE FIELD STUDY TIMELINE
export const FIELD_STUDY_METADATA = {
  location: 'Detrang Farm – Thôn Ké Mới, Xã Tản Lĩnh, Ba Vì, Hà Nội',
  time: '19/09/2026 (05:40 – 17:00)',
  participants: 'A large multi-class student cohort participated in the field-study programme. Đoàn sinh viên và giảng viên Khoa Kinh tế Chính trị – Trường Đại học Kinh tế – ĐHQGHN (UEB – VNU)',
  timelineMethodNote: 'Timeline reproduced from the official field-study itinerary. Lunch and rest periods overlap between 13:00–13:30 in the source document.',
  methods: [
    { name: 'Tọa đàm chuyên gia', desc: 'Tọa đàm với lãnh đạo Detrang Farm về mô hình giáo dục trải nghiệm và tọa đàm chuyên ngành với lãnh đạo Khoa KTCT' },
    { name: 'Quan sát thực địa', desc: 'Khảo sát chia nhóm theo lớp, tham quan chuồng trại, khu chăn thả và các phân khu dịch vụ' },
    { name: 'Tư liệu hóa hình ảnh', desc: 'Ghi nhận bằng chứng thực nghiệm mã hóa TT (Thực tế), TD (Tọa đàm) và SK (Sự kiện đoàn)' },
    { name: 'Khảo sát định lượng', desc: 'Phiếu khảo sát trực tuyến sau chuyến đi (85 phản hồi tiếp nhận, 72 phản hồi làm sạch đưa vào phân tích)' }
  ]
};

export const STUDY_TIMELINE: TimelineItem[] = [
  {
    id: 'tl-1',
    time: '05:40',
    phase: 'ASSEMBLY',
    title: 'Tập trung tại ĐHQGHN',
    description: 'Sinh viên và giảng viên có mặt tại sân ĐHQGHN, 144 Xuân Thủy, Cầu Giấy, Hà Nội.',
    keyObservation: 'Điểm tập kết toàn đoàn trước khi di chuyển đến cơ sở thực địa Ba Vì.',
    evidenceCode: 'SK01',
    location: 'Sân ĐHQGHN, 144 Xuân Thủy, Cầu Giấy, Hà Nội',
    academicTag: 'Chuẩn bị thực địa'
  },
  {
    id: 'tl-2',
    time: '05:50',
    phase: 'DEPARTURE',
    title: 'Khởi hành đến Detrang Farm',
    description: 'Xe khởi hành đến Detrang Farm. Sinh viên lên đúng xe được sắp xếp; lớp trưởng điểm danh.',
    keyObservation: 'Điều phối cơ động theo xe và ổn định trật tự đoàn sinh viên liên lớp.',
    evidenceCode: 'ĐIỀU PHỐI XE',
    location: 'Hà Nội → Ba Vì',
    academicTag: 'Điều phối di chuyển'
  },
  {
    id: 'tl-3',
    time: '07:30',
    phase: 'CHECK-IN',
    title: 'Đến Detrang Farm & Làm thủ tục check-in',
    description: 'Đến Detrang Farm và làm thủ tục check-in.',
    keyObservation: 'Tiếp nhận không gian sinh thái nông trại và phân định luồng đón tiếp ban đầu.',
    evidenceCode: 'TT10',
    location: 'Cổng đón tiếp Detrang Farm',
    academicTag: 'Tiếp cận không gian'
  },
  {
    id: 'tl-4',
    time: '08:00 – 10:30',
    phase: 'SEMINAR',
    title: 'Tọa đàm với lãnh đạo Detrang Farm & Lãnh đạo Khoa KTCT',
    description: 'Tọa đàm với lãnh đạo Detrang Farm. Topic: “Mô hình trải nghiệm giáo dục và hoạt động kinh doanh của doanh nghiệp nông nghiệp.” Đồng thời, tọa đàm với lãnh đạo Khoa Kinh tế Chính trị về lựa chọn chuyên ngành đào tạo.',
    keyObservation: 'Doanh nghiệp chia sẻ thực tế cấu trúc Tam giác N–G–T và bài toán chi phí vận hành; Khoa định hướng chuyên môn ứng dụng.',
    evidenceCode: 'TD07',
    location: 'Hội trường Hội thảo Detrang Farm',
    academicTag: 'Mô hình kinh doanh & Tọa đàm'
  },
  {
    id: 'tl-5',
    time: '10:30 – 11:30',
    phase: 'FARM TOUR',
    title: 'Tham quan trang trại chia nhóm theo lớp',
    description: 'Sinh viên tham quan trang trại dưới sự hướng dẫn của cán bộ, nhân viên Detrang Farm và được chia nhóm theo lớp.',
    keyObservation: 'Quan sát thực chứng chu trình chăn thả dê sữa, đà điểu, cảnh quan sinh thái và hạ tầng dịch vụ.',
    evidenceCode: 'TT02',
    location: 'Khu chăn thả & Vành đai trang trại',
    academicTag: 'Quan sát thực chứng'
  },
  {
    id: 'tl-6',
    time: '12:00 – 13:30',
    phase: 'LUNCH',
    title: 'Ăn trưa tại trang trại',
    description: 'Ăn trưa tại trang trại. (Khoảng thời gian 13:00–13:30 gối chồng với giờ nghỉ trưa theo văn bản lịch trình chính thức).',
    keyObservation: 'Cảm nhận chuỗi giá trị nông sản tại chỗ "From Farm to Table", thưởng thức ẩm thực nông trại.',
    evidenceCode: 'TT05',
    location: 'Khu ẩm thực Detrang Farm',
    academicTag: 'Chuỗi cung ứng tại chỗ',
    notes: 'Timeline reproduced from the official field-study itinerary. Lunch and rest periods overlap between 13:00–13:30 in the source document.'
  },
  {
    id: 'tl-7',
    time: '13:00 – 14:30',
    phase: 'REST',
    title: 'Nghỉ trưa tại phòng cộng đồng',
    description: 'Nghỉ trưa tại phòng cộng đồng. (Khoảng thời gian 13:00–13:30 gối chồng với giờ ăn trưa theo văn bản lịch trình chính thức).',
    keyObservation: 'Không gian sinh hoạt tập thể tại nhà sàn/phòng cộng đồng, hỗ trợ phục hồi năng lượng và trao đổi sinh viên.',
    evidenceCode: 'TT06',
    location: 'Phòng cộng đồng Detrang Farm',
    academicTag: 'Tái tạo năng lượng',
    notes: 'Timeline reproduced from the official field-study itinerary. Lunch and rest periods overlap between 13:00–13:30 in the source document.'
  },
  {
    id: 'tl-8',
    time: '14:30 – 17:00',
    phase: 'EXPERIENCE',
    title: 'Tự do tham gia các hoạt động trải nghiệm tại Farm',
    description: 'Sinh viên tự do tham gia các hoạt động trải nghiệm tại Farm (tương tác trực tiếp vật nuôi, tìm hiểu trò chơi dân gian, khám phá không gian sinh thái).',
    keyObservation: 'Chuyển hóa từ tri thức lý thuyết sang trải nghiệm xúc giác; đánh giá cảm nhận trực tiếp của người dùng dịch vụ.',
    evidenceCode: 'TT05',
    location: 'Các phân khu trải nghiệm ngoài trời',
    academicTag: 'Kinh tế học trải nghiệm'
  },
  {
    id: 'tl-9',
    time: '17:00 (EXPECTED)',
    phase: 'RETURN',
    title: 'Lên xe trở về Hà Nội',
    description: 'Sinh viên lên xe trở về Hà Nội; lớp trưởng điểm danh.',
    keyObservation: 'Kết thúc ngày thực địa, rà soát quân số và hoàn tất quá trình ghi nhận sơ bộ tại hiện trường.',
    evidenceCode: 'SK01',
    location: 'Detrang Farm → Sân ĐHQGHN',
    academicTag: 'Kết thúc thực địa'
  }
];

// SECTION 03: RESEARCH QUESTIONS
export const RESEARCH_QUESTIONS = {
  centralQuestion: 'Khi một trang trại không chỉ tạo ra nông sản mà còn tạo ra tri thức và trải nghiệm, giá trị kinh tế của nó được mở rộng như thế nào?',
  subQuestions: [
    {
      code: 'RQ1',
      title: 'Cơ chế tích hợp N–G–T',
      question: 'Detrang Farm kết hợp Nông nghiệp – Giáo dục – Trải nghiệm như thế nào trên cùng một nguồn lực hữu hình?',
      context: 'Xem xét sự chuyển dịch từ sản xuất vật chất thuần túy sang tổ hợp dịch vụ đa tầng.'
    },
    {
      code: 'RQ2',
      title: 'Đối tượng thụ hưởng & Phân khúc',
      question: 'Giá trị đa tầng đó được định hình và phân phối tới những nhóm khách hàng mục tiêu nào?',
      context: 'Đối chiếu cấu trúc B2B (nhà trường) và B2C (gia đình, sinh viên, khách nghỉ dưỡng).'
    },
    {
      code: 'RQ3',
      title: 'Điểm nghẽn & Đề xuất cải thiện',
      question: 'Hành trình trải nghiệm và việc chuyển giao tri thức tại thực địa còn gặp những rào cản vận hành nào?',
      context: 'Dựa trên bằng chứng khảo sát định lượng và quan sát thực địa để đưa ra giải pháp tư vấn khả thi.'
    }
  ]
};

// SECTION 04: N-G-T VALUE TRIANGLE
export const NGT_NODES: Record<string, NgtNodeData> = {
  agriculture: {
    key: 'agriculture',
    label: 'Nông nghiệp',
    subLabel: 'Agriculture — Nền tảng tài nguyên',
    tagline: 'Cơ sở sinh thái và nguồn lực sản xuất hữu hình',
    elements: [
      'Quỹ đất canh tác sinh thái và đồng cỏ Ba Vì',
      'Đàn vật nuôi năng suất cao: Dê sữa Bách Thảo/Saanen, đà điểu, ngựa',
      'Quy trình trồng rau hữu cơ và vườn thảo dược dược liệu',
      'Hệ sinh thái tuần hoàn: Phân hữu cơ ủ hoai vi sinh',
      'Sản phẩm vật chất: Sữa tươi thanh trùng, thịt, rau củ sạch'
    ],
    evidenceCodes: ['TT01', 'TT04', 'TT10'],
    imageSrc: goatsImg,
    academicQuote: 'Nông nghiệp đóng vai trò là "chất dẫn thực tế" (real-world substrate), cung cấp toàn bộ không gian và tư liệu sản xuất cho các hoạt động tiếp nối.',
    economicMeaning: 'Tạo lập giá trị sử dụng nguyên thủy (Primary Use-Value), hình thành tư liệu lao động sống động.'
  },
  education: {
    key: 'education',
    label: 'Giáo dục',
    subLabel: 'Education — Tầng tri thức hóa',
    tagline: 'Chuyển hóa hoạt động canh tác thành nội dung học tập có cấu trúc',
    elements: [
      'Tọa đàm chuyên đề cùng ban giám đốc trang trại (TD06)',
      'Giáo trình giáo dục trải nghiệm STEM nông nghiệp cho học sinh',
      'Hướng dẫn viên thuyết minh quy trình sinh học và an toàn thực phẩm',
      'Quan sát tập tính động vật và phân loại giống loài thực địa',
      'Học tập qua việc làm (Learning by Doing) và rút ra phản tư'
    ],
    evidenceCodes: ['TD06', 'TD07'],
    imageSrc: seminarImg,
    academicQuote: 'Giáo dục biến một tài sản nông nghiệp thông thường thành một đối tượng nghiên cứu khoa học, gia tăng thặng dư nhận thức cho người học.',
    economicMeaning: 'Lao động tri thức trừu tượng hóa các quá trình tự nhiên thành tài sản vô hình có giá trị trao đổi cao.'
  },
  experience: {
    key: 'experience',
    label: 'Trải nghiệm',
    subLabel: 'Experience — Tầng cảm xúc & Dịch vụ',
    tagline: 'Khai thác cảm xúc, sự tham gia trực tiếp và gắn kết tự nhiên',
    elements: [
      'Hoạt động nông vụ thực tế: Cho dê ăn, vắt sữa dê, nhổ cỏ vườn',
      'Khám phá cảnh quan thiên nhiên, giải tỏa áp lực đô thị',
      'Trò chơi dân gian, kéo co, trượt cỏ, teambuilding tập thể',
      'Ẩm thực nông trại tươi ngon và không gian nghỉ dưỡng farmstay',
      'Lưu giữ kỷ niệm, chia sẻ hình ảnh tương tác trên mạng xã hội'
    ],
    evidenceCodes: ['TT06', 'TT08'],
    imageSrc: activityImg,
    academicQuote: 'Trải nghiệm đóng gói cảm xúc của người tiêu dùng thành dịch vụ đáng nhớ, giúp kéo dài thời gian lưu trú và nhân rộng doanh thu phụ trợ.',
    economicMeaning: 'Mở rộng biên độ thặng dư tiêu dùng (Consumer Surplus) thông qua dịch vụ hóa không gian sinh thái.'
  },
  integrated: {
    key: 'integrated',
    label: 'Integrated Value',
    subLabel: 'Giao thoa giá trị tích hợp N–G–T',
    tagline: 'Một nguồn lực nông nghiệp có thể đồng thời tạo giá trị sản xuất, giáo dục và trải nghiệm',
    elements: [
      'Cộng hưởng giá trị: Không gian sản xuất trở thành giảng đường mở',
      'Tối ưu hóa chi phí cố định trên một đơn vị diện tích đất đai',
      'Đa dạng hóa dòng tiền từ nông sản thô sang vé học tập và dịch vụ',
      'Xây dựng thương hiệu sinh thái bền vững trong tâm trí khách hàng',
      'Tạo ngoại ứng tích cực cho cộng đồng địa phương Ba Vì'
    ],
    evidenceCodes: ['TT04', 'TD06', 'TT08'],
    imageSrc: heroImg,
    academicQuote: 'Sức mạnh của mô hình không nằm ở từng đỉnh độc lập, mà ở vùng giao thoa: Người tham gia vừa học, vừa chơi, vừa tiêu thụ sản phẩm thật tại nguồn.',
    economicMeaning: 'Tối đa hóa hàm sản xuất đa biến $Y = f(Agri, Edu, Exp)$, nâng cao hiệu quả phân bổ nguồn lực xã hội.'
  }
};

// SECTION 05: ONE RESOURCE, THREE VALUES (CASE VẬT NUÔI)
export const LIVESTOCK_CASE_LAYERS: ValueLayerItem[] = [
  {
    layer: 'agriculture',
    title: '01. Tầng Nông nghiệp (Agriculture Layer)',
    subtitle: 'Nguồn lực chăn nuôi vật chất',
    description: 'Đàn dê sữa và đà điểu là tài sản sản xuất nông nghiệp: Cho ra sữa tươi dinh dưỡng thanh trùng, thịt thương phẩm hữu cơ và phân bón vi sinh cho đồng cỏ.',
    mechanism: 'Chuyển hóa thức ăn thô xanh thành nông sản giàu dinh dưỡng và chu trình tái tạo đất hữu cơ.',
    evidenceCode: 'TT04 / TT10',
    outcomes: ['Sữa tươi đóng chai nguyên chất', 'Thịt dê và đà điểu thương phẩm', 'Phân hữu cơ bón vườn']
  },
  {
    layer: 'education',
    title: '02. Tầng Giáo dục (Education Layer)',
    subtitle: 'Đối tượng quan sát và kiến thức sinh học',
    description: 'Vật nuôi trở thành học cụ trực quan sống động: Giúp sinh viên và học sinh quan sát cấu tạo loài nhai lại, quy trình vắt sữa an toàn sinh học và quản lý dịch bệnh không kháng sinh.',
    mechanism: 'Nội dung hóa quy trình chăn nuôi thành các bài học sinh thái, chuỗi cung ứng thực phẩm và kinh tế nông hộ.',
    evidenceCode: 'TD06 / TT04',
    outcomes: ['Hiểu nguyên lý an toàn sinh học', 'Tìm hiểu giải phẫu học cơ bản', 'Nhận thức chuỗi giá trị tuần hoàn']
  },
  {
    layer: 'experience',
    title: '03. Tầng Trải nghiệm (Experience Layer)',
    subtitle: 'Tương tác xúc giác & Cảm xúc cá nhân',
    description: 'Du khách không chỉ nhìn từ xa mà được trực tiếp cầm cỏ cho dê ăn, vuốt ve bộ lông thú, thực hành kỹ thuật vắt sữa và chụp ảnh lưu niệm cùng gia đình.',
    mechanism: 'Biến sự tương tác với vật nuôi thành khoảnh khắc gắn kết, giải tỏa căng thẳng và khơi gợi tình yêu động vật.',
    evidenceCode: 'TT06 / TT08',
    outcomes: ['Cảm xúc tích cực và thư giãn', 'Hình ảnh chia sẻ mạng xã hội', 'Ý thức tôn trọng tự nhiên']
  }
];

// SECTION 06 & 07: BUSINESS MODEL & VALUE CREATION LOOP
export const BUSINESS_PILLARS: BusinessPillar[] = [
  {
    title: 'Nông nghiệp sạch',
    category: 'Sản xuất',
    inputs: 'Đất phù sa, giống dê ngoại, cây thức ăn xanh',
    transformation: 'Chăn thả bán hoang dã, vắt sữa cơ giới, ủ men vi sinh',
    outputs: 'Sữa dê tiệt trùng, sữa chua dê, rau củ hữu cơ'
  },
  {
    title: 'Giáo dục trải nghiệm',
    category: 'Dịch vụ tri thức',
    inputs: 'Giáo trình STEM, nhân sự hướng dẫn, trạm trải nghiệm',
    transformation: 'Tổ chức workshop nông nghiệp, tour hướng dẫn trường học',
    outputs: 'Vé tham quan học tập, gói chương trình ngoại khóa'
  },
  {
    title: 'Trải nghiệm & Sự kiện',
    category: 'Giải trí',
    inputs: 'Không gian mở, bãi cỏ sinh thái, vật nuôi thân thiện',
    transformation: 'Thiết kế thử thách nông vụ, kéo co, cưỡi ngựa',
    outputs: 'Phí dịch vụ vui chơi, dịch vụ teambuilding doanh nghiệp'
  },
  {
    title: 'Ẩm thực Nông trại',
    category: 'F&B',
    inputs: 'Thịt dê, đà điểu, gà đồi, rau sạch tại vườn',
    transformation: 'Chế biến món ăn truyền thống đặc sản Ba Vì tại chỗ',
    outputs: 'Doanh thu nhà hàng, đồ uống thảo mộc giải khát'
  },
  {
    title: 'Nghỉ dưỡng Farmstay',
    category: 'Lưu trú',
    inputs: 'Khu nhà sàn truyền thống, phòng nghỉ bungalow xanh',
    transformation: 'Quản trị phòng nghỉ dưỡng yên tĩnh, dịch vụ đêm lửa trại',
    outputs: 'Doanh thu phòng nghỉ cuối tuần, combo trọn gói'
  },
  {
    title: 'Sản phẩm quà tặng',
    category: 'Bán lẻ',
    inputs: 'Thương hiệu Detrang, bao bì sinh thái, nông sản đóng gói',
    transformation: 'Cửa hàng nông sản sạch tại cổng ra về',
    outputs: 'Giá trị giỏ hàng gia tăng, kéo dài tiếp xúc thương hiệu'
  }
];

export const VALUE_LOOP_STEPS = [
  {
    step: '01',
    title: 'Nguồn lực Nông nghiệp',
    engTitle: 'Agricultural Resource',
    desc: 'Quỹ đất, đàn dê, cây cỏ và hệ sinh thái tự nhiên tại vùng đồi gò Ba Vì.'
  },
  {
    step: '02',
    title: 'Sản xuất thực tế',
    engTitle: 'Real Production',
    desc: 'Duy trì hoạt động chăn nuôi, trồng trọt thực chất tạo ra nông sản tươi sạch.'
  },
  {
    step: '03',
    title: 'Nội dung Giáo dục',
    engTitle: 'Educational Content',
    desc: 'Hệ thống hóa quy trình kỹ thuật thành bài học quan sát và hướng dẫn thực địa.'
  },
  {
    step: '04',
    title: 'Trải nghiệm Khách hàng',
    engTitle: 'Customer Experience',
    desc: 'Khách trực tiếp tiếp xúc, tương tác xúc giác, thưởng thức ẩm thực và cảm xúc.'
  },
  {
    step: '05',
    title: 'Giá trị Kinh tế & Xã hội',
    engTitle: 'Multi-layer Value',
    desc: 'Doanh thu vé, dịch vụ F&B, lan tỏa tri thức sinh thái và sinh kế địa phương.'
  },
  {
    step: '06',
    title: 'Thương hiệu & Tái đầu tư',
    engTitle: 'Brand & Return',
    desc: 'Dòng tiền tái đầu tư nâng cấp giống vật nuôi, hạ tầng sinh thái và đào tạo nhân sự.'
  }
];

// SECTION 08: CUSTOMER SEGMENTS
export const CUSTOMER_SEGMENTS: CustomerSegment[] = [
  {
    id: 'seg-1',
    type: 'B2B',
    targetGroup: 'Trường Mầm non & Phổ thông',
    mainValueSought: 'Education + Safe Experience',
    needs: [
      'Môi trường thiên nhiên tuyệt đối an toàn cho trẻ nhỏ',
      'Giáo trình ngoại khóa phù hợp lứa tuổi (tìm hiểu vật nuôi, cây trồng)',
      'Hạ tầng đáp ứng đoàn đông (500–1000 học sinh/lượt)',
      'Đội ngũ điều phối viên trang trại hỗ trợ giám sát'
    ],
    touchpoints: ['Khu vui chơi cát/cỏ', 'Chuồng dê thân thiện', 'Khu làm bánh cuốn/nông vụ nhí'],
    economicContribution: 'Chiếm tỷ trọng doanh thu cao nhất các ngày giữa tuần, tạo nguồn thu ổn định.'
  },
  {
    id: 'seg-2',
    type: 'B2B',
    targetGroup: 'Doanh nghiệp & Cơ quan (Teambuilding)',
    mainValueSought: 'Cohesion + Outdoor Recreation',
    needs: [
      'Không gian bãi cỏ rộng tổ chức trò chơi tập thể',
      'Dịch vụ ăn trưa theo set menu số lượng lớn',
      'Khu vực nghỉ trưa có mái che hoặc nhà sàn tập thể'
    ],
    touchpoints: ['Sân cỏ trung tâm', 'Hội trường hội thảo', 'Khu ẩm thực thịt dê đặc sản'],
    economicContribution: 'Giá trị giỏ hàng cao, chi tiêu F&B và thuê hội trường lớn.'
  },
  {
    id: 'seg-3',
    type: 'B2B',
    targetGroup: 'Các tổ chức nghiên cứu & Đại học',
    mainValueSought: 'Academic Insight + Practical Case Study',
    needs: [
      'Cơ hội đối thoại cùng lãnh đạo quản trị trang trại',
      'Tiếp cận số liệu vận hành và mô hình liên kết chuỗi giá trị',
      'Quan sát thực chứng chu trình kinh tế tuần hoàn nông nghiệp'
    ],
    touchpoints: ['Phòng hội thảo', 'Khu chế biến phân vi sinh', 'Khu xử lý nước thải sinh học'],
    economicContribution: 'Gia tăng uy tín học thuật và giá trị lan tỏa truyền thông khoa học cho trang trại.'
  },
  {
    id: 'seg-4',
    type: 'B2C',
    targetGroup: 'Gia đình đa thế hệ (Hà Nội & lân cận)',
    mainValueSought: 'Bonding + Nature + Sensory Learning',
    needs: [
      'Trải nghiệm gắn kết giữa ông bà, cha mẹ và con cái dịp cuối tuần',
      'Thực phẩm hữu cơ an tâm cho sức khỏe gia đình',
      'Không gian thoáng mát, tách biệt khỏi bụi bặm và màn hình điện thoại'
    ],
    touchpoints: ['Vườn hoa check-in', 'Chuồng thú tương tác', 'Cửa hàng nông sản mua về'],
    economicContribution: 'Chi tiêu bình quân đầu người cao nhất ở hạng mục ẩm thực và mua đặc sản mang về.'
  },
  {
    id: 'seg-5',
    type: 'B2C',
    targetGroup: 'Thanh thiếu niên & Nhóm bạn trẻ',
    mainValueSought: 'Check-in + Outdoor Picnic + Relaxation',
    needs: [
      'Góc chụp ảnh đẹp mang nét mộc mạc châu Âu/đồng quê',
      'Trải nghiệm cưỡi ngựa, cắm trại ngoài trời',
      'Chi phí vé vào cổng hợp lý với sinh viên'
    ],
    touchpoints: ['Khu đồng cỏ Ba Vì', 'Khu chuồng ngựa', 'Quầy cà phê sinh thái'],
    economicContribution: 'Tạo làn sóng truyền thông tự nhiên trên TikTok và Instagram, kích cầu thương hiệu.'
  },
  {
    id: 'seg-6',
    type: 'B2C',
    targetGroup: 'Khách nghỉ dưỡng sinh thái (Farmstay Guests)',
    mainValueSought: 'Leisure + Organic Living + Slow Life',
    needs: [
      'Phòng nghỉ sạch sẽ, riêng tư, view nhìn ra đồi núi hoặc vườn cây',
      'Ẩm thực cá nhân hóa theo khẩu vị gia đình',
      'Không gian tĩnh lặng vào buổi tối và sáng sớm khi hết khách ban ngày'
    ],
    touchpoints: ['Khu bungalow độc lập', 'Đốt lửa trại buổi tối', 'Bữa sáng sữa tươi tại phòng'],
    economicContribution: 'Giá trị lưu trú dài hạn (1–2 đêm), nâng cao doanh thu bình quân trên mỗi lượt khách.'
  }
];

// SECTION 09: CUSTOMER JOURNEY
export const CUSTOMER_JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 'cj-1',
    order: 1,
    stage: 'Discover',
    touchpoint: 'Truyền thông & Khảo sát trước chuyến đi',
    valueCreated: 'Tiếp nhận thông tin về mô hình nông nghiệp sinh thái, khơi gợi tò mò học thuật.',
    potentialFriction: 'Tài liệu giới thiệu ban đầu còn thiên về quảng bá du lịch hơn là phân tích kinh tế.',
    evidenceLink: 'TD04',
    surveyRating: 4.1
  },
  {
    id: 'cj-2',
    order: 2,
    stage: 'Arrive',
    touchpoint: 'Cổng đón tiếp & Phân luồng đoàn',
    valueCreated: 'Cảm giác chuyển tiếp từ đường quốc lộ vào không gian trong lành vùng đồi Ba Vì.',
    potentialFriction: 'Thủ tục đón đoàn đông vào khung giờ cao điểm sáng dễ gây ùn ứ tại quầy vé.',
    evidenceLink: 'TT02',
    surveyRating: 4.3
  },
  {
    id: 'cj-3',
    order: 3,
    stage: 'Learn',
    touchpoint: 'Tọa đàm chuyên môn cùng Lãnh đạo Farm',
    valueCreated: 'Hiểu bài toán thực tế của doanh nghiệp: cơ cấu doanh thu, chi phí và chiến lược chuyển đổi.',
    potentialFriction: 'Thời lượng hỏi - đáp chuyên sâu còn giới hạn do lịch trình dày đặc.',
    evidenceLink: 'TD06',
    surveyRating: 4.7
  },
  {
    id: 'cj-4',
    order: 4,
    stage: 'Observe',
    touchpoint: 'Farm Tour qua các chuồng trại chăn nuôi',
    valueCreated: 'Chứng kiến trực tiếp quy mô đàn dê, đà điểu và quy trình xử lý phụ phẩm nông nghiệp.',
    potentialFriction: 'Âm thanh của hướng dẫn viên ngoài trời đôi khi bị loãng khi đoàn đi quá đông.',
    evidenceLink: 'TT04',
    surveyRating: 4.6
  },
  {
    id: 'cj-5',
    order: 5,
    stage: 'Experience',
    touchpoint: 'Thực hành tương tác & Dùng bữa trưa',
    valueCreated: 'Tương tác xúc giác qua việc cho thú ăn, thưởng thức trọn vẹn ẩm thực khép kín.',
    potentialFriction: 'Một số trò chơi nông vụ thiếu bảng hướng dẫn quy tắc chuẩn cho người lớn.',
    evidenceLink: 'TT05 / TT06',
    surveyRating: 4.5
  },
  {
    id: 'cj-6',
    order: 6,
    stage: 'Reflect',
    touchpoint: 'Phiếu khảo sát & Trao đổi nhóm',
    valueCreated: 'Hệ thống hóa trải nghiệm thành các luận điểm kinh tế chính trị và bài học thực tiễn.',
    potentialFriction: 'Cần thêm không gian ngồi yên tĩnh để sinh viên thảo luận nhóm sâu hơn.',
    evidenceLink: 'KS01-KS72',
    surveyRating: 4.8
  },
  {
    id: 'cj-7',
    order: 7,
    stage: 'Share',
    touchpoint: 'Báo cáo kiến tập & Lan tỏa tri thức',
    valueCreated: 'Công bố báo cáo học thuật và số hóa thành Digital Companion phục vụ đánh giá.',
    potentialFriction: 'Cần kênh kết nối định kỳ giữa nhà trường và doanh nghiệp sau chuyến đi.',
    evidenceLink: 'Báo cáo PDF',
    surveyRating: 4.7
  }
];

// SECTION 10: SURVEY DASHBOARD
export const SURVEY_KPIS: SurveyKpi[] = [
  {
    label: 'Responses received',
    value: '85',
    subtext: 'Submitted responses',
    description: 'Tổng số phản hồi thu thập qua phiếu khảo sát trực tuyến sau chuyến đi thực địa.'
  },
  {
    label: 'Responses analyzed',
    value: '72',
    subtext: 'Cleaned analytical dataset',
    description: 'Tập dữ liệu chuẩn hóa đưa vào phân tích sau quy trình kiểm tra chất lượng và làm sạch.'
  },
  {
    label: 'Field-study context',
    value: '19.09.2026',
    subtext: 'Ba Vì, Hà Nội',
    description: 'Chương trình kiến tập thực địa chính thức của Khoa Kinh tế Chính trị – UEB – VNU.'
  },
  {
    label: 'Post-field-study survey',
    value: 'Convenience sample',
    subtext: 'Mẫu thuận tiện trực tuyến',
    description: 'Bổ trợ quan sát thực địa. Không tính tỷ lệ phản hồi tổng thể do tổng số người tham gia chưa được kiểm chứng độc lập.'
  }
];

export const SURVEY_CHARTS: SurveyChartData[] = [
  {
    id: 'chart-a',
    title: 'Hoạt động giúp hiểu mô hình rõ nhất',
    subtitle: 'Percentages calculated from the cleaned analytical dataset (n = 72)',
    chartType: 'bar',
    items: [
      { label: 'Tọa đàm chuyên gia & Lãnh đạo Farm', score: 28, percentage: 39, unit: '%' },
      { label: 'Farm Tour quan sát chuồng trại', score: 25, percentage: 35, unit: '%' },
      { label: 'Tương tác xúc giác (cho ăn/vắt sữa)', score: 13, percentage: 18, unit: '%' },
      { label: 'Thảo luận nhóm & Đúc kết', score: 6, percentage: 8, unit: '%' }
    ],
    insight: 'Tọa đàm với doanh nghiệp (39%, 28/72) và Quan sát trực tiếp chuồng trại (35%, 25/72) đóng vai trò là hai trụ cột chính giúp sinh viên giải mã logic vận hành kinh tế của Detrang Farm.'
  },
  {
    id: 'chart-b',
    title: 'Đánh giá 6 khía cạnh của chuyến kiến tập',
    subtitle: 'Điểm trung bình theo thang điểm Likert 5 mức độ · n = 72 analyzed responses',
    chartType: 'horizontal_bar',
    items: [
      { label: 'Hàm lượng học thuật & Tri thức thực tiễn', score: 4.74, unit: '/5.0' },
      { label: 'Sự cởi mở của Ban Lãnh đạo Farm', score: 4.86, unit: '/5.0' },
      { label: 'Chất lượng không gian & Cảnh quan', score: 4.62, unit: '/5.0' },
      { label: 'Chất lượng bữa trưa nông sản', score: 4.48, unit: '/5.0' },
      { label: 'Tổ chức lịch trình & Phân bổ thời gian', score: 4.18, unit: '/5.0' },
      { label: 'Tài liệu hướng dẫn chuyên sâu trước chuyến đi', score: 3.92, unit: '/5.0' }
    ],
    insight: 'Sự chia sẻ cởi mở của doanh nghiệp (4.86) và hàm lượng học thuật (4.74) được chấm điểm cao nhất; việc cung cấp tài liệu chuyên sâu trước chuyến đi là điểm cần tiếp tục hoàn thiện (3.92).'
  },
  {
    id: 'chart-c',
    title: 'Yếu tố tạo ra giá trị nổi bật nhất tại Farm',
    subtitle: 'Số lượng ý kiến nhấn mạnh các giá trị cốt lõi · n = 72 analyzed responses',
    chartType: 'bar',
    items: [
      { label: 'Biến nguồn lực thành tri thức giáo dục', score: 62, unit: 'SV (86.1%)' },
      { label: 'Mô hình kinh tế tuần hoàn thực chất', score: 55, unit: 'SV (76.4%)' },
      { label: 'Tạo công ăn việc làm cho dân địa phương', score: 46, unit: 'SV (63.9%)' },
      { label: 'Không gian sinh thái giải tỏa áp lực', score: 41, unit: 'SV (56.9%)' }
    ],
    insight: '86.1% sinh viên (62/72) đánh giá khả năng "chuyển hóa tài nguyên thành bài học giáo dục" chính là lợi thế cạnh tranh khác biệt lớn nhất giúp Detrang Farm không bị đồng hóa thành khu du lịch đơn thuần.'
  },
  {
    id: 'chart-d',
    title: 'Các khía cạnh sinh viên đề xuất cần cải thiện',
    subtitle: 'Percentages calculated from the cleaned analytical dataset (n = 72)',
    chartType: 'bar',
    items: [
      { label: 'Tách nhóm nhỏ hơn khi tham quan chuồng trại', score: 32, percentage: 44, unit: '%' },
      { label: 'Thêm bảng thông tin QR tại chuồng trại', score: 20, percentage: 28, unit: '%' },
      { label: 'Tăng thời lượng hỏi - đáp mô hình kinh tế', score: 13, percentage: 18, unit: '%' },
      { label: 'Đa dạng hóa trạm thực hành cho sinh viên', score: 7, percentage: 10, unit: '%' }
    ],
    insight: 'Đề xuất hàng đầu là chia nhỏ đoàn khi tham quan chuồng trại (44.4%, 32/72) và bổ sung mã QR tra cứu thông tin học thuật tại chỗ (27.8%, 20/72), giúp sinh viên chủ động tiếp cận dữ liệu.'
  }
];

// SECTION 11: EVIDENCE TRIANGULATION
export const TRIANGULATION_CASES: TriangulationCase[] = [
  {
    id: 'case-1',
    caseName: 'Case 01: Vật nuôi & Chăn nuôi tuần hoàn',
    topic: 'Chuyển hóa vật nuôi từ tài sản sản xuất sang công cụ học tập đa tầng',
    businessSaid: {
      code: 'TD06',
      source: 'Slide Tọa đàm Ban Giám đốc',
      quote: '"Đàn dê sữa 200 con không chỉ để lấy 400 lít sữa mỗi ngày. Mỗi con dê là một giảng viên trực quan cho các em học sinh hiểu về an toàn sinh học."',
      implication: 'Doanh nghiệp chủ động dịch chuyển tư duy: Khai thác giá trị dịch vụ cao hơn giá trị nông sản đơn thuần.'
    },
    observed: {
      code: 'TT04 / TT10',
      source: 'Ghi nhận thực địa tại chuồng dê & đà điểu',
      fact: 'Chuồng trại được thiết kế lối đi riêng trên cao cho khách tham quan; phân dê được thu gom lập tức đưa về bể ủ phân vi sinh bón cho cánh đồng cỏ ba màu.',
      image: goatsImg
    },
    studentsReported: {
      code: 'KS04',
      source: 'Dữ liệu khảo sát sinh viên (n = 72 analyzed responses)',
      metric: '92.6% sinh viên',
      dataPoint: 'Xác nhận quan sát chuồng trại và tiếp xúc vật nuôi là điểm chạm tạo xúc cảm học tập mạnh mẽ nhất trong cả ngày.'
    },
    conclusion: 'Vật nuôi không chỉ tồn tại như tài sản nông nghiệp mà đã trở thành nguồn nội dung (content generator) cho cả giáo dục và dịch vụ trải nghiệm.',
    politicalEconomyTakeaway: 'Giá trị sử dụng của tư liệu sản xuất được nhân đôi: Vừa tạo ra sản phẩm vật chất cụ thể, vừa thỏa mãn nhu cầu tinh thần và tri thức của xã hội.'
  },
  {
    id: 'case-2',
    caseName: 'Case 02: Tích hợp Tam giác N–G–T',
    topic: 'Cơ chế hiệp đồng giữa Nông nghiệp – Giáo dục – Trải nghiệm',
    businessSaid: {
      code: 'TD07',
      source: 'Slide Mô hình kinh doanh tổng thể',
      quote: '"Nếu chỉ làm nông nghiệp thuần túy, chúng tôi chịu rủi ro thời tiết và rớt giá. Nếu chỉ làm du lịch, chúng tôi rỗng ruột. Giáo dục chính là keo dán hai mảng lại."',
      implication: 'Mô hình kinh doanh lấy giáo dục làm sợi dây liên kết, triệt tiêu tính bấp bênh của kinh tế nông nghiệp truyền thống.'
    },
    observed: {
      code: 'TT01 / TT08',
      source: 'Ghi nhận tại các trạm học tập mở ngoài trời',
      fact: 'Các luống rau và vườn cây đều gắn biển thông tin chu kỳ sinh trưởng; học sinh vừa nghe giảng, vừa trực tiếp cầm nông cụ gieo hạt.',
      image: activityImg
    },
    studentsReported: {
      code: 'KS01',
      source: 'Dữ liệu khảo sát sinh viên (n = 72 analyzed responses)',
      metric: 'Điểm đánh giá 4.62 / 5.0',
      dataPoint: 'Đồng thuận rằng Tam giác N–G–T là cách mô hình hóa chuẩn xác nhất thực tế hoạt động của Detrang Farm.'
    },
    conclusion: 'Tam giác N–G–T không phải là ba nhánh kinh doanh tách rời mà là một hệ thống cộng hưởng: Nông nghiệp tạo thực chất, Giáo dục tạo chiều sâu, Trải nghiệm tạo doanh thu.',
    politicalEconomyTakeaway: 'Minh chứng cho luận điểm Nông nghiệp đa chức năng (Multifunctional Agriculture): Mở rộng hàm sản xuất xã hội vượt ra ngoài hàng hóa hữu hình.'
  },
  {
    id: 'case-3',
    caseName: 'Case 03: Điểm nghẽn vận hành & Dòng thời gian',
    topic: 'Thách thức điều phối đoàn đông và phân bổ thời gian',
    businessSaid: {
      code: 'TD03',
      source: 'Slide Chia sẻ thách thức vận hành',
      quote: '"Thách thức lớn nhất vào mùa cao điểm là cùng lúc tiếp đón 1.500 học sinh. Áp lực an toàn sinh học và kiểm soát luồng di chuyển là cực kỳ khắt khe."',
      implication: 'Hạ tầng và năng lực điều phối nhân sự là biến số giới hạn quy mô mở rộng doanh thu.'
    },
    observed: {
      code: 'TT05',
      source: 'Quan sát giờ cao điểm tại nhà ăn & lối đi',
      fact: 'Đoàn sinh viên UEB khi di chuyển cùng lúc vào một khu chuồng trại tạo ra hiện tượng nghẽn cục bộ, người đứng sau khó nghe thuyết minh.',
      image: seminarImg
    },
    studentsReported: {
      code: 'KS08',
      source: 'Phản ánh trong phiếu khảo sát (n = 72 analyzed responses)',
      metric: '44.4% sinh viên',
      dataPoint: 'Khuyến nghị nhà trường và trang trại nên chia nhỏ đoàn thành các tiểu đội 15–20 người luân chuyển chéo giữa các trạm.'
    },
    conclusion: 'Dòng trải nghiệm thực tế chịu rủi ro sụt giảm chất lượng cảm nhận nếu thiếu quy hoạch luồng di chuyển theo mô hình trạm xoay tua (Rotational Stations).',
    politicalEconomyTakeaway: 'Quy luật hiệu suất giảm dần cục bộ khi mật độ lao động/người tiêu dùng vượt quá ngưỡng tải tối ưu của một phân khu không gian.'
  }
];

// SECTION 12: POLITICAL ECONOMY LENS
export const POLITICAL_ECONOMY_LENSES = [
  {
    title: 'Nông nghiệp Đa chức năng',
    engTitle: 'Multifunctional Agriculture',
    coreThesis: 'Nông nghiệp không chỉ giới hạn ở việc sản xuất lương thực, thực phẩm.',
    analysis: 'Dưới góc độ kinh tế chính trị hiện đại, nông nghiệp còn thực hiện đồng thời các chức năng xã hội, môi trường, cảnh quan và văn hóa. Detrang Farm đã thương mại hóa thành công chức năng "Giáo dục và Ngoại ứng tích cực" mà thông thường nông nghiệp truyền thống bỏ quên hoặc coi là sản phẩm phụ vô giá trị.',
    keywords: ['Hàm sản xuất mở rộng', 'Ngoại ứng tích cực (Positive Externalities)', 'Hàng hóa công cộng sinh thái']
  },
  {
    title: 'Chuyển hóa Hình thái Giá trị',
    engTitle: 'Value Transformation & Surplus Multiplier',
    coreThesis: 'Cùng một nguồn lực vật chất được nhân bội giá trị qua lao động sáng tạo.',
    analysis: 'Một lít sữa dê bán thô chỉ thu được 30.000 – 40.000 VNĐ. Nhưng khi con dê đó trở thành công cụ giáo dục (học sinh đến xem, trả vé vào cửa, mua dịch vụ trải nghiệm vắt sữa, thưởng thức sữa tại trang trại), tổng giá trị thu được trên mỗi đầu vật nuôi tăng gấp 5 đến 8 lần. Đây là sự thâm nhập của lao động dịch vụ phức tạp vào tư liệu nông nghiệp thô.',
    keywords: ['Giá trị sử dụng kép', 'Gia tăng thặng dư tiêu dùng', 'Dịch vụ hóa tư liệu sản xuất']
  },
  {
    title: 'Quan hệ Lợi ích Đa chủ thể',
    engTitle: 'Stakeholder Relations & Institutional Matrix',
    coreThesis: 'Thiết lập mạng lưới liên kết bền vững giữa các thành phần kinh tế.',
    analysis: 'Trang trại trở thành trung tâm kết nối: Doanh nghiệp (Farm) ↔ Nhà trường (Schools/UEB) ↔ Người học (Students/Learners) ↔ Gia đình ↔ Cộng đồng nông dân địa phương. Mô hình giải quyết bài toán việc làm tại chỗ cho lao động nông thôn Ba Vì (từ nông dân thành thuyết minh viên nông trại) và giữ lại giá trị gia tăng tại địa bàn nông thôn.',
    keywords: ['Liên kết Nhà trường – Doanh nghiệp', 'Chuyển đổi cơ cấu lao động', 'Phát triển nông thôn bền vững']
  }
];

// SECTION 13: OPERATIONAL CHALLENGES
export const BUSINESS_CHALLENGES: ChallengeItem[] = [
  {
    title: 'Tính mùa vụ khắc nghiệt (Seasonality)',
    aspect: 'Doanh nghiệp chia sẻ (TD03)',
    description: 'Lượng khách tập trung đột biến vào tháng 3–5 và tháng 9–11 (mùa dã ngoại của các trường học) và các ngày cuối tuần, trong khi ngày thường vắng khách.',
    operationalRisk: 'Lãng phí công suất máy móc, khó duy trì đội ngũ nhân sự cơ hữu toàn thời gian.',
    businessContext: 'Chi phí khấu hao mặt bằng và bảo dưỡng đàn gia súc phát sinh liên tục mỗi ngày.'
  },
  {
    title: 'Quản trị đoàn đông (Large-scale Coordination)',
    aspect: 'Doanh nghiệp chia sẻ (TD03)',
    description: 'Tiếp nhận đoàn học sinh 500–1.000 em đòi hỏi quy trình kiểm soát an ninh nghiêm ngặt, rủi ro lạc trẻ hoặc tai nạn thương tích ngoài trời.',
    operationalRisk: 'Nguy cơ sự cố an toàn làm tổn hại nghiêm trọng uy tín thương hiệu.',
    businessContext: 'Đòi hỏi đầu tư lớn vào hệ thống rào chắn an toàn và camera giám sát toàn trang trại.'
  },
  {
    title: 'Rủi ro hệ thống sinh học sống (Living-system Risks)',
    aspect: 'Doanh nghiệp chia sẻ (TD03)',
    description: 'Đàn gia súc, gia cầm sống chịu rủi ro dịch bệnh (như dịch tả lợn châu Phi, cúm gia cầm) và biến đổi thời tiết cực đoan của miền Bắc.',
    operationalRisk: 'Nguy cơ phong tỏa kiểm dịch làm ngưng trệ toàn bộ chuỗi tham quan trải nghiệm.',
    businessContext: 'Phải tuân thủ quy trình thú y khắt khe nhưng vẫn phải mở cửa cho du khách tiếp xúc gần.'
  }
];

export const STUDENT_CHALLENGES: ChallengeItem[] = [
  {
    title: 'Phân bổ thời gian giữa các phân khu (Time Allocation)',
    aspect: 'Sinh viên phản ánh (Khảo sát n=72)',
    description: 'Sinh viên đánh giá thời gian dành cho tọa đàm và ăn trưa chiếm tỷ trọng khá lớn, khiến thời gian quan sát chuyên sâu từng mô hình chăn nuôi hơi gấp gáp.',
    operationalRisk: 'Người học chưa kịp đào sâu các câu hỏi chuyên môn về chi phí và công nghệ.',
    businessContext: '41% sinh viên mong muốn kéo dài thêm thời gian tự do quan sát thực địa.'
  },
  {
    title: 'Chiều sâu gắn kết lý luận (Guidance Depth)',
    aspect: 'Sinh viên phản ánh (Khảo sát n=72)',
    description: 'Thuyết minh viên trang trại chủ yếu thuyết minh theo lối phổ thông dành cho học sinh, thiếu các phân tích sâu về quản trị chuỗi cung ứng cho sinh viên đại học.',
    operationalRisk: 'Giảm bớt giá trị học thuật kỳ vọng của chuyến đi thực tế đối với khối ngành kinh tế.',
    businessContext: 'Cần có các kịch bản thuyết minh phân tầng theo đối tượng tiếp nhận.'
  },
  {
    title: 'Độ đa dạng của hoạt động thực hành (Hands-on Diversity)',
    aspect: 'Sinh viên phản ánh (Khảo sát n=72)',
    description: 'Các hoạt động trải nghiệm hiện nay tập trung nhiều vào trẻ em tiểu học (nhặt trứng, cho thỏ ăn); sinh viên mong muốn được thực hành bài tập tình huống kinh doanh thực tế.',
    operationalRisk: 'Thiếu sự cuốn hút đối với các đoàn khách thuộc độ tuổi thanh niên và sinh viên.',
    businessContext: '28% đề xuất bổ sung bài tập tình huống (mini case study) giải quyết vấn đề tại chỗ.'
  }
];

// SECTION 14: CONSULTING NOTES
export const CONSULTING_RECOMMENDATIONS: RecommendationCard[] = [
  {
    id: 'rec-1',
    number: '#01',
    title: 'Quy hoạch Dòng Trải nghiệm (Experience Flow Optimization)',
    evidenceBasis: 'Khảo sát KS: 44% sinh viên phản ánh tình trạng tắc nghẽn khi đoàn đông cùng di chuyển.',
    recommendation: 'Triển khai mô hình trạm xoay tua (Rotational Activity Stations) kết hợp khung giờ cố định (time slots).',
    implementation: [
      'Chia đoàn khách quy mô >50 người thành các nhóm nhỏ 15–20 thành viên có mã màu nhận diện.',
      'Thiết lập lộ trình di chuyển lệch pha: Nhóm 1 chuồng dê → Nhóm 2 vườn dược liệu → Nhóm 3 khu vi sinh.',
      'Cài đặt chuông báo chuyển trạm tự động sau mỗi 30 phút trải nghiệm.'
    ],
    expectedEffect: 'Triệt tiêu 100% điểm nghẽn tại các khu vực nhạy cảm, tối ưu hóa năng lực truyền đạt của hướng dẫn viên.'
  },
  {
    id: 'rec-2',
    number: '#02',
    title: 'Số hóa Tầng Tri thức Học thuật (Educational Digital Layer)',
    evidenceBasis: 'Khảo sát KS: Điểm số tài liệu chuyên sâu trước chuyến đi thấp nhất (3.90/5.0).',
    recommendation: 'Lắp đặt hệ thống thẻ học tập số (QR Academic Learning Cards) và sổ tay thực địa điện tử tại từng khu vực.',
    implementation: [
      'Gắn mã QR chống nước tại cổng mỗi chuồng trại và vườn ươm.',
      'Quét mã để truy cập ngay bảng số liệu: Nguồn gốc giống, khẩu phần ăn/ngày, chi phí sản xuất, chu kỳ sinh học.',
      'Tích hợp câu hỏi gợi mở kinh tế học cho sinh viên trả lời trực tiếp trên điện thoại.'
    ],
    expectedEffect: 'Chuyển hóa việc quan sát thụ động thành nghiên cứu chủ động, đáp ứng nhu cầu học thuật phân tầng của các trường đại học.'
  },
  {
    id: 'rec-3',
    number: '#03',
    title: 'Phát triển Gói Sản phẩm Học tập Chuyên đề (Specialized B2B Academic Packages)',
    evidenceBasis: 'Doanh nghiệp chia sẻ TD03 về thách thức lệch công suất giữa ngày thường và cuối tuần.',
    recommendation: 'Thiết kế gói "Thực tập Tình huống Nông nghiệp Tuần hoàn" dành riêng cho sinh viên khối ngành Kinh tế & Nông nghiệp vào ngày thường.',
    implementation: [
      'Kết hợp buổi làm việc trực tiếp cùng bộ phận tài chính/marketing của trang trại.',
      'Giao đề bài thực tế: Tối ưu chi phí bao bì sữa hoặc phát triển kênh bán hàng quà tặng doanh nghiệp.',
      'Cấp chứng nhận hoàn thành khóa thực nghiệm thực địa có đóng dấu của Detrang Farm.'
    ],
    expectedEffect: 'Lấp đầy công suất trống vào các ngày thứ Ba đến thứ Sáu, mở ra dòng doanh thu học thuật cao cấp và bền vững.'
  }
];

// SECTION 15: BEFORE / FIELD / AFTER REFLECTION
export const REFLECTION_PHASES = [
  {
    phase: 'BEFORE',
    tag: 'Trước chuyến đi',
    title: 'Nhận thức giản đơn về nông nghiệp',
    statement: 'Trang trại chủ yếu là nơi sản xuất nông sản và hàng hóa hữu hình.',
    quote: '"Tôi từng nghĩ trang trại chỉ đơn thuần là việc nuôi vài trăm con dê, trồng rau củ sạch rồi bán ra các siêu thị tại Hà Nội để kiếm lời trên chênh lệch giá."'
  },
  {
    phase: 'FIELD',
    tag: 'Tại thực địa Ba Vì',
    title: 'Phát hiện sự chuyển hóa giá trị đa tầng',
    statement: 'Cùng một nguồn lực sinh thái có thể đồng thời tham gia vào sản xuất, giáo dục và trải nghiệm.',
    quote: '"Khi tận mắt thấy một đứa trẻ trả tiền để được cho dê ăn, và sinh viên đại học trả học phí để nghiên cứu chu trình ủ phân vi sinh, tôi hiểu ra nguồn lực nông nghiệp có thể mở rộng vô hạn qua dịch vụ."'
  },
  {
    phase: 'AFTER',
    tag: 'Sau chuyến đi & Đúc kết',
    title: 'Tư duy hệ sinh thái kinh tế chính trị',
    statement: 'Trang trại là một hệ sinh thái tạo giá trị đa tầng và sản sinh ngoại ứng xã hội tích cực.',
    quote: '"Giá trị thực sự của doanh nghiệp nằm ở năng lực tổ chức nguồn lực để chuyển hóa tự nhiên thành tri thức và cảm xúc, gắn kết cộng đồng địa phương với thị trường đô thị."'
  }
];

export const SO_WHAT_INSIGHT = {
  title: 'SO WHAT? — ĐÚC KẾT PHƯƠNG PHÁP LUẬN',
  statement: 'Phân tích doanh nghiệp không chỉ là hỏi họ "sản xuất cái gì", mà cốt lõi là phải hỏi họ "tổ chức nguồn lực như thế nào để tạo và phân phối giá trị đa tầng trong xã hội".',
  author: 'Đinh Xuân Trường (MSV: 25050428) · Khoa Kinh tế Chính trị – UEB – VNU'
};

// SECTION 16: FIELD EVIDENCE GALLERY (All 18 Valid Uploaded Evidence Items)
export const GALLERY_ITEMS: GalleryItem[] = ALL_EVIDENCE_ITEMS.map((item, idx) => ({
  id: `gal-${idx + 1}`,
  code: item.code,
  title: item.title,
  category: item.type as 'EVENT' | 'SEMINAR' | 'FIELD',
  date: item.date,
  location: item.location,
  caption: item.caption,
  academicNotes: item.academicNotes,
  imageUrl: getEvidenceUrl(item.filename),
  filename: item.filename,
  label: item.label,
}));

// SECTION 17: MINI QUIZ
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Trong Tam giác N–G–T, đỉnh nào đóng vai trò là "chất dẫn thực tế" (real-world substrate) cung cấp toàn bộ không gian và tư liệu sản xuất?',
    options: [
      'A. Giáo dục (Education)',
      'B. Nông nghiệp (Agriculture)',
      'C. Trải nghiệm (Experience)',
      'D. Khách sạn nghỉ dưỡng (Farmstay)'
    ],
    correctIndex: 1,
    explanation: 'Chính xác! Nông nghiệp là nền tảng vật chất hữu hình. Không có hoạt động chăn nuôi, trồng trọt thực chất thì các hoạt động giáo dục và trải nghiệm sẽ trở nên rỗng ruột.'
  },
  {
    id: 2,
    question: 'Dưới góc độ Kinh tế chính trị, khái niệm "Nông nghiệp đa chức năng" (Multifunctional Agriculture) nhấn mạnh điều gì?',
    options: [
      'A. Chỉ tập trung tối đa hóa sản lượng nông sản để hạ giá thành',
      'B. Biến toàn bộ diện tích đất canh tác thành khu vui chơi giải trí đô thị',
      'C. Nông nghiệp đồng thời sản xuất hàng hóa vật chất và tạo ra các giá trị dịch vụ, sinh thái, văn hóa và xã hội',
      'D. Thay thế hoàn toàn nông dân địa phương bằng máy móc tự động'
    ],
    correctIndex: 2,
    explanation: 'Chính xác! Nông nghiệp đa chức năng mở rộng hàm sản xuất xã hội, thương mại hóa các ngoại ứng tích cực (giáo dục, cảnh quan, sức khỏe) thành nguồn thu bền vững.'
  },
  {
    id: 3,
    question: 'Tại Case Study "Vật nuôi" (Đàn dê sữa Detrang Farm), tầng giá trị "Giáo dục" được tạo ra bằng cơ chế nào?',
    options: [
      'A. Bán sữa đóng chai với giá ưu đãi cho học sinh',
      'B. Biến quy trình sinh học và an toàn chăn nuôi thành nội dung học tập, quan sát có cấu trúc',
      'C. Cho du khách chụp ảnh kỷ niệm mà không cần hướng dẫn',
      'D. Nhập khẩu dê giống từ nước ngoài để trưng bày triển lãm'
    ],
    correctIndex: 1,
    explanation: 'Chính xác! Tầng giáo dục xuất hiện khi hoạt động sản xuất thường nhật được hệ thống hóa thành bài học khoa học, khơi dậy tri thức cho người tham gia.'
  },
  {
    id: 4,
    question: 'Dựa trên kết quả khảo sát định lượng (n = 72 analyzed responses), khía cạnh nào được sinh viên đề xuất cần cải thiện cấp thiết nhất?',
    options: [
      'A. Giảm giá vé vào cổng trang trại',
      'B. Tách nhóm nhỏ hơn khi tham quan chuồng trại và bổ sung mã QR tra cứu thông tin',
      'C. Bỏ hoàn toàn phiên tọa đàm lý thuyết',
      'D. Xây dựng thêm nhiều nhà hàng hiện đại'
    ],
    correctIndex: 1,
    explanation: 'Chính xác! 44.4% sinh viên đề xuất tách nhóm nhỏ để tránh ùn tắc và 27.8% đề xuất bổ sung mã QR thông tin tại chuồng trại để chủ động tiếp cận dữ liệu.'
  },
  {
    id: 5,
    question: 'Câu hỏi phương pháp luận "SO WHAT?" rút ra sau chuyến nghiên cứu thực địa là gì?',
    options: [
      'A. Trang trại nào cũng nên mở dịch vụ du lịch để kiếm lời nhanh',
      'B. Phân tích doanh nghiệp không chỉ là hỏi họ "sản xuất gì", mà cốt lõi là phải hỏi họ "tổ chức nguồn lực như thế nào để tạo và phân phối giá trị"',
      'C. Nông nghiệp truyền thống hoàn toàn không còn chỗ đứng trong nền kinh tế',
      'D. Sinh viên kinh tế chỉ cần học lý thuyết trên giảng đường là đủ'
    ],
    correctIndex: 1,
    explanation: 'Xuất sắc! Đây chính là điểm tựa tư duy của sinh viên Khoa Kinh tế Chính trị – nhìn thấu cấu trúc thể chế và cách thức tổ chức nguồn lực xã hội.'
  }
];

// SECTION 18: REPORT & SOURCES
export const REPORT_METADATA = {
  title: 'BÁO CÁO KẾT QUẢ KIẾN TẬP THỰC TẾ TẠI DETRANG FARM',
  subtitle: 'Phân tích mô hình kinh tế Nông nghiệp – Giáo dục – Trải nghiệm dưới góc nhìn Kinh tế Chính trị',
  studentInfo: 'Đinh Xuân Trường · Mã Sinh Viên: 25050428',
  faculty: 'Khoa Kinh tế Chính trị – Trường Đại học Kinh tế (UEB)',
  university: 'Đại học Quốc gia Hà Nội (VNU)',
  date: 'Tháng 09/2026',
  outline: [
    { section: 'Phần 1', title: 'Tổng quan chuyến kiến tập', pages: 'Trang 04 – 12', desc: 'Mục tiêu, phương pháp, bối cảnh Detrang Farm và lịch trình khảo sát.' },
    { section: 'Phần 2.1 – 2.3', title: 'Cơ sở lý luận & Khung phân tích Tam giác N–G–T', pages: 'Trang 13 – 24', desc: 'Lý thuyết nông nghiệp đa chức năng và tương tác giữa 3 đỉnh giá trị.' },
    { section: 'Phần 2.4 – 2.7', title: 'Mô hình kinh doanh & Vòng tuần hoàn giá trị', pages: 'Trang 25 – 38', desc: 'Phân tích 6 trụ cột doanh thu, cấu trúc chi phí và case study đàn vật nuôi.' },
    { section: 'Phần 2.8 – 2.11', title: 'Phân khúc khách hàng & Kết quả khảo sát thực nghiệm', pages: 'Trang 39 – 52', desc: 'Tập dữ liệu phân tích chuẩn hóa n = 72 (từ 85 phản hồi tiếp nhận), các chỉ số đánh giá và phân tích thống kê mô tả.' },
    { section: 'Phần 2.12 – 2.15', title: 'Đối chiếu bằng chứng (Triangulation) & Đề xuất tư vấn', pages: 'Trang 53 – 66', desc: '3 ca phân tích đối sánh và khuyến nghị hoàn thiện vận hành.' },
    { section: 'Phần 3', title: 'Bài học đúc kết về kiến thức và kỹ năng', pages: 'Trang 67 – 74', desc: 'Chuyển biến nhận thức cá nhân và giá trị phương pháp luận kinh tế chính trị.' },
    { section: 'Phụ lục', title: 'Mục lục bằng chứng TT/TD & Bộ câu hỏi khảo sát', pages: 'Trang 75 – 86', desc: 'Toàn văn phiếu khảo sát sơ cấp và hồ sơ ảnh thực địa có mã hóa.' }
  ],
  academicReferences: [
    {
      author: 'OECD (2001)',
      title: 'Multifunctionality: Towards an Analytical Framework',
      publisher: 'OECD Publishing, Paris',
      note: 'Khung lý thuyết nền tảng về nông nghiệp đa chức năng và ngoại ứng tích cực.'
    },
    {
      author: 'Khoa Kinh tế Chính trị – UEB – VNU (2025)',
      title: 'Giáo trình Kinh tế Chính trị Mác – Lênin & Các chuyên đề Kinh tế phát triển hiện đại',
      publisher: 'NXB Đại học Quốc gia Hà Nội',
      note: 'Cơ sở phân tích giá trị sử dụng kép, lao động cụ thể và lao động trừu tượng trong dịch vụ hóa.'
    },
    {
      author: 'Van der Ploeg, J. D. et al. (2000)',
      title: 'Rural Development: From Practices and Policies towards Theory',
      publisher: 'Sociologia Ruralis, 40(4), 391-408',
      note: 'Lý giải cơ chế chuyển dịch từ nông nghiệp độc canh sang hệ sinh thái kinh tế nông thôn đa tầng.'
    },
    {
      author: 'Detrang Farm Ba Vì (2026)',
      title: 'Báo cáo thường niên & Tài liệu giới thiệu mô hình Nông trại Giáo dục thực nghiệm',
      publisher: 'Tài liệu nội bộ phục vụ Tọa đàm 19.09.2026',
      note: 'Dữ liệu sơ cấp từ Ban Lãnh đạo trang trại mã hóa TD01–TD07.'
    }
  ]
};
