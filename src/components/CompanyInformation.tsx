// components/CompanyInformation.tsx
import React from 'react';

const CompanyInformation: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 pt-20">
      <div className="flex items-start">
        {/* Số phần với gạch chân đẹp */}
        <div className="relative flex-shrink-0 mr-8">
          <div className="text-6xl font-bold text-primary pb-4 border-b-4 border-accent relative">
            03
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 rounded-full"></div>
          </div>
        </div>
        
        {/* Nội dung chính */}
        <div className="flex-1">
          {/* Tiêu đề */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary mb-3 font-heading">THÔNG TIN CÔNG TY</h2>
            <p className="text-lg text-muted-foreground bg-primary/5 inline-block px-4 py-2 rounded-lg">
              XEM HỒ SƠ CÔNG TY
            </p>
          </div>

          {/* Bảng thông tin được thiết kế lại */}
          <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden mb-8 hover:shadow-xl transition-all duration-300">
            {/* Hàng 1 */}
            <div className="grid grid-cols-4 border-b border-border">
              <div className="p-6 font-semibold text-primary bg-primary/5 border-r border-border flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Tên công ty</span>
                </div>
              </div>
              <div className="p-6 text-foreground border-r border-border bg-card/50 flex items-center font-medium">
                HITEK SOFTWARE
              </div>
              <div className="p-6 font-semibold text-primary bg-primary/5 border-r border-border flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Thành lập</span>
                </div>
              </div>
              <div className="p-6 text-foreground bg-card/50 flex items-center font-medium">
                05/2018
              </div>
            </div>

            {/* Hàng 2 */}
            <div className="grid grid-cols-4 border-b border-border">
              <div className="p-6 font-semibold text-primary bg-primary/5 border-r border-border flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Nhân sự</span>
                </div>
              </div>
              <div className="p-6 text-foreground border-r border-border bg-card/50 flex items-center">
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full font-bold text-lg">
                  100+
                </span>
              </div>
              <div className="p-6 font-semibold text-primary bg-primary/5 border-r border-border flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Vốn điều lệ</span>
                </div>
              </div>
              <div className="p-6 text-foreground bg-card/50 flex items-center">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold text-lg">
                  17.4 tỷ
                </span>
              </div>
            </div>

            {/* Hàng 3 - Lĩnh vực kinh doanh */}
            <div className="grid grid-cols-8">
              <div className="p-6 font-semibold text-primary bg-primary/5 border-r border-border col-span-2 flex items-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Lĩnh vực kinh doanh</span>
                </div>
              </div>
              <div className="p-6 text-foreground col-span-6 bg-card/50 flex items-center">
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-xl border border-border w-full">
                  <p className="font-medium">Lập trình máy vi tính, Chi tiết: Sản xuất sản phẩm phần mềm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Đường kẻ ngang với gradient */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-card px-4 text-muted-foreground">
                <div className="w-3 h-3 bg-accent rounded-full mx-auto"></div>
              </span>
            </div>
          </div>

          {/* Phần lãnh đạo được thiết kế lại */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-1 h-8 bg-accent rounded-full mr-4"></div>
              <h3 className="text-2xl font-bold text-primary font-heading">Ban Lãnh Đạo</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Giám đốc kinh doanh */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-border group hover:bg-accent/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">SB</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary text-lg">Giám đốc Kinh doanh</p>
                    <p className="text-foreground mt-1">Ông QN Sean Beom</p>
                    <div className="flex items-center mt-2">
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        Người Hàn Quốc
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Giám đốc */}
              <div className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-xl p-6 border border-border group hover:bg-primary/10 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">TK</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-primary text-lg">Giám đốc Điều hành</p>
                    <p className="text-foreground mt-1">Ông Trần Anh Khôi</p>
                    <div className="flex items-center mt-2">
                      <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">
                        Người sáng lập
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thông tin bổ sung */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
