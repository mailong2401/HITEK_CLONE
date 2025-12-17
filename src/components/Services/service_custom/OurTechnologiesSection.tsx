import { motion } from 'framer-motion';
import { 
  Code2,
  Cpu,
  ArrowRight
} from 'lucide-react';
import LogoPostgresql from "@/assets/techlogo/postgresql.png"
import LogoMongodb from "@/assets/techlogo/mongodb.png"
import LogoGraphQL from "@/assets/techlogo/graphql.png"
import LogoFirebase from "@/assets/techlogo/firebase.svg"
import LogoSendgrid from "@/assets/techlogo/sendgrid.svg"
import LogoHangfire from "@/assets/techlogo/hangfire.png"
import LogoSwagger from "@/assets/techlogo/swagger.png"
import LogoRedoc from "@/assets/techlogo/redoc.jpg"
import LogoNetcore from "@/assets/techlogo/netcore.png"
import LogoReact from "@/assets/techlogo/react.png"
import LogoAngular from "@/assets/techlogo/angular.png"
import LogoAws from "@/assets/techlogo/aws.png"
import LogoAzure from "@/assets/techlogo/azure.png"
import LogoRails from "@/assets/techlogo/rails.png"
import LogoJava from "@/assets/techlogo/java.png"
import LogoPhp from "@/assets/techlogo/php.png"

// Đường dẫn ảnh mẫu - bạn sẽ thay thế bằng ảnh thực tế của bạn
const technologyImages = {
  // Frontend
  reactjs: LogoReact,
  angular: LogoAngular,
  
  // Backend
  dotnet: LogoNetcore,
  java: LogoJava,
  php: LogoPhp,
  rubyrails: LogoRails,
  
  // Cloud
  aws: LogoAws,
  azure: LogoAzure,
  
  // AI/ML
  
  // Databases & Others
  postgresql: LogoPostgresql,
  mongodb: LogoMongodb,
  graphql: LogoGraphQL,
  firebase: LogoFirebase,
  sendgrid: LogoSendgrid,
  hangfire: LogoHangfire,
  swagger: LogoSwagger,
  redoc: LogoRedoc
};

