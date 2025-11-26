// components/blog/BlogSearchAndFilter.tsx
import { Search, Tag, Filter } from "lucide-react";
import { BlogCategory } from "@/hooks/useBlogPosts";

interface BlogSearchAndFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  categories: BlogCategory[];
}

const BlogSearchAndFilter = ({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  categories
}: BlogSearchAndFilterProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 mb-12">
      {/* Search Bar */}
      <div className="flex-1 relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
        <input
          type="text"
          placeholder="Tìm kiếm bài viết..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => onCategoryChange("all")}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
            activeCategory === "all"
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-card border border-border hover:border-primary/50"
          }`}
        >
          <Filter className="w-4 h-4" />
          <span>Tất cả</span>
        </button>
        
        {categories.slice(0, 4).map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.name)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeCategory === category.name
                ? "bg-primary text-primary-foreground shadow-lg"
                : "bg-card border border-border hover:border-primary/50"
            }`}
          >
            <Tag className="w-4 h-4" />
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogSearchAndFilter;
