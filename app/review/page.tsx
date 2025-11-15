"use client"

import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { CheckCircle, XCircle, Trophy, RefreshCw } from 'lucide-react';

// Định nghĩa interface cho cấu trúc dữ liệu câu hỏi
interface QuizQuestion {
    id: number;
    category: string;
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string; // ✅ Thêm phần giải thích
}

// Dữ liệu Quiz - 10 Câu hỏi về Kháng chiến Chống Pháp & Mỹ
const quizData: QuizQuestion[] = [
    // Kháng chiến chống Pháp (1945–1954)
    {
        id: 1,
        category: "Chống Pháp",
        question: "Sự kiện nào đánh dấu sự bùng nổ của cuộc kháng chiến toàn quốc chống thực dân Pháp?",
        options: ["Lời kêu gọi toàn quốc kháng chiến (19/12/1946)", "Chiến dịch Việt Bắc", "Chiến thắng Biên giới", "Hiệp định Giơ-ne-vơ"],
        correctAnswerIndex: 0, // A
        explanation:
            "Ngày 19/12/1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến, đánh dấu bước chuyển từ hòa hoãn sang chiến tranh nhân dân toàn diện chống thực dân Pháp trên phạm vi cả nước.",
    },
    {
        id: 2,
        category: "Chống Pháp",
        question: "Chủ trương lớn của Đảng trong “Lời kêu gọi toàn quốc kháng chiến” của Hồ Chí Minh là gì?",
        options: ["Hòa hoãn để giữ lực lượng", "Kháng chiến toàn dân, toàn diện, trường kỳ, tự lực cánh sinh", "Tiến công chiến lược ngay lập tức", "Nhờ quốc tế can thiệp"],
        correctAnswerIndex: 1, // B
        explanation:
            "Đường lối kháng chiến xác định: toàn dân tham gia, tiến hành trên mọi mặt trận (quân sự, chính trị, kinh tế, ngoại giao), kéo dài lâu dài và dựa vào sức mình là chính, không trông chờ viện trợ bên ngoài.",
    },
    {
        id: 3,
        category: "Chống Pháp",
        question: "Chiến dịch nào được xem là “Quyết định” của kháng chiến chống Pháp?",
        options: ["Chiến dịch Việt Bắc (1947)", "Chiến dịch Biên giới (1950)", "Chiến dịch Hòa Bình", "Chiến dịch Điện Biên Phủ"],
        correctAnswerIndex: 1, // B
        explanation:
            "Chiến dịch Biên giới Thu – Đông 1950 tiêu diệt một bộ phận quan trọng sinh lực địch, khai thông biên giới Việt – Trung, mở ra khả năng nhận viện trợ từ phe xã hội chủ nghĩa, tạo bước ngoặt giúp ta chuyển sang thế chủ động chiến lược.",
    },
    {
        id: 4,
        category: "Chống Pháp",
        question: "Chiến thắng Điện Biên Phủ (1954) có ý nghĩa gì?",
        options: ["Kết thúc vai trò của Liên Xô tại Đông Dương", "Chấm dứt hoàn toàn sự hiện diện của Pháp ở châu Á", "Làm phá sản hoàn toàn kế hoạch Nava, buộc Pháp ký Hiệp định Giơ-ne-vơ", "Bắt đầu cuộc tổng tiến công vào Sài Gòn"],
        correctAnswerIndex: 2, // C
        explanation:
            "Chiến thắng Điện Biên Phủ đập tan tập đoàn cứ điểm mạnh nhất của Pháp, làm phá sản kế hoạch Nava và buộc Pháp phải ngồi vào bàn đàm phán, ký Hiệp định Giơ-ne-vơ, chấm dứt chiến tranh xâm lược ở Việt Nam.",
    },
    {
        id: 5,
        category: "Chống Pháp",
        question: "Hiệp định Giơ-ne-vơ 1954 quy định điều gì?",
        options: ["Việt Nam độc lập, thống nhất ngay", "Ngừng bắn, tạm thời chia cắt Việt Nam ở vĩ tuyến 17", "Mỹ rút quân khỏi miền Nam", "Pháp trao trả toàn bộ chính quyền"],
        correctAnswerIndex: 1, // B
        explanation:
            "Hiệp định Giơ-ne-vơ quy định ngừng bắn, lập lại hòa bình ở Đông Dương, tạm thời chia cắt Việt Nam ở vĩ tuyến 17, chờ tổng tuyển cử thống nhất đất nước. Đây mới chỉ là thắng lợi bước đầu, đất nước chưa được thống nhất.",
    },
    // Kháng chiến chống Mỹ cứu nước (1954–1975)
    {
        id: 6,
        category: "Chống Mỹ",
        question: "Mục tiêu chiến lược của Mỹ khi can thiệp vào Việt Nam sau 1954 là gì?",
        options: ["Khuếch trương ảnh hưởng kinh tế", "Chống lại phong trào giải phóng dân tộc", "Ngăn chặn sự lan rộng của chủ nghĩa xã hội ở Đông Nam Á", "Đàm phán với Trung Quốc"],
        correctAnswerIndex: 2, // C
        explanation:
            "Mỹ thực hiện chiến lược toàn cầu “ngăn chặn chủ nghĩa cộng sản”, coi miền Nam Việt Nam là tiền đồn chống chủ nghĩa xã hội ở Đông Nam Á, từ đó can thiệp ngày càng sâu vào Việt Nam.",
    },
    {
        id: 7,
        category: "Chống Mỹ",
        question: "Sự kiện nào mở đầu phong trào Đồng khởi ở miền Nam?",
        options: ["Chiến thắng núi Thành", "Khởi nghĩa Trà Bồng", "Sự kiện Bến Tre năm 1960", "Mặt trận Dân tộc Giải phóng Miền Nam ra đời"],
        correctAnswerIndex: 2, // C
        explanation:
            "Phong trào Đồng khởi bắt đầu từ Bến Tre (01/1960), nhân dân đồng loạt nổi dậy phá ấp, lật đổ bộ máy kìm kẹp ở cơ sở, đưa cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công.",
    },
    {
        id: 8,
        category: "Chống Mỹ",
        question: "Chiến thắng nào được coi là “Điện Biên Phủ trên không”?",
        options: ["Chiến thắng Khe Sanh", "Chiến thắng Vạn Tường", "Chiến dịch Đường 9–Nam Lào", "Chiến dịch phòng không 12 ngày đêm chống B52 (12/1972)"],
        correctAnswerIndex: 3, // D
        explanation:
            "Trong 12 ngày đêm cuối năm 1972, quân dân miền Bắc đã đánh bại tập đoàn không quân chiến lược B52 của Mỹ, bắn rơi nhiều máy bay, buộc Mỹ phải ký Hiệp định Paris, nên được gọi là “Điện Biên Phủ trên không”.",
    },
    {
        id: 9,
        category: "Chống Mỹ",
        question: "Hiệp định Paris (1973) quy định điều quan trọng nhất nào?",
        options: ["Hai miền tiến tới thống nhất", "Mỹ cam kết rút toàn bộ quân đội và chấm dứt can thiệp quân sự", "Chia cắt lâu dài Việt Nam", "Trao đổi tù binh giữa hai bên"],
        correctAnswerIndex: 1, // B
        explanation:
            "Hiệp định Paris buộc Mỹ phải rút hết quân viễn chinh và chư hầu, chấm dứt can thiệp quân sự vào miền Nam, tạo so sánh lực lượng có lợi cho ta, chuẩn bị điều kiện để giải phóng hoàn toàn miền Nam.",
    },
    {
        id: 10,
        category: "Chống Mỹ",
        question: "Chiến dịch nào kết thúc thắng lợi cuộc kháng chiến chống Mỹ cứu nước?",
        options: ["Chiến dịch Đường 14–Phước Long", "Chiến dịch Tây Nguyên", "Chiến dịch Huế – Đà Nẵng", "Chiến dịch Hồ Chí Minh (30/4/1975)"],
        correctAnswerIndex: 3, // D
        explanation:
            "Chiến dịch Hồ Chí Minh mùa Xuân 1975 giải phóng Sài Gòn, làm tan rã hoàn toàn chính quyền Sài Gòn, kết thúc thắng lợi cuộc kháng chiến chống Mỹ cứu nước, đất nước được thống nhất.",
    },
];

