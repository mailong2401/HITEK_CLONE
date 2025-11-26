// src/pages/BlogPostPage.tsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Calendar, 
  User, 
  Clock,
  Eye,
  Share2,
  ArrowLeft,
  BookOpen,
  Tag
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import useBlogPosts from "@/hooks/useBlogPosts";

const BlogPostPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  
  const { getPostBySlug, getRelatedPosts } = useBlogPosts();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      const postData = await getPostBySlug(slug);
      setPost(postData);

      if (postData) {
        const related = await getRelatedPosts(postData.id, 3);
        setRelatedPosts(related);
      }
      
      setLoading(false);
      scrollToTop();
    };

    loadPost();
  }, [slug, getPostBySlug, getRelatedPosts]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"
          />
          <p className="text-lg text-muted-foreground">Đang tải bài viết...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-destructive mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Bài viết không tồn tại</h2>
          <p className="text-muted-foreground mb-4">Bài viết bạn đang tìm kiếm không thể tìm thấy.</p>
          <button 
            onClick={() => navigate('/blog')}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại Blog</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-4 py-4">
          <button 
            onClick={() => navigate('/blog')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại Blog</span>
          </button>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
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
            {post.author && (
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author.name}</span>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {post.title}
          </h1>

          {/* Subtitle */}
          {post.subtitle && (
            <p className="text-xl text-primary font-semibold mb-8 leading-relaxed">
              {post.subtitle}
            </p>
          )}

          {/* Cover Image */}
          {post.cover_image_url && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 rounded-2xl overflow-hidden"
            >
              <img
                src={post.cover_image_url}
                alt={post.title}
                className="w-full h-96 object-cover"
              />
            </motion.div>
          )}

          {/* Author Info */}
          {post.author && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4 p-6 bg-muted/50 rounded-2xl mb-8"
            >
              <img
                src={post.author.avatar_url || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"}
                alt={post.author.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg">{post.author.name}</h3>
                <p className="text-muted-foreground mb-2">{post.author.position}</p>
                <p className="text-sm text-muted-foreground">{post.author.bio}</p>
              </div>
            </motion.div>
          )}

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-primary prose-blockquote:bg-primary/10 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Bài viết liên quan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relatedPost.thumbnail_url || relatedPost.cover_image_url || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">
                      {relatedPost.excerpt || relatedPost.content.substring(0, 120) + "..."}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPostPage;
