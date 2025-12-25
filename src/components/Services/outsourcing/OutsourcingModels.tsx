import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Package, 
  Users, 
  ClipboardCheck,
  Target
} from "lucide-react";

const OutsourcingModels = () => {
  const models = [
    {
      id: 0,
      title: "HỢP ĐỒNG TRỌN GÓI",
      description: "Loại hợp đồng này khác thường ở chỗ khách hàng trả tiền cho nhà phát triển phần mềm dựa trên số giờ và tài liệu được sử dụng trong suốt quá trình phát triển phần mềm theo yêu cầu. Các hợp đồng này thường được sử dụng khi phạm vi của dự án phần mềm rất lớn đến mức không thể đoán trước được sẽ mất bao lâu để hoàn thành dự án.",
      icon: Package,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 1,
      title: "TĂNG CƯỜNG NHÂN VIÊN",
      description: "Khi bạn thuê ngoài việc phát triển phần mềm cho một nhà cung cấp bên thứ ba, họ có trách nhiệm thiết lập nhóm phát triển phần mềm và không gian làm việc của họ. Mô hình này cho phép các doanh nghiệp có quyền quản lý các nguồn lực như một nhóm nội bộ.",
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      title: "NHÓM PHỤ TRÁCH",
      description: "Theo cách tiếp cận này, nhà cung cấp dịch vụ chịu trách nhiệm quản lý nhân sự, các hoạt động cấp thấp và đảm bảo chất lượng quy trình. Bạn có được một nhóm chuyên gia để làm việc trên nhiều dự án khác nhau hoặc cung cấp một loạt dịch vụ.",
      icon: ClipboardCheck,
      color: "from-purple-500 to-violet-500"
    },
    {
      id: 3,
      title: "MÔ HÌNH DỰA TRÊN DỰ ÁN",
      description: "Trong tình huống này, khách hàng không phải lo lắng quá nhiều về nhóm tạo ra chương trình hoặc kỹ thuật được sử dụng để xây dựng chương trình. Các nhà phát triển phần mềm có thể lập kế hoạch và thực hiện dự án một cách hiệu quả hơn.",
      icon: Target,
      color: "from-orange-500 to-amber-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold tracking-wider text-primary bg-primary/10 px-4 py-2 rounded-full mb-4">
            MÔ HÌNH DỊCH VỤ
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="block">Các mô hình dịch vụ</span>
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Outsourcing
            </span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Khám phá các mô hình outsourcing linh hoạt phù hợp với nhu cầu kinh doanh của bạn
          </p>
        </div>

        {/* Table Grid 2x2 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {models.map((model) => (
            <Card 
              key={model.id}
              className="border-2 border-border hover:border-primary/50 transition-colors duration-300 h-full hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${model.color} text-white`}>
                    <model.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-bold text-foreground">
                      {model.title}
                    </CardTitle>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-blue-600 rounded-full mt-2"></div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {model.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutsourcingModels;