// Định nghĩa interface cho props của QuestionCard
interface QuestionCardProps {
    question: QuizQuestion;
    selectedAnswer: number | undefined;
    onSelect: (questionId: number, answerIndex: number) => void;
    isSubmitted: boolean;
}

// Component hiển thị câu hỏi và các lựa chọn
const QuestionCard: React.FC<QuestionCardProps> = ({ question, selectedAnswer, onSelect, isSubmitted }) => {
    const options = ['A', 'B', 'C', 'D'];
    const { id, question: text, options: choiceTexts, correctAnswerIndex, category, explanation } = question;

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg mb-6 border border-gray-100 transition-shadow hover:shadow-xl">
            <p className="text-xs font-semibold uppercase text-red-700/80 mb-2">{category}</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Câu {id}: {text}
            </h3>
            
            <div className="space-y-3">
                {choiceTexts.map((choice, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === correctAnswerIndex;
                    
                    let bgColor = 'bg-gray-50 hover:bg-gray-100 border-gray-200';
                    let textColor = 'text-gray-700';
                    let icon: React.ReactNode = null; 

                    if (isSubmitted) {
                        if (isCorrect) {
                            bgColor = 'bg-green-100 border-green-400';
                            textColor = 'text-green-800 font-bold';
                            icon = <CheckCircle className="w-5 h-5 text-green-600" />;
                        } else if (isSelected && !isCorrect) {
                            bgColor = 'bg-red-100 border-red-400';
                            textColor = 'text-red-800 font-bold';
                            icon = <XCircle className="w-5 h-5 text-red-600" />;
                        }
                    } else if (isSelected) {
                        bgColor = 'bg-blue-50 border-blue-400';
                        textColor = 'text-blue-700 font-medium';
                    }

                    return (
                        <div 
                            key={index}
                            className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all duration-200 ${bgColor}`}
                            onClick={() => !isSubmitted && onSelect(id, index)}
                        >
                            <span className={`w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 rounded-full border-2 ${isSelected && !isSubmitted ? 'border-blue-500 text-blue-500' : 'border-gray-400 text-gray-500'}`}>
                                {options[index]}
                            </span>
                            <span className={`${textColor} flex-1`}>{choice}</span>
                            <div className="ml-4">{icon}</div>
                        </div>
                    );
                })}
            </div>

            {/* ✅ Phần giải thích – chỉ hiện sau khi nộp bài */}
            {isSubmitted && (
                <div className="mt-4 pt-3 border-t border-gray-200 text-sm text-gray-700">
                    <span className="font-semibold">Giải thích:&nbsp;</span>
                    <span>{explanation}</span>
                </div>
            )}
        </div>
    );
};

// Component chính của ứng dụng Quiz
const App: React.FC = () => {
    const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [allAnswered, setAllAnswered] = useState<boolean>(false);

    // Xử lý khi người dùng chọn đáp án
    const handleAnswerSelect = useCallback((questionId: number, answerIndex: number) => {
        if (!isSubmitted) {
            setUserAnswers(prev => ({
                ...prev,
                [questionId]: answerIndex,
            }));
        }
    }, [isSubmitted]);

    // Kiểm tra xem tất cả các câu hỏi đã được trả lời chưa
    useEffect(() => {
        setAllAnswered(Object.keys(userAnswers).length === quizData.length);
    }, [userAnswers]);

    // Xử lý nộp bài
    const handleSubmit = () => {
        if (!allAnswered) {
            console.log("Vui lòng trả lời hết tất cả các câu hỏi trước khi nộp bài!");
            return;
        }

        let currentScore = 0;
        quizData.forEach(q => {
            if (userAnswers[q.id] === q.correctAnswerIndex) {
                currentScore++;
            }
        });

        setScore(currentScore);
        setIsSubmitted(true);
    };

    // Xử lý chơi lại
    const handleRetry = () => {
        setUserAnswers({});
        setIsSubmitted(false);
        setScore(0);
        setAllAnswered(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    const isMastered = useMemo(() => score >= 8 && isSubmitted, [score, isSubmitted]);

    return (
        <div className="min-h-screen bg-cover bg-center font-sans" style={{
            backgroundImage: `url('/linh.jpg')`,
        }}>
            {/* Header */}
            <header className="py-16 text-white shadow-2xl" 
                style={{
                    backgroundImage: "linear-gradient(to bottom right, #1F2937, #0F172A)", 
                }}
            >
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-md">
                        <Trophy className="inline-block w-8 h-8 md:w-10 md:h-10 mr-3 text-yellow-400" /> 
                        Ôn Tập Lịch Sử Đảng
                    </h1>
                    <p className="text-xl font-light text-red-200">
                        10 Câu Quiz về Kháng Chiến Chống Pháp & Mỹ
                    </p>
                </div>
            </header>

            {/* Main Content / Quiz Area */}
            <main className="container mx-auto px-4 py-12 -mt-8">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Kết quả và Thông báo */}
                    {isSubmitted && (
                        <div className={`p-8 mb-8 rounded-xl shadow-2xl border-4 ${isMastered ? 'bg-yellow-50 border-yellow-400' : 'bg-blue-50 border-blue-400'}`}>
                            <div className="flex justify-between items-center mb-4">
                                <h2 className={`text-2xl md:text-3xl font-bold ${isMastered ? 'text-yellow-700' : 'text-blue-700'}`}>
                                    {isMastered ? "🎉 Chúc mừng!" : "💡 Cần cố gắng hơn"}
                                </h2>
                                <p className={`text-3xl font-extrabold ${isMastered ? 'text-yellow-600' : 'text-blue-600'}`}>
                                    Điểm: {score}/{quizData.length}
                                </p>
                            </div>
                            {isMastered && (
                                <p className="text-lg font-medium text-yellow-800">
                                    ⭐ Bạn đã nắm vững kiến thức Lịch sử Đảng về Kháng Chiến Chống Pháp & Mỹ!
                                </p>
                            )}
                            <div className="mt-4 text-right">
                                <button
                                    onClick={handleRetry}
                                    className="px-6 py-2 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 transition duration-200 flex items-center justify-center ml-auto"
                                >
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Làm lại
                                </button>
                            </div>
                        </div>
                    )}
                    
                    {/* Danh sách Câu hỏi */}
                    <div className="space-y-6">
                        {quizData.map(q => (
                            <QuestionCard
                                key={q.id}
                                question={q}
                                selectedAnswer={userAnswers[q.id]}
                                onSelect={handleAnswerSelect}
                                isSubmitted={isSubmitted}
                            />
                        ))}
                    </div>

                    {/* Nút Nộp bài */}
                    {!isSubmitted && (
                        <div className="mt-10 text-center">
                            <button
                                onClick={handleSubmit}
                                disabled={!allAnswered}
                                className={`px-12 py-4 text-xl font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl 
                                    ${allAnswered
                                        ? 'bg-green-600 hover:bg-green-700 text-white hover:scale-[1.01]'
                                        : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                    }`}
                            >
                                Nộp Bài ({Object.keys(userAnswers).length}/{quizData.length})
                            </button>
                            {!allAnswered && (
                                <p className="mt-2 text-sm text-white-500">Vui lòng trả lời hết {quizData.length} câu hỏi.</p>
                            )}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default App;
