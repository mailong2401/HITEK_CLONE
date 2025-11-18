import { 
  Code2, 
  Cloud, 
  Database, 
  Smartphone, 
  Shield, 
  Zap,
  Users,
  Globe,
  TestTube2,
  Building,
  BarChart3,
  Server,
  Lock,
  Cpu
} from "lucide-react";

export const services = [
  {
    id: "custom-software",
    icon: <Code2 className="w-8 h-8" />,
    title: "Dịch vụ custom phần mềm",
    description: "Là một công ty phát triển phần mềm custom hàng đầu Việt Nam, chúng tôi đã hoàn thành xuất sắc hàng trăm dự án cho các khách hàng trên toàn thế giới.",
    fullDescription: "Thành lập từ năm 2017, Hitek luôn áp dụng các phương pháp mới một cách thuần thục. Chúng tôi cung cấp giải pháp phần mềm tùy chỉnh phù hợp với nhu cầu kinh doanh cụ thể của từng khách hàng.",
    features: [
      "Phát triển theo yêu cầu riêng",
      "Tích hợp hệ thống hiện có",
      "Bảo trì và nâng cấp liên tục",
      "Hỗ trợ kỹ thuật 24/7"
    ],
    technologies: [".NET", "Java", "Python", "Node.js"],
    image: "https://images.unsplash.com/photo-1556655848-f3a79cc6d4a7?w=500&h=400&fit=crop"
  },
  // ... các service khác giữ nguyên
];

export const stats = [
  { number: "100+", label: "Dự án thành công" },
  { number: "50+", label: "Khách hàng tin tưởng" },
  { number: "10+", label: "Năm kinh nghiệm" },
  { number: "98%", label: "Tỷ lệ hài lòng" }
];

export const process = [
  {
    step: "01",
    title: "Tư vấn & Phân tích",
    description: "Phân tích yêu cầu và tư vấn giải pháp tối ưu nhất"
  },
  {
    step: "02",
    title: "Lập kế hoạch",
    description: "Xây dựng kế hoạch chi tiết và timeline rõ ràng"
  },
  {
    step: "03",
    title: "Phát triển",
    description: "Triển khai phát triển với đội ngũ chuyên gia"
  },
  {
    step: "04",
    title: "Bàn giao & Hỗ trợ",
    description: "Bàn giao sản phẩm và hỗ trợ sau triển khai"
  }
];