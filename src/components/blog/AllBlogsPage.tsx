import React, { useEffect, useState } from "react";
import { supabase } from "@/services/supabase";
import { useNavigate } from "react-router-dom";
import { calculateReadTime, generateSlug } from "./BlogUtils";
import type { EnhancedBlogPost } from "./BlogTypes";

interface AllBlogsPageProps {
  getFallbackImage: (index: number) => string;
  onBack: () => void;
}

const AllBlogsPage: React.FC<AllBlogsPageProps> = ({ getFallbackImage, onBack }) => {
  const [allBlogs, setAllBlogs] = useState<EnhancedBlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    fetchAllBlogs();
  }, []);

  useEffect(() => {
    // Cuộn lên đầu trang khi chuyển trang
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentPage]);

  const fetchAllBlogs = async () => {
    try {
      setLoading(true);
      setCurrentPage(1); // Reset về trang 1 khi fetch lại dữ liệu
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      if (data) {
        const postsWithDefaults: EnhancedBlogPost[] = data.map((post: any) => ({
          ...post,
          readTime: calculateReadTime(post.content || ''),
          slug: post.slug || generateSlug(post.title),
        }));
        setAllBlogs(postsWithDefaults);
      }
    } catch (error) {
      console.error('Error fetching all blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Tính toán dữ liệu phân trang
  const totalPages = Math.ceil(allBlogs.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentBlogs = allBlogs.slice(startIndex, endIndex);

  const handleViewDetails = (postId: string) => {
    navigate(`/blog/${postId}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    // Tính toán phạm vi trang hiển thị
    const getPageNumbers = () => {
      const delta = 2; // Số trang hiển thị mỗi bên trang hiện tại
      const range = [];
      const rangeWithDots = [];
      let l;

      for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
          range.push(i);
        }
      }

      range.forEach((i) => {
        if (l) {
          if (i - l === 2) {
            rangeWithDots.push(l + 1);
          } else if (i - l !== 1) {
            rangeWithDots.push('...');
          }
        }
        rangeWithDots.push(i);
        l = i;
      });

      return rangeWithDots;
    };

    return (
      <div className="flex flex-col items-center justify-center mt-12 pt-8 border-t border-border/50">
        {/* Các nút phân trang */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {/* Nút về trang đầu */}
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-lg bg-card border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent transition-smooth flex items-center gap-1 text-sm"
            title="Về trang đầu"
          >
            <span className="text-xs">««</span>
          </button>

          {/* Nút trang trước */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-card border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent transition-smooth flex items-center gap-1 text-sm"
          >
            <span className="text-xs">←</span>
            Trước
          </button>
          
          {/* Các số trang */}
          <div className="flex items-center gap-1">
            {getPageNumbers().map((page, index) => (
              typeof page === 'number' ? (
                <button
                  key={index}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-smooth text-sm ${
                    currentPage === page
                      ? 'bg-gradient-accent text-primary-foreground font-bold'
                      : 'bg-card border border-border hover:bg-accent'
                  }`}
                >
                  {page}
                </button>
              ) : (
                <span key={index} className="w-10 h-10 flex items-center justify-center text-muted-foreground">
                  ...
                </span>
              )
            ))}
          </div>
          
          {/* Nút trang sau */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg bg-card border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent transition-smooth flex items-center gap-1 text-sm"
          >
            Sau
            <span className="text-xs">→</span>
          </button>

          {/* Nút đến trang cuối */}
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-lg bg-card border border-border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent transition-smooth flex items-center gap-1 text-sm"
            title="Đến trang cuối"
          >
            <span className="text-xs">»»</span>
          </button>
        </div>

      </div>
    );
  };

  return (
    <div className="min-h-screen text-foreground py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header với nút quay lại */}
        <div className="mb-8 md:mb-12">
          <button
            onClick={onBack}
            className="mb-6 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Quay lại đầu trang
          </button>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">TẤT CẢ BÀI VIẾT</h1>
          <div className="w-20 h-1 bg-gradient-accent mb-2"></div>
        </div>

        {/* Loading state */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
            <p className="text-muted-foreground">Đang tải tất cả bài viết...</p>
          </div>
        ) : (
          <>
            {/* Blog Grid */}
            {allBlogs.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">📝</div>
                <p className="text-muted-foreground text-lg">Chưa có bài viết nào được đăng.</p>
                <button
                  onClick={fetchAllBlogs}
                  className="mt-4 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-smooth"
                >
                  Thử lại
                </button>
              </div>
            ) : (
              <>
                {/* Thông báo nếu không có bài viết ở trang hiện tại */}
                {currentBlogs.length === 0 && currentPage > 1 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">Không có bài viết nào ở trang này.</p>
                    <button
                      onClick={() => handlePageChange(1)}
                      className="px-4 py-2 bg-gradient-accent text-primary-foreground rounded-lg hover:opacity-90 transition-smooth"
                    >
                      Quay lại trang đầu
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {currentBlogs.map((blog, index) => (
                      <article
                        key={blog.id}
                        className="bg-card/50 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer transform transition-smooth hover:scale-[1.02] hover:shadow-2xl hover:bg-card/70 border border-border/50 flex flex-col h-full min-h-[500px] md:min-h-[550px]"
                        onClick={() => handleViewDetails(blog.id)}
                      >
                        {/* Blog Image */}
                        <div className="h-48 overflow-hidden relative">
                          <img
                            src={blog.image || getFallbackImage(startIndex + index)}
                            alt={blog.title}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-tech-dark/60 via-transparent to-transparent"></div>
                          {/* Số thứ tự bài viết */}
                          <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                            {startIndex + index + 1}
                          </div>
                        </div>

                        {/* Blog Content - FLEX GROW ĐỂ CHIẾM KHÔNG GIAN */}
                        <div className="p-6 flex flex-col flex-grow">
                          {/* Category và Read Time */}
                          <div className="inline-flex items-center gap-2 mb-3">
                            <div className="bg-gradient-accent text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                              {blog.category}
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {blog.readTime} phút đọc
                            </span>
                          </div>

                          {/* Title */}
                          <h2 className="text-xl font-bold mb-3 line-clamp-2 flex-grow-0">
                            {blog.title}
                          </h2>

                          {/* Excerpt - CÓ THỂ GROW HOẶC KHÔNG */}
                          <div className="mb-4 flex-grow">
                            <p className="text-muted-foreground text-sm line-clamp-3">
                              {blog.excerpt || blog.content?.substring(0, 150) + '...'}
                            </p>
                          </div>

                          {/* Meta Info - CỐ ĐỊNH Ở DƯỚI */}
                          <div className="mt-auto pt-4 border-t border-border/50">
                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                  <span className="text-xs font-bold">👤</span>
                                </div>
                                <span className="font-medium">{blog.author || "Admin"}</span>
                              </div>
                              <span className="text-xs">
                                {new Date(blog.created_at).toLocaleDateString('vi-VN')}
                              </span>
                            </div>

                            {/* Read More Button - LUÔN Ở DƯỚI CÙNG */}
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleViewDetails(blog.id);
                              }}
                              className="w-full bg-gradient-accent hover:bg-gradient-to-br hover:from-tech-blue hover:to-tech-blue-light text-primary-foreground py-3 rounded-lg transition-smooth font-medium group"
                            >
                              <span className="flex items-center justify-center gap-2">
                                Đọc tiếp
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}

                {/* Hiển thị phân trang */}
                {renderPagination()}
              </>
            )}
          </>
        )}

        {/* Nút quay lại đầu trang */}
        <div className="mt-12 pt-8 border-t border-border/50 flex justify-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-gradient-accent hover:bg-gradient-to-br hover:from-tech-blue hover:to-tech-blue-light text-primary-foreground px-6 py-3 rounded-lg transition-smooth backdrop-blur-sm"
          >
            ↑ Quay lại đầu trang
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogsPage;
