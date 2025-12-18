import React from 'react';

const TestingMethodology = () => {
  const steps = [
    {
      number: '1',
      title: 'Phát hiện',
      description: 'Chúng tôi làm việc với bạn để hiểu rõ nhu cầu kiểm thử phần mềm của bạn, xác định kết quả kinh doanh rõ ràng để thiết lập cam kết thành công.'
    },
    {
      number: '2',
      title: 'Phức tạp',
      description: 'Chúng tôi xác định giải pháp tốt nhất cho nhu cầu của bạn và sắp xếp nhóm của chúng tôi để lắp đầy khoảng trống về kỹ năng và nguồn lực của bạn.'
    },
    {
      number: '3',
      title: 'Xây dựng',
      description: 'Nhóm của chúng tôi đánh giá và phát triển một kế hoạch và chiến lược kiểm thử phần mềm, thực hiện các quy trình cập nhật.'
    },
    {
      number: '4',
      title: 'Vận hành',
      description: 'Chúng tôi cung cấp và triển khai giải pháp được đề xuất, đánh giá kết quả kiểm thử phần mềm để đảm bảo chúng tôi đáp ứng nhu cầu của bạn.'
    }
  ];

  return (
    <div className="bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          PHƯƠNG PHÁP KIỂM THỬ PHẦN MỀM CỦA CHÚNG TÔI
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative flex flex-col items-center p-6 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Số bước với gradient */}
              <div className="absolute -top-4 left-6 w-12 h-12 bg-gradient-to-br from-primary to-tech-blue-light text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">
                {step.number}
              </div>
              
              {/* Nội dung */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Đường kết nối (chỉ hiển thị trên desktop) */}
              {index < steps.length - 1 && (
                <>
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-primary/30 transform -translate-y-1/2"></div>
                </>
              )}
            </div>
          ))}
        </div>
        
        {/* Phiên bản hiển thị theo danh sách cho mobile */}
        <div className="mt-8 lg:hidden">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-secondary rounded-lg border border-border">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-tech-blue-light text-primary-foreground rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestingMethodology;
