"use client";
// use client là một chỉ thị của Next.js, giữ nguyên nếu code React này được dùng trong môi trường đó


import React, { useState, useEffect } from 'react';
import { Trophy, BookOpen, Star } from 'lucide-react';

// Định nghĩa cấu trúc cho nội dung bài học
interface LessonContent {
    title?: string; // Thuộc tính 'title' là tùy chọn
    body: string | string[];
    isYouthLink?: boolean; 
    isConclusion?: boolean; 
}

interface LessonSection {
    id: string;
    title: string;
    content: LessonContent[];
}

// Dữ liệu nội dung bài học lớn của Đảng (Giữ nguyên)
const lessonData: LessonSection[] = [
    {
        id: "I",
        title: "Đường lối chiến tranh nhân dân của Đảng – bài học chiến lược bao trùm toàn bộ hai cuộc kháng chiến",
        content: [
            { body: "Đảng không chỉ lãnh đạo quân đội đánh giặc; Đảng tổ chức toàn dân đánh giặc. Trong hàng chục chiến dịch bạn liệt kê ở trên – từ Hà Nội 1946 đến Điện Biên Phủ, từ Đồng Khởi đến Chiến dịch Hồ Chí Minh – đều khẳng định:" },
            {
                body: [
                    "1. Nhân dân là nền tảng, là chủ thể của chiến tranh. Không có dân thì không có gì cả.",
                    "Tại Hà Nội, 8.000 tự vệ chiến đấu cùng nhân dân phá cầu, dựng chiến lũy.",
                    "Tại Việt Bắc 1947, dân công đi bộ hàng trăm km, chuyển từng giỏ gạo, đòn tre, bó củi.",
                    "Tại Điện Biên, hơn 26 vạn dân công và 20.000 xe đạp thồ là kỳ tích hậu cần.",
                    "Tại miền Nam, phong trào Đồng khởi lan từ Bến Tre khắp 3 miền do lòng dân đã sẵn lửa.",
                    "“Đội quân tóc dài” Bến Tre – sản phẩm sáng tạo độc đáo của chiến tranh nhân dân.",
                    "Nhân dân miền Bắc vừa sản xuất, vừa đánh B52, vừa tiếp tế miền Nam."
                ]
            },
            { body: "Không một chiến thắng nào có thể có nếu không có Nhân dân. 👉 Vì vậy, Đảng rút ra bài học chiến lược: muốn thắng giặc phải dựa vào dân – phát huy sức mạnh toàn dân tộc." },
            {
                title: "Liên hệ giới trẻ", // Thuộc tính title được sử dụng ở đây
                body: [
                    "Ngày nay, “chiến tranh nhân dân” không còn tiếng súng, mà là:",
                    "Chiến tranh bảo vệ chủ quyền số, an ninh mạng.",
                    "Chiến tranh chống suy thoái, tiêu cực.",
                    "Chiến tranh với sự tụt hậu tri thức.",
                    "Chiến tranh chống tin giả, độc hại văn hóa.",
                    "Thanh niên chính là lực lượng nòng cốt của “chiến tranh mới”."
                ],
                isYouthLink: true
            },
        ],
    },
    {
        id: "II",
        title: "Sự lãnh đạo đúng đắn, sáng suốt và nhất quán của Đảng – nhân tố quyết định mọi thắng lợi",
        content: [
            { body: "Từ năm 1930 đến 1975, Đảng đã dẫn dắt dân tộc đi đúng hướng trong mọi hoàn cảnh:" },
            {
                body: [
                    "1. Đảng đề ra đường lối kháng chiến độc lập: không lệ thuộc, không thỏa hiệp với xâm lược",
                    "Bác Hồ tuyên bố: “Thà hy sinh tất cả chứ nhất định không chịu mất nước.”",
                    "Trung ương Đảng phát động Toàn quốc kháng chiến 19/12/1946.",
                    "Đảng không chấp nhận “cai trị chung” với Pháp.",
                    "Khi Mỹ can thiệp, Đảng kiên quyết không lùi bước.",
                ]
            },
            {
                body: [
                    "2. Đảng tổ chức và lãnh đạo chiến tranh một cách khoa học",
                    "Trong chiến dịch Việt Bắc 1947: chủ trương “vườn không nhà trống”, “phân tán lực lượng”.",
                    "Trong Biên Giới 1950: chọn Đông Khê – nơi Pháp không ngờ bị đánh.",
                    "Trong Điện Biên: chuyển từ “đánh nhanh thắng nhanh” sang “đánh chắc – tiến chắc”, cứu cả chiến dịch.",
                    "Trong chiến tranh chống Mỹ: từ Đồng Khởi đến Mậu Thân, từ Chiến tranh cục bộ đến Việt Nam hóa – Đảng đều phản công đúng lúc.",
                ]
            },
            {
                body: [
                    "3. Đảng nắm bắt thời cơ thiên tài",
                    "Năm 1950: mở chiến dịch Biên Giới khi Trung Quốc – Liên Xô công nhận Việt Nam.",
                    "Năm 1972: đánh bại B52 – tạo thế cho Hiệp định Paris.",
                    "Năm 1975: quyết định táo bạo “giải phóng miền Nam trong năm 1975”."
                ]
            },
            { body: "👉 Đây là tuyệt đỉnh nghệ thuật chỉ đạo chiến lược, là bài học vô giá cho lãnh đạo hiện đại." },
            {
                title: "Liên hệ giới trẻ",
                body: [
                    "Thanh niên ngày nay phải biết:",
                    "Nắm thời cơ công nghệ.",
                    "Dám lựa chọn hướng đi mới.",
                    "Giữ nguyên tắc nhưng linh hoạt như Đảng ta thời kháng chiến."
                ],
                isYouthLink: true
            },
        ],
    },
    {
        id: "III",
        title: "Bài học về xây dựng lực lượng – từ du kích nhỏ lẻ đến quân đội chính quy, từng bước hiện đại",
        content: [
            {
                body: [
                    "1. Từ tự vệ – du kích đến chủ lực hiện đại",
                    "1945: chỉ có tự vệ, du kích, vũ khí thô sơ.",
                    "1947: có các trung đoàn chủ lực.",
                    "1950: có đại đoàn 308, 312, 316…",
                    "1954: quân đội có pháo 105mm, công binh, pháo binh mạnh.",
                    "1975: có các quân đoàn 1, 2, 3, 4 đánh hợp đồng binh chủng quy mô lớn.",
                ]
            },
            {
                body: [
                    "2. Bài học: muốn thắng phải chuẩn bị lâu dài, xây dựng lực lượng mạnh, chính quy, kỷ luật",
                    "Nhờ đó mới có:",
                    "Bình Giã – Ba Gia mở đầu cao trào “chiến tranh đặc biệt phá sản”.",
                    "Tây Nguyên – Buôn Ma Thuột mở màn 1975.",
                    "Hồ Chí Minh – 5 cánh quân hợp vây Sài Gòn trong 5 ngày.",
                ]
            },
            { body: "👉 Bài học: sức mạnh quân đội xuất phát từ sự lãnh đạo của Đảng và kỷ luật thép của lực lượng vũ trang." },
            {
                title: "Liên hệ giới trẻ",
                body: [
                    "Không có kỷ luật → không có thành công.",
                    "Không có rèn luyện → không có bản lĩnh.",
                    "Để “giải phóng” chính mình khỏi nghèo, dốt, tụt hậu → thanh niên phải rèn luyện như bộ đội Cụ Hồ."
                ],
                isYouthLink: true
            },
        ]
    },
    {
        id: "IV",
        title: "Bài học về lòng yêu nước, ý chí sắt đá và tinh thần hy sinh không bờ bến",
        content: [
            { body: "Trong hàng nghìn cuộc chiến đấu:" },
            {
                body: [
                    "Người lính Trung đoàn Thủ đô “quyết tử cho Tổ quốc quyết sinh”.",
                    "Chiến sĩ phòng không Hà Nội bắn rơi B52 bằng quyết tâm và trí tuệ.",
                    "Người mẹ, người chị “đội quân tóc dài” đối diện với súng đạn.",
                    "Bộ đội Trường Sơn đi qua bom đạn hơn 14 năm ròng rã."
                ]
            },
            { body: "1. Đảng đã vun dưỡng lòng yêu nước bằng mục tiêu độc lập – tự do – hạnh phúc" },
            { body: "Giá trị đó trở thành sức mạnh tinh thần vô địch, vượt lên trên mọi bom đạn." },
            { body: "2. Ý chí quyết thắng là tài sản vô giá của dân tộc" },
            { body: "Điện Biên Phủ, Trị Thiên 72, Buôn Ma Thuột 1975… đều thể hiện: 👉 Khi dân tộc đã quyết tâm, không thế lực nào cản nổi." },
            {
                title: "Liên hệ giới trẻ",
                body: [
                    "Ngày nay:",
                    "Kẻ thù không phải quân xâm lược, mà là lười biếng, vô cảm, nghiện mạng xã hội, sống thụ động.",
                    "Muốn mạnh mẽ như thế hệ cha anh, thanh niên hôm nay phải khơi dậy tinh thần Việt Nam, khát vọng vươn lên trong học tập, sáng tạo."
                ],
                isYouthLink: true
            },
        ]
    },
    {
        id: "V",
        title: "Bài học về kết hợp sức mạnh dân tộc với sức mạnh thời đại",
        content: [
            {
                body: [
                    "1. Đảng biết tranh thủ sự ủng hộ quốc tế nhưng tuyệt đối không phụ thuộc",
                    "Liên Xô, Trung Quốc, Cuba… giúp ta vũ khí, đào tạo cán bộ, ngoại giao.",
                    "Nhưng quyết định cuối cùng vẫn là của Đảng: đánh hay đàm? đánh ở đâu? đánh lúc nào?"
                ]
            },
            { body: "2. Bài học: hội nhập nhưng giữ bản sắc – tiếp nhận nhưng không đánh mất mình" },
            {
                title: "Liên hệ thanh niên",
                body: [
                    "Trong thời đại TikTok, Facebook, AI:",
                    "Thanh niên phải mở cửa với thế giới.",
                    "Nhưng không được đánh mất gốc, không được “phai nhạt lý tưởng”.",
                    "Phải biết “tiếp thu tinh hoa – loại bỏ độc hại”."
                ],
                isYouthLink: true
            },
        ]
    },
    {
        id: "VI",
        title: "Bài học về công tác dân vận, xây dựng niềm tin với Nhân dân",
        content: [
            {
                body: [
                    "Không có trận thắng nào mà không có dân:",
                    "Dân nuôi quân.",
                    "Dân che chở cán bộ.",
                    "Dân dẫn đường, tải thương, tải đạn.",
                    "Dân nổi dậy khi quân ta tấn công."
                ]
            },
            { body: "1. Đảng rút ra chân lý: dân vận phải chân thành – kiên trì – tấm gương sáng" },
            { body: "Chỉ khi dân tin Đảng, dân mới đứng lên." },
            {
                title: "Liên hệ thanh niên",
                body: [
                    "Người trẻ cần sống tử tế, có trách nhiệm.",
                    "Không gây chia rẽ, không phát tán tin xấu độc.",
                    "Góp phần xây dựng comunitty, lan tỏa năng lượng tích cực."
                ],
                isYouthLink: true
            },
        ]
    },
    {
        id: "VII",
        title: "Bài học về khát vọng độc lập – tự cường, khát vọng vươn tới tương lai",
        content: [
            { body: "Từ thế bị thuộc địa → đánh thắng thực dân → đánh thắng đế quốc → thống nhất đất nước, Đảng đã bồi đắp:" },
            { body: "“Khát vọng Việt Nam độc lập – tự do – hùng cường.”" },
            { body: "Đây là khát vọng dẫn đường cho dân tộc suốt 75 năm qua." }
        ]
    },
    {
        id: "VIII",
        title: "Kết luận lớn – bài học cốt lõi dành cho thế hệ trẻ",
        content: [
            {
                body: [
                    "1. Nếu thế hệ cha anh đã giành độc lập, thì nhiệm vụ của thế hệ trẻ hôm nay là giành lấy tương lai.",
                    "2. Nếu cha ông phải đánh giặc bằng súng đạn, thì thanh niên hôm nay phải đánh giặc bằng trí tuệ, khoa học, công nghệ, sáng tạo.",
                    "3. Nếu cha ông đi bộ hàng nghìn cây số mở đường Trường Sơn, thì thanh niên hôm nay phải mở đường trí tuệ, mở đường kinh tế, mở đường đổi mới sáng tạo.",
                    "4. Nếu cha ông hy sinh vì độc lập, thì thanh niên hôm nay phải sống có trách nhiệm để giữ vững hòa bình."
                ],
                isConclusion: true
            }
        ]
    }
];