const OurTechnologiesSection = () => {
  const technologies = [
  {
    name: "ReactJs",
    logo: technologyImages.reactjs,
    description: "Thư viện JavaScript xây dựng giao diện người dùng hiện đại"
  },
  {
    name: "Angular",
    logo: technologyImages.angular,
    description: "Framework phát triển ứng dụng web mạnh mẽ của Google"
  },
  {
    name: ".NET Core",
    logo: technologyImages.dotnet,
    description: "Nền tảng đa nền tảng để xây dựng ứng dụng hiệu năng cao"
  },
  {
    name: "Java",
    logo: technologyImages.java,
    description: "Ngôn ngữ lập trình hướng đối tượng, ổn định và đa nền tảng"
  },
  {
    name: "PHP",
    logo: technologyImages.php,
    description: "Ngôn ngữ lập trình phía server phổ biến cho web"
  },
  {
    name: "Ruby on Rails",
    logo: technologyImages.rubyrails,
    description: "Framework web full-stack giúp phát triển nhanh với Ruby"
  },
  {
    name: "AWS",
    logo: technologyImages.aws,
    description: "Nền tảng điện toán đám mây linh hoạt của Amazon"
  },
  {
    name: "Azure",
    logo: technologyImages.azure,
    description: "Hệ sinh thái cloud toàn diện của Microsoft"
  },
  {
    name: "PostgreSQL",
    logo: technologyImages.postgresql,
    description: "Cơ sở dữ liệu quan hệ mã nguồn mở, mạnh mẽ và tin cậy"
  },
  {
    name: "MongoDB",
    logo: technologyImages.mongodb,
    description: "Cơ sở dữ liệu NoSQL linh hoạt theo mô hình tài liệu"
  },
  {
    name: "GraphQL",
    logo: technologyImages.graphql,
    description: "Công nghệ truy vấn API hiệu quả và linh hoạt"
  },
  {
    name: "Firebase",
    logo: technologyImages.firebase,
    description: "Nền tảng backend-as-a-service của Google"
  },
  {
    name: "SendGrid",
    logo: technologyImages.sendgrid,
    description: "Dịch vụ gửi email giao dịch và marketing quy mô lớn"
  },
  {
    name: "Hangfire",
    logo: technologyImages.hangfire,
    description: "Thư viện xử lý background jobs cho ứng dụng .NET"
  },
  {
    name: "Swagger",
    logo: technologyImages.swagger,
    description: "Công cụ thiết kế và tài liệu hóa REST API"
  },
  {
    name: "ReDoc",
    logo: technologyImages.redoc,
    description: "Công cụ hiển thị tài liệu OpenAPI trực quan"
  }
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const renderTechLogo = (logoUrl: string, name: string) => {
    return (
      <div className="relative w-16 h-16 flex items-center justify-center">
        <img 
          src={logoUrl} 
          alt={name}
          className="w-14 h-14 object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.parentElement!.innerHTML = `
              <div class="w-14 h-14 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10 flex items-center justify-center">
                <span class="text-lg font-bold text-foreground/70">${name.charAt(0)}</span>
              </div>
            `;
          }}
        />
      </div>
    );
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-background to-secondary/50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 -translate-x-1/4" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.6 }}
  className="relative text-center mb-16 px-4 py-8 md:px-8"
>
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] dark:bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)] opacity-10" />
  
  {/* Decorative Elements */}
  <div className="absolute left-1/4 top-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
  <div className="absolute right-1/4 bottom-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
  
  {/* Badge/Chip */}
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
    <Code2 className="w-4 h-4 text-primary" />
    <span className="text-sm font-medium text-primary">TECH STACK</span>
  </div>
  
  {/* Main Title with Gradient */}
  <h2 className="pt-3 pb-3 text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
    CÔNG NGHỆ <span className="block md:inline">CỦA CHÚNG TÔI</span>
  </h2>
  
  {/* Animated Separator */}
  <div className="flex justify-center items-center gap-4 mb-8">
    <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50" />
    <div className="relative">
      <Cpu className="w-6 h-6 text-primary animate-pulse" />
      <div className="absolute -inset-2 bg-primary/20 rounded-full blur-sm animate-ping" />
    </div>
    <div className="w-12 h-px bg-gradient-to-l from-transparent to-accent/50" />
  </div>
  
  {/* Description with Animation */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
    className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
  >
    Khám phá bộ công nghệ đa dạng mà chúng tôi sử dụng để xây dựng các giải pháp{" "}
    <span className="font-semibold text-primary">hiện đại</span> và{" "}
    <span className="font-semibold text-accent">hiệu quả</span> cho doanh nghiệp
  </motion.p>
</motion.div>

        {/* Main Technologies Grid */}
        <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6 mb-16"
>
  {technologies.map((tech, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="relative group"
      whileHover={{ scale: 1.03 }}
    >
      <div className="h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-5 shadow-lg transition-all duration-500 ">
        {/* Tech Logo Container */}
        <div className="flex justify-center mb-4">
          <div className="relative w-16 h-16">
            {/* Background Glow */}
            
            {/* Logo */}
            <div className="relative w-full h-full flex items-center justify-center rounded-xl bg-gradient-to-br from-card to-secondary p-2 shadow-inner">
              <img 
                src={tech.logo} 
                alt={tech.name}
                className="w-12 h-12 object-contain transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <span class="text-lg font-bold text-primary">${tech.name.charAt(0)}</span>
                    </div>
                  `;
                }}
              />
            </div>
            
            {/* Corner accent */}
          </div>
        </div>


        {/* Tech Description with Gradient Text */}
        <p className="text-xs text-muted-foreground text-center leading-relaxed bg-gradient-to-b from-muted-foreground to-card-foreground bg-clip-text text-transparent group-hover:bg-gradient-to-b group-hover:from-primary group-hover:to-accent group-hover:text-transparent transition-all duration-500">
          {tech.description}
        </p>


        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-all duration-500" />
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-primary/10 group-hover:to-accent/5 transition-all duration-500 -z-10 blur-xl" />
      </div>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
};

export default OurTechnologiesSection;
