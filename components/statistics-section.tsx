import { BookOpen, Globe, Users, Trophy, Target } from "lucide-react"; // Thêm icon Trophy
import { StatCard } from "./stat-card";
import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function StatisticsSection() {
  return (
    <section className="w-full">
      <div className="relative flex min-h-[20rem] sm:min-h-[25rem] md:h-[30rem] w-full items-center justify-center bg-white dark:bg-black px-4 sm:px-6 lg:px-8">
        {/* Background Grid và Radial Mask giữ nguyên để không đổi giao diện */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:15px_15px] sm:[background-size:20px_20px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        <div className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-6 sm:py-8 text-xl sm:text-2xl md:text-3xl text-black dark:text-white max-w-7xl mx-auto w-full">
          {/* Cập nhật Tiêu đề */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <TypewriterEffectSmooth
              words={[
                { text: "Thành" },
                { text: "tựu" },
                { text: "Lịch" },
                { text: "sử" },
              ]}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black dark:text-white text-center"
            />
          </div>

          {/* Cập nhật Mô tả */}
          <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 md:mb-12 px-4">
            Những con số ấn tượng phản ánh quy mô và kết quả của các cuộc kháng
            chiến
          </p>

          {/* Cập nhật các StatCard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg">
            {/* Stat 1: Số lượng Trận đánh/Sự kiện */}
            <StatCard
              icon={Target}
              value="34" // Số lượng máy bay B-52 bị hạ trong 12 ngày đêm
              title="Máy bay B-52 bị hạ"
              description="Trong 12 ngày đêm Điện Biên Phủ trên không (1972)"
              iconBgColor="bg-red-100" // Màu nền đỏ nhạt
              valueColor="text-red-600" // Màu giá trị đỏ đậm
            />

            {/* Stat 2: Số năm kháng chiến */}
            <StatCard
              icon={Globe}
              value="30" // 1945 - 1975 (Làm tròn)
              title="Năm Chiến đấu"
              description="Hành trình giành độc lập và thống nhất (1945-1975)"
              iconBgColor="bg-blue-100"
              valueColor="text-blue-600"
            />

            {/* Stat 3: Số lượng Chiến dịch lớn */}
            <StatCard
              icon={Trophy} // Dùng icon Trophy
              value="2"
              title="Chiến dịch Quyết định"
              description="Điện Biên Phủ (1954) & Hồ Chí Minh (1975)"
              iconBgColor="bg-green-100" // Đổi màu
              valueColor="text-green-600" // Đổi màu
            />
          </div>
        </div>
      </div>
    </section>
  );
}