// Component hiển thị chi tiết nội dung của một phần nhỏ (point/sub-point)
const LessonPoint: React.FC<{ content: LessonContent }> = ({ content }) => {
    // Nếu là phần Liên hệ giới trẻ, áp dụng style riêng
    if (content.isYouthLink) {
        return (
            <div className="mt-4 p-4 md:p-6 rounded-xl border-l-4 border-yellow-500 bg-yellow-50 shadow-inner">
                <h4 className="text-lg font-bold text-yellow-700 mb-2 flex items-center">
                    <Star className="w-5 h-5 mr-2" /> {content.title || "Liên hệ giới trẻ"}
                </h4>
                {Array.isArray(content.body) ? (
                    <ul className="list-disc ml-5 space-y-1 text-gray-700">
                        {content.body.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                ) : (
                    <p className="text-gray-700 whitespace-pre-line">{content.body}</p>
                )}
            </div>
        );
    }

    // Nếu là phần Kết luận cuối cùng, áp dụng style nổi bật
    if (content.isConclusion) {
         return (
            <div className="mt-6 p-6 rounded-xl border-4 border-red-500 bg-red-50 shadow-2xl">
                <h4 className="text-xl font-extrabold text-red-700 mb-4 text-center">
                    Bài Học Cốt Lõi Dành Cho Thế Hệ Trẻ
                </h4>
                 {Array.isArray(content.body) ? (
                    <ul className="space-y-4 text-gray-800 font-medium">
                        {content.body.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                ) : (
                    <p className="text-gray-800 font-medium whitespace-pre-line">{content.body}</p>
                )}
            </div>
        );
    }

    // Nội dung thông thường
    return (
        <div className="mt-3 text-gray-700 leading-relaxed">
             {/* Thêm điều kiện render title cho các mục phụ nếu có */}
             {content.title && <h4 className="text-lg font-semibold text-gray-800 mb-2">{content.title}</h4>}
             {Array.isArray(content.body) ? (
                <ul className="list-none space-y-1">
                    {/* Sử dụng map để render các đoạn văn/list item */}
                    {content.body.map((item, i) => (
                        <li key={i} className="mb-1">{item}</li>
                    ))}
                </ul>
            ) : (
                <p className="whitespace-pre-line">{content.body}</p>
            )}
        </div>
    );
};

// Component hiển thị toàn bộ một phần lớn (I, II, III,...)
const LessonSectionCard: React.FC<{ section: LessonSection }> = ({ section }) => {
    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-2xl mb-8 border-t-8 border-red-700/70 transition-shadow hover:shadow-3xl">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4 flex items-start">
                <span className="text-3xl font-black mr-3 text-red-700/90">{section.id}</span>
                {section.title}
            </h2>
            
            {/* Render các LessonPoint bên trong Section */}
            <div className="space-y-4">
                {section.content.map((point, index) => (
                    <LessonPoint key={index} content={point} />
                ))}
            </div>
        </div>
    );
};

// Component chính của ứng dụng Bài học
const App: React.FC = () => {
    // --- Bổ sung logic ẩn/hiện header khi cuộn trang ---
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        
        // Điều chỉnh ngưỡng cuộn để header bắt đầu ẩn/hiện
        const scrollThreshold = 100; 
        
        // Nếu đã cuộn quá ngưỡng đầu trang
        if (currentScrollPos > scrollThreshold) {
            // Cuộn xuống (current > previous) -> Ẩn header
            if (currentScrollPos > prevScrollPos) {
                setIsVisible(false);
            } 
            // Cuộn lên (current < previous) -> Hiện header
            else if (currentScrollPos < prevScrollPos) {
                setIsVisible(true);
            }
        } else {
            // Luôn hiện header khi ở gần đầu trang
            setIsVisible(true);
        }

        // Cập nhật vị trí cuộn trước đó
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        // Đăng ký sự kiện scroll khi component được mount
        window.addEventListener('scroll', handleScroll);
        
        // Dọn dẹp sự kiện khi component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]); // Dependency prevScrollPos để đảm bảo handleScroll luôn dùng giá trị mới nhất
    // ----------------------------------------------------

    return (
        <div className="min-h-screen font-sans" style={{
            // Giữ nguyên background image và đảm bảo tính tương phản tốt
            backgroundImage: `url('https://placehold.co/1920x1080/0F172A/white?text=Linh+Sử+Việt+Nam')`, 
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover'
        }}>
            
            {/* Header / Title Section */}
            {/* Đã sửa: Thay 'sticky top-0 z-10' bằng 'fixed top-0 left-0 right-0 z-50' 
               Và thêm class dynamic để ẩn/hiện bằng CSS transform */}
            <header 
                className={`py-16 text-white shadow-2xl fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
                    isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
                style={{
                    backgroundImage: "linear-gradient(to bottom right, #1F2937, #0F172A)", 
                }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-md">
                        <BookOpen className="inline-block w-8 h-8 md:w-10 md:h-10 mr-3 text-yellow-400" /> 
                        Bài Học Lịch Sử Đảng
                    </h1>
                    <p className="text-xl font-light text-slate-300">
                        Phân tích các bài học chiến lược sau hai cuộc kháng chiến vĩ đại
                    </p>
                </div>
            </header>
            
            {/* Thêm khoảng đệm để nội dung không bị header che mất */}
            <div className="pt-[152px] md:pt-[176px]"> 
                {/* Khoảng đệm tương đương chiều cao header để tránh nội dung bị nhảy */}
            </div>

            {/* Main Content / Lesson Area */}
            <main className="container mx-auto px-4 py-12 -mt-[152px] md:-mt-[176px]">
                <div className="max-w-4xl mx-auto backdrop-blur-sm bg-white/90 p-8 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    
                    {/* Tiêu đề chính */}
                    <h2 className="text-center text-3xl font-black text-red-800 mb-10 border-b-2 border-red-700/50 pb-4 pt-20">
                        BÀI HỌC LỚN CỦA ĐẢNG SAU CÁC TRẬN CHIẾN
                    </h2>

                    {/* Danh sách các Phần bài học */}
                    {lessonData.map(section => (
                        <LessonSectionCard key={section.id} section={section} />
                    ))}
                    
                    {/* Phần kết thúc của bài học */}
                    <div className="mt-12 p-6 text-center bg-gray-900 rounded-xl text-white shadow-2xl">
                        <p className="text-lg font-light">
                            <Trophy className="inline-block w-5 h-5 mr-2 text-yellow-400" />
                            Toàn bộ bài học này là tài sản vô giá của dân tộc, cần được thế hệ trẻ tiếp thu và phát huy trong thời đại mới.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;