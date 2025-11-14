import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award, Users, Globe } from "lucide-react";

const KeyMembers = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px 0px" });
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const members = [
    {
      name: "ÔNG OH SEAN BEOM",
      position: "Giám đốc kinh doanh tại Hàn Quốc",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      achievements: [
        { type: "highlight", text: "10+ năm kinh nghiệm phát triển mobile app/web" },
        { type: "highlight", text: "5+ năm kinh nghiệm quản lý team, leadership" },
        { type: "normal", text: "Đảm nhận trách nhiệm chính trong quản lý tiến độ, lên kế hoạch về timeline, budget, nhân sự" },
        { type: "normal", text: "Quản lý team nước ngoài từ xa, lên kế hoạch phát triển bản thân cho nhân viên" },
        { type: "normal", text: "Kinh nghiệm làm việc trong môi trường quốc tế: Nhật, Việt Nam, Hàn Quốc, Châu Âu" }
      ]
    },
    {
      name: "ÔNG LÊ QUỐC VŨ",
      position: "Giám đốc công nghệ công ty Hitek Software",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      achievements: [
        { type: "highlight", text: "7+ năm kinh nghiệm phát triển phần mềm và thiết kế hệ thống" },
        { type: "highlight", text: "2+ năm kinh nghiệm trong thiết kế và triển khai hệ thống IOT, xây dựng bản mẫu" },
        { type: "normal", text: "Cử nhân chuyên ngành kỹ thuật phần mềm" },
        { type: "award", text: "Tham gia viết các bài báo khoa học công nghệ năm 2016" },
        { type: "award", text: "Giải nhất cuộc thi phần mềm mã nguồn mở 2015" },
        { type: "award", text: "Giải nhì cuộc thi lập trình quốc tế ACM/ICPC 2014" },
        { type: "normal", text: "Chịu trách nhiệm xây dựng và thiết kế kiến trúc hệ thống phần mềm, định hướng kỹ thuật" }
      ]
    },
    {
      name: "ÔNG LÂM THỨ TIÊN",
      position: "Giám đốc công ty Hitek Capital",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face",
      achievements: [
        { type: "normal", text: "Sáng lập và là Chủ tịch HĐQT Công ty cổ phần Đầu tư Công nghệ số Rồng Việt (Rovi Group)" },
        { type: "normal", text: "Cổ đông sáng lập và Thành viên HĐQT Công ty cổ phần Công nghệ Mọi Người Cùng Vui" },
        { type: "normal", text: "Từng đảm nhận vị trí Tổng giám đốc Công ty cổ phần đầu tư Thengroup" },
        { type: "normal", text: "Từng đảm nhận vị trí Giám đốc thương mại Công ty TNHH Dịch vụ Mọi Người Cùng Vui" },
        { type: "normal", text: "Từng là Nhà sáng lập và điều hành chuỗi hệ thống Điện thoại bình dân (2012)" }
      ]
    }
  ];

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  // Auto scroll chỉ khi section trong view
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      nextMember();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isInView]);

  // Kích hoạt animation khi section vào view
  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const getAchievementIcon = (type: string) => {
    switch (type) {
      case "highlight":
        return "🎯";
      case "award":
        return "🏆";
      default:
        return "💼";
    }
  };

  const getAchievementColor = (type: string) => {
    switch (type) {
      case "highlight":
        return "border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/20";
      case "award":
        return "border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20";
      default:
        return "border-l-4 border-gray-300 bg-gray-50 dark:bg-gray-900";
    }
  };

  const currentMember = members[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-950 dark:via-blue-950/20 dark:to-purple-950/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section với hiệu ứng xuất hiện */}
        <div className="flex items-start mb-16">
          {/* Số phần với gạch chân */}
          <div className="relative flex-shrink-0 mr-8">
            <div className="text-6xl font-bold text-gray-900 dark:text-white pb-4 border-b-4 border-blue-500 relative">
              05
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
            </div>
          </div>
          
          {/* Nội dung tiêu đề */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              THÀNH VIÊN CHỦ CHỐT
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Đội ngũ lãnh đạo tài năng với nhiều năm kinh nghiệm trong lĩnh vực công nghệ 
                và quản lý, mang đến sự phát triển vượt bậc cho Hitek Software.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevMember}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-4 shadow-2xl border hover:bg-white dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <ChevronLeft className="h-6 w-6 text-gray-900 dark:text-white" />
          </button>
          
          <button 
            onClick={nextMember}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-4 shadow-2xl border hover:bg-white dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300 flex items-center justify-center"
          >
            <ChevronRight className="h-6 w-6 text-gray-900 dark:text-white" />
          </button>

          {/* Main Content Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Header với gradient */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 relative">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {currentMember.name}
                  </h3>
                  <p className="text-blue-100 text-lg">{currentMember.position}</p>
                </div>
              </div>
            </div>

            {/* Content - Ảnh bên trái, thông tin bên phải */}
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                {/* Ảnh thành viên - Bên trái */}
                <div className="lg:w-2/5 flex flex-col">
                  <div className="relative group flex-1">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300 h-full">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl h-full">
                        <img 
                          src={currentMember.image} 
                          alt={currentMember.name}
                          className="w-full h-full max-h-[500px] object-cover rounded-lg shadow-lg"
                          onError={(e) => {
                            // Fallback nếu ảnh không tồn tại
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%236b7280'%3EẢnh thành viên%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Thông tin nhanh */}
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <Users className="h-6 w-6 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">10+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Năm KN</div>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                      <Globe className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">4+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Quốc gia</div>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <Award className="h-6 w-6 text-green-600 dark:text-green-400 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">15+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Dự án</div>
                    </div>
                  </div>
                </div>

                {/* Thông tin thành tích - Bên phải - FULL HEIGHT */}
                <div className="lg:w-3/5 flex flex-col">
                  <div className="space-y-4 flex-1">
                    {currentMember.achievements.map((achievement, index) => (
                      <div 
                        key={index}
                        className={`p-4 rounded-lg ${getAchievementColor(achievement.type)} transition-all duration-300 hover:shadow-md`}
                      >
                        <div className="flex items-start space-x-3">
                          <span className="text-lg mt-0.5 flex-shrink-0">
                            {getAchievementIcon(achievement.type)}
                          </span>
                          <p className={`leading-relaxed ${
                            achievement.type === "highlight" 
                              ? "font-semibold text-gray-900 dark:text-white" 
                              : achievement.type === "award"
                              ? "text-yellow-700 dark:text-yellow-400"
                              : "text-gray-700 dark:text-gray-300"
                          }`}>
                            {achievement.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Thông tin bổ sung */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Chuyên gia hàng đầu</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Kinh nghiệm quốc tế</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Lãnh đạo tận tâm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {members.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                rounded-full transition-all duration-500 ease-out
                ${index === currentIndex 
                  ? 'bg-blue-600 scale-125 w-8 h-3' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 w-3 h-3'
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMembers;
