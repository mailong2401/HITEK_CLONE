// src/pages/BlogPage.tsx
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import { Search } from "lucide-react";

// Components
import BlogHero from "@/components/blog/BlogHero";
import BlogFeaturedPost from "@/components/blog/BlogFeaturedPost";
import BlogSearchAndFilter from "@/components/blog/BlogSearchAndFilter";
import BlogPostsGrid from "@/components/blog/BlogPostsGrid";
import BlogPagination from "@/components/blog/BlogPagination";
import BlogCTA from "@/components/blog/BlogCTA";
import BlogLoading from "@/components/blog/BlogLoading";
import BlogError from "@/components/blog/BlogError";

// Hooks
import useBlogPosts from "@/hooks/useBlogPosts";
import useBlogAuthors from "@/hooks/useBlogAuthors";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;
  const navigate = useNavigate();

  const { posts, categories, loading, error } = useBlogPosts();
  const { authors } = useBlogAuthors();

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Filter posts based on category and search query
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "all" || 
      post.content.toLowerCase().includes(activeCategory.toLowerCase()) ||
      post.title.toLowerCase().includes(activeCategory.toLowerCase());
    
    const matchesSearch = searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const featuredPost = posts[0]; // First post as featured

  // Hàm xử lý chia sẻ bài viết
  const handleShare = (post: any) => {
    const url = `${window.location.origin}/HITEK_CLONE/blog/${post.slug}`;
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      alert('Đã sao chép link bài viết vào clipboard!');
    }
  };

  if (loading) {
    return <BlogLoading />;
  }

  if (error) {
    return <BlogError error={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHero />

      {/* Featured Post */}
      {featuredPost && <BlogFeaturedPost post={featuredPost} />}

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <BlogSearchAndFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            categories={categories}
          />

          {/* Blog Posts Grid */}
          <BlogPostsGrid posts={currentPosts} onShare={handleShare} />

          {/* No Results */}
          {currentPosts.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Không tìm thấy bài viết</h3>
              <p className="text-muted-foreground">
                Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác.
              </p>
            </div>
          )}

          {/* Pagination */}
          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>

      <BlogCTA />
    </div>
  );
};

export default BlogPage;
