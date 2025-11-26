// components/blog/BlogFeaturedPost.tsx
import { motion } from "framer-motion";
import { Calendar, Clock, Eye, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "@/hooks/useBlogPosts";

interface BlogFeaturedPostProps {
  post: BlogPost;
}

const BlogFeaturedPost = ({ post }: BlogFeaturedPostProps) => {
  const navigate = useNavigate();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} phút đọc`;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-80 lg:h-full">
              <img
                src={post.cover_image_url || post.thumbnail_url || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                Bài viết nổi bật
              </div>
            </div>
            
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.published_at || post.created_at)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{getReadingTime(post.content)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{post.views} lượt xem</span>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mb-4">
                {post.title}
              </h2>
              
              {post.subtitle && (
                <p className="text-lg text-primary font-semibold mb-4">
                  {post.subtitle}
                </p>
              )}

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {post.excerpt || post.content.substring(0, 200) + "..."}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {post.author && (
                    <>
                      <img
                        src={post.author.avatar_url || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-foreground">{post.author.name}</div>
                        <div className="text-sm text-muted-foreground">{post.author.position}</div>
                      </div>
                    </>
                  )}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <span>Đọc tiếp</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogFeaturedPost;
