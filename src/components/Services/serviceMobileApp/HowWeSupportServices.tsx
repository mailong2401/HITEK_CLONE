import { motion } from 'framer-motion';
import { Apple, Smartphone, Tablet, Watch, Tv, ArrowBigRight, Cpu } from 'lucide-react';
import ImgIos from "@/assets/Services/ios.png"
import ImgAndroid from "@/assets/Services/android-1.png"
import ImgDaNenTang from "@/assets/Services/danentang.png"

const HowWeSupportServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const iosServices = [
    { icon: Smartphone, text: "Thiết kế và phát triển ứng dụng iOS" },
    { icon: Tablet, text: "Phát triển ứng dụng iPad" },
    { icon: Watch, text: "Phát triển ứng dụng Apple Watch" },
    { icon: Tv, text: "Phát triển ứng dụng cho các Clip ứng dụng của Apple TV" }
  ];

  const androidServices = [
    { icon: Smartphone, text: "Phát triển ứng dụng di động Android" },
    { icon: Tv, text: "Tạo ứng dụng di động cho Android TV, Tablet, and Wearables" }
  ];

  const multiPlatformServices = [
    { icon: Cpu, text: "Ứng dụng dành cho iOS chạy trên nhiều nền tảng khác nhau" },
    { icon: Cpu, text: "Ứng dụng dành cho Android chạy trên nhiều nền tảng khác nhau" },
    { icon: Cpu, text: "Ứng dụng có thể được sử dụng trên mọi thiết bị" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/10 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto"
        >
          {/* Main Title Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16 lg:mb-24"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
              LÀM THẾ NÀO CHÚNG TÔI CÓ THỂ HỖ TRỢ BẠN
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                VỚI NHỮNG DỊCH VỤ CHÚNG TÔI ĐANG CÓ?
              </span>
            </h1>

            <motion.div
              variants={itemVariants}
              className="max-w-3xl mx-auto"
            >
              <p className="text-xl text-muted-foreground leading-relaxed">
                Chúng tôi chắc chắn sẽ cung cấp chất lượng tốt nhất cho khách hàng doanh nghiệp và người dùng, nâng cao trải nghiệm của khách hàng
                mục tiêu và mang lại nhiều lợi thế bổ sung cho công ty với các hạng mục dịch vụ sau.
              </p>
            </motion.div>
          </motion.div>

          {/* iOS App Development */}
          <motion.div
            variants={containerVariants}
            className="mb-24 lg:mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <motion.div variants={itemVariants} className="space-y-8">
                {/* Title with Icon */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-xl">
                    <Apple className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                    PHÁT TRIỂN IOS APP
                  </h2>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Khi nói đến việc phát triển các ứng dụng trên iPhone vừa để sử dụng vừa linh hoạt, các UX/UI design hàng đầu của chúng tôi là những người giỏi nhất trong ngành. Chúng tôi luôn có các nguồn lực và kỹ năng cần thiết. Do đó, bạn hoàn toàn có thể yên tâm khi biết rằng tất cả các phương pháp phát triển iPhone app của chúng tôi đều tuân thủ nghiêm ngặt các yêu cầu chặt chẽ của iOS.
                  </p>

                  {/* Services List */}
                  <div className="space-y-4">
                    {iosServices.map((service, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-start gap-3 group"
                      >
                        <div className="p-2 bg-blue-500/10 rounded-lg transition-colors">
                          <service.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <span className="text-foreground flex-1">{service.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div variants={imageVariants} className="relative">
                <div className="relative rounded-3xl overflow-hidden ">
                  <img 
                    src={ImgIos}
                    alt="Phát triển iOS App"
                    className="w-100 md:w-124 h-auto object-cover aspect-square"
                  />
                  
                  {/* Stats Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-tech-navy/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">iOS</div>
                      <div className="text-sm text-muted-foreground">Apple Ecosystem</div>
                    </div>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
              </motion.div>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 my-16"
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-border to-primary/70 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-border to-accent/70 rounded-full" />
          </motion.div>

          {/* Android App Development */}
          <motion.div
            variants={containerVariants}
            className="mb-24 lg:mb-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image */}
              <motion.div variants={imageVariants} className="relative lg:order-first">
                <div className="relative rounded-3xl overflow-hidden ">
                  <img 
                    src={ImgAndroid}
                    alt="Phát triển Android App"
                    className="w-100 md:w-124 h-auto object-cover aspect-square"
                  />
                  
                  {/* Stats Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 dark:bg-tech-navy/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">Android</div>
                      <div className="text-sm text-muted-foreground">Google Ecosystem</div>
                    </div>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
              </motion.div>

              {/* Content */}
              <motion.div variants={itemVariants} className="space-y-8 lg:order-last">
                {/* Title with Icon */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-green-500/10 to-green-600/10 rounded-xl">
                    <ArrowBigRight className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                    PHÁT TRIỂN ANDROID APP
                  </h2>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Số lượng cá nhân tài xưởng các ứng dụng Android đã tăng lên cùng với số lượng ngày càng tăng của những người sử dụng thiết bị di động dựa trên Android. Chúng tôi luôn sẵn sàng hỗ trợ khách hàng cập nhật những xu hướng và sự phát triển mới nhất của ngành.
                  </p>

                  {/* Services List */}
                  <div className="space-y-4">
                    {androidServices.map((service, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-start gap-3 group"
                      >
                        <div className="p-2 bg-green-500/10 rounded-lg transition-colors">
                          <service.icon className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="text-foreground flex-1">{service.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 my-16"
          >
            <div className="w-12 h-0.5 bg-gradient-to-r from-border to-primary/70 rounded-full" />
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-border to-accent/70 rounded-full" />
          </motion.div>

          {/* Multi-Platform App Development */}
          <motion.div
            variants={containerVariants}
            className="mt-24 lg:mt-32"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <motion.div variants={itemVariants} className="space-y-8">
                {/* Title with Icon */}
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl">
                    <Cpu className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                    PHÁT TRIỂN ỨNG DỤNG CHO NHIỀU NỀN TẢNG
                  </h2>
                </div>

                {/* Description */}
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Bằng cách có được các ứng dụng di động chất lượng cao hoạt động trên nhiều nền tảng, bạn có thể phục vụ khách hàng của mình một ứng dụng tương thích với hệ điều hành của họ. Từ đó, nâng cao sự tiện lợi và nhanh chóng cho người dùng khi trải nghiệm dịch vụ mà bạn cung cấp.
                  </p>

                  {/* Services List */}
                  <div className="space-y-4">
                    {multiPlatformServices.map((service, index) => (
                      <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex items-start gap-3 group"
                      >
                        <div className="p-2 bg-purple-500/10 rounded-lg transition-colors">
                          <service.icon className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="text-foreground flex-1">{service.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div variants={imageVariants} className="relative">
                <div className="relative rounded-3xl overflow-hidden ">
                  <img 
                    src={ImgDaNenTang}
                    alt="Phát triển ứng dụng đa nền tảng"
                    className="w-100 md:w-124 h-auto object-cover aspect-square"
                  />
                  
                  {/* Stats Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-tech-navy/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">Đa nền tảng</div>
                      <div className="text-sm text-muted-foreground">Multi-Platform</div>
                    </div>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeSupportServices;
