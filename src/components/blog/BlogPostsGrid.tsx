// components/blog/BlogPostsGrid.tsx
import { motion } from "framer-motion";
import { Calendar, Clock, Eye, Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BlogPost } from "@/hooks/useBlogPosts";

interface BlogPostsGridProps {
  posts: BlogPost[];
  onShare: (post: BlogPost) => void;
}

const BlogPostsGrid = ({ posts, onShare }: BlogPostsGridProps) => {
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
    >
      {posts.map((post, index) => (
        <motion.article
          key={post.id}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
        >
          {/* Thumbnail */}
          <div 
            className="relative h-48 overflow-hidden"
            onClick={() => navigate(`/blog/${post.slug}`)}
          >
            <img
              src={post.thumbnail_url || post.cover_image_url || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Meta Information */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.published_at || post.created_at)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{getReadingTime(post.content)}</span>
              </div>
            </div>

            {/* Title */}
            <h3 
              className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              {post.title}
            </h3>

            {/* Subtitle */}
            {post.subtitle && (
              <p className="text-primary font-semibold mb-3 line-clamp-1">
                {post.subtitle}
              </p>
            )}

            {/* Excerpt */}
            <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
              {post.excerpt || post.content.substring(0, 150) + "..."}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-3">
                {post.author && (
                  <>
                    <img
                      src={post.author.avatar_url || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="text-sm">
                      <div className="font-semibold text-foreground">{post.author.name}</div>
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="flex items-center gap-1 text-sm">
                  <Eye className="w-4 h-4" />
                  <span>{post.views}</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onShare(post);
                  }}
                  className="hover:text-primary transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
};

export default BlogPostsGrid;
