// components/CompanyVision.tsx
import React from 'react';
import Seo from "@/assets/about-company-seo.jpg";

const CompanyVision: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-20">
      {/* Phần Tầm nhìn */}
      <div className="flex items-start mb-20">
        <div className="relative flex-shrink-0 mr-8">
          <div className="text-6xl font-bold text-primary pb-4 border-b-4 border-accent relative">
            01
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
          </div>
        </div>
        <div className="flex-1 bg-card rounded-2xl shadow-lg border border-border p-8 hover:shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-bold text-primary mb-6 font-heading">TẦM NHÌN CỦA HITEX</h2>
          <div className="space-y-4">
            <p className="text-xl font-semibold text-accent bg-accent/10 p-4 rounded-xl border-l-4 border-accent">
              Mục tiêu dài hạn của Hitek là trở thành một công cụ phần mềm hàng đầu Thế Giới
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Hitek Software luôn nỗ lực không ngừng nghiên cứu công nghệ mỗi ngày 
              để đạt được mục tiêu trở thành công cụ phần mềm hàng đầu Thế Giới.
            </p>
          </div>
        </div>
      </div>

      {/* Phần Thông điệp Chủ tịch */}
      <div className="flex items-start">
        <div className="relative flex-shrink-0 mr-8">
          <div className="text-6xl font-bold text-primary pb-4 border-b-4 border-accent relative">
            02
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
            {/* Header với gradient */}
            <div className="bg-gradient-to-r from-primary to-primary/90 p-8">
              <h2 className="text-3xl font-bold text-white font-heading">THÔNG ĐIỆP CHỦ TỊCH</h2>
              <div className="w-20 h-1 bg-accent mt-4 rounded-full"></div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Nội dung thông điệp */}
                <div className="flex-1">
                  <div className="space-y-6">
                    <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
                      <p className="text-xl font-bold text-primary text-center leading-relaxed">
                        MỤC TIÊU DÀI HẠN CỦA HITEK LÀ TRỞ THÀNH MỘT CÔNG TY PHẦN MỀM HÀNG ĐẦU THẾ GIỚI
                      </p>
                    </div>
                    
                    {[
                      "May mắn có cơ hội làm việc với nhiều khách hàng trên toàn thế giới ở giai đoạn khởi nghiệp, tôi đã tích lũy cho mình được rất nhiều kinh nghiệm để có thể nắm bắt nhu cầu của khách hàng ở mỗi nước, mỗi lĩnh vực mà họ hướng đến.",
                      "Tôi đang xây dựng Hitek Software lớn mạnh hơn từng ngày bằng những kinh nghiệm đó.",
                      "Hitek Software là tập hợp những năng lượng trẻ, đầy nhiệt huyết, luôn sẵn sàng tìm kiếm và thích nghi với những công nghệ mới. Do đó, chúng tôi tự tin rằng, với thế mạnh cập nhật nhanh những công nghệ mới, kiến thức mới sẽ giúp khách hàng của Hitek thỏa mãn với những nhu cầu mà họ đưa ra.",
                      "Bên cạnh nguồn nhân lực trẻ trung, chúng tôi còn sở hữu những chuyên viên tư vấn giỏi ngoại ngữ - am hiểu sâu rộng về công nghệ, điều này sẽ giúp xóa bỏ rào cản ngôn ngữ giữa Hitek và khách hàng nước ngoài. Đây cũng là công thức để Hitek Software tiếp cận và đồng hành cùng nhiều khách hàng trên toàn thế giới trong hơn 5 năm qua."
                    ].map((paragraph, index) => (
                      <div 
                        key={index}
                        className="group bg-white/50 hover:bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-md"
                      >
                        <p className="text-foreground leading-relaxed text-lg">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>

                  
                </div>

                {/* Hình ảnh */}
                <div className="lg:w-96 flex-shrink-0">
                  <div className="sticky top-8">
                    <div className="bg-gradient-to-br from-accent to-primary p-2 rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300 h-full">
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl h-full">
      <img 
        src={Seo}
        alt="Chủ tịch Hitex Software - Trần Anh Khôi" 
        className="w-full h-full max-h-[500px] object-cover rounded-lg shadow-lg"
        onError={(e) => {
          // Fallback nếu ảnh không tồn tại
          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='24' fill='%236b7280'%3EẢnh thành viên%3C/text%3E%3C/svg%3E";
        }}
      />
    </div>
  </div>

                    {/* Chữ ký */}
                  <div className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-border text-center">
                    <div className="inline-block bg-white rounded-lg px-6 py-3 shadow-sm">
                      <p className="text-muted-foreground text-lg">Chủ tịch - Người sáng lập</p>
                      <p className="font-bold text-primary text-2xl mt-2 font-heading">Trần Anh Khôi</p>
                    </div>
                  </div>
                    
                    {/* Thông tin thêm */}
                    <div className="mt-6 text-center space-y-3">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-border">
                        <p className="text-sm text-muted-foreground italic leading-relaxed">
                          "Không ngừng đổi mới, không ngừng phát triển - 
                          Dẫn dắt đội ngũ trẻ đầy nhiệt huyết vươn tầm thế giới"
                        </p>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        {[...Array(3)].map((_, i) => (
                          <div 
                            key={i}
                            className="w-3 h-3 bg-accent rounded-full animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyVision;
