// src/pages/RecruitmentPage.tsx
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Briefcase, 
  Users, 
  Trophy, 
  Heart, 
  DollarSign,
  Clock,
  MapPin,
  Calendar,
  BookOpen,
  Zap,
  Rocket,
  Star,
  Award,
  Volume2,
  VolumeX
} from "lucide-react";
import { useInView } from "react-intersection-observer";

const RecruitmentPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const jobPositionsRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    { id: "all", name: "Tất cả vị trí" },
    { id: "tech", name: "Công nghệ" },
    { id: "design", name: "Thiết kế" },
    { id: "business", name: "Kinh doanh" },
    { id: "intern", name: "Thực tập" }
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      category: "tech",
      type: "Full-time",
      location: "Hồ Chí Minh",
      salary: "$1500 - $2500",
      experience: "3+ years",
      description: "Phát triển ứng dụng web với React, TypeScript và các công nghệ hiện đại.",
      requirements: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      urgent: true,
      hot: true
    },
    {
      id: 2,
      title: "UI/UX Designer",
      category: "design",
      type: "Full-time",
      location: "Hà Nội",
      salary: "$1200 - $2000",
      experience: "2+ years",
      description: "Thiết kế trải nghiệm người dùng cho các sản phẩm công nghệ.",
      requirements: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      urgent: false,
      hot: true
    },
    {
      id: 3,
      title: "Backend Developer (Node.js)",
      category: "tech",
      type: "Full-time",
      location: "Đà Nẵng",
      salary: "$1300 - $2200",
      experience: "2+ years",
      description: "Xây dựng và phát triển hệ thống backend với Node.js và database.",
      requirements: ["Node.js", "MongoDB", "Redis", "Docker"],
      urgent: true,
      hot: false
    },
    {
      id: 4,
      title: "Business Development Executive",
      category: "business",
      type: "Full-time",
      location: "Hồ Chí Minh",
      salary: "$1000 - $1800",
      experience: "1+ years",
      description: "Phát triển thị trường và tìm kiếm khách hàng tiềm năng.",
      requirements: ["Sales", "Communication", "English", "Negotiation"],
      urgent: false,
      hot: false
    },
    {
      id: 5,
      title: "React Intern",
      category: "intern",
      type: "Internship",
      location: "Remote",
      salary: "Allowance",
      experience: "Fresher",
      description: "Học và thực hành phát triển ứng dụng với React dưới sự hướng dẫn.",
      requirements: ["JavaScript", "React Basic", "Willing to learn"],
      urgent: false,
      hot: true
    },
    {
      id: 6,
      title: "DevOps Engineer",
      category: "tech",
      type: "Full-time",
      location: "Hà Nội",
      salary: "$1600 - $2800",
      experience: "3+ years",
      description: "Triển khai và vận hành hệ thống cloud infrastructure.",
      requirements: ["AWS", "Kubernetes", "CI/CD", "Terraform"],
      urgent: true,
      hot: true
    }
  ];

  const filteredJobs = activeCategory === "all" 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Lương thưởng cạnh tranh",
      description: "Mức lương hấp dẫn + thưởng hiệu suất + thưởng dự án"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Đào tạo & Phát triển",
      description: "Khóa học công nghệ mới, workshop, conference allowance"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Bảo hiểm sức khỏe",
      description: "Bảo hiểm sức khỏe cao cấp cho bạn và người thân"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Linh hoạt",
      description: "Giờ làm việc linh hoạt, remote work options"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Thăng tiến",
      description: "Lộ trình thăng tiến rõ ràng, promotion 6 tháng/lần"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Văn hóa",
      description: "Môi trường trẻ trung, sáng tạo, teamwork tuyệt vời"
    }
  ];

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
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Hàm scrollToSection - bạn đã có sẵn
  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Auto-play video when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section với Video Background RÕ HƠN */}
      <section className="relative py-20 overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover scale-110"
            poster="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            style={{
              filter: "brightness(1.1) contrast(1.1) saturate(1.2)"
            }}
          >
            <source src="https://hitek.com.vn/wp-content/uploads/2022/10/1010.mov" type="video/mp4" />
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Team Background" 
            />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/40 to-background/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-background/40" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Mute/Unmute Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          onClick={toggleMute}
          className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-sm rounded-full p-3 text-white hover:bg-black/60 transition-all duration-300 border border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </motion.button>

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
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30 mb-6 shadow-lg"
            >
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-sm">
                Đang tuyển 50+ vị trí
              </span>
              <Zap className="w-4 h-4 text-primary fill-current" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                Cùng Hitek{" "}
              </span>
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Kiến Tạo Tương Lai
              </span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
              Khám phá cơ hội nghề nghiệp tại Hitek - Nơi đam mê công nghệ gặp gỡ sự sáng tạo không giới hạn
            </p>

            {/* Nút "Xem vị trí đang tuyển" đã được cập nhật để gọi scrollToSection */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(jobPositionsRef)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 shadow-lg"
            >
              <Briefcase className="w-5 h-5" />
              <span>Xem vị trí đang tuyển</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center backdrop-blur-sm bg-white/10"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
              Tại sao nên <span className="text-primary">gia nhập Hitek?</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Không chỉ là công việc, mà là hành trình phát triển cùng những công nghệ tiên tiến nhất
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-primary mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Job Positions Section - Thêm ref để scroll tới */}
      <section ref={jobPositionsRef} className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vị trí <span className="text-primary">đang tuyển</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Khám phá cơ hội nghề nghiệp phù hợp với kỹ năng và đam mê của bạn
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative"
              >
                {/* Hot & Urgent Badges */}
                <div className="absolute top-6 right-6 flex gap-2">
                  {job.hot && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Hot
                    </span>
                  )}
                  {job.urgent && (
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Gấp
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {job.experience}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Yêu cầu:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold flex-1 text-center"
                  >
                    Ứng tuyển ngay
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-border px-6 py-3 rounded-xl font-semibold hover:border-primary transition-colors"
                  >
                    Chi tiết
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Không có vị trí phù hợp</h3>
              <p className="text-muted-foreground">
                Hiện không có vị trí nào trong danh mục này. Vui lòng thử danh mục khác.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-12 text-center text-primary-foreground"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sẵn sàng gia nhập đội ngũ Hitek?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Gửi CV của bạn ngay hôm nay và cùng chúng tôi kiến tạo những sản phẩm công nghệ xuất sắc
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background text-foreground px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all"
              >
                Gửi CV ngay
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-background px-8 py-4 rounded-2xl font-semibold hover:bg-background/10 transition-all"
              >
                Liên hệ HR
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RecruitmentPage;
