// components/AchievementsTimeline.tsx
import React from 'react';

const AchievementsTimeline: React.FC = () => {
  const achievements = [
    {
      year: "2021",
      title: "Top 20 công ty khởi nghiệp nổi bật tại Việt Nam",
      type: "giải thưởng"
    },
    {
      year: "2022",
      title: "Đạt chứng chỉ ISO 9001:2015",
      type: "chứng nhận"
    },
    {
      year: "2022",
      title: "Hội viên Hiệp hội Tin học TP.HCM - HCA",
      type: "thành viên"
    },
    {
      year: "2022",
      title: "Hội viên Hiệp hội Phần mềm VINASA",
      type: "thành viên"
    },
    {
      year: "2022", 
      title: "Đạt chứng chỉ ISTQB",
      type: "chứng nhận"
    },
    {
      year: "2023",
      title: "Đạt chứng chỉ AWS Certification",
      type: "chứng nhận"
    },
    {
      year: "2023",
      title: "Đạt chứng chỉ PMP",
      type: "chứng nhận"
    },
    {
      year: "2023",
      title: "Đạt chứng chỉ ISO 27001:2022",
      type: "chứng nhận"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "giải thưởng": return "from-yellow-500 to-orange-500";
      case "chứng nhận": return "from-blue-500 to-cyan-500";
      case "thành viên": return "from-green-500 to-emerald-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getTypeText = (type: string) => {
    switch (type) {
      case "giải thưởng": return "Giải thưởng";
      case "chứng nhận": return "Chứng nhận";
      case "thành viên": return "Thành viên";
      default: return type;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-20">
      <div className="flex items-start">
        {/* Số phần */}
        <div className="relative flex-shrink-0 mr-8">
          <div className="text-6xl font-bold text-primary pb-4 border-b-4 border-accent relative">
            04
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
          </div>
        </div>
        
        {/* Nội dung chính */}
        <div className="flex-1">
          {/* Tiêu đề */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4 font-heading">THÀNH TỰU VÀ GIẢI THƯỞNG</h2>
            <p className="text-lg text-muted-foreground">
              Hành trình phát triển và những cột mốc quan trọng
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Đường timeline */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent"></div>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="relative pl-16 group">
                  {/* Dot indicator */}
                  <div className={`absolute left-0 w-8 h-8 rounded-full bg-gradient-to-r ${getTypeColor(achievement.type)} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-card border border-border rounded-2xl p-6 group-hover:shadow-xl transition-all duration-300 group-hover:border-accent/30">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold text-sm">
                        {achievement.year}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${getTypeColor(achievement.type)}`}>
                        {getTypeText(achievement.type)}
                      </span>
                    </div>
                    <h3 className="font-bold text-primary text-lg leading-relaxed">
                      {achievement.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Thống kê */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">7+</div>
              <div className="text-muted-foreground">Năm hoạt động</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">8+</div>
              <div className="text-muted-foreground">Giải thưởng & Chứng nhận</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground">Hiệp hội thành viên</div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Chất lượng đạt chuẩn</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsTimeline;
