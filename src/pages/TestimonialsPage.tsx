// src/pages/TestimonialsPage.tsx
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { 
  Star, 
  Quote, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Award,
  Heart
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const TestimonialsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentVideo, setCurrentVideo] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const categories = [
    { id: "all", name: "Tất cả", count: 12 },
    { id: "development", name: "Phát triển", count: 5 },
    { id: "design", name: "Thiết kế", count: 3 },
    { id: "consulting", name: "Tư vấn", count: 2 },
    { id: "support", name: "Hỗ trợ", count: 2 }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      position: "CEO - Công ty ABC",
      company: "ABC Corporation",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Hitek đã giúp chúng tôi chuyển đổi số thành công. Đội ngũ chuyên nghiệp và giải pháp sáng tạo đã vượt qua mong đợi của chúng tôi.",
      video: "https://assets.mixkit.co/videos/preview/mixkit-business-woman-walking-in-a-modern-office-23875-large.mp4",
      category: "consulting",
      project: "Hệ thống quản lý doanh nghiệp",
      duration: "6 tháng",
      results: ["Tăng hiệu suất 40%", "Giảm chi phí 25%", "Tự động hóa 80% quy trình"]
    },
    {
      id: 2,
      name: "Trần Thị B",
      position: "CTO - Startup XYZ",
      company: "XYZ Tech",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Chất lượng code cực kỳ tốt, documentation rõ ràng. Đội ngũ Hitek luôn sẵn sàng hỗ trợ 24/7.",
      video: "https://assets.mixkit.co/videos/preview/mixkit-woman-programmer-working-on-her-computer-while-43827-large.mp4",
      category: "development",
      project: "Ứng dụng di động",
      duration: "4 tháng",
      results: ["1M+ downloads", "Rating 4.8/5", "Zero critical bugs"]
    },
    {
      id: 3,
      name: "Lê Văn C",
      position: "Head of Design - Agency DEF",
      company: "DEF Creative",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      text: "Thiết kế UI/UX xuất sắc, sáng tạo và rất user-friendly. Khách hàng của chúng tôi cực kỳ hài lòng.",
      video: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-designing-on-a-tablet-43759-large.mp4",
      category: "design",
      project: "Redesign website",
      duration: "2 tháng",
      results: ["Tăng conversion 35%", "Giảm bounce rate 60%", "Award Design 2024"]
    },
    {
      id: 4,
      name: "Phạm Thị D",
      position: "Operations Manager - GHI Group",
      company: "GHI Industries",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Dịch vụ hỗ trợ kỹ thuật tuyệt vời. Mọi vấn đề đều được giải quyết nhanh chóng và hiệu quả.",
      video: "https://assets.mixkit.co/videos/preview/mixkit-it-service-center-with-technicians-40859-large.mp4",
      category: "support",
      project: "Hệ thống bảo trì",
      duration: "12 tháng",
      results: ["Uptime 99.9%", "Response time < 15 phút", "100% SLA compliance"]
    },
    {
      id: 5,
      name: "Hoàng Văn E",
      position: "Product Manager - JKL App",
      company: "JKL Mobile",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Từ ý tưởng đến sản phẩm thực tế chỉ trong 3 tháng. Tốc độ và chất lượng đáng kinh ngạc!",
      video: "https://assets.mixkit.co/videos/preview/mixkit-developer-walking-and-looking-at-the-screen-of-her-43829-large.mp4",
      category: "development",
      project: "MVP Startup",
      duration: "3 tháng",
      results: ["Launch successful", "500K users", "$2M funding raised"]
    },
    {
      id: 6,
      name: "Vũ Thị F",
      position: "Marketing Director - MNO Brand",
      company: "MNO Global",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      text: "Không chỉ technical excellence mà còn hiểu rõ business needs. Đối tác đáng tin cậy.",
      video: "https://assets.mixkit.co/videos/preview/mixkit-woman-talking-on-a-video-call-3982-large.mp4",
      category: "consulting",
      project: "Digital Transformation",
      duration: "8 tháng",
      results: ["Digital revenue +200%", "Market share +15%", "Customer satisfaction 95%"]
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, value: "500+", label: "Khách hàng hài lòng" },
    { icon: <Award className="w-8 h-8" />, value: "50+", label: "Giải thưởng" },
    { icon: <Target className="w-8 h-8" />, value: "99.8%", label: "Tỷ lệ hoàn thành" },
    { icon: <Heart className="w-8 h-8" />, value: "4.9/5", label: "Đánh giá trung bình" }
  ];

  const filteredTestimonials = activeCategory === "all" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.category === activeCategory);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100
      }
    }
  };

  const handleVideoPlay = (index: number) => {
    if (currentVideo === index) {
      // Pause current video
      videoRefs.current[index]?.pause();
      setCurrentVideo(null);
    } else {
      // Pause any playing video
      if (currentVideo !== null) {
        videoRefs.current[currentVideo]?.pause();
      }
      // Play new video
      videoRefs.current[index]?.play();
      setCurrentVideo(index);
    }
  };

  const toggleMute = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]!.muted = !videoRefs.current[index]!.muted;
      setIsMuted(videoRefs.current[index]!.muted);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Happy Clients Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6"
            >
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm">
                500+ Khách hàng hài lòng
              </span>
              <Star className="w-4 h-4 text-primary fill-current" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Khách Hàng{" "}
              </span>
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Nói Gì
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Khám phá những câu chuyện thành công và trải nghiệm thực tế từ các đối tác đã tin tưởng lựa chọn Hitek
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-primary mb-4 inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                <span>{category.name}</span>
                <span className="text-sm opacity-70">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Video Section */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/5">
                  <video
                    ref={el => videoRefs.current[index] = el}
                    className="w-full h-full object-cover"
                    muted={isMuted}
                    loop
                    playsInline
                  >
                    <source src={testimonial.video} type="video/mp4" />
                  </video>
                  
                  {/* Video Controls */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="flex gap-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleVideoPlay(index)}
                        className="bg-primary text-primary-foreground rounded-full p-3 shadow-lg"
                      >
                        {currentVideo === index ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => toggleMute(index)}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Quote Icon */}
                  <div className="text-primary mb-4">
                    <Quote className="w-8 h-8" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Project Info */}
                  <div className="mb-6 p-4 bg-muted/50 rounded-xl">
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-primary">
                      {testimonial.project}
                    </h4>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Thời gian: {testimonial.duration}</span>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h5 className="font-semibold mb-3 text-sm flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      Kết quả đạt được:
                    </h5>
                    <div className="space-y-2">
                      {testimonial.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-sm text-primary">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <Quote className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Không có đánh giá</h3>
              <p className="text-muted-foreground">
                Hiện không có đánh giá nào trong danh mục này.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sẵn sàng trở thành câu chuyện thành công tiếp theo?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Hãy để Hitek đồng hành cùng bạn trên hành trình chuyển đổi số và đạt được những kết quả ấn tượng
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all flex items-center gap-3"
              >
                <span>Liên hệ tư vấn</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-primary text-primary px-8 py-4 rounded-2xl font-semibold hover:bg-primary/10 transition-all"
              >
                Xem case study
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
